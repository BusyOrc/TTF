package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.content.entity.CelestialBladeProjectile;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.register.STSounds;
import com.ssakura49.sakuratinker.utils.tinker.TooltipUtil;
import net.minecraft.network.chat.Component;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.ToolDamageUtil;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

public class BladeConvergence extends ModifiableItem {
    public BladeConvergence(Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public UseAnim getUseAnimation(ItemStack stack) {
        return UseAnim.NONE;
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
        ItemStack stack = player.getItemInHand(hand);
        ToolStack tool = ToolStack.from(stack);

        if (!level.isClientSide && hand == InteractionHand.MAIN_HAND) {
            float damage = tool.getStats().get(ToolStats.ATTACK_DAMAGE);
            float speed = tool.getStats().get(ToolStats.ATTACK_SPEED);
            int cooldown = (int)(20 / speed);
            player.getCooldowns().addCooldown(this, cooldown);


            level.playSound(null, player.getX(), player.getY(), player.getZ(),
                    STSounds.CELESTIAL_BLADE.get(), SoundSource.PLAYERS,
                    1.0F, 0.9F + level.random.nextFloat() * 0.2F);

            CelestialBladeProjectile projectile = new CelestialBladeProjectile(
                    level,
                    player,
                    tool.getStats().get(ToolStats.ATTACK_DAMAGE),
                    tool,
                    hand
            );

            Vec3 lookAngle = player.getLookAngle();
            projectile.shoot(lookAngle.x, lookAngle.y, lookAngle.z, 0.3f, 0.0f);
            level.addFreshEntity(projectile);

            ToolDamageUtil.damageAnimated(tool, 1, player);

            return InteractionResultHolder.success(stack);
        }
        return InteractionResultHolder.pass(stack);
    }


    @Override
    public boolean isRepairable(ItemStack stack) {
        return false;
    }

    @Override
    public boolean isDamageable(ItemStack stack) {
        return true;
    }

    @Override
    public boolean canDisableShield(ItemStack stack, ItemStack shield, LivingEntity entity, LivingEntity attacker) {
        return true;
    }

    private List<Component> getConvergenceStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        builder.addDurability();
        builder.add(ToolStats.ATTACK_DAMAGE);
        builder.add(ToolStats.ATTACK_SPEED);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.COOLDOWN);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.RANGE);
        builder.addAllFreeSlots();

        for(ModifierEntry entry : tool.getModifierList()) {
            ((TooltipModifierHook)entry.getHook(ModifierHooks.TOOLTIP)).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }

        return tooltips;
    }

    @Override
    public List<Component> getStatInformation(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag flag) {
        tooltips = this.getConvergenceStats(tool, player, tooltips, key, flag);
        return tooltips;
    }
}
