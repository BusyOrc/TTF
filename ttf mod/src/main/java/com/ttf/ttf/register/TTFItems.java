package com.ssakura49.sakuratinker.register;

import com.google.common.collect.ImmutableMultimap;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.content.items.*;
import com.ssakura49.sakuratinker.content.items.curios.FoxCurio;
import com.ssakura49.sakuratinker.content.tools.definition.STArmorDefinitions;
import com.ssakura49.sakuratinker.content.tools.definition.STToolDefinitions;
import com.ssakura49.sakuratinker.content.tools.item.*;
import com.ssakura49.sakuratinker.content.tools.stats.*;
import com.ssakura49.sakuratinker.library.tinkering.tools.item.ModifiableArrowItem;
import com.ssakura49.sakuratinker.library.tinkering.tools.item.ModifiableCurioItem;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.ItemTags;
import net.minecraft.tags.TagKey;
import net.minecraft.world.food.FoodProperties;
import net.minecraft.world.item.*;
import net.minecraft.world.level.block.Block;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;
import slimeknights.mantle.registration.object.EnumObject;
import slimeknights.mantle.registration.object.ItemObject;
import slimeknights.tconstruct.common.registration.ItemDeferredRegisterExtension;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.item.armor.ModifiableArmorItem;
import slimeknights.tconstruct.library.tools.item.armor.MultilayerArmorItem;
import slimeknights.tconstruct.library.tools.part.PartCastItem;
import slimeknights.tconstruct.library.tools.part.ToolPartItem;
import slimeknights.tconstruct.tools.stats.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

public class STItems {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> MISC = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> YKHC_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> EL_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> REA_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> TF_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> DE_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> IAF_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> ISS_ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);

    public static final ItemDeferredRegisterExtension TINKER_ITEMS = new ItemDeferredRegisterExtension(SakuraTinker.MODID);

    protected static List<RegistryObject<Item>> LIST_MICS = new ArrayList<>(List.of());
    protected static List<RegistryObject<Item>> LIST_MATERIAL = new ArrayList<>(List.of());
    protected static List<RegistryObject<Item>> LIST_TOOL = new ArrayList<>(List.of());

    public static final Item.Properties PartItem = new Item.Properties().stacksTo(64);
    public static final Item.Properties CastItem = new Item.Properties().stacksTo(64);
    public static final Item.Properties ToolItem = new Item.Properties().stacksTo(1);

    protected static List<RegistryObject<BlockItem>> LIST_SIMPLE_BLOCK = new ArrayList<>(List.of());
    protected static List<RegistryObject<Item>> LIST_MATERIAL_ITEM_MODEL = new ArrayList<>(List.of());
    protected static List<RegistryObject<PartCastItem>> LIST_PART_CAST = new ArrayList<>(List.of());
    protected static List<RegistryObject<Item>> LIST_COMMON_ITEMS = new ArrayList<>(List.of());

    public static List<RegistryObject<Item>> getListSimpleModel() {
        return List.copyOf(LIST_MATERIAL_ITEM_MODEL);
    }

    public static List<RegistryObject<BlockItem>> getListSimpleBlock() {
        return List.copyOf(LIST_SIMPLE_BLOCK);
    }

    public static RegistryObject<Item> registerCommonItem(DeferredRegister<Item> register, String string, Supplier<? extends Item> supplier, boolean simpleModel) {
        RegistryObject<Item> object = register.register(string, supplier);
        LIST_COMMON_ITEMS.add(object);
        if (simpleModel) {
            LIST_MATERIAL_ITEM_MODEL.add(object);
        }
        return object;
    }
    public static RegistryObject<Item> registerMisc(DeferredRegister<Item> register, String string, Supplier<? extends Item> supplier, boolean simpleModel) {
        RegistryObject<Item> object = register.register(string, supplier);
        LIST_MICS.add(object);
        if (simpleModel) {
            LIST_MATERIAL_ITEM_MODEL.add(object);
        }
        return object;
    }
    public static RegistryObject<Item> registerMaterial(DeferredRegister<Item> register, String string, Supplier<? extends Item> supplier, boolean simpleModel) {
        RegistryObject<Item> object = register.register(string, supplier);
        LIST_MATERIAL.add(object);
        if (simpleModel) {
            LIST_MATERIAL_ITEM_MODEL.add(object);
        }
        return object;
    }
    public static RegistryObject<Item> registerToolOrPart(DeferredRegister<Item> register, String string, Supplier<? extends Item> supplier) {
        RegistryObject<Item> object = register.register(string, supplier);
        LIST_TOOL.add(object);
        return object;
    }
    public static RegistryObject<BlockItem> registerSimpleBlockItem(DeferredRegister<Item> register, RegistryObject<? extends Block> block) {
        RegistryObject<BlockItem> object = register.register(block.getId().getPath(), () -> new BlockItem(block.get(), new Item.Properties()));
        LIST_SIMPLE_BLOCK.add(object);
        return object;
    }

    public static final RegistryObject<BlockItem> eezo_ore = registerSimpleBlockItem(ITEMS, STBlocks.EEZO_ORE);
    public static final RegistryObject<BlockItem> terracryst_ore = registerSimpleBlockItem(ITEMS, STBlocks.terracryst_ore);
    public static final RegistryObject<BlockItem> terracryst_ore_deepslate = registerSimpleBlockItem(ITEMS, STBlocks.terracryst_ore_deepslate);
    public static final RegistryObject<BlockItem> prometheum_ore = registerSimpleBlockItem(ITEMS, STBlocks.prometheum_ore);
    public static final RegistryObject<BlockItem> prometheum_ore_deepslate = registerSimpleBlockItem(ITEMS, STBlocks.prometheum_ore_deepslate);
    public static final RegistryObject<BlockItem> orichalcum_ore = registerSimpleBlockItem(ITEMS, STBlocks.orichalcum_ore);
    public static final RegistryObject<BlockItem> orichalcum_ore_deepslate = registerSimpleBlockItem(ITEMS, STBlocks.orichalcum_ore_deepslate);

    public static final RegistryObject<Item> arcane_alloy = registerMaterial(ITEMS,"arcane_alloy", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> youkai_ingot = registerMaterial(ITEMS,"youkai_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> soul_sakura = registerMaterial(ITEMS,"soul_sakura", () -> new SoulSakuraItem(new Item.Properties()), true);
    public static final RegistryObject<Item> fiery_crystal = registerMaterial(ITEMS,"fiery_crystal", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> wither_heart = registerMaterial(ITEMS,"wither_heart", () -> new WitherHeartItem(new Item.Properties()), true);
    public static final RegistryObject<Item> nihilite_ingot = registerMaterial(ITEMS,"nihilite_ingot", () -> new NihiliteItem(new Item.Properties()), true);
    public static final RegistryObject<Item> eezo_ingot = registerMaterial(ITEMS,"eezo_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> eezo_nugget = registerMaterial(ITEMS,"eezo_nugget", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> colorful_ingot = registerMaterial(ITEMS,"colorful_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> coalescence_matrix = registerMaterial(ITEMS, "coalescence_matrix", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> blood_bound_steel = registerMaterial(ITEMS, "blood_bound_steel", () -> new BloodBoundSteelItem(new Item.Properties()), true);
    public static final RegistryObject<Item> steady_alloy = registerMaterial(ITEMS, "steady_alloy", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> blood_ball = registerMaterial(ITEMS, "blood_ball",() -> new BloodBallItem(new Item.Properties().food(new FoodProperties.Builder().nutrition(2).saturationMod(0.2f).alwaysEat().build())), true);
    public static final RegistryObject<Item> blood_drop = registerMaterial(ITEMS, "blood_drop", () -> new BloodDropItem(new Item.Properties().food(new FoodProperties.Builder().nutrition(2).saturationMod(0.2f).build())), true);
    public static final RegistryObject<Item> south_star = registerMaterial(ITEMS, "south_star", () -> new SouthStarItem(new Item.Properties()), true);
    public static final RegistryObject<Item> terracryst = registerMaterial(ITEMS, "terracryst", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> prometheum_raw = registerMaterial(ITEMS, "prometheum_raw", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> prometheum_ingot = registerMaterial(ITEMS, "prometheum_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> orichalcum_raw = registerMaterial(ITEMS, "orichalcum_raw", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> orichalcum_ingot = registerMaterial(ITEMS, "orichalcum_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> aurumos = registerMaterial(ITEMS, "aurumos", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> bear_interest_ingot = registerMaterial(ITEMS, "bear_interest_ingot", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_crystal_earth = registerMaterial(ITEMS, "slime_crystal_earth", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_crystal_sky = registerMaterial(ITEMS, "slime_crystal_sky", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_crystal_nether = registerMaterial(ITEMS, "slime_crystal_nether", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_ball_frost = registerMaterial(ITEMS, "slime_ball_frost", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_ball_mycelium = registerMaterial(ITEMS, "slime_ball_mycelium", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> slime_ball_echo = registerMaterial(ITEMS, "slime_ball_echo", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> mycelium_slimesteel = registerMaterial(ITEMS, "mycelium_slimesteel", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> frost_slimesteel = registerMaterial(ITEMS, "frost_slimesteel", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> echo_slimesteel = registerMaterial(ITEMS, "echo_slimesteel", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> goozma = registerMaterial(ITEMS, "goozma", () -> new Goozma(new Item.Properties()), true);
    public static final RegistryObject<Item> pyrothium = registerMaterial(ITEMS,"pyrothium", () ->new Item(new Item.Properties()),true);
    public static final RegistryObject<Item> unholy_alloy = registerMaterial(ITEMS,"unholy_alloy", () ->new Item(new Item.Properties()),true);
    public static final RegistryObject<Item> chimera_gamma = registerMaterial(ITEMS,"chimera_gamma", () ->new ChimeraGammaItem(new Item.Properties().stacksTo(64).rarity(Rarity.EPIC)),true);

    public static final RegistryObject<Item> fox_mask = registerCommonItem(ITEMS, "fox_mask", () -> new FoxCurio(new Item.Properties(), "fox_mask", ImmutableMultimap.of()),false);
    public static final RegistryObject<Item> slaughter = registerCommonItem(ITEMS, "slaughter",()-> new Slaughter(new Item.Properties().stacksTo(1)), false);

    public static final ItemObject<ToolPartItem> charm_chain = TINKER_ITEMS.register("charm_chain", () -> new ToolPartItem(PartItem, CharmChainMaterialStats.ID));
    public static final ItemObject<ToolPartItem> charm_core = TINKER_ITEMS.register("charm_core", () -> new ToolPartItem(PartItem, STStatlessMaterialStats.CHARM_CORE.getIdentifier()));
    public static final ItemObject<ToolPartItem> swift_blade = TINKER_ITEMS.register("swift_blade", () -> new ToolPartItem(PartItem, HeadMaterialStats.ID));
    public static final ItemObject<ToolPartItem> swift_guard = TINKER_ITEMS.register("swift_guard", () -> new ToolPartItem(PartItem, HandleMaterialStats.ID));
    public static final ItemObject<ToolPartItem> laser_medium = TINKER_ITEMS.register("laser_medium", () -> new ToolPartItem(PartItem, LaserMediumMaterialStats.ID));
    public static final ItemObject<ToolPartItem> energy_unit = TINKER_ITEMS.register("energy_unit", () -> new ToolPartItem(PartItem, EnergyUnitMaterialStats.ID));
    public static final ItemObject<ToolPartItem> barrel = TINKER_ITEMS.register("barrel", () -> new ToolPartItem(PartItem, HeadMaterialStats.ID));
    public static final ItemObject<ToolPartItem> blade = TINKER_ITEMS.register("blade", () -> new ToolPartItem(PartItem, HeadMaterialStats.ID));
    public static final ItemObject<ToolPartItem> arrow_head = TINKER_ITEMS.register("arrow_head", () -> new ToolPartItem(PartItem, HeadMaterialStats.ID));
    public static final ItemObject<ToolPartItem> arrow_shaft = TINKER_ITEMS.register("arrow_shaft", () -> new ToolPartItem(PartItem, HandleMaterialStats.ID));
    public static final ItemObject<ToolPartItem> fletching = TINKER_ITEMS.register("fletching", () -> new ToolPartItem(PartItem, FletchingMaterialStats.ID));
    public static final ItemObject<ToolPartItem> blade_box = TINKER_ITEMS.register("blade_box", () -> new ToolPartItem(PartItem, StatlessMaterialStats.BINDING.getIdentifier()));
    public static final ItemObject<ToolPartItem> great_blade = TINKER_ITEMS.register("great_blade", () -> new ToolPartItem(PartItem, HeadMaterialStats.ID));
    public static final ItemObject<ToolPartItem> shell = TINKER_ITEMS.register("shell", () -> new ToolPartItem(PartItem, StatlessMaterialStats.BINDING.getIdentifier()));
    public static final ItemObject<ToolPartItem> flag = TINKER_ITEMS.register("flag", () -> new ToolPartItem(PartItem, BattleFlagMaterialStats.ID));
//    public static final ItemObject<ToolPartItem> fox_mask_main = TINKER_ITEMS.register("fox_mask_main", () -> new ToolPartItem(PartItem, STStatlessMaterialStats.FOX_MASK_MAIN.getIdentifier()));
//    public static final ItemObject<ToolPartItem> fox_mask_core = TINKER_ITEMS.register("fox_mask_core", () -> new ToolPartItem(PartItem, STStatlessMaterialStats.FOX_MASK_CORE.getIdentifier()));

    public static final ItemObject<ModifiableCurioItem> tinker_charm = TINKER_ITEMS.register("tinker_charm", () -> new TinkerCharm(ToolItem, STToolDefinitions.TINKER_CHARM));
    public static final ItemObject<ModifiableItem> great_sword = TINKER_ITEMS.register("great_sword",() -> new ModifiableItem(ToolItem, STToolDefinitions.GREAT_SWORD));
    public static final ItemObject<ModifiableItem> swift_sword = TINKER_ITEMS.register("swift_sword", () -> new SwiftSword(ToolItem, STToolDefinitions.SWIFT_SWORD));
    public static final ItemObject<ModifiableItem> vampire_knife = TINKER_ITEMS.register("vampire_knife", () -> new VampireKnives(ToolItem, STToolDefinitions.VAMPIRE_KNIVES));
    public static final ItemObject<ModifiableItem> blade_convergence = TINKER_ITEMS.register("blade_convergence", () -> new BladeConvergence(ToolItem, STToolDefinitions.BLADE_CONVERGENCE));
    public static final ItemObject<ModifiableItem> laser_gun = TINKER_ITEMS.register("laser_gun", () -> new LaserGun(ToolItem, STToolDefinitions.LASER_GUN));
    public static final ItemObject<ModifiableItem> shuriken = TINKER_ITEMS.register("shuriken", () -> new Shuriken(ToolItem, STToolDefinitions.SHURIKEN));
    public static final ItemObject<ModifiableArrowItem> tinker_arrow = TINKER_ITEMS.register("tinker_arrow", () -> new TinkerArrow(ToolItem, STToolDefinitions.TINKER_ARROW));
    public static final EnumObject<ArmorItem.Type, ModifiableArmorItem> embeddedArmor = TINKER_ITEMS.registerEnum("embedded", ArmorItem.Type.values(), (type) -> new MultilayerArmorItem(STArmorDefinitions.EMBEDDED, type, ToolItem));
    public static final ItemObject<ModifiableItem> grappling_hook = TINKER_ITEMS.register("grappling_hook", () -> new GrapplingHookItem(ToolItem, STToolDefinitions.HOOK));
    public static final ItemObject<ModifiableItem> power_bank = TINKER_ITEMS.register("power_bank", () -> new EnergyChargerItem(ToolItem, STToolDefinitions.POWER_BANK));
    public static final ItemObject<ModifiableItem> battle_flag = TINKER_ITEMS.register("battle_flag", () -> new BattleFlagItem(ToolItem, STToolDefinitions.BATTLE_FLAG));

//    public static final RegistryObject<Item> shuriken_ammo = ITEMS.register("shuriken_ammo", () -> new IShuriken(new Item.Properties()));
    public static final RegistryObject<Item> ghost_knife = registerMisc(ITEMS, "ghost_knife", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> grappling_blade = registerMisc(ITEMS, "grappling_blade", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> zenith_first_fractal = registerMisc(ITEMS, "zenith_first_fractal", () -> new Item(new Item.Properties()), true);
    public static final RegistryObject<Item> terra_prisma = registerMisc(ITEMS, "terra_prisma", () -> new TerraPrismaItem(new Item.Properties()), true);

    public static final ItemObject<PartCastItem> charm_chain_cast = TINKER_ITEMS.register("charm_chain_cast", () -> new PartCastItem(CastItem, charm_chain));
    public static final ItemObject<PartCastItem> charm_chain_red_sand_cast = TINKER_ITEMS.register("charm_chain_red_sand_cast", () -> new PartCastItem(CastItem, charm_chain));
    public static final ItemObject<PartCastItem> charm_chain_sand_cast = TINKER_ITEMS.register("charm_chain_sand_cast", () -> new PartCastItem(CastItem, charm_chain));
    public static final ItemObject<PartCastItem> charm_core_cast = TINKER_ITEMS.register("charm_core_cast", () -> new PartCastItem(CastItem, charm_core));
    public static final ItemObject<PartCastItem> charm_core_red_sand_cast = TINKER_ITEMS.register("charm_core_red_sand_cast", () -> new PartCastItem(CastItem, charm_core));
    public static final ItemObject<PartCastItem> charm_core_sand_cast = TINKER_ITEMS.register("charm_core_sand_cast", () -> new PartCastItem(CastItem, charm_core));
    public static final ItemObject<PartCastItem> swift_blade_cast = TINKER_ITEMS.register("swift_blade_cast", () -> new PartCastItem(CastItem, swift_blade));
    public static final ItemObject<PartCastItem> swift_blade_red_sand_cast = TINKER_ITEMS.register("swift_blade_red_sand_cast", () -> new PartCastItem(CastItem, swift_blade));
    public static final ItemObject<PartCastItem> swift_blade_sand_cast = TINKER_ITEMS.register("swift_blade_sand_cast", () -> new PartCastItem(CastItem, swift_blade));
    public static final ItemObject<PartCastItem> swift_guard_cast = TINKER_ITEMS.register("swift_guard_cast", () -> new PartCastItem(CastItem, swift_guard));
    public static final ItemObject<PartCastItem> swift_guard_red_sand_cast = TINKER_ITEMS.register("swift_guard_red_sand_cast", () -> new PartCastItem(CastItem, swift_guard));
    public static final ItemObject<PartCastItem> swift_guard_sand_cast = TINKER_ITEMS.register("swift_guard_sand_cast", () -> new PartCastItem(CastItem, swift_guard));
    public static final ItemObject<PartCastItem> barrel_cast = TINKER_ITEMS.register("barrel_cast", () -> new PartCastItem(CastItem, barrel));
    public static final ItemObject<PartCastItem> barrel_red_sand_cast = TINKER_ITEMS.register("barrel_red_sand_cast", () -> new PartCastItem(CastItem, barrel));
    public static final ItemObject<PartCastItem> barrel_sand_cast = TINKER_ITEMS.register("barrel_sand_cast", () -> new PartCastItem(CastItem, barrel));
    public static final ItemObject<PartCastItem> energy_unit_cast = TINKER_ITEMS.register("energy_unit_cast", () -> new PartCastItem(CastItem, energy_unit));
    public static final ItemObject<PartCastItem> energy_unit_red_sand_cast = TINKER_ITEMS.register("energy_unit_red_sand_cast", () -> new PartCastItem(CastItem, energy_unit));
    public static final ItemObject<PartCastItem> energy_unit_sand_cast = TINKER_ITEMS.register("energy_unit_sand_cast", () -> new PartCastItem(CastItem, energy_unit));
    public static final ItemObject<PartCastItem> laser_medium_cast = TINKER_ITEMS.register("laser_medium_cast", () -> new PartCastItem(CastItem, laser_medium));
    public static final ItemObject<PartCastItem> laser_medium_red_sand_cast = TINKER_ITEMS.register("laser_medium_red_sand_cast", () -> new PartCastItem(CastItem, laser_medium));
    public static final ItemObject<PartCastItem> laser_medium_sand_cast = TINKER_ITEMS.register("laser_medium_sand_cast", () -> new PartCastItem(CastItem, laser_medium));
    public static final ItemObject<PartCastItem> blade_cast = TINKER_ITEMS.register("blade_cast", () -> new PartCastItem(CastItem, blade));
    public static final ItemObject<PartCastItem> blade_red_sand_cast = TINKER_ITEMS.register("blade_red_sand_cast", () -> new PartCastItem(CastItem, blade));
    public static final ItemObject<PartCastItem> blade_sand_cast = TINKER_ITEMS.register("blade_sand_cast", () -> new PartCastItem(CastItem, blade));
    public static final ItemObject<PartCastItem> arrow_head_cast = TINKER_ITEMS.register("arrow_head_cast", () -> new PartCastItem(CastItem, arrow_head));
    public static final ItemObject<PartCastItem> arrow_head_red_sand_cast = TINKER_ITEMS.register("arrow_head_red_sand_cast", () -> new PartCastItem(CastItem, arrow_head));
    public static final ItemObject<PartCastItem> arrow_head_sand_cast = TINKER_ITEMS.register("arrow_head_sand_cast", () -> new PartCastItem(CastItem, arrow_head));
    public static final ItemObject<PartCastItem> arrow_shaft_cast = TINKER_ITEMS.register("arrow_shaft_cast", () -> new PartCastItem(CastItem, arrow_shaft));
    public static final ItemObject<PartCastItem> arrow_shaft_red_sand_cast = TINKER_ITEMS.register("arrow_shaft_red_sand_cast", () -> new PartCastItem(CastItem, arrow_shaft));
    public static final ItemObject<PartCastItem> arrow_shaft_sand_cast = TINKER_ITEMS.register("arrow_shaft_sand_cast", () -> new PartCastItem(CastItem, arrow_shaft));
    public static final ItemObject<PartCastItem> great_blade_cast = TINKER_ITEMS.register("great_blade_cast", () -> new PartCastItem(CastItem, great_blade));
    public static final ItemObject<PartCastItem> great_blade_red_sand_cast = TINKER_ITEMS.register("great_blade_red_sand_cast", () -> new PartCastItem(CastItem, great_blade));
    public static final ItemObject<PartCastItem> great_blade_sand_cast = TINKER_ITEMS.register("great_blade_sand_cast", () -> new PartCastItem(CastItem, great_blade));
    public static final ItemObject<PartCastItem> shell_cast = TINKER_ITEMS.register("shell_cast", () -> new PartCastItem(CastItem, shell));
    public static final ItemObject<PartCastItem> shell_red_sand_cast = TINKER_ITEMS.register("shell_red_sand_cast", () -> new PartCastItem(CastItem, shell));
    public static final ItemObject<PartCastItem> shell_sand_cast = TINKER_ITEMS.register("shell_sand_cast", () -> new PartCastItem(CastItem, shell));
    public static final ItemObject<PartCastItem> flag_cast = TINKER_ITEMS.register("flag_cast", () -> new PartCastItem(CastItem, flag));
    public static final ItemObject<PartCastItem> flag_red_sand_cast = TINKER_ITEMS.register("flag_red_sand_cast", () -> new PartCastItem(CastItem, flag));
    public static final ItemObject<PartCastItem> flag_sand_cast = TINKER_ITEMS.register("flag_sand_cast", () -> new PartCastItem(CastItem, flag));
//    public static final ItemObject<PartCastItem> fox_mask_main_cast = TINKER_ITEMS.register("fox_mask_main_cast", () -> new PartCastItem(CastItem, fox_mask_main));
//    public static final ItemObject<PartCastItem> fox_mask_main_red_sand_cast = TINKER_ITEMS.register("fox_mask_main_red_sand_cast", () -> new PartCastItem(CastItem, fox_mask_main));
//    public static final ItemObject<PartCastItem> fox_mask_main_sand_cast = TINKER_ITEMS.register("fox_mask_main_sand_cast", () -> new PartCastItem(CastItem, fox_mask_main));
//    public static final ItemObject<PartCastItem> fox_mask_core_cast = TINKER_ITEMS.register("fox_mask_core_cast", () -> new PartCastItem(CastItem, fox_mask_core));
//    public static final ItemObject<PartCastItem> fox_mask_core_red_sand_cast = TINKER_ITEMS.register("fox_mask_core_red_sand_cast", () -> new PartCastItem(CastItem, fox_mask_core));
//    public static final ItemObject<PartCastItem> fox_mask_core_sand_cast = TINKER_ITEMS.register("fox_mask_core_sand_cast", () -> new PartCastItem(CastItem, fox_mask_core));

    public static final TagKey<Item> OUTLINE_METAL = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "outline_metal"));
    public static final TagKey<Item> STAR_PARTICLE_ITEM = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "star_particle_item"));
    public static final TagKey<Item> SAKURA_TINKER_METAL = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "sakura_tinker_metal"));

    public STItems() {
    }
}
