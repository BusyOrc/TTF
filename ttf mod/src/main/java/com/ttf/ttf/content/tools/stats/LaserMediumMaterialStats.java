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

public record LaserMediumMaterialStats(float range, float cooldown) implements IMaterialStats {
    public static final MaterialStatsId ID = new MaterialStatsId(SakuraTinker.MODID, "laser_medium");
    public static final MaterialStatType<LaserMediumMaterialStats> TYPE;
    private static final String RANGE_PREFIX;
    private static final String COOLDOWN_PREFIX;
    private static final List<Component> DESCRIPTION;

    public @NotNull MaterialStatType<?> getType() {
        return TYPE;
    }

    public @NotNull List<Component> getLocalizedInfo() {
        List<Component> info = Lists.newArrayList();
        info.add(IToolStat.formatColoredBonus(RANGE_PREFIX, this.range));
        info.add(IToolStat.formatColoredBonus(COOLDOWN_PREFIX, this.cooldown));
        return info;
    }

    public @NotNull List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(ModifierStatsBuilder builder, float scale) {
        STToolStats.RANGE.update(builder, this.range * scale);
        STToolStats.COOLDOWN.update(builder, this.cooldown * scale);
    }
    public float range(){
        return this.range;
    }
    public float cooldown(){
        return this.cooldown;
    }

    static {
        TYPE = new MaterialStatType<>(ID, new LaserMediumMaterialStats(0.0f, 0.0f), RecordLoadable.create(
                FloatLoadable.ANY.defaultField("range", 1.0f, true, LaserMediumMaterialStats::range),
                FloatLoadable.ANY.defaultField("cooldown", 0.0f, true, LaserMediumMaterialStats::cooldown),
                LaserMediumMaterialStats::new
        ));
        RANGE_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("range"));
        COOLDOWN_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("cooldown"));
        DESCRIPTION = ImmutableList.of(IMaterialStats.makeTooltip(SakuraTinker.location("laser_medium.range.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("laser_medium.cooldown.description")));
    }
}
