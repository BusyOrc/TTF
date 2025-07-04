package com.ssakura49.sakuratinker.generic;

import com.ssakura49.sakuratinker.library.hooks.armor.WearerDamagePreHook;
import com.ssakura49.sakuratinker.library.hooks.armor.WearerDamageTakeHook;
import com.ssakura49.sakuratinker.library.hooks.armor.WearerKnockBackHook;
import com.ssakura49.sakuratinker.library.hooks.armor.WearerTakeHealHook;
import com.ssakura49.sakuratinker.library.hooks.click.ItemClickUsedHook;
import com.ssakura49.sakuratinker.library.hooks.click.KeyPressModifierHook;
import com.ssakura49.sakuratinker.library.hooks.click.LeftClickModifierHook;
import com.ssakura49.sakuratinker.library.hooks.combat.*;
import com.ssakura49.sakuratinker.library.logic.context.AttackData;
import com.ssakura49.sakuratinker.library.tinkering.tools.STHooks;
import net.minecraft.core.BlockPos;
import net.minecraft.core.Direction;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.ai.attributes.Attribute;
import net.minecraft.world.entity.ai.attributes.AttributeModifier;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.AbstractArrow;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.storage.loot.LootContext;
import net.minecraft.world.phys.BlockHitResult;
import net.minecraft.world.phys.EntityHitResult;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.entity.living.LivingAttackEvent;
import net.minecraftforge.event.entity.living.LivingDamageEvent;
import net.minecraftforge.event.entity.living.LivingDeathEvent;
import net.minecraftforge.event.entity.living.LivingHurtEvent;
import net.minecraftforge.event.entity.player.PlayerEvent;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.library.modifiers.Modifier;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.modifiers.hook.armor.EquipmentChangeModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.armor.ModifyDamageModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.armor.OnAttackedModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.behavior.AttributesModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.behavior.ProcessLootModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.behavior.ToolDamageModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.build.ModifierRemovalHook;
import slimeknights.tconstruct.library.modifiers.hook.build.ToolStatsModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.build.ValidateModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.combat.DamageDealtModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.combat.MeleeDamageModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.combat.MeleeHitModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.display.RequirementsModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.display.TooltipModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.interaction.EntityInteractionModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.interaction.InteractionSource;
import slimeknights.tconstruct.library.modifiers.hook.interaction.InventoryTickModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.interaction.KeybindInteractModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.mining.BlockBreakModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.mining.BreakSpeedModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.ranged.BowAmmoModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.ranged.ProjectileHitModifierHook;
import slimeknights.tconstruct.library.modifiers.hook.ranged.ProjectileLaunchModifierHook;
import slimeknights.tconstruct.library.module.ModuleHookMap;
import slimeknights.tconstruct.library.tools.context.EquipmentChangeContext;
import slimeknights.tconstruct.library.tools.context.EquipmentContext;
import slimeknights.tconstruct.library.tools.context.ToolAttackContext;
import slimeknights.tconstruct.library.tools.context.ToolHarvestContext;
import slimeknights.tconstruct.library.tools.nbt.IToolContext;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ModDataNBT;
import slimeknights.tconstruct.library.tools.nbt.ModifierNBT;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;

import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Predicate;

public abstract class BaseModifier extends Modifier implements
        AttributesModifierHook,
        ProcessLootModifierHook,
        MeleeDamageModifierHook,
        MeleeHitModifierHook,
        DamageDealtModifierHook,
        BowAmmoModifierHook,
        ProjectileHitModifierHook,
        ProjectileLaunchModifierHook,
        EquipmentChangeModifierHook,
        InventoryTickModifierHook,
        OnAttackedModifierHook,
        ModifyDamageModifierHook,
        ModifierRemovalHook,
        BlockBreakModifierHook,
        EntityInteractionModifierHook,
        ToolStatsModifierHook,
        BreakSpeedModifierHook,
        ToolDamageModifierHook,
        KeybindInteractModifierHook,
        TooltipModifierHook,
        RequirementsModifierHook,
        ValidateModifierHook,

        LeftClickModifierHook,
        ModifyDamageSourceModifierHook,
        WearerDamagePreHook,
        WearerDamageTakeHook,
        WearerKnockBackHook,
        WearerTakeHealHook,
        ItemClickUsedHook,
        GenericCombatHook,
        MeleeCooldownHook,
        ShieldBlockingHook,
        KeyPressModifierHook,
        CauseDamageModifierHook
{
    @Override
    protected void registerHooks(ModuleHookMap.Builder builder) {
        super.registerHooks(builder);
        builder.addHook(this,
                ModifierHooks.ATTRIBUTES,
                ModifierHooks.PROCESS_LOOT,
                ModifierHooks.MELEE_DAMAGE,
                ModifierHooks.MELEE_HIT,
                ModifierHooks.DAMAGE_DEALT,
                ModifierHooks.BOW_AMMO,
                ModifierHooks.PROJECTILE_HIT,
                ModifierHooks.PROJECTILE_LAUNCH,
                ModifierHooks.EQUIPMENT_CHANGE,
                ModifierHooks.INVENTORY_TICK,
                ModifierHooks.ON_ATTACKED,
                ModifierHooks.MODIFY_DAMAGE,
                ModifierHooks.TOOLTIP,
                ModifierHooks.REMOVE,
                ModifierHooks.BLOCK_BREAK,
                ModifierHooks.ENTITY_INTERACT,
                ModifierHooks.TOOL_STATS,
                ModifierHooks.ARMOR_INTERACT,
                ModifierHooks.TOOL_DAMAGE,
                ModifierHooks.REQUIREMENTS,
                STHooks.LEFT_CLICK,
                STHooks.MODIFY_DAMAGE_SOURCE,
                STHooks.WEARER_DAMAGE_PRE,
                STHooks.WEARER_DAMAGE_TAKE,
                STHooks.WEARER_KNOCK_BACK,
                STHooks.WEARER_TAKE_HEAL,
                STHooks.ITEM_CLICK_USED,
                STHooks.GENERIC_COMBAT,
                STHooks.MELEE_COOLDOWN,
                STHooks.SHIELD_BLOCKING,
                STHooks.KEY_PRESS,
                STHooks.CAUSE_DAMAGE
        );
    }

    public BaseModifier() {
        MinecraftForge.EVENT_BUS.addListener(this::LivingHurtEvent);
        MinecraftForge.EVENT_BUS.addListener(this::LivingAttackEvent);
        MinecraftForge.EVENT_BUS.addListener(this::LivingDamageEvent);
    }
    public void LivingHurtEvent(LivingHurtEvent target) {}
    public void LivingAttackEvent(LivingAttackEvent target) {}
    public void LivingDamageEvent(LivingDamageEvent target) {}
    /**
     * @无等级
     */
    public boolean isNoLevels() {
        return false;
    }
    public @NotNull Component getDisplayName(int level) {
        return this.isNoLevels() ? super.getDisplayName() : super.getDisplayName(level);
    }
    /**
     * @AttributesModifierHook
     * @属性修饰符
     */
    @Override
    public void addAttributes(IToolStackView tool, ModifierEntry modifier, EquipmentSlot slot, BiConsumer<Attribute, AttributeModifier> consumer) {
    }
    /**
     * @ProcessLootModifierHook
     */
    @Override
    public void processLoot(IToolStackView tool, ModifierEntry modifier, List<ItemStack> list, LootContext context) {
    }
    /**
     * @MeleeDamageModifierHook
     * @计算武器伤害
     */
    @Override
    public float getMeleeDamage(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, float baseDamage, float damage) {
        return !context.getAttacker().level().isClientSide() && context.getLivingTarget() != null ? this.onModifyMeleeDamage(tool, modifier, context, context.getAttacker(), context.getLivingTarget(), baseDamage, damage) : damage;
    }
    public float onModifyMeleeDamage(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, LivingEntity attacker, LivingEntity target, float baseDamage, float actualDamage) {
        return actualDamage;
    }
    /**
     * @MeleeHitModifierHook
     * @武器击中之后，使用onAfterMeleeHit
     */
    @Override
    public void afterMeleeHit(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, float damageDealt) {
        if (!context.getAttacker().level().isClientSide() && context.getLivingTarget() != null) {
            this.onAfterMeleeHit(tool, modifier, context, context.getAttacker(), context.getLivingTarget(), damageDealt);
        }
    }
    public void onAfterMeleeHit(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, LivingEntity attacker, LivingEntity target, float damageDealt) {
    }
    /**
     * @MeleeHitModifierHook
     * @武器无法击中，使用onFailedMeleeHit
     **/
    @Override
    public void failedMeleeHit(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, float damageAttempted) {
        if (!context.getAttacker().level().isClientSide() && context.getLivingTarget() != null) {
            this.onFailedMeleeHit(tool, modifier.getLevel(), context, context.getAttacker(), context.getLivingTarget(), damageAttempted);
        }
    }
    public void onFailedMeleeHit(IToolStackView tool, int level, ToolAttackContext context,LivingEntity attacker, LivingEntity target, float damageAttempted) {
    }
    /**
     * @MeleeHitModifierHook
     * @武器击中之前，使用onBeforeMeleeHit
     **/
    @Override
    public float beforeMeleeHit(IToolStackView tool, ModifierEntry modifier, ToolAttackContext context, float damage, float baseKnockback, float knockback) {
        return !context.getAttacker().level().isClientSide() && context.getLivingTarget() != null ? this.onBeforeMeleeHit(tool, modifier.getLevel(), context, context.getAttacker(), context.getLivingTarget(), damage, baseKnockback, knockback) : knockback;
    }
    public float onBeforeMeleeHit(IToolStackView tool, int level, ToolAttackContext context, LivingEntity attacker, LivingEntity target, float damage, float baseKnockback, float knockback) {
        return knockback;
    }
    /**
     * @DamageDealtModifierHook
     * @处理伤害
     */
    @Override
    public void onDamageDealt(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, LivingEntity entity, DamageSource damageSource, float amount, boolean isDirectDamage) {
        this.onModifierDamageDealt(tool, modifier, context, slotType, entity, damageSource, amount, isDirectDamage);
    }
    public void onModifierDamageDealt(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, LivingEntity entity, DamageSource damageSource, float amount, boolean isDirectDamage) {
    }
    /**
     * @BowAmmoModifierHook
     * @弹药查找
     */
    @Override
    public ItemStack findAmmo(IToolStackView tool, ModifierEntry modifiers, LivingEntity livingEntity, ItemStack itemStack, Predicate<ItemStack> predicate) {
        return this.modifierFindAmmo(tool, modifiers, livingEntity, itemStack, predicate);
    }
    public ItemStack modifierFindAmmo(IToolStackView tool, ModifierEntry modifiers, LivingEntity livingEntity, ItemStack itemStack, Predicate<ItemStack> predicate) {
        return itemStack;
    }
    /**
     * @BowAmmoModifierHook
     * @弹药消耗
     */
    @Override
    public void shrinkAmmo(IToolStackView tool, ModifierEntry modifier, LivingEntity shooter, ItemStack ammo, int needed) {
        this.modifierShrinkAmmo(tool, modifier, shooter, ammo, needed);
    }
    public void modifierShrinkAmmo(IToolStackView tool, ModifierEntry modifier, LivingEntity shooter, ItemStack ammo, int needed) {
    }
    /**
     * @ProjectileHitModifierHook
     * @弹射物击中目标
     */
    @Override
    public boolean onProjectileHitEntity(ModifierNBT modifiers, ModDataNBT persistentData, ModifierEntry modifier, Projectile projectile, EntityHitResult hit, @javax.annotation.Nullable LivingEntity attacker, @javax.annotation.Nullable LivingEntity target) {
        if (target != null && attacker != null && !attacker.level().isClientSide() && projectile instanceof AbstractArrow arrow) {
            this.onProjectileHitTarget(modifiers, persistentData, modifier.getLevel(), projectile, arrow, hit, attacker, target);
        }
        return false;
    }
    public void onProjectileHitTarget(ModifierNBT modifiers, ModDataNBT persistentData, int level, Projectile projectile, AbstractArrow arrow, EntityHitResult hit, LivingEntity attacker, LivingEntity target) {
    }
    /**
     * @ProjectileHitModifierHook
     * @弹射物击中方块
     */
    @Override
    public void onProjectileHitBlock(ModifierNBT modifiers, ModDataNBT persistentData, ModifierEntry modifier, Projectile projectile, BlockHitResult hit, @javax.annotation.Nullable LivingEntity attacker) {
        if ( attacker != null && !attacker.level().isClientSide() && projectile instanceof AbstractArrow arrow) {
            this.modifierOnProjectileHitBlock(modifiers, persistentData, modifier, projectile, hit, attacker);
        }
    }
    public void modifierOnProjectileHitBlock(ModifierNBT modifiers, ModDataNBT persistentData, ModifierEntry modifier, Projectile projectile, BlockHitResult hit, @javax.annotation.Nullable LivingEntity attacker) {
    }
    /**
     * @ProjectileLaunchModifierHook
     * @
     */
    @Override
    public void onProjectileLaunch(IToolStackView tool, ModifierEntry modifier, LivingEntity shooter, Projectile projectile, @Nullable AbstractArrow arrow, ModDataNBT modDataNBT, boolean primary) {
        if (arrow != null) {
            this.onProjectileShoot(tool, modifier, shooter, projectile, arrow, modDataNBT, primary);
        }
    }
    public void onProjectileShoot(IToolStackView bow,ModifierEntry modifier, LivingEntity shooter, Projectile projectile, AbstractArrow arrow, ModDataNBT modDataNBT, boolean primary) {
    }
    /**
     * @EquipmentChangeModifierHook
     * @
     */
    @Override
    public void onEquip(IToolStackView tool, ModifierEntry modifier, EquipmentChangeContext context) {
        this.modifierOnEquip(tool, modifier, context);
    }
    public void modifierOnEquip(IToolStackView tool, ModifierEntry modifier, EquipmentChangeContext context) {
    }
    /**
     * @EquipmentChangeModifierHook
     * @
     */
    @Override
    public void onUnequip(IToolStackView tool, ModifierEntry modifier, EquipmentChangeContext context) {
        this.modifierOnUnequip(tool, modifier, context);
    }
    public void modifierOnUnequip(IToolStackView tool, ModifierEntry modifier, EquipmentChangeContext context) {
    }
    /**
     * @
     */
    @Override
    public void onInventoryTick(IToolStackView iToolStackView, ModifierEntry modifierEntry, Level level, LivingEntity entity, int index, boolean b, boolean b1, ItemStack itemStack) {
        this.modifierOnInventoryTick(iToolStackView, modifierEntry, level, entity, index, b, b1, itemStack);
    }
    public void modifierOnInventoryTick(IToolStackView tool, ModifierEntry modifier, Level level, LivingEntity holder, int itemSlot, boolean isSelected, boolean isCorrectSlot, ItemStack itemStack) {
    }
    /**
     * @
     */
    @Override
    public void onAttacked(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, DamageSource source, float amount, boolean isDirectDamage) {
        this.modifierOnAttacked(tool, modifier, context, slotType, source, amount, isDirectDamage);
    }
    public void modifierOnAttacked(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, DamageSource source, float amount, boolean isDirectDamage) {
    }
    /**
     * @
     */
    @Override
    public float modifyDamageTaken(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, DamageSource source, float amount, boolean isDirectDamage) {
        return this.onModifyTakeDamage(tool, modifier, context, slotType, source, amount, isDirectDamage);
    }
    public float onModifyTakeDamage(IToolStackView tool, ModifierEntry modifier, EquipmentContext context, EquipmentSlot slotType, DamageSource source, float amount, boolean isDirectDamage) {
        return amount;
    }
    /**
     *
     */
    @Nullable
    @Override
    public Component onRemoved(IToolStackView iToolStackView, Modifier modifier) {
        this.onModifierRemoved(iToolStackView);
        return null;
    }
    public void onModifierRemoved(IToolStackView tool) {
    }
    public Component getDisplayName(IToolStackView tool, ModifierEntry entry) {
        return entry.getDisplayName();
    }
    /**
     *
     */
    @Override
    public void afterBlockBreak(IToolStackView tool, ModifierEntry modifier, ToolHarvestContext context) {
        this.modifierAfterBlockBreak(tool, modifier, context);
    }
    public void modifierAfterBlockBreak(IToolStackView tool, ModifierEntry modifier, ToolHarvestContext context) {
    }
    /**
     *
     */
    @Override
    public InteractionResult beforeEntityUse(IToolStackView tool, ModifierEntry modifier, Player player, Entity target, InteractionHand hand, InteractionSource source) {
        return this.modifierBeforeEntityUse(tool, modifier, player, target, hand, source);
    }
    public InteractionResult modifierBeforeEntityUse(IToolStackView tool, ModifierEntry modifier, Player player, Entity target, InteractionHand hand, InteractionSource source) {
        return InteractionResult.PASS;
    }
    /**
     *
     */
    @Override
    public InteractionResult afterEntityUse(IToolStackView tool, ModifierEntry modifier, Player player, LivingEntity target, InteractionHand hand, InteractionSource source) {
        return this.modifierAfterEntityUse(tool, modifier, player, target, hand, source);
    }
    public InteractionResult modifierAfterEntityUse(IToolStackView tool, ModifierEntry modifier, Player player, LivingEntity target, InteractionHand hand, InteractionSource source) {
        return InteractionResult.PASS;
    }
    /**
     *
     */
    @Override
    public void onBreakSpeed(IToolStackView tool, ModifierEntry modifier, PlayerEvent.BreakSpeed event, Direction sideHit, boolean isEffective, float miningSpeedModifier) {
        this.modifierBreakSpeed(tool, modifier, event, sideHit, isEffective, miningSpeedModifier);
    }
    public void modifierBreakSpeed(IToolStackView tool, ModifierEntry modifier, PlayerEvent.BreakSpeed event, Direction sideHit, boolean isEffective, float miningSpeedModifier) {
    }
    /**
     *
     */
    @Override
    public void addToolStats(IToolContext context, ModifierEntry modifier, ModifierStatsBuilder builder) {
        this.modifierAddToolStats(context, modifier, builder);
    }
    public void modifierAddToolStats(IToolContext context, ModifierEntry modifier, ModifierStatsBuilder builder) {
    }
    /**
     *
     */
    @Override
    public void addTooltip(IToolStackView tool, ModifierEntry modifierEntry, @Nullable Player player, List<Component> tooltip, TooltipKey tooltipKey, TooltipFlag tooltipFlag) {
    }
    /**
     *
     */
    @Override
    public boolean startInteract(IToolStackView tool, ModifierEntry modifier, Player player, EquipmentSlot slot, TooltipKey keyModifier) {
        return KeybindInteractModifierHook.super.startInteract(tool, modifier, player, slot, keyModifier);
    }
    /**
     *
     */
    @Override
    public void onLeftClickEmpty(IToolStackView tool, ModifierEntry entry, Player player, Level level , EquipmentSlot equipmentSlot) {
        this.modifierLeftClickEmpty(tool, entry, player, level, equipmentSlot);
    }
    public void modifierLeftClickEmpty(IToolStackView tool, ModifierEntry entry, Player player, Level level , EquipmentSlot equipmentSlot) {
    }
    /**
     *
     */
    @Override
    public void onLeftClickBlock(IToolStackView tool, ModifierEntry entry, Player player, Level level , EquipmentSlot equipmentSlot, BlockState state, BlockPos pos) {
        this.modifierLeftClickBlock(tool,entry,player,level,equipmentSlot,state,pos);
    }
    public void modifierLeftClickBlock(IToolStackView tool, ModifierEntry entry, Player player, Level level , EquipmentSlot equipmentSlot, BlockState state, BlockPos pos) {
    }
    /**
     *
     */
    @Override
    public int onDamageTool(IToolStackView tool, ModifierEntry modifier, int amount, @Nullable LivingEntity holder) {
        return this.modifierDamageTool(tool,modifier,amount,holder);
    }
    public int modifierDamageTool(IToolStackView tool, ModifierEntry modifier, int amount, @Nullable LivingEntity holder) {
        return amount;
    }
    /**
     *
     */
    @Override
    public void onTakeDamagePre(IToolStackView armor, LivingHurtEvent event, AttackData data, int level) {
        this.modifierTakeDamagePre(armor, event , data, level);
    }
    public void modifierTakeDamagePre(IToolStackView armor, LivingHurtEvent event, AttackData data, int level) {
    }
    /**
    *
     */
    @Override
    public void onKillLivingTarget(IToolStackView tool, LivingDeathEvent event, LivingEntity attacker, LivingEntity target, int level) {
        this.modifierKillLivingTarget(tool, event, attacker, target, level);
    }
    public void modifierKillLivingTarget(IToolStackView tool, LivingDeathEvent event, LivingEntity attacker, LivingEntity target, int level) {}
    /**
     *
     */
    @Override
    public List<ModifierEntry> displayModifiers(ModifierEntry entry) {
        return List.of();
    }

    @Nullable
    @Override
    public Component requirementsError(ModifierEntry entry) {
        return null;
    }
    /**
     *
     */
    @Nullable
    public Component validate(IToolStackView var1, ModifierEntry var2){
        return null;
    };

    /**
     *
     */
    @Override
    public void onKeyPress(IToolStackView tool, ModifierEntry modifier, Player player, String key){
        this.modifierOnKeyPress(tool,modifier,player,key);
    }
    public void modifierOnKeyPress(IToolStackView tool, ModifierEntry modifier, Player player, String key){}

    /**
    *
     */
    @Override
    public float onCauseDamage(IToolStackView tool, ModifierEntry modifier, LivingHurtEvent event, LivingEntity attacker, LivingEntity target, float baseDamage, float currentDamage){
        return this.modifierCauseDamage(tool,modifier,event,attacker,target,baseDamage,currentDamage);
    }
    public float modifierCauseDamage(IToolStackView tool, ModifierEntry modifier, LivingHurtEvent event, LivingEntity attacker, LivingEntity target, float baseDamage, float currentDamage){
        return currentDamage;
    }
}
