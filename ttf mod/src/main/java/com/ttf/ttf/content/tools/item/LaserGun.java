package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.content.entity.LaserProjectileEntity;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.register.STSounds;
import com.ssakura49.sakuratinker.utils.tinker.ItemUtil;
import com.ssakura49.sakuratinker.utils.tinker.TooltipUtil;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.Vec3;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.common.TinkerTags;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.build.ConditionalStatModifierHook;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.ToolDamageUtil;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ModDataNBT;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

import static com.ssakura49.sakuratinker.content.tools.capability.ForgeEnergyCapability.getEnergy;
import static com.ssakura49.sakuratinker.content.tools.capability.ForgeEnergyCapability.setEnergy;
import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.ENERGY_KEY;
import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.MAX_STAT;

public class LaserGun extends ModifiableItem {

    public LaserGun(Item.Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
        ItemStack itemStack = player.getItemInHand(hand);
        ToolStack tool = ToolStack.from(itemStack);
        ModDataNBT toolData = tool.getPersistentData();
        boolean creative = player.getAbilities().instabuild;

        if ((!tool.isBroken() && toolData.contains(ENERGY_KEY, 3) || creative) && !level.isClientSide()) {
            boolean hasEnergy = toolData.getInt(ENERGY_KEY) >= 200;

            if (!creative && !hasEnergy) {
                return InteractionResultHolder.fail(itemStack);
            }

            float range = ConditionalStatModifierHook.getModifiedStat(tool, player, STToolStats.RANGE, tool.getStats().getInt(STToolStats.RANGE));
            float cooldown = ConditionalStatModifierHook.getModifiedStat(tool, player, STToolStats.COOLDOWN, (Float)tool.getStats().get(STToolStats.COOLDOWN) * 20.0F);

            Vec3 look = player.getLookAngle();
            LaserProjectileEntity laser = new LaserProjectileEntity(level, player);
            laser.setTool(itemStack.copy());
            laser.setRange(range);
            laser.setOwner(player);
            laser.setPos(player.getEyePosition());
            laser.shoot(look.x, look.y, look.z, 5.0f, 1.0f);
            level.addFreshEntity(laser);
            level.playSound(null, player.getX(), player.getY(), player.getZ(), STSounds.LASER_SHOOT.get(), SoundSource.PLAYERS, 0.1F, 0.9F + level.random.nextFloat() * 0.2F);
            ToolDamageUtil.damageAnimated(tool, 1, player, hand);
            if (!creative) {
                int current = getEnergy(tool);
                if (current >= 500) {
                    setEnergy(tool, current - 500);
                }
            }
            ItemUtil.addCooldown(player, this, Math.round(cooldown));
        }

        return InteractionResultHolder.consume(itemStack);
    }

    @Override
    public UseAnim getUseAnimation(ItemStack itemStack) {
        return UseAnim.NONE;
    }

    @Override
    public List<Component> getStatInformation(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        return getLaserGunStats(tool, player, tooltips, key, tooltipFlag);
    }

    public List<Component> getLaserGunStats(IToolStackView tool, @Nullable Player player,
                                            List<Component> tooltips, TooltipKey key,
                                            TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        if (tool.hasTag(TinkerTags.Items.DURABILITY)) {
            builder.addDurability();
        }
        if (tool.hasTag(TinkerTags.Items.MELEE)) {
            builder.add(ToolStats.ATTACK_DAMAGE);
            builder.add(ToolStats.ATTACK_SPEED);
        }
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.RANGE);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.COOLDOWN);
        int stored = tool.getPersistentData().getInt(ENERGY_KEY);
        int max = tool.getStats().getInt(MAX_STAT) + tool.getStats().getInt(STToolStats.ENERGY_STORAGE);
        builder.add(Component.literal("能量: " + stored + " / " + max).withStyle(ChatFormatting.BLUE));
        builder.addAllFreeSlots();

        for (ModifierEntry entry : tool.getModifierList()) {
            entry.getHook(ModifierHooks.TOOLTIP).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }

        return tooltips;
    }
}
