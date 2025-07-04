package com.ssakura49.sakuratinker.register;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.damagesource.LegacyDamageSource;
import net.minecraft.core.BlockPos;
import net.minecraft.sounds.SoundEvents;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.LiquidBlock;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.level.material.FlowingFluid;
import net.minecraft.world.level.material.MapColor;
import net.minecraft.world.level.pathfinder.BlockPathTypes;
import net.minecraftforge.common.SoundActions;
import net.minecraftforge.fluids.FluidType;
import net.minecraftforge.fluids.ForgeFlowingFluid;
import slimeknights.mantle.registration.deferred.FluidDeferredRegister;
import slimeknights.mantle.registration.object.FluidObject;
import slimeknights.tconstruct.TConstruct;
import slimeknights.tconstruct.fluids.block.BurningLiquidBlock;

import javax.swing.plaf.PanelUI;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Supplier;

import static slimeknights.tconstruct.fluids.block.BurningLiquidBlock.createBurning;

public class STFluids {
    public static final FluidDeferredRegister FLUIDS = new FluidDeferredRegister(SakuraTinker.MODID);

    protected static Map<FluidObject<ForgeFlowingFluid>,Boolean> FLUID_MAP = new HashMap<>();
    public static Set<FluidObject<ForgeFlowingFluid>> getFluids(){
        return FLUID_MAP.keySet();
    }
    public static Map<FluidObject<ForgeFlowingFluid>,Boolean> getFluidMap(){
        return FLUID_MAP;
    }
    private static FluidObject<ForgeFlowingFluid> registerHotFluid(FluidDeferredRegister register,String name,int temp,int lightLevel,int burnTime,float damage,boolean gas){
        FluidObject<ForgeFlowingFluid> object = register.register(name).type(hot(name,temp,gas)).bucket().block(createBurning(MapColor.COLOR_GRAY,lightLevel,burnTime,damage)).commonTag().flowing();
        FLUID_MAP.put(object,gas);
        return object;
    }
    private static FluidObject<ForgeFlowingFluid> registerFluid(FluidDeferredRegister register, String name, int temp, Function<Supplier<? extends FlowingFluid>, LiquidBlock> blockFunction, boolean gas){
        FluidObject<ForgeFlowingFluid> object = register.register(name).type(hot(name,temp,gas)).bucket().block(blockFunction).commonTag().flowing();
        FLUID_MAP.put(object,gas);
        return object;
    }

    public static final FluidObject<ForgeFlowingFluid> molten_youkai = registerHotFluid(FLUIDS,"molten_youkai", 2400,4,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_etherium = registerHotFluid(FLUIDS,"molten_etherium", 2500,4,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_arcane_salvage = registerHotFluid(FLUIDS,"molten_arcane_salvage", 2500,2,4, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_infinity = registerHotFluid(FLUIDS,"molten_infinity", 9999,4,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_soul_sakura = registerHotFluid(FLUIDS,"molten_soul_sakura", 2000,4,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_fiery_crystal = registerHotFluid(FLUIDS,"molten_fiery_crystal", 5600,15,4, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_nihilite = registerFluid(FLUIDS,"molten_nihilite", 2400,(Function<Supplier<? extends FlowingFluid>, LiquidBlock>) supplier -> new BurningLiquidBlock(supplier, FluidDeferredRegister.createProperties(MapColor.COLOR_GRAY, 15), 200, 8) {
        @Override
        public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) {
            if (entity instanceof LivingEntity living) {
                living.hurt(LegacyDamageSource.any(living.damageSources().generic()).setBypassInvulnerableTime().setBypassArmor().setBypassEnchantment().setBypassMagic().setBypassShield().setMsgId("void"),2);
            }
        }
    },false);
    public static final FluidObject<ForgeFlowingFluid> molten_eezo = registerHotFluid(FLUIDS,"molten_eezo", 2500,1,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_arcane_alloy = registerHotFluid(FLUIDS,"molten_arcane_alloy", 2500,9,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_neutron = registerHotFluid(FLUIDS,"molten_neutron", 2500,9,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_colorful = registerFluid(FLUIDS,"molten_colorful", 8000,(Function<Supplier<? extends FlowingFluid>, LiquidBlock>) supplier -> new BurningLiquidBlock(supplier, FluidDeferredRegister.createProperties(MapColor.COLOR_GRAY, 15), 200, 8) {
        @Override
        public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) {
            if (entity instanceof LivingEntity living) {
                living.heal(2);
            }
        }
    },false);
    public static final FluidObject<ForgeFlowingFluid> molten_crystal_matrix = registerHotFluid(FLUIDS,"molten_crystal_matrix", 4500,9,2, 0.2f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_blood_bound_steel = registerHotFluid(FLUIDS, "molten_blood_bound_steel", 1300, 5, 2, 0.4f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_blood = registerHotFluid(FLUIDS, "molten_blood", 800, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_dragon_fire_steel = registerHotFluid(FLUIDS, "molten_dragon_fire_steel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_dragon_ice_steel = registerHotFluid(FLUIDS, "molten_dragon_ice_steel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_dragon_lightning_steel = registerHotFluid(FLUIDS, "molten_dragon_lightning_steel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_steady_alloy = registerHotFluid(FLUIDS, "molten_steady_alloy", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_south_star = registerHotFluid(FLUIDS, "molten_south_star", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_terracryst = registerHotFluid(FLUIDS, "molten_terracryst", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_prometheum = registerHotFluid(FLUIDS, "molten_prometheum", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_orichalcum = registerHotFluid(FLUIDS, "molten_orichalcum", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_aurumos = registerHotFluid(FLUIDS, "molten_aurumos", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_bear_interest = registerHotFluid(FLUIDS, "molten_bear_interest", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> slime_frost = registerHotFluid(FLUIDS, "slime_frost", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> slime_mycelium = registerHotFluid(FLUIDS, "slime_mycelium", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> slime_echo = registerHotFluid(FLUIDS, "slime_echo", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_mana_steel = registerHotFluid(FLUIDS, "molten_mana_steel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_goozma = registerHotFluid(FLUIDS, "molten_goozma", 1600, 15, 20, 4f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_mycelium_slimesteel = registerHotFluid(FLUIDS, "molten_mycelium_slimesteel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_frost_slimesteel = registerHotFluid(FLUIDS, "molten_frost_slimesteel", 1600, 11, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_echo_slimesteel = registerHotFluid(FLUIDS, "molten_echo_slimesteel", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_infinity_catalyst = registerHotFluid(FLUIDS, "molten_infinity_catalyst", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_orichalcos = registerHotFluid(FLUIDS, "molten_orichalcos", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_pyrothium = registerHotFluid(FLUIDS, "molten_pyrothium", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_dread_steel = registerHotFluid(FLUIDS, "molten_dread_steel", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_cursed_metal = registerHotFluid(FLUIDS, "molten_cursed_metal", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_dark_metal = registerHotFluid(FLUIDS, "molten_dark_metal", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_unholy_alloy = registerHotFluid(FLUIDS, "molten_unholy_alloy", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_terra_steel = registerHotFluid(FLUIDS, "molten_terra_steel", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_elementium = registerHotFluid(FLUIDS, "molten_elementium", 1600, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_gaia = registerHotFluid(FLUIDS, "molten_gaia", 2000, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_ice_dragon_blood = registerHotFluid(FLUIDS, "molten_ice_dragon_blood", 2000, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_fire_dragon_blood = registerHotFluid(FLUIDS, "molten_fire_dragon_blood", 2000, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_lightning_dragon_blood = registerHotFluid(FLUIDS, "molten_lightning_dragon_blood", 2000, 8, 2, 0.5f, false);
    public static final FluidObject<ForgeFlowingFluid> molten_chimera_gamma = registerHotFluid(FLUIDS, "molten_chimera_gamma", 2000, 8, 2, 0.5f, false);


    private static FluidType.Properties hot(String name,int Temp,boolean gas) {
        return FluidType.Properties.create().density(gas?-2000:2000).viscosity(10000).temperature(Temp)
                .descriptionId(TConstruct.makeDescriptionId("fluid", name))
                .sound(SoundActions.BUCKET_FILL, SoundEvents.BUCKET_FILL_LAVA)
                .sound(SoundActions.BUCKET_EMPTY, SoundEvents.BUCKET_EMPTY_LAVA)
                .canSwim(false).canDrown(false)
                .pathType(BlockPathTypes.LAVA).adjacentPathType(null);
    }
}
