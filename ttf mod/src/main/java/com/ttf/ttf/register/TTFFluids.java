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

public class TTFFluids {
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

    // public static final FluidObject<ForgeFlowingFluid> molten_youkai = registerHotFluid(FLUIDS,"molten_youkai", 2400,4,2, 0.2f, false);
    // public static final FluidObject<ForgeFlowingFluid> molten_colorful = registerFluid(FLUIDS,"molten_colorful", 8000,(Function<Supplier<? extends FlowingFluid>, LiquidBlock>) supplier -> new BurningLiquidBlock(supplier, FluidDeferredRegister.createProperties(MapColor.COLOR_GRAY, 15), 200, 8) {
    //     @Override
    //     public void entityInside(BlockState state, Level level, BlockPos pos, Entity entity) {
    //         if (entity instanceof LivingEntity living) {
    //             living.heal(2);
    //         }
    //     }
    // },false);

    private static FluidType.Properties hot(String name,int Temp,boolean gas) {
        return FluidType.Properties.create().density(gas?-2000:2000).viscosity(10000).temperature(Temp)
                .descriptionId(TConstruct.makeDescriptionId("fluid", name))
                .sound(SoundActions.BUCKET_FILL, SoundEvents.BUCKET_FILL_LAVA)
                .sound(SoundActions.BUCKET_EMPTY, SoundEvents.BUCKET_EMPTY_LAVA)
                .canSwim(false).canDrown(false)
                .pathType(BlockPathTypes.LAVA).adjacentPathType(null);
    }
}
