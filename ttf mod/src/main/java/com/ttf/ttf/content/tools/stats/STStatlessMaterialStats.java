package com.ssakura49.sakuratinker.content.tools.stats;

import com.ssakura49.sakuratinker.SakuraTinker;
import net.minecraft.network.chat.Component;
import slimeknights.tconstruct.TConstruct;
import slimeknights.tconstruct.library.materials.stats.IMaterialStats;
import slimeknights.tconstruct.library.materials.stats.MaterialStatType;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;

import java.util.List;

public enum STStatlessMaterialStats implements IMaterialStats {
    CHARM_CORE("charm_core"),
    SHELL("shell"),
    FOX_MASK_CORE("fox_mask_core"),
    FOX_MASK_MAIN("fox_mask_main");

    private static final List<Component> LOCALIZED = List.of(IMaterialStats.makeTooltip(TConstruct.getResource("extra.no_stats")));
    private static final List<Component> DESCRIPTION = List.of(Component.empty());
    private final MaterialStatType<STStatlessMaterialStats> type;

    private STStatlessMaterialStats(String name) {
        this.type = MaterialStatType.singleton(new MaterialStatsId(SakuraTinker.location(name)), this);
    }

    public MaterialStatType<STStatlessMaterialStats> getType() {
        return this.type;
    }

    public List<Component> getLocalizedInfo() {
        return LOCALIZED;
    }

    public List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(ModifierStatsBuilder builder, float scale) {
    }
}
