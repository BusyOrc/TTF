package com.ssakura49.sakuratinker.content.tools.item;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.register.STModifiers;
import com.ssakura49.sakuratinker.utils.tinker.TooltipUtil;
import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraft.world.phys.AABB;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.common.TinkerTags;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.ToolDamageUtil;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.nbt.IModDataView;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

public class BattleFlagItem extends ModifiableItem {
    public static final ResourceLocation MODE_KEY = new ResourceLocation(SakuraTinker.MODID, "battle_flag_mode");
    public static final int MODE_DEFENCE = 0;
    public static final int MODE_ATTACK  = 1;
    public static final int MODE_COUNT   = 2;

    public BattleFlagItem(Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level world, Player player, InteractionHand hand) {
        ItemStack stack = player.getItemInHand(hand);
        ToolStack tool = ToolStack.from(stack);
        IModDataView data = tool.getPersistentData();
        if (player.isShiftKeyDown()) {
            if (!world.isClientSide()) {
                int mode = data.getInt(MODE_KEY) + 1;
                if (mode >= MODE_COUNT) mode = MODE_DEFENCE;
                tool.getPersistentData().putInt(MODE_KEY, mode);
                String key = mode == MODE_ATTACK ?
                        "sakuratinker.message.mode.attack" :
                        "sakuratinker.message.mode.defence";
                player.sendSystemMessage(Component.translatable(key)
                        .withStyle(ChatFormatting.GOLD));
            }
            return InteractionResultHolder.success(stack);
        }
        player.startUsingItem(hand);
        return InteractionResultHolder.consume(stack);
    }

    @Override
    public UseAnim getUseAnimation(ItemStack stack) {
        return UseAnim.BOW;
    }

    @Override
    public int getUseDuration(ItemStack stack) {
        ToolStack tool = ToolStack.from(stack);
//        int currentStage = tool.getStats().getInt(STToolStats.CHARGING_TIME) * 20;
//        return Math.max(currentStage * 5, 1);
        return tool.getStats().getInt(STToolStats.CHARGING_TIME) * 20 * 5;
    }

    @Override
    public void releaseUsing(ItemStack stack, Level world, LivingEntity entity, int timeLeft) {
        if (!(entity instanceof Player player)) return;
        int used = getUseDuration(stack) - timeLeft;
        if (used <= 0) return;
        ToolStack tool = ToolStack.from(stack);
        IModDataView data = tool.getPersistentData();
        boolean attackMode = data.getInt(MODE_KEY) == MODE_ATTACK;

        int range = tool.getStats().getInt(STToolStats.RANGE);
        int ticks = tool.getStats().getInt(attackMode ? STToolStats.ATTACK_BUFF_TIME : STToolStats.DEFENCE_BUFF_TIME);
        int chargeUnit = tool.getStats().getInt(STToolStats.CHARGING_TIME);
        int currentStage = Math.min(used / chargeUnit + 1, 5);;
        if (currentStage < 1) return;

        int attackLevel = tool.getModifierLevel(STModifiers.ATTACK_MODIFIER.get());
        int defenceLevel = tool.getModifierLevel(STModifiers.DEFENCE_MODIFIER.get());
        if (attackMode) {
            applyAttackEffects(world, player, range, ticks, attackLevel, currentStage);
        } else {
            applyDefenceEffects(world, player, range, ticks, defenceLevel, currentStage);
        }
        world.playSound(null, player.getX(), player.getY(), player.getZ(),
                attackMode ? SoundEvents.HOGLIN_RETREAT : SoundEvents.ARMOR_EQUIP_IRON,
                player.getSoundSource(), 1.0F, 1.0F);
        player.getCooldowns().addCooldown(this, 20);
        ToolDamageUtil.damageAnimated(tool, 1, player);
    }

    private void applyAttackEffects(Level world, Player player, int range, int ticks, int attackLevel, int currentStage) {
        AABB box = createBoundingBox(player, range);
        for (LivingEntity target : world.getEntitiesOfClass(LivingEntity.class, box)) {
            if (target == player || player.isAlliedTo(target)) continue;

            if (currentStage >= 1) target.addEffect(new MobEffectInstance(MobEffects.GLOWING, ticks, attackLevel, false, false, true));
            if (currentStage >= 2) target.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SLOWDOWN, ticks, attackLevel, false, false, true));
            if (currentStage >= 3) target.addEffect(new MobEffectInstance(MobEffects.POISON, ticks, attackLevel, false, false, true));
            if (currentStage >= 4) target.addEffect(new MobEffectInstance(MobEffects.WEAKNESS, ticks, attackLevel, false, false, true));
            if (currentStage >= 5) target.addEffect(new MobEffectInstance(MobEffects.WITHER, ticks, attackLevel, false, false, true));
        }
    }

    private void applyDefenceEffects(Level world, Player player, int range, int ticks, int defenceLevel, int currentStage) {
        AABB box = createBoundingBox(player, range);
        for (LivingEntity target : world.getEntitiesOfClass(LivingEntity.class, box)) {
            if (target == player || player.isAlliedTo(target)) {
                if (currentStage >= 1) target.addEffect(new MobEffectInstance(MobEffects.DAMAGE_BOOST, ticks, defenceLevel, false, false, true));
                if (currentStage >= 2) target.addEffect(new MobEffectInstance(MobEffects.MOVEMENT_SPEED, ticks, defenceLevel, false, false, true));
                if (currentStage >= 3) target.addEffect(new MobEffectInstance(MobEffects.ABSORPTION, ticks, defenceLevel, false, false, true));
                if (currentStage >= 4) target.addEffect(new MobEffectInstance(MobEffects.DAMAGE_RESISTANCE, ticks, defenceLevel, false, false, true));
                if (currentStage >= 5) target.addEffect(new MobEffectInstance(MobEffects.REGENERATION, ticks, defenceLevel, false, false, true));
            }
        }
    }

    private AABB createBoundingBox(Player player, int range) {
        return new AABB(
                player.getX() - range, player.getY() - range, player.getZ() - range,
                player.getX() + range, player.getY() + range, player.getZ() + range
        );
    }

    public List<Component> getFlagStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        if (tool.hasTag(TinkerTags.Items.DURABILITY)) {
            builder.add(ToolStats.DURABILITY);
        }
        if (tool.hasTag(TinkerTags.Items.MELEE)) {
            builder.add(ToolStats.ATTACK_DAMAGE);
        }
        if (tool.hasTag(TinkerTags.Items.MELEE)) {
            builder.add(ToolStats.ATTACK_SPEED);
        }
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.RANGE);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.ATTACK_BUFF_TIME);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.DEFENCE_BUFF_TIME);
        TooltipUtil.addToolStatTooltip(builder, tool, STToolStats.CHARGING_TIME);
        String[] modes = {"tooltip.attack", "tooltip.defence"};
        builder.add(Component.translatable("sakuratinker." + modes[tool.getPersistentData().getInt(MODE_KEY)]));
        builder.add(Component.translatable("tooltip.sakuratinker.change_mode").withStyle(ChatFormatting.GRAY));
        for (ModifierEntry entry : tool.getModifierList()) {
            entry.getHook(ModifierHooks.TOOLTIP).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }
        return tooltips;
    }

    @Override
    public @NotNull List<Component> getStatInformation(@NotNull IToolStackView tool, @Nullable Player player, @NotNull List<Component> tooltips, @NotNull TooltipKey key, @NotNull TooltipFlag tooltipFlag) {
        return this.getFlagStats(tool, player, tooltips, key, tooltipFlag);
    }
}
