package com.ssakura49.sakuratinker.content.tools.capability;

import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import com.ssakura49.sakuratinker.register.STModifiers;
import net.minecraft.util.Mth;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.capabilities.ForgeCapabilities;
import net.minecraftforge.common.util.LazyOptional;
import net.minecraftforge.energy.IEnergyStorage;
import org.jetbrains.annotations.NotNull;
import slimeknights.tconstruct.library.tools.capability.ToolCapabilityProvider;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ModDataNBT;

import java.util.function.Supplier;

import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.ENERGY_KEY;
import static slimeknights.tconstruct.library.tools.capability.ToolEnergyCapability.MAX_STAT;

public record ForgeEnergyCapability(Supplier<? extends IToolStackView> tool) implements IEnergyStorage {
    private static final int DEFAULT_TRANSFER_RATE = 5000;

    public ForgeEnergyCapability(Supplier<? extends IToolStackView> tool) {
        this.tool = tool;
    }

    public static int getMaxEnergy(IToolStackView tool) {
        int tconMax = tool.getStats().getInt(MAX_STAT);
        int stMax = tool.getStats().getInt(STToolStats.ENERGY_STORAGE);
        return tconMax + stMax;
    }

    public static int getEnergy(IToolStackView tool) {
        return tool.getPersistentData().getInt(ENERGY_KEY);
    }

    public static void setEnergy(IToolStackView tool, int energy) {
        setEnergyRaw(tool, Mth.clamp(energy, 0, getMaxEnergy(tool)));
    }

    public static void setEnergyRaw(IToolStackView tool, int energy) {
        ModDataNBT persistent = tool.getPersistentData();
        if (energy <= 0) {
            persistent.remove(ENERGY_KEY);
        } else {
            persistent.putInt(ENERGY_KEY, energy);
        }
    }

    public static void checkEnergy(IToolStackView tool) {
        int current = getEnergy(tool);
        int max = getMaxEnergy(tool);
        if (current < 0) {
            setEnergyRaw(tool, 0);
        } else if (current > max) {
            setEnergyRaw(tool, max);
        }
    }

    @Override
    public int receiveEnergy(int maxReceive, boolean simulate) {
        IToolStackView tool = this.tool.get();
        int current = getEnergy(tool);
        int level = Math.max(1, tool.getModifierLevel(STModifiers.EnergySurge.get()));
        int received = Math.min(getMaxEnergy(tool) - current, Math.min(DEFAULT_TRANSFER_RATE * level, maxReceive));
        if (!simulate && received > 0) {
            setEnergyRaw(tool, current + received);
        }
        return received;
    }

    @Override
    public int extractEnergy(int maxExtract, boolean simulate) {
        if (maxExtract <= 0) {
            return 0;
        } else {
            IToolStackView tool = (IToolStackView)this.tool.get();
            int current = getEnergy(tool);
            if (current <= 0) {
                return 0;
            } else {
                int drained = maxExtract;
                if (current < maxExtract) {
                    drained = current;
                }

                if (!simulate) {
                    setEnergyRaw(tool, current - drained);
                }

                return drained;
            }
        }
    }

    @Override
    public int getEnergyStored() {
        return getEnergy(this.tool.get());
    }

    @Override
    public int getMaxEnergyStored() {
        return getMaxEnergy(this.tool.get());
    }

    @Override
    public boolean canExtract() {
        return true;
    }

    @Override
    public boolean canReceive() {
        return true;
    }

    @Override
    public Supplier<? extends IToolStackView> tool() {
        return this.tool;
    }

    public static class Provider implements ToolCapabilityProvider.IToolCapabilityProvider {
        private final LazyOptional<IEnergyStorage> energyCap;

        public Provider(Supplier<? extends IToolStackView> toolStack) {
            this.energyCap = LazyOptional.of(() -> new ForgeEnergyCapability(toolStack));
        }

        @Override
        public <T> @NotNull LazyOptional<T> getCapability(IToolStackView tool, @NotNull Capability<T> cap) {
            return cap == ForgeCapabilities.ENERGY && getMaxEnergy(tool) > 0
                    ? this.energyCap.cast()
                    : LazyOptional.empty();
        }
    }
}
