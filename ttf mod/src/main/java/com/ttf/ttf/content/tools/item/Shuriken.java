package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.content.entity.ShurikenEntity;
import com.ssakura49.sakuratinker.library.interfaces.projectile.IProjectileBuild;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.sounds.SoundSource;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.AbstractArrow;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.*;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.common.Sounds;
import slimeknights.tconstruct.common.TinkerTags;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.build.ConditionalStatModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.tools.capability.EntityModifierCapability;
import slimeknights.tconstruct.library.tools.capability.PersistentDataCapability;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.ModifierUtil;
import slimeknights.tconstruct.library.tools.helper.ToolDamageUtil;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.item.ranged.ModifiableLauncherItem;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ModDataNBT;
import slimeknights.tconstruct.library.tools.nbt.ModifierNBT;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;
import java.util.function.Predicate;

public class Shuriken extends ModifiableItem implements IProjectileBuild {
    private final ResourceLocation SHURIKEN_CHANCE = SakuraTinker.location("shuriken_chance");

    public Shuriken(Item.Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }
    @Override
    public UseAnim getUseAnimation(ItemStack stack) {
        return UseAnim.NONE;
    }

//    @Override
//    public Predicate<ItemStack> getAllSupportedProjectiles() {
//        return ProjectileWeaponItem.ARROW_ONLY;
//    }
//
//    @Override
//    public int getDefaultProjectileRange() {
//        return 16;
//    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
        ItemStack itemStack = player.getItemInHand(hand);
        ToolStack tool = ToolStack.from(itemStack);
        ModDataNBT dataNBT = tool.getPersistentData();
        if (!tool.isBroken() && dataNBT.getInt(this.SHURIKEN_CHANCE) == 20) {
            float v1 = ConditionalStatModifierHook.getModifiedStat(tool, player, ToolStats.ATTACK_SPEED);
            float damage = ConditionalStatModifierHook.getModifiedStat(tool, player, ToolStats.ATTACK_DAMAGE);
            if (!level.isClientSide()) {
                ShurikenEntity entity = (ShurikenEntity) this.createProjectile(itemStack, level, player);
                this.addInfoToProjectile(entity, itemStack, level, player);
                entity.setItem(itemStack);
                entity.setTool(itemStack);
                entity.setDamage(damage);
                entity.shootFromRotation(player, player.getXRot(), player.getYRot(), 0.0F, 0.5f + v1, 1.0f);
                level.addFreshEntity(entity);
                level.playSound(null, player.getX(), player.getY(), player.getZ(), Sounds.SHURIKEN_THROW.getSound(), SoundSource.NEUTRAL,
                        0.5F, 0.4F / (level.getRandom().nextFloat() * 0.4F + 0.8F));
                ToolDamageUtil.damageAnimated(tool, 1, player);
            }
        } else if (!tool.isBroken()) {
            float drawSpeed = ConditionalStatModifierHook.getModifiedStat(tool, player, ToolStats.DRAW_SPEED);
            dataNBT.putInt(this.SHURIKEN_CHANCE, (int)Math.min((double)20.0F, (double)dataNBT.getInt(this.SHURIKEN_CHANCE) + (double)drawSpeed / 0.025));
        }
        return InteractionResultHolder.consume(itemStack);
    }

    @Override
    public Projectile createProjectile(ItemStack tool, Level level, LivingEntity shooter) {
        return new ShurikenEntity(level, shooter);
    }

    @Override
    public void addInfoToProjectile(Projectile projectile, ItemStack tool, Level world, LivingEntity shooter) {
        if (projectile instanceof ShurikenEntity entity) {
            entity.setTool(tool);
        }
    }

    private List<Component> getShurikneStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        if (tool.hasTag(TinkerTags.Items.DURABILITY)) {
            builder.addDurability();
        }
        builder.add(ToolStats.ATTACK_DAMAGE);
        builder.add(ToolStats.ATTACK_SPEED);
        builder.addAllFreeSlots();
        for(ModifierEntry entry : tool.getModifierList()) {
            ((TooltipModifierHook)entry.getHook(ModifierHooks.TOOLTIP)).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }
        return tooltips;
    }

    @Override
    public List<Component> getStatInformation(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag flag) {
        this.getShurikneStats(tool, player, tooltips, key, flag);
        return tooltips;
    }
}
