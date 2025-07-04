package com.ssakura49.sakuratinker.content.tools.capability;

import com.rekindled.embers.api.capabilities.EmbersCapabilities;
import com.rekindled.embers.api.power.IEmberCapability;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import net.minecraft.core.Direction;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.util.Mth;
import net.minecraftforge.common.capabilities.Capability;
import net.minecraftforge.common.util.LazyOptional;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import slimeknights.tconstruct.library.tools.capability.ToolCapabilityProvider;
import slimeknights.tconstruct.library.tools.nbt.IToolStackView;
import slimeknights.tconstruct.library.tools.nbt.ModDataNBT;
import slimeknights.tconstruct.library.tools.stat.CapacityStat;
import slimeknights.tconstruct.library.tools.stat.ToolStatId;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.function.Supplier;

public record EmberEnergyCapability(Supplier<? extends IToolStackView> tool) implements IEmberCapability {
    public static final String EMBER_FORMAT = SakuraTinker.makeDescriptionId("tool_stat", "ember");
    public static final ResourceLocation EMBER_KEY = new ResourceLocation(SakuraTinker.MODID, EMBER);
    public static final CapacityStat MAX_STAT = (CapacityStat) ToolStats.register(new CapacityStat(new ToolStatId(SakuraTinker.MODID, "max_ember"), 10485760, EMBER_FORMAT));;
//    public static final ModifierModule EMBER_HANDLER = new ModifierTraitModule(new ResourceLocation(SakuraTinker.MODID, "ember_handler"), 1, true);
    public EmberEnergyCapability(Supplier<? extends IToolStackView> tool) {
        this.tool = tool;
    }

    public static double getEmber(IToolStackView tool) {
        return tool.getPersistentData().getInt(EMBER_KEY);
    }

    public static double getEmberCapacity(IToolStackView tool) {
        int a = tool.getStats().getInt(STToolStats.EMBER_STORAGE);
        int b = tool.getStats().getInt(MAX_STAT);
        return a +b;
    }

    public static void setEmberRaw(IToolStackView tool, double ember) {
        ModDataNBT persistent = tool.getPersistentData();
        if (ember <= 0) {
            persistent.remove(EMBER_KEY);
        } else {
            persistent.putInt(EMBER_KEY, (int) ember);
        }
    }

    public static void clampEmber(IToolStackView tool) {
        double current = getEmber(tool);
        double max = getEmberCapacity(tool);
        if (current < 0) {
            setEmberRaw(tool, 0);
        } else if (current > max) {
            setEmberRaw(tool, max);
        }
    }

    public static void checkEmber(IToolStackView tool) {
        double ember = getEmber(tool);
        if (ember < 0) {
            setEmberRaw(tool, 0);
        } else {
            double capacity = getEmberCapacity(tool);
            if (ember > capacity) {
                setEmberRaw(tool, capacity);
            }
        }
    }

    @Override
    public double getEmber() {
        return getEmber(tool.get());
    }

    @Override
    public double getEmberCapacity() {
        return getEmberCapacity(tool.get());
    }

    @Override
    public void setEmber(double value) {
        setEmberRaw(tool.get(), Mth.clamp(value, 0, getEmberCapacity()));
        onContentsChanged();
    }

    @Override
    public void setEmberCapacity(double value) {
        //配置是否允许动态调整容量
    }

    @Override
    public double addAmount(double amount, boolean simulate) {
        IToolStackView stack = tool.get();
        double current = getEmber(stack);
        double capacity = getEmberCapacity(stack);
        double added = Math.min(amount, capacity - current);
        if (!simulate && added > 0) {
            setEmberRaw(stack, current + added);
            onContentsChanged();
        }
        return added;
    }

    @Override
    public double removeAmount(double amount, boolean simulate) {
        IToolStackView stack = tool.get();
        double current = getEmber(stack);
        double removed = Math.min(amount, current);
        if (!simulate && removed > 0) {
            setEmberRaw(stack, current - removed);
            onContentsChanged();
        }
        return removed;
    }

    @Override
    public void writeToNBT(CompoundTag tag) {
        tag.putDouble(EMBER, getEmber());
    }

    @Override
    public void onContentsChanged() {
        IToolStackView tool = this.tool.get();
        checkEmber(tool);
    }

    @Override
    public void invalidate() {
        // 可用于失效处理
    }

    @Override
    public boolean acceptsVolatile() {
        return false;
    }
    @Override
    public @NotNull <T> LazyOptional<T> getCapability(@NotNull Capability<T> capability, @Nullable Direction direction) {
        return capability == EmbersCapabilities.EMBER_CAPABILITY ? LazyOptional.of(() -> this).cast() : LazyOptional.empty();
    }

    @Override
    public CompoundTag serializeNBT() {
        CompoundTag tag = new CompoundTag();
        tag.putDouble(EMBER, getEmber());
        return tag;
    }

    @Override
    public void deserializeNBT(CompoundTag tag) {
        if (tag.contains(EMBER)) {
            setEmber(tag.getDouble(EMBER));
        }
    }

    public static class Provider implements ToolCapabilityProvider.IToolCapabilityProvider {
        private final LazyOptional<IEmberCapability> emberCap;

        public Provider(Supplier<? extends IToolStackView> toolStack) {
            this.emberCap = LazyOptional.of(() -> new EmberEnergyCapability(toolStack));
        }

        @Override
        public <T> @NotNull LazyOptional<T> getCapability(IToolStackView tool, @NotNull Capability<T> cap) {
            return cap == EmbersCapabilities.EMBER_CAPABILITY && getEmberCapacity(tool) > 0
                    ? this.emberCap.cast()
                    : LazyOptional.empty();
        }
    }
}
