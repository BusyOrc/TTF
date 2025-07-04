package com.ssakura49.sakuratinker.register;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.utils.SafeClassUtil;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.chat.Component;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.CreativeModeTab;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.RegistryObject;
import slimeknights.mantle.registration.object.EnumObject;
import slimeknights.tconstruct.library.tools.helper.ToolBuildHandler;
import slimeknights.tconstruct.library.tools.item.IModifiable;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.part.IMaterialItem;
import slimeknights.tconstruct.tools.TinkerToolParts;

import java.util.Objects;
import java.util.function.Consumer;
import java.util.function.Supplier;

import static com.ssakura49.sakuratinker.compat.ExtraBotany.ExtraBotanyCompat.*;
import static com.ssakura49.sakuratinker.compat.IronSpellBooks.ISSCompat.*;
import static com.ssakura49.sakuratinker.register.STItems.*;

public class STGroups {
//    public static final SynchronizedDeferredRegister<CreativeModeTab> CREATIVE_TAB = SynchronizedDeferredRegister.create(Registries.CREATIVE_MODE_TAB, SakuraTinker.MODID);
    public static final DeferredRegister<CreativeModeTab> CREATIVE_MODE_TABS = DeferredRegister.create(Registries.CREATIVE_MODE_TAB, SakuraTinker.MODID);

    private static void acceptTool(Consumer<ItemStack> output, Supplier<? extends IModifiable> tool) {
        ToolBuildHandler.addVariants(output, tool.get(), "");
    }
    private static void acceptTools(Consumer<ItemStack> output, EnumObject<?, ? extends IModifiable> tools) {
        tools.forEach((tool) -> ToolBuildHandler.addVariants(output, tool, ""));
    }
    private static void acceptPart(Consumer<ItemStack> output, Supplier<? extends IMaterialItem> item) {
        item.get().addVariants(output, "");
    }
    public STGroups(){
    }
    public static final RegistryObject<CreativeModeTab> ITEMS_TAB = CREATIVE_MODE_TABS.register("st_items", () -> CreativeModeTab.builder()
            .title(Component.translatable("itemGroup.sakuratinker.st_items"))
            .icon(() -> fox_mask.get().getDefaultInstance())
            .withTabsBefore(TinkerToolParts.tabToolParts.getId())
            .displayItems((parameters, output) -> {
                for (RegistryObject<Item> object : LIST_COMMON_ITEMS) {
                    if (object.isPresent()) {
                        output.accept(object.get());
                    }
                }
            })
            .build());

    public static final RegistryObject<CreativeModeTab> MATERIAL_TAB = CREATIVE_MODE_TABS.register("st_material", () -> CreativeModeTab.builder()
            .title(Component.translatable("itemGroup.sakuratinker.st_material"))
            .icon(() -> soul_sakura.get().getDefaultInstance())
            .withTabsBefore(TinkerToolParts.tabToolParts.getId())
            .displayItems((parameters, output) -> {
                for (RegistryObject<Item> object : LIST_MATERIAL) {
                    if (object.isPresent()) {
                        output.accept(object.get());
                    }
                }
            })
            .build());
    public static final RegistryObject<CreativeModeTab> BLOCK_TAB = CREATIVE_MODE_TABS.register("st_block", () -> CreativeModeTab.builder()
            .title(Component.translatable("itemGroup.sakuratinker.st_block"))
            .icon(() -> eezo_ore.get().getDefaultInstance())
            .withTabsBefore(TinkerToolParts.tabToolParts.getId())
            .displayItems((parameters, output) -> {
                for (RegistryObject<BlockItem> object : LIST_SIMPLE_BLOCK) {
                    if (object.isPresent()) {
                        output.accept(object.get());
                    }
                }
            })
            .build());
    public static final RegistryObject<CreativeModeTab> TOOL_TAB = CREATIVE_MODE_TABS.register("st_tools", () -> CreativeModeTab.builder()
            .title(Component.translatable("itemGroup.sakuratinker.st_tools"))
            .icon(() -> ((ModifiableItem)swift_sword.get()).getRenderTool())
            .withTabsBefore(TinkerToolParts.tabToolParts.getId())
            .displayItems(STGroups::addToolItems)
            .build());

    private static void addToolItems(CreativeModeTab.ItemDisplayParameters itemDisplayParameters, CreativeModeTab.Output output) {
        Objects.requireNonNull(output);
        Consumer<ItemStack> outputTool = output::accept;
        Consumer<ItemStack> outputPart = output::accept;
        acceptPart(outputPart, charm_chain);
        acceptPart(outputPart, charm_core);
        acceptPart(outputPart, swift_blade);
        acceptPart(outputPart, swift_guard);
        acceptPart(outputPart, barrel);
        acceptPart(outputPart, laser_medium);
        acceptPart(outputPart, energy_unit);
        acceptPart(outputPart, blade);
        acceptPart(outputPart, arrow_head);
        acceptPart(outputPart, arrow_shaft);
        acceptPart(outputPart, fletching);
        acceptPart(outputPart, blade_box);
        if (SafeClassUtil.ISSLoaded) {
            acceptPart(outputPart, book_cover);
            acceptPart(outputPart, spell_cloth);
        }
        acceptPart(outputPart, great_blade);
        acceptPart(outputPart, shell);
        acceptPart(outputPart, flag);
        if (SafeClassUtil.ExtraBotany) {
            acceptPart(outputPart, phantom_core);
        }
        acceptTool(outputTool, tinker_charm);
        acceptTool(outputTool, great_sword);
        acceptTool(outputTool, swift_sword);
        acceptTool(outputTool, vampire_knife);
        acceptTool(outputTool, blade_convergence);
        acceptTool(outputTool, laser_gun);
        acceptTool(outputTool, shuriken);
        acceptTool(outputTool, tinker_arrow);
        if (SafeClassUtil.ISSLoaded) {
            acceptTool(outputTool, tinker_spell_book);
        }
        acceptTool(outputTool, grappling_hook);
        acceptTool(outputTool, power_bank);
        acceptTool(outputTool, battle_flag);
        if (SafeClassUtil.ExtraBotany) {
            acceptTool(outputTool, first_fractal);
        }
        acceptTools(outputTool, embeddedArmor);
        output.accept(charm_chain_cast.get());
        output.accept(charm_chain_red_sand_cast.get());
        output.accept(charm_chain_sand_cast.get());
        output.accept(charm_core_cast.get());
        output.accept(charm_core_red_sand_cast.get());
        output.accept(charm_core_sand_cast.get());
        output.accept(swift_blade_cast.get());
        output.accept(swift_blade_red_sand_cast.get());
        output.accept(swift_blade_sand_cast.get());
        output.accept(swift_guard_cast.get());
        output.accept(swift_guard_red_sand_cast.get());
        output.accept(swift_guard_sand_cast.get());
        output.accept(barrel_cast.get());
        output.accept(barrel_red_sand_cast.get());
        output.accept(barrel_sand_cast.get());
        output.accept(energy_unit_cast.get());
        output.accept(energy_unit_red_sand_cast.get());
        output.accept(energy_unit_sand_cast.get());
        output.accept(laser_medium_cast.get());
        output.accept(laser_medium_red_sand_cast.get());
        output.accept(laser_medium_sand_cast.get());
        output.accept(blade_cast.get());
        output.accept(blade_red_sand_cast.get());
        output.accept(blade_sand_cast.get());
        output.accept(arrow_head_cast.get());
        output.accept(arrow_head_red_sand_cast.get());
        output.accept(arrow_head_sand_cast.get());
        output.accept(arrow_shaft_cast.get());
        output.accept(arrow_shaft_red_sand_cast.get());
        output.accept(arrow_shaft_sand_cast.get());
        if (SafeClassUtil.ISSLoaded) {
            output.accept(book_cover_cast.get());
            output.accept(book_cover_red_sand_cast.get());
            output.accept(book_cover_sand_cast.get());
            output.accept(spell_cloth_cast.get());
            output.accept(spell_cloth_red_sand_cast.get());
            output.accept(spell_cloth_sand_cast.get());
        }
        output.accept(great_blade_cast.get());
        output.accept(great_blade_red_sand_cast.get());
        output.accept(great_blade_sand_cast.get());
        output.accept(shell_cast.get());
        output.accept(shell_red_sand_cast.get());
        output.accept(shell_sand_cast.get());
        output.accept(flag_cast.get());
        output.accept(flag_red_sand_cast.get());
        output.accept(flag_sand_cast.get());
        if (SafeClassUtil.ExtraBotany) {
            output.accept(phantom_core_cast.get());
            output.accept(phantom_core_red_sand_cast.get());
            output.accept(phantom_core_sand_cast.get());
        }
    }
}
