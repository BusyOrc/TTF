package com.ssakura49.sakuratinker.content.tools.tiers;

import net.minecraft.world.item.Tier;
import net.minecraft.world.item.crafting.Ingredient;
import org.jetbrains.annotations.NotNull;

public class DreadSteelTiers implements Tier {
    public static Tier instance = new DreadSteelTiers();
    private DreadSteelTiers(){}

    public int getUses() {
        return 0;
    }

    public float getSpeed() {
        return 9f;
    }

    public float getAttackDamageBonus() {
        return 9f;
    }

    public int getLevel() {
        return 4;
    }

    public int getEnchantmentValue() {
        return 22;
    }

    public @NotNull Ingredient getRepairIngredient() {
        return Ingredient.EMPTY;
    }
}
