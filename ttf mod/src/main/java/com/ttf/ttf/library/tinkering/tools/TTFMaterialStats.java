package com.ssakura49.sakuratinker.library.tinkering.tools;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.content.tools.stats.*;
import slimeknights.tconstruct.library.materials.IMaterialRegistry;
import slimeknights.tconstruct.library.materials.MaterialRegistry;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;

public class STMaterialStats {
    // public static final MaterialStatsId CHARM = new MaterialStatsId(SakuraTinker.location("charm"));

    public STMaterialStats(){}

    public static void init() {
        IMaterialRegistry registry = MaterialRegistry.getInstance();
        // registry.registerStatType(CharmChainMaterialStats.TYPE, CHARM);
        // registry.registerStatType(STStatlessMaterialStats.CHARM_CORE.getType(), CHARM);
    }
}
