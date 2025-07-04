package com.ssakura49.sakuratinker;

import com.ttf.ttf.register.*;
import net.minecraft.core.registries.Registries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Tiers;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.common.TierSortingRegistry;
import net.minecraftforge.event.entity.EntityAttributeCreationEvent;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.ModList;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.config.ModConfig;
import net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.minecraftforge.forgespi.language.ModFileScanData;
import net.minecraftforge.registries.RegisterEvent;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joml.Vector2f;
import org.joml.Vector3f;
import org.objectweb.asm.Type;
import slimeknights.tconstruct.library.modifiers.modules.ModifierModule;
import slimeknights.tconstruct.library.tools.capability.ToolCapabilityProvider;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.stream.Stream;

@Mod(SakuraTinker.MODID)
@Mod.EventBusSubscriber(modid = TTF.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)
public class TTF {
    public static final String MODID = "ttf";
    public static final Logger LOGGER = LogManager.getLogger("ttf");
    public static StringBuilder stringBuilder = new StringBuilder();
    public static boolean modInitialized = false;
    public static ResourceLocation location(String string) {
        return new ResourceLocation(MODID, string);
    }

    public TTF() {
        FMLJavaModLoadingContext context = FMLJavaModLoadingContext.get();
        IEventBus modEventBus = context.getModEventBus();
        IEventBus forgeEventBus = MinecraftForge.EVENT_BUS;
        MinecraftForge.EVENT_BUS.register(this);
        modEventBus.addListener(this::commonSetup);
        modEventBus.addListener(this::onRegisterTiers);
        modEventBus.addListener(this::registerSerializers);
        TTFItems.ITEMS.register(modEventBus);
        TTFItems.TINKER_ITEMS.register(modEventBus);
        TTFGroups.CREATIVE_MODE_TABS.register(modEventBus);
        TTFBlocks.BLOCKS.register(modEventBus);
        TTFFluids.FLUIDS.register(modEventBus);
        TTFEffects.EFFECT.register(modEventBus);
        TTFModifiers.MODIFIERS.register(modEventBus);
    }

    @SubscribeEvent
    public void onRegisterTiers(RegisterEvent event) {
        if (event.getRegistryKey().equals(Registries.ITEM)) {
            
        }
    }
    @SubscribeEvent
    public void commonSetup(FMLCommonSetupEvent event) {
        event.enqueueWork(TTFMaterialStats::init);
    }
    @SubscribeEvent
    public void registerSerializers(RegisterEvent event) {
        if (event.getRegistryKey() == Registries.RECIPE_SERIALIZER) {
            // ModifierModule.LOADER.register(location("environmental_adaptation"), EnvironmentalAdaptationModule.LOADER);
            // ModifierModule.LOADER.register(location("multi_curio_attribute"), MultiCurioAttributeModule.LOADER);
        }
    }

    public static String makeDescriptionId(String type, String name) {
        return type + ".ttf." + name;
    }
    public static String transformClassName(String className) {
        if (className.startsWith("L")) className = className.substring(1);
        return className.replace('/', '.').replace(";", "");
    }

    public static Stream<Type> modClassTypes() {
        return ModList.get().getModFileById(MODID).getFile().getScanResult()
                .getClasses()
                .stream()
                .map(ModFileScanData.ClassData::clazz);
    }

    public static List<String> autoRegNamesInPackage(String packageName) {
        return modClassTypes()
                .filter(type -> type.getDescriptor().startsWith("L" + packageName.replace('.', '/')))
                .map(Type::getClassName).toList();
    }
}
