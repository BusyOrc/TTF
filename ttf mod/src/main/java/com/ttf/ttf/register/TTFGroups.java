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

public class TTFGroups {
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
    public static final RegistryObject<CreativeModeTab> MATERIAL_TAB = CREATIVE_MODE_TABS.register("ttf_material", () -> CreativeModeTab.builder()
            .title(Component.translatable("itemGroup.ttf.ttf_material"))
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
    // public static final RegistryObject<CreativeModeTab> BLOCK_TAB = CREATIVE_MODE_TABS.register("st_block", () -> CreativeModeTab.builder()
    //         .title(Component.translatable("itemGroup.sakuratinker.st_block"))
    //         .icon(() -> eezo_ore.get().getDefaultInstance())
    //         .withTabsBefore(TinkerToolParts.tabToolParts.getId())
    //         .displayItems((parameters, output) -> {
    //             for (RegistryObject<BlockItem> object : LIST_SIMPLE_BLOCK) {
    //                 if (object.isPresent()) {
    //                     output.accept(object.get());
    //                 }
    //             }
    //         })
    //         .build());
    // public static final RegistryObject<CreativeModeTab> TOOL_TAB = CREATIVE_MODE_TABS.register("st_tools", () -> CreativeModeTab.builder()
    //         .title(Component.translatable("itemGroup.sakuratinker.st_tools"))
    //         .icon(() -> ((ModifiableItem)swift_sword.get()).getRenderTool())
    //         .withTabsBefore(TinkerToolParts.tabToolParts.getId())
    //         .displayItems(STGroups::addToolItems)
    //         .build());

    // private static void addToolItems(CreativeModeTab.ItemDisplayParameters itemDisplayParameters, CreativeModeTab.Output output) {
    //     Objects.requireNonNull(output);
    //     Consumer<ItemStack> outputTool = output::accept;
    //     Consumer<ItemStack> outputPart = output::accept;
    //     acceptPart(outputPart, charm_chain);
    //     acceptPart(outputPart, charm_core);

    //     acceptTool(outputTool, tinker_charm);
        
    //     output.accept(charm_chain_cast.get());
    //     output.accept(charm_chain_red_sand_cast.get());
    //     output.accept(charm_chain_sand_cast.get());
    //     output.accept(charm_core_cast.get());
    //     output.accept(charm_core_red_sand_cast.get());
    //     output.accept(charm_core_sand_cast.get());
    // }
}
