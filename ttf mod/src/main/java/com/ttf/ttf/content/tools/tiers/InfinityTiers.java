package com.ssakura49.sakuratinker.content.tools.tiers;

import net.minecraft.tags.TagKey;
import net.minecraft.util.LazyLoadedValue;
import net.minecraft.world.item.Tier;
import net.minecraft.world.item.crafting.Ingredient;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.common.ForgeHooks;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.function.Supplier;

public class InfinityTiers implements Tier {
    public static Tier instance = new InfinityTiers();
//    INFINITY(999, 999, 99f, 9999, 999);
//
//    private final int level;
//    private final int uses;
//    private final float speed;
//    private final float damage;
//    private final int enchantmentValue;
//
//    private InfinityTiers(int pLevel, int pUses, float pSpeed, float pDamage, int pEnchantmentValue) {
//        this.level = pLevel;
//        this.uses = pUses;
//        this.speed = pSpeed;
//        this.damage = pDamage;
//        this.enchantmentValue = pEnchantmentValue;
//    }
//
//    public int getUses() {
//        return this.uses;
//    }
//
//    public float getSpeed() {
//        return this.speed;
//    }
//
//    public float getAttackDamageBonus() {
//        return this.damage;
//    }
//
//    public int getLevel() {
//        return this.level;
//    }
//
//    public int getEnchantmentValue() {
//        return this.enchantmentValue;
//    }
//
//    public @NotNull Ingredient getRepairIngredient() {
//        return Ingredient.EMPTY;
//    }
    private InfinityTiers(){}

    public int getUses() {
        return 999;
    }

    public float getSpeed() {
        return 99f;
    }

    public float getAttackDamageBonus() {
        return 9999f;
    }

    public int getLevel() {
        return 99;
    }

    public int getEnchantmentValue() {
        return 99;
    }

    public @NotNull Ingredient getRepairIngredient() {
        return Ingredient.EMPTY;
    }
}
