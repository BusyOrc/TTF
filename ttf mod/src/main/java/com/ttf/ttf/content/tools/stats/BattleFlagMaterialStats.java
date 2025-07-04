package com.ssakura49.sakuratinker.content.tools.stats;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import net.minecraft.network.chat.Component;
import org.jetbrains.annotations.NotNull;
import slimeknights.mantle.data.loadable.primitive.IntLoadable;
import slimeknights.mantle.data.loadable.record.RecordLoadable;
import slimeknights.tconstruct.library.materials.stats.IMaterialStats;
import slimeknights.tconstruct.library.materials.stats.MaterialStatType;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;
import slimeknights.tconstruct.library.tools.stat.IToolStat;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;

import java.util.List;

public record BattleFlagMaterialStats(int range, int attackBuffTime, int defenceBuffTime, int chargeTime) implements IMaterialStats {
    public static final MaterialStatsId ID = new MaterialStatsId(SakuraTinker.MODID, "flag");
    public static final MaterialStatType<BattleFlagMaterialStats> TYPE;
    private static final String ATTACK_BUFF_TIME;
    private static final String DEFENCE_BUFF_TIME;
    private static final String CHARGE_TIME;
    private static final String RANGE;
    private static final List<Component> DESCRIPTION;

    public BattleFlagMaterialStats(int range, int attackBuffTime, int defenceBuffTime, int chargeTime) {
        this.attackBuffTime = attackBuffTime;
        this.defenceBuffTime = defenceBuffTime;
        this.chargeTime = chargeTime;
        this.range = range;
    }

    public @NotNull MaterialStatType<?> getType() {
        return TYPE;
    }

    public @NotNull List<Component> getLocalizedInfo() {
        List<Component> info = Lists.newArrayList();
        info.add(IToolStat.formatColoredBonus(RANGE, this.range));
        info.add(IToolStat.formatColoredBonus(ATTACK_BUFF_TIME, this.attackBuffTime));
        info.add(IToolStat.formatColoredBonus(DEFENCE_BUFF_TIME, this.defenceBuffTime));
        info.add(IToolStat.formatColoredBonus(CHARGE_TIME, this.chargeTime));
        return info;
    }

    public @NotNull List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(@NotNull ModifierStatsBuilder builder, float scale) {
        STToolStats.RANGE.update(builder, this.range * scale);
        STToolStats.ATTACK_BUFF_TIME.update(builder, this.attackBuffTime * scale);
        STToolStats.DEFENCE_BUFF_TIME.update(builder, this.defenceBuffTime * scale);
        STToolStats.CHARGING_TIME.update(builder, this.chargeTime * scale);
    }

    public int attackBuffTime() {
        return this.attackBuffTime;
    }

    public int defenceBuffTime() {
        return this.defenceBuffTime;
    }

    public int range() {
        return this.range;
    }

    public int chargeTime() {
        return this.chargeTime;
    }

    static {
        TYPE = new MaterialStatType<>(ID, new BattleFlagMaterialStats(0, 0, 0, 0), RecordLoadable.create(
                IntLoadable.FROM_ZERO.defaultField("range", 0, true, BattleFlagMaterialStats::range),
                IntLoadable.FROM_ZERO.defaultField("attack_buff_time", 0, true, BattleFlagMaterialStats::attackBuffTime),
                IntLoadable.FROM_ZERO.defaultField("defence_buff_time", 0, true, BattleFlagMaterialStats::defenceBuffTime),
                IntLoadable.FROM_ZERO.defaultField("charge_time", 0, true, BattleFlagMaterialStats::chargeTime), BattleFlagMaterialStats::new
        ));
        RANGE = IMaterialStats.makeTooltipKey(SakuraTinker.location("range"));
        ATTACK_BUFF_TIME = IMaterialStats.makeTooltipKey(SakuraTinker.location("attack_buff_time"));
        DEFENCE_BUFF_TIME = IMaterialStats.makeTooltipKey(SakuraTinker.location("defence_buff_time"));
        CHARGE_TIME = IMaterialStats.makeTooltipKey(SakuraTinker.location("charge_time"));
        DESCRIPTION = ImmutableList.of(
                IMaterialStats.makeTooltip(SakuraTinker.location("range")),
                IMaterialStats.makeTooltip(SakuraTinker.location("attack_buff_time")),
                IMaterialStats.makeTooltip(SakuraTinker.location("defence_buff_time")),
                IMaterialStats.makeTooltip(SakuraTinker.location("charge_time"))
        );
    }
}
