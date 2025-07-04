package com.ssakura49.sakuratinker.content.tools.stats;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import slimeknights.mantle.data.loadable.primitive.FloatLoadable;
import slimeknights.mantle.data.loadable.record.RecordLoadable;
import slimeknights.tconstruct.library.materials.stats.IMaterialStats;
import slimeknights.tconstruct.library.materials.stats.MaterialStatType;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;
import slimeknights.tconstruct.library.tools.stat.IToolStat;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;

import java.util.List;

public record PhantomCoreMaterialStats(float phantom_amount, float range) implements IMaterialStats {
    public static final MaterialStatsId ID = new MaterialStatsId(SakuraTinker.MODID, "phantom_core");
    public static final MaterialStatType<PhantomCoreMaterialStats> TYPE;
    private static final String AMOUNT_PREFIX;
    private static final String RANGE_PREFIX;
    private static final List<Component> DESCRIPTION;

    public @NotNull MaterialStatType<?> getType() {
        return TYPE;
    }

    public @NotNull List<Component> getLocalizedInfo() {
        List<Component> info = Lists.newArrayList();
        info.add(IToolStat.formatColoredBonus(AMOUNT_PREFIX, this.phantom_amount));
        info.add(IToolStat.formatColoredBonus(RANGE_PREFIX, this.range));
        return info;
    }

    public @NotNull List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(ModifierStatsBuilder builder, float scale) {
        STToolStats.PHANTOM_AMOUNT.update(builder, this.phantom_amount * scale);
        STToolStats.RANGE.update(builder, this.range * scale);
    }

    public float phantom_amount() {
        return this.phantom_amount;
    }
    public float range(){
        return this.range;
    }

    static {
        TYPE = new MaterialStatType<>(ID, new PhantomCoreMaterialStats(0.0f, 0.0f), RecordLoadable.create(
                FloatLoadable.ANY.defaultField("phantom_amount", 1.0f, true, PhantomCoreMaterialStats::phantom_amount),
                FloatLoadable.ANY.defaultField("range", 1.0f, true, PhantomCoreMaterialStats::range),
                PhantomCoreMaterialStats::new
        ));
        AMOUNT_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("phantom_amount"));
        RANGE_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("range"));
        DESCRIPTION = ImmutableList.of(IMaterialStats.makeTooltip(SakuraTinker.location("first_fractal.phantom_amount.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("first_fractal.range.description")));
    }
}
