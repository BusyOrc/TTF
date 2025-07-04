package com.ssakura49.sakuratinker.content.tools.stats;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.ssakura49.sakuratinker.SakuraTinker;
import net.minecraft.network.chat.Component;
import slimeknights.mantle.data.loadable.primitive.FloatLoadable;
import slimeknights.mantle.data.loadable.record.RecordLoadable;
import slimeknights.tconstruct.TConstruct;
import slimeknights.tconstruct.library.materials.stats.IMaterialStats;
import slimeknights.tconstruct.library.materials.stats.IRepairableMaterialStats;
import slimeknights.tconstruct.library.materials.stats.MaterialStatType;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;
import slimeknights.tconstruct.library.tools.stat.IToolStat;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;
import slimeknights.tconstruct.library.tools.stat.ToolStats;

import java.util.List;

public record FletchingMaterialStats(float velocity, float accuracy) implements IRepairableMaterialStats {
    public static final MaterialStatsId ID = new MaterialStatsId(SakuraTinker.MODID, "fletching");
    public static final MaterialStatType<FletchingMaterialStats> TYPE;
    private static final String VELOCITY_BONUS_PREFIX;
    private static final String ACCURACY_BONUS_PREFIX;
    private static final List<Component> DESCRIPTION;

    public FletchingMaterialStats(float velocity, float accuracy) {
        this.velocity = velocity;
        this.accuracy = accuracy;
    }

    public MaterialStatType<?> getType() {
        return TYPE;
    }

    public List<Component> getLocalizedInfo() {
        List<Component> info = Lists.newArrayList();
        info.add(IToolStat.formatColoredBonus(VELOCITY_BONUS_PREFIX, this.velocity));
        info.add(IToolStat.formatColoredBonus(ACCURACY_BONUS_PREFIX, this.accuracy));
        return info;
    }

    public List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(ModifierStatsBuilder builder, float scale) {
        ToolStats.VELOCITY.add(builder, (double)(this.velocity * scale));
        ToolStats.ACCURACY.add(builder, (double)(this.accuracy * scale));
    }

    public int durability() {
        return 0;
    }

    public float velocity() {
        return this.velocity;
    }

    public float accuracy() {
        return this.accuracy;
    }

    static {
        TYPE = new MaterialStatType<>(ID, new FletchingMaterialStats( 0.0F, 0.0F), RecordLoadable.create(
                FloatLoadable.ANY.defaultField("velocity", 0.0F, true, FletchingMaterialStats::velocity),
                FloatLoadable.ANY.defaultField("accuracy", 0.0F, true, FletchingMaterialStats::accuracy), FletchingMaterialStats::new));
        VELOCITY_BONUS_PREFIX = IMaterialStats.makeTooltipKey(TConstruct.getResource("velocity"));
        ACCURACY_BONUS_PREFIX = IMaterialStats.makeTooltipKey(TConstruct.getResource("accuracy"));
        DESCRIPTION = ImmutableList.of(ToolStats.VELOCITY.getDescription());
    }
}
