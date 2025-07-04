package com.ssakura49.sakuratinker.library.tinkering.tools;

import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.content.tools.stats.*;
import slimeknights.tconstruct.library.materials.IMaterialRegistry;
import slimeknights.tconstruct.library.materials.MaterialRegistry;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;

public class STMaterialStats {
    public static final MaterialStatsId CHARM = new MaterialStatsId(SakuraTinker.location("charm"));
    public static final MaterialStatsId LASER_GUN = new MaterialStatsId(SakuraTinker.location("laser_gun"));
    public static final MaterialStatsId TINKER_ARROW = new MaterialStatsId(SakuraTinker.location("tinker_arrow"));
    public static final MaterialStatsId TINKER_SPELL_BOOK = new MaterialStatsId(SakuraTinker.location("tinker_spell_book"));
    public static final MaterialStatsId POWER_BANK = new MaterialStatsId(SakuraTinker.location("power_bank"));
    public static final MaterialStatsId BATTLE_FLAG = new MaterialStatsId(SakuraTinker.location("battle_flag"));
//    public static final MaterialStatsId FOX_MASK = new MaterialStatsId(SakuraTinker.location("fox_mask"));
    public static final MaterialStatsId FIRST_FRACTAL =new MaterialStatsId(SakuraTinker.location("first_fractal"));

    public STMaterialStats(){}

    public static void init() {
        IMaterialRegistry registry = MaterialRegistry.getInstance();
        registry.registerStatType(CharmChainMaterialStats.TYPE, CHARM);
        registry.registerStatType(STStatlessMaterialStats.CHARM_CORE.getType(), CHARM);
        registry.registerStatType(LaserMediumMaterialStats.TYPE, LASER_GUN);
        registry.registerStatType(EnergyUnitMaterialStats.TYPE, LASER_GUN);
        registry.registerStatType(FletchingMaterialStats.TYPE, TINKER_ARROW);
        registry.registerStatType(SpellClothMaterialStats.TYPE, TINKER_SPELL_BOOK);
//        for(MaterialStatType<?> type : EmbeddedArmorMaterialStats.TYPES) {
//            registry.registerStatType(type, EMBEDDED_ARMOR);
//        }
        registry.registerStatType(STStatlessMaterialStats.SHELL.getType(), POWER_BANK);
        registry.registerStatType(BattleFlagMaterialStats.TYPE, BATTLE_FLAG);
//        registry.registerStatType(STStatlessMaterialStats.FOX_MASK_MAIN.getType(), FOX_MASK);
//        registry.registerStatType(STStatlessMaterialStats.FOX_MASK_CORE.getType(), FOX_MASK);
        registry.registerStatType(PhantomCoreMaterialStats.TYPE, FIRST_FRACTAL);
    }
}
