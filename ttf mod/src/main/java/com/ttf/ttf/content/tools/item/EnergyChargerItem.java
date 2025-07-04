package com.ssakura49.sakuratinker.content.tools.item;

import com.c2h6s.etstlib.util.MathUtil;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.content.tools.capability.ForgeEnergyCapability;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.register.STModifiers;
import com.ssakura49.sakuratinker.utils.SafeClassUtil;
import net.minecraft.ChatFormatting;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResultHolder;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.UseAnim;
import net.minecraft.world.level.Level;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.common.capabilities.ICapabilityProvider;
import net.minecraftforge.common.util.LazyOptional;
import net.minecraftforge.energy.IEnergyStorage;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.mantle.client.TooltipKey;
import slimeknights.tconstruct.library.modifiers.ModifierEntry;
import slimeknights.tconstruct.library.modifiers.ModifierHooks;
import slimeknights.tconstruct.library.tools.definition.ToolDefinition;
import slimeknights.tconstruct.library.tools.helper.TooltipBuilder;
import slimeknights.tconstruct.library.tools.item.ModifiableItem;
import slimeknights.tconstruct.library.tools.nbt.IModDataView;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ToolStack;
import top.theillusivec4.curios.api.CuriosCapability;
import top.theillusivec4.curios.api.SlotContext;
import top.theillusivec4.curios.api.type.capability.ICurioItem;

import java.util.List;

import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.ENERGY_KEY;
import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.MAX_STAT;

public class EnergyChargerItem extends ModifiableItem implements ICurioItem {
    private static final ResourceLocation CHARGE_MODE = new ResourceLocation(SakuraTinker.MODID, "charge_mode");
    private static final int MODE_OFF = 0;
    private static final int MODE_HANDS = 1;
    private static final int MODE_INVENTORY = 2;
    private static final int MODE_CURIOS = 3;
    private static final int MODE_ALL = 4;
    private static final int MODE_COUNT = 5;

    public EnergyChargerItem(Properties properties, ToolDefinition toolDefinition) {
        super(properties, toolDefinition);
    }

    @Override
    public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) {
        ItemStack stack = player.getItemInHand(hand);
        if (!level.isClientSide() && player.isShiftKeyDown()) {
            ToolStack tool = ToolStack.from(stack);
            IModDataView data = tool.getPersistentData();

            int newMode = (data.getInt(CHARGE_MODE) + 1);
            if (newMode >= MODE_COUNT) newMode = MODE_OFF;
            tool.getPersistentData().putInt(CHARGE_MODE, newMode);

            String[] modes = {
                    "message.off",
                    "message.hands",
                    "message.inventory",
                    "message.curios",
                    "message.all"
            };
            player.sendSystemMessage(Component.translatable("sakuratinker." + modes[newMode]));
        }
        return InteractionResultHolder.success(stack);
    }

    @Override
    public void inventoryTick(ItemStack stack, Level level, Entity entity, int slot, boolean isSelected) {
        if (level.isClientSide) return;
        if (entity instanceof Player player) {
            ToolStack tool = ToolStack.from(stack);
            int mode = tool.getPersistentData().getInt(CHARGE_MODE);
            if (mode == MODE_OFF) return;;
            stack.getCapability(ForgeCapabilities.ENERGY).ifPresent(energy -> {
                if (energy.getEnergyStored() <= 0) return;
                switch (mode) {
                    case MODE_HANDS -> chargeHands(player, energy);
                    case MODE_INVENTORY -> chargeInventory(player, energy);
                    case MODE_CURIOS -> chargeCurios(player, energy);
                    case MODE_ALL -> chargeAll(player, energy);
                }
            });
        }
    }

    private void chargeHands(Player player, IEnergyStorage source) {
        transferEnergy(player.getMainHandItem(), source);
        transferEnergy(player.getOffhandItem(), source);
    }

    private void chargeInventory(Player player, IEnergyStorage source) {
        for (int i = 0; i < player.getInventory().getContainerSize(); i++) {
            transferEnergy(player.getInventory().getItem(i), source);
        }
    }

    private void chargeCurios(Player player, IEnergyStorage source) {
        if (SafeClassUtil.CuriosLoaded) {
            player.getCapability(CuriosCapability.INVENTORY).ifPresent(handler ->
                    handler.getCurios().forEach((id, stackHandler) -> {
                        for (int i = 0; i < stackHandler.getSlots(); i++) {
                            transferEnergy(stackHandler.getStacks().getStackInSlot(i), source);
                        }
                    })
            );
        }
    }

    private void chargeAll(Player player, IEnergyStorage source) {
        chargeHands(player, source);
        chargeInventory(player, source);
        chargeCurios(player, source);
    }

    private void transferEnergy(ItemStack target, IEnergyStorage source) {
        ToolStack stack = ToolStack.from(target);
        int modifierLevel = stack.getModifierLevel(STModifiers.EnergySurge.get());
        int level = Math.max(1, modifierLevel);
        target.getCapability(ForgeCapabilities.ENERGY).ifPresent(targetEnergy -> {
            int maxTransfer = Math.min(source.extractEnergy(Integer.MAX_VALUE, true), 5000 * level);
            int received = targetEnergy.receiveEnergy(maxTransfer, false);
            source.extractEnergy(received, false);
        });
    }

    @Override
    public ICapabilityProvider initCapabilities(@NotNull ItemStack stack, @Nullable CompoundTag nbt) {
        ToolStack toolStack = ToolStack.from(stack);
        if (!toolStack.getPersistentData().contains(CHARGE_MODE,3)) {
            toolStack.getPersistentData().putInt(CHARGE_MODE, MODE_OFF);
        }
        return new EnergyCapabilityProvider(stack);
    }
    private static class EnergyCapabilityProvider implements ICapabilityProvider {
        private final LazyOptional<IEnergyStorage> energy;
        public EnergyCapabilityProvider(ItemStack stack) {
            this.energy = LazyOptional.of(() -> new ForgeEnergyCapability(() -> ToolStack.from(stack)));
        }
        @Override
        public @NotNull <T> LazyOptional<T> getCapability(@NotNull Capability<T> cap, @Nullable Direction side) {
            return ForgeCapabilities.ENERGY.orEmpty(cap, energy.cast());
        }
    }

    @Override
    public boolean canEquip(SlotContext slotContext, ItemStack stack) {
        return true;
    }

    @Override
    public @NotNull UseAnim getUseAnimation(@NotNull ItemStack itemStack) {
        return UseAnim.NONE;
    }

    @Override
    public @NotNull List<Component> getStatInformation(@NotNull IToolStackView tool, @Nullable Player player, @NotNull List<Component> tooltips, @NotNull TooltipKey key, @NotNull TooltipFlag tooltipFlag) {
        return getChargeStats(tool, player, tooltips, key, tooltipFlag);
    }

    public List<Component> getChargeStats(IToolStackView tool, @Nullable Player player, List<Component> tooltips, TooltipKey key, TooltipFlag tooltipFlag) {
        TooltipBuilder builder = new TooltipBuilder(tool, tooltips);
        int stored = tool.getPersistentData().getInt(ENERGY_KEY);
        int max = tool.getStats().getInt(MAX_STAT) + tool.getStats().getInt(STToolStats.ENERGY_STORAGE);
        String energyInfo = MathUtil.getEnergyString(stored) + " / " + MathUtil.getEnergyString(max);
        builder.add(Component.literal("能量: " + energyInfo).withStyle(ChatFormatting.BLUE));
        String[] modes = {"tooltip.off", "tooltip.hands", "tooltip.inventory", "tooltip.curios", "tooltip.all"};
        builder.add(Component.translatable("sakuratinker." + modes[tool.getPersistentData().getInt(CHARGE_MODE)]));
        builder.add(Component.translatable("tooltip.sakuratinker.change_mode").withStyle(ChatFormatting.GRAY));
        builder.addAllFreeSlots();
        for (ModifierEntry entry : tool.getModifierList()) {
            entry.getHook(ModifierHooks.TOOLTIP).addTooltip(tool, entry, player, tooltips, key, tooltipFlag);
        }
        return tooltips;
    }
}
