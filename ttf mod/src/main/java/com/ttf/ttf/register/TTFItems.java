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

public class TTFItems {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);
    public static final DeferredRegister<Item> MISC = DeferredRegister.create(ForgeRegistries.ITEMS, SakuraTinker.MODID);

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

    // public static final RegistryObject<BlockItem> eezo_ore = registerSimpleBlockItem(ITEMS,TTFBlocks.EEZO_ORE);

    // public static final RegistryObject<Item> arcane_alloy = registerMaterial(ITEMS,"arcane_alloy", () -> new Item(new Item.Properties()), true);
    
    // public static final ItemObject<ToolPartItem> charm_chain = TINKER_ITEMS.register("charm_chain", () -> new ToolPartItem(PartItem, CharmChainMaterialStats.ID));
    // public static final ItemObject<ToolPartItem> charm_core = TINKER_ITEMS.register("charm_core", () -> new ToolPartItem(PartItem, STStatlessMaterialStats.CHARM_CORE.getIdentifier()));
    // public static final ItemObject<ModifiableCurioItem> tinker_charm = TINKER_ITEMS.register("tinker_charm", () -> new TinkerCharm(ToolItem, STToolDefinitions.TINKER_CHARM));

    // public static final ItemObject<PartCastItem> charm_chain_cast = TINKER_ITEMS.register("charm_chain_cast", () -> new PartCastItem(CastItem, charm_chain));
    // public static final ItemObject<PartCastItem> charm_chain_red_sand_cast = TINKER_ITEMS.register("charm_chain_red_sand_cast", () -> new PartCastItem(CastItem, charm_chain));
    // public static final ItemObject<PartCastItem> charm_chain_sand_cast = TINKER_ITEMS.register("charm_chain_sand_cast", () -> new PartCastItem(CastItem, charm_chain));
    // public static final ItemObject<PartCastItem> charm_core_cast = TINKER_ITEMS.register("charm_core_cast", () -> new PartCastItem(CastItem, charm_core));
    // public static final ItemObject<PartCastItem> charm_core_red_sand_cast = TINKER_ITEMS.register("charm_core_red_sand_cast", () -> new PartCastItem(CastItem, charm_core));
    // public static final ItemObject<PartCastItem> charm_core_sand_cast = TINKER_ITEMS.register("charm_core_sand_cast", () -> new PartCastItem(CastItem, charm_core));
    
    // public static final TagKey<Item> OUTLINE_METAL = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "outline_metal"));
    // public static final TagKey<Item> STAR_PARTICLE_ITEM = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "star_particle_item"));
    // public static final TagKey<Item> SAKURA_TINKER_METAL = ItemTags.create(new ResourceLocation(SakuraTinker.MODID, "sakura_tinker_metal"));

    public STItems() {
    }
}
