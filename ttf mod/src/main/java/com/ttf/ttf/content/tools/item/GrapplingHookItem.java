package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.content.entity.MiniGrapplingHookEntity;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import net.minecraft.network.chat.Component;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.build.ConditionalStatModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.ToolDamageUtil;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

public class GrapplingHookItem extends ModifiableItem {

    public GrapplingHookItem(Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public @NotNull InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
        ItemStack toolStack = player.getItemInHand(hand);
        ToolStack tool = ToolStack.from(toolStack);
        if (!level.isClientSide && !tool.isBroken()) {

            Vec3 eyePos = player.getEyePosition(1.0F);
            MiniGrapplingHookEntity hook = new MiniGrapplingHookEntity(level, player);

            hook.setPos(eyePos.x, eyePos.y, eyePos.z);

            hook.setTool(toolStack.copy());
            Vec3 look = player.getLookAngle();
            Vec3 spawnPos = player.getEyePosition().add(look.scale(1.0));
            hook.setPos(spawnPos.x, spawnPos.y, spawnPos.z);
            float velocity = 1.2F * (1 + tool.getStats().get(ToolStats.VELOCITY) * 0.2F);
            float accuracy = 1.0F - (tool.getStats().get(ToolStats.ACCURACY) * 0.1F);
            hook.setOwner(player);
            hook.shoot(look.x, look.y, look.z, velocity, accuracy);
            hook.hasImpulse = true;
            level.addFreshEntity(hook);

            if (level.addFreshEntity(hook)) {
                player.playSound(SoundEvents.CROSSBOW_SHOOT, 1.0F, 1.0F);
                ToolDamageUtil.damage(tool, 1, player, toolStack);
            }
            float speed = tool.getStats().get(ToolStats.ATTACK_SPEED);
            float cooldown = ConditionalStatModifierHook.getModifiedStat(
                    tool,
                    player,
                    STToolStats.COOLDOWN,
                    tool.getStats().get(STToolStats.COOLDOWN) * 40.0F / speed
            );
            player.getCooldowns().addCooldown(this, (int)cooldown);
        }
        return InteractionResultHolder.success(toolStack);
    }

    private List<Component> getHookStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        builder.addDurability();
        builder.add(ToolStats.ATTACK_DAMAGE);
        builder.add(ToolStats.DRAW_SPEED);
        builder.add(ToolStats.VELOCITY);
        builder.add(ToolStats.ACCURACY);
        builder.addAllFreeSlots();
        for(ModifierEntry entry : tool.getModifierList()) {
            ((TooltipModifierHook)entry.getHook(ModifierHooks.TOOLTIP)).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }
        return tooltips;
    }

    @Override
    public List<Component> getStatInformation(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag flag) {
        tooltips = this.getHookStats(tool, player, tooltips, key, flag);
        return tooltips;
    }
}
