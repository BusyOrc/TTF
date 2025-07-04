package com.ssakura49.sakuratinker.content.tools.item;

import java.util.List;
import java.util.UUID;

import com.google.common.collect.Multimap;
import com.ssakura49.sakuratinker.STConfig;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.library.tinkering.tools.item.ModifiableCurioItem;
import com.ssakura49.sakuratinker.utils.tinker.TooltipUtil;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.ai.attributes.Attribute;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import net.minecraft.world.entity.ai.attributes.AttributeModifier.Operation;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.StatsNBT;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import top.theillusivec4.curios.api.SlotContext;

public class TinkerCharm extends ModifiableCurioItem{
    public TinkerCharm(Item.Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public void getCurioStatAttributes(Multimap<Attribute, AttributeModifier> modifiers, ToolStack tool, UUID uuid) {
        StatsNBT toolStats = tool.getStats();
        modifiers.put(Attributes.MOVEMENT_SPEED, new AttributeModifier(uuid, "charms_movement_speed_bonus", (double) (Float) toolStats.get(STToolStats.MOVEMENT_SPEED), Operation.MULTIPLY_BASE));
        modifiers.put(Attributes.MAX_HEALTH, new AttributeModifier(uuid, "charms_max_health_bonus", (double) (float) toolStats.get(STToolStats.MAX_HEALTH), Operation.ADDITION));
        modifiers.put(Attributes.ARMOR, new AttributeModifier(uuid, "charms_armor_bonus", (double) (Float) toolStats.get(STToolStats.ARMOR), Operation.MULTIPLY_BASE));
        modifiers.put(Attributes.ARMOR_TOUGHNESS, new AttributeModifier(uuid, "charms_armor_toughness_bonus", (double) (Float) toolStats.get(STToolStats.ARMOR_TOUGHNESS), Operation.MULTIPLY_BASE));
        modifiers.put(Attributes.ATTACK_DAMAGE, new AttributeModifier(uuid, "charms_attack_damage_bonus", (double) (Float) toolStats.get(STToolStats.ATTACK_DAMAGE), Operation.MULTIPLY_BASE));
    }

    @Override
    public boolean canEquip(SlotContext slotContext, ItemStack stack) {
        if (STConfig.allowMultipleCharms()) {
            return true;
        }
        return super.canEquip(slotContext,stack);
    }

    @Override
    public List<Component> getStatInformation(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        return this.getCurioStats(tool, player, tooltips, key, tooltipFlag);
    }

    public List<Component> getCurioStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        TooltipUtil.addPerToolStatTooltip(builder, tool, STToolStats.MOVEMENT_SPEED);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.MAX_HEALTH);
        TooltipUtil.addPerToolStatTooltip(builder, tool, STToolStats.ARMOR);
        TooltipUtil.addPerToolStatTooltip(builder, tool, STToolStats.ARMOR_TOUGHNESS);
        TooltipUtil.addPerToolStatTooltip(builder, tool, STToolStats.ATTACK_DAMAGE);
        TooltipUtil.addPerToolStatTooltip(builder, tool, STToolStats.ARROW_DAMAGE);
        builder.addAllFreeSlots();

        for(ModifierEntry entry : tool.getModifierList()) {
            ((TooltipModifierHook)entry.getHook(ModifierHooks.TOOLTIP)).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }

        return tooltips;
    }
}
