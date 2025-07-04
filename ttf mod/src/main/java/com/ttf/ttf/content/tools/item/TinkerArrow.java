package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.content.entity.TinkerArrowEntity;
import com.ssakura49.sakuratinker.library.interfaces.projectile.IProjectileBuild;
import com.ssakura49.sakuratinker.library.tinkering.tools.item.ModifiableArrowItem;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.AbstractArrow;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.common.TinkerTags;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

public class TinkerArrow extends ModifiableArrowItem implements IProjectileBuild {
    public TinkerArrow(Item.Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public @NotNull AbstractArrow createArrow(Level level, ItemStack stack, LivingEntity entity) {
        TinkerArrowEntity arrow = (TinkerArrowEntity)this.createProjectile(stack, level, entity);
        this.addInfoToProjectile(arrow, stack, level, entity);
        float baseDamage = 1.0F;
        arrow.setTool(stack);
        arrow.setDamage(baseDamage);
        return arrow;
    }

    @Override
    public Projectile createProjectile(ItemStack tool, Level level, LivingEntity entity) {
        return new TinkerArrowEntity(level, entity);
    }

    @Override
    public void addInfoToProjectile(Projectile projectile, ItemStack tool, Level level, LivingEntity entity) {
        if (projectile instanceof TinkerArrowEntity tinkerArrow) {
            tinkerArrow.setTool(tool);
        }
    }

    private List<Component> getTinkerArrowStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        if (tool.hasTag(TinkerTags.Items.DURABILITY)) {
            builder.addDurability();
        }
        builder.add(ToolStats.ATTACK_DAMAGE);
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
        tooltips = this.getTinkerArrowStats(tool, player, tooltips, key, flag);
        return tooltips;
    }
}
