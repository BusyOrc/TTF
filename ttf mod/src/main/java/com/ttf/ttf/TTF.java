package com.ssakura49.sakuratinker;

import com.ssakura49.sakuratinker.event.register.client.ClientEntityRendererInit;
import com.ssakura49.sakuratinker.event.register.client.ClientGuiRendererInit;
import com.ssakura49.sakuratinker.compat.Botania.BotaniaCompat;
import com.ssakura49.sakuratinker.compat.DreadSteel.DreadSteelCompat;
import com.ssakura49.sakuratinker.compat.ExtraBotany.ExtraBotanyCompat;
import com.ssakura49.sakuratinker.compat.Goety.GoetyCompat;
import com.ssakura49.sakuratinker.compat.IceAndFireCompat.IAFCompat;
import com.ssakura49.sakuratinker.content.entity.terraprisma.STMemoryModules;
import com.ssakura49.sakuratinker.content.tinkering.modifiers.curio.SoulBoundCurioModifier;
import com.ssakura49.sakuratinker.content.tinkering.modules.EnvironmentalAdaptationModule;
import com.ssakura49.sakuratinker.content.tinkering.modules.MultiCurioAttributeModule;
import com.ssakura49.sakuratinker.content.tools.capability.ForgeEnergyCapability;
import com.ssakura49.sakuratinker.content.tools.tiers.DreadSteelTiers;
import com.ssakura49.sakuratinker.content.tools.tiers.InfinityTiers;
import com.ssakura49.sakuratinker.compat.DraconicEvolution.DECompat;
import com.ssakura49.sakuratinker.compat.EnigmaticLegacy.ELCompat;
import com.ssakura49.sakuratinker.compat.IronSpellBooks.ISSCompat;
import com.ssakura49.sakuratinker.compat.ReAvaritia.ReAvaritiaCompat;
import com.ssakura49.sakuratinker.compat.TwilightForest.TFCompat;
import com.ssakura49.sakuratinker.compat.YoukaiHomeComing.YKHCCompat;
import com.ssakura49.sakuratinker.coremod.SakuraTinkerCore;
import com.ssakura49.sakuratinker.library.logic.handler.PlayerClickHandler;
import com.ssakura49.sakuratinker.library.logic.handler.SpellBookHandler;
import com.ssakura49.sakuratinker.library.tinkering.tools.STMaterialStats;
import com.ssakura49.sakuratinker.network.PacketHandler;
import com.ssakura49.sakuratinker.register.*;
import com.ssakura49.sakuratinker.utils.SafeClassUtil;
import com.ssakura49.sakuratinker.utils.time.TimeContext;
import com.ssakura49.sakuratinker.utils.time.TimeStopUtils;
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
@Mod.EventBusSubscriber(modid = SakuraTinker.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)
public class SakuraTinker {
    public static final String MODID = "sakuratinker";
    public static final Logger LOGGER = LogManager.getLogger("sakuratinker");
    public static StringBuilder stringBuilder = new StringBuilder();
    public static boolean modInitialized = false;
    public static ResourceLocation location(String string) {
        return new ResourceLocation(MODID, string);
    }

    public SakuraTinker() {
        FMLJavaModLoadingContext context = FMLJavaModLoadingContext.get();
        IEventBus modEventBus = context.getModEventBus();
        IEventBus forgeEventBus = MinecraftForge.EVENT_BUS;
        MinecraftForge.EVENT_BUS.register(this);
        modEventBus.addListener(this::commonSetup);
        modEventBus.addListener(this::onRegisterTiers);
        modEventBus.addListener(this::registerSerializers);
        forgeEventBus.addListener(PlayerClickHandler::onLeftClick);
        forgeEventBus.addListener(PlayerClickHandler::onLeftClickBlock);
        ModLoadingContext.get().registerConfig(ModConfig.Type.CLIENT, STConfig.Client.SPEC);
        ModLoadingContext.get().registerConfig(ModConfig.Type.COMMON, STConfig.Common.SPEC);
        STItems.ITEMS.register(modEventBus);
        STItems.TINKER_ITEMS.register(modEventBus);
        STGroups.CREATIVE_MODE_TABS.register(modEventBus);
        STBlocks.BLOCKS.register(modEventBus);
        STFluids.FLUIDS.register(modEventBus);
        STEffects.EFFECT.register(modEventBus);
        STModifiers.MODIFIERS.register(modEventBus);
        STEntities.ENTITIES.register(modEventBus);
        STSounds.SOUNDS.register(modEventBus);
        STParticles.PARTICLES.register(modEventBus);
        STAttributes.ATTRIBUTES.register(modEventBus);
        STRecipes.init(modEventBus);
        SoulBoundCurioModifier.addCuriosDropListener();
        STSlots.init();
        modEventBus.addListener((EntityAttributeCreationEvent e) -> STEntities.registerAttributes((type, builder) -> e.put(type, builder.build())));
        STMemoryModules.register(modEventBus);

        PacketHandler.init();
        DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> {
            modInitialized = true;
            ClientEntityRendererInit.init();
            ClientGuiRendererInit.init();
        });
        DistExecutor.unsafeRunWhenOn(Dist.DEDICATED_SERVER, () -> () -> {
            modInitialized = true;
            Timer timer = new Timer();
            TimerTask task = new TimerTask() {
                public void run() {
                    if (!TimeStopUtils.isTimeStop) {
                        ++TimeContext.Both.timeStopModifyMillis;
                    }
                }
            };
            timer.scheduleAtFixedRate(task, 1L, 1L);
        });



        if (SafeClassUtil.YHKCLoaded) {
            YKHCCompat.YKHC_MODIFIERS.register(modEventBus);
            LOGGER.info("Found YouKai Home Coming, integration initializing……");
        }
        if (SafeClassUtil.EnigmaticLegacyLoaded) {
            ELCompat.EL_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Enigmatic Legacy, integration initializing……");
        }
        if (SafeClassUtil.ISSLoaded) {
            ISSCompat.ISS_MODIFIERS.register(modEventBus);
            ISSCompat.TINKER_ISS_ITEMS.register(modEventBus);
            forgeEventBus.addListener(SpellBookHandler::onSpellDamage);
            forgeEventBus.addListener(SpellBookHandler::onCastSpell);
            LOGGER.info("Found Iron's Spellbooks, integration initializing……");
        }
        if (SafeClassUtil.AvaritiaLoaded) {
            ReAvaritiaCompat.REA_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Re:Avaritia, integration initializing……");
        }
        if (SafeClassUtil.TFLoaded) {
           TFCompat.TF_MODIFIERS.register(modEventBus);
           LOGGER.info("Found Twilight Forest, integration initializing……");
        }
        if (SafeClassUtil.DraconicEvolution) {
            DECompat.DE_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Draconic Evolution, integration initializing……");
        }
        if (SafeClassUtil.IceAndFire) {
            IAFCompat.IAF_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Ice And Fire, integration initializing……");
        }
        if (SafeClassUtil.Botania) {
            BotaniaCompat.BOTANIA_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Botania, integration initializing……");
        }
        if (SafeClassUtil.ExtraBotany) {
            ExtraBotanyCompat.EXBOT_MODIFIERS.register(modEventBus);
            ExtraBotanyCompat.TINKER_ITEMS.register(modEventBus);
            LOGGER.info("Found Extra Botany, integration initializing……");
        }
        if (SafeClassUtil.DreadSteel) {
            DreadSteelCompat.DE_MODIFIERS.register(modEventBus);
            LOGGER.info("Found Dread Steel, integration initializing……");
        }
        if (SafeClassUtil.Goety) {
            GoetyCompat.MODIFIERS.register(modEventBus);
//            GoetyCompat.TINKER_ITEMS.register(modEventBus);
//            forgeEventBus.addListener(SpellAttackHandler::onLivingHurt);
            LOGGER.info("Found Goety, integration initializing……");
        }
    }

    @SubscribeEvent
    public void onRegisterTiers(RegisterEvent event) {
        if (event.getRegistryKey().equals(Registries.ITEM)) {
            TierSortingRegistry.registerTier(
                    InfinityTiers.instance,
                    new ResourceLocation(MODID, "infinity"),
                    List.of(Tiers.NETHERITE),
                    List.of()
            );
            TierSortingRegistry.registerTier(
                    DreadSteelTiers.instance,
                    new ResourceLocation(MODID, "dread_steel"),
                    List.of(Tiers.NETHERITE),
                    List.of(InfinityTiers.instance)
            );
        }
    }
    @SubscribeEvent
    public void commonSetup(FMLCommonSetupEvent event) {
        event.enqueueWork(STMaterialStats::init);
        ToolCapabilityProvider.register((stack, tool) -> new ForgeEnergyCapability.Provider(tool));
//        if(ModListUtil.Ember) {
//            ToolCapabilityProvider.register((stack, tool) -> new EmberEnergyCapability.Provider(tool));
//        }
    }
    @SubscribeEvent
    public void registerSerializers(RegisterEvent event) {
        if (event.getRegistryKey() == Registries.RECIPE_SERIALIZER) {
            ModifierModule.LOADER.register(location("environmental_adaptation"), EnvironmentalAdaptationModule.LOADER);
            ModifierModule.LOADER.register(location("multi_curio_attribute"), MultiCurioAttributeModule.LOADER);
        }
    }

    public static String makeDescriptionId(String type, String name) {
        return type + ".sakuratinker." + name;
    }
    public static synchronized void outArray(Object[] o) {
        System.out.println(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + Arrays.toString(o));
    }
    public static synchronized void out(Object o) {
        System.out.println(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + o);
        SakuraTinkerCore.stream.println(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + o);

    }
    public static synchronized void outV(Vector2f o) {
        System.out.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + "(%.2f, %.2f)", o.x, o.y);
        System.out.print("\n");
        SakuraTinkerCore.stream.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + "(%.2f, %.2f)", o.x, o.y);
        SakuraTinkerCore.stream.print("\n");
    }
    public static synchronized void outV(Vector3f o) {
        System.out.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + "(%.2f, %.2f, %.2f)", o.x, o.y, o.z);
        System.out.print("\n");
        SakuraTinkerCore.stream.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + "(%.2f, %.2f, %.2f)", o.x, o.y, o.z);
        SakuraTinkerCore.stream.print("\n");
    }
    public static synchronized void out(String text, Object... o) {
        System.out.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + text, o);
        System.out.print("\n");

        SakuraTinkerCore.stream.printf(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]" + text, o);
        SakuraTinkerCore.stream.print("\n");
    }

    public static synchronized void out(Object... o) {
        System.out.print(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]");
        for (Object o1 : o)
            System.out.print(o1 + ", ");
        System.out.print("\n");

        SakuraTinkerCore.stream.print(stringBuilder.toString() + "[SakuraTinker: " + LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute() + "]");
        for (Object o1 : o)
            SakuraTinkerCore.stream.print(o1 + ", ");
        SakuraTinkerCore.stream.print("\n");
    }

    public static synchronized void push() {
        stringBuilder.append(" ");
    }

    public static synchronized void pop() {
        stringBuilder.deleteCharAt(stringBuilder.length() - 1);
    }

    public static synchronized void push2() {
        push();
        push();
    }

    public static synchronized void pop2() {
        pop();
        pop();
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