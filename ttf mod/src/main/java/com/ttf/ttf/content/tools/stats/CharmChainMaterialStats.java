package com.ssakura49.sakuratinker.content.tools.stats;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.ssakura49.sakuratinker.SakuraTinker;
import com.ssakura49.sakuratinker.library.tinkering.tools.STToolStats;
import net.minecraft.network.chat.Component;
import slimeknights.mantle.data.loadable.primitive.FloatLoadable;
import slimeknights.mantle.data.loadable.primitive.IntLoadable;
import slimeknights.mantle.data.loadable.record.RecordLoadable;
import slimeknights.tconstruct.library.materials.stats.IMaterialStats;
import slimeknights.tconstruct.library.materials.stats.IRepairableMaterialStats;
import slimeknights.tconstruct.library.materials.stats.MaterialStatType;
import slimeknights.tconstruct.library.materials.stats.MaterialStatsId;
import slimeknights.tconstruct.library.tools.stat.IToolStat;
import slimeknights.tconstruct.library.tools.stat.ModifierStatsBuilder;

import java.util.List;

public record CharmChainMaterialStats(float movement_speed, int health, float armor, float toughness, float damage, float arrow_damage) implements IRepairableMaterialStats {
    public static final MaterialStatsId ID = new MaterialStatsId(SakuraTinker.MODID, "charm_chain");
    public static final MaterialStatType<CharmChainMaterialStats> TYPE;
    private static final String SPEED_BONUS_PREFIX;
    private static final String ARMOR_BONUS_PREFIX;
    private static final String TOUGHNESS_BONUS_PREFIX;
    private static final String DAMAGE_BONUS_PREFIX;
    private static final String HEALTH_BONUS_PREFIX;
    private static final String ARROW_DAMAGE_BONUS_PREFIX;
    private static final List<Component> DESCRIPTION;

    public CharmChainMaterialStats(float movement_speed, int health, float armor, float toughness, float damage, float arrow_damage) {
        this.movement_speed = movement_speed;
        this.health = health;
        this.armor = armor;
        this.toughness = toughness;
        this.damage = damage;
        this.arrow_damage = arrow_damage;
    }

    public MaterialStatType<?> getType() {
        return TYPE;
    }
//
//    public MaterialStatsId getIdentifier() {
//        return ID;
//    }

    public List<Component> getLocalizedInfo() {
        List<Component> info = Lists.newArrayList();
        info.add(IToolStat.formatColoredPercentBoost(SPEED_BONUS_PREFIX, this.movement_speed));
        info.add(IToolStat.formatColoredBonus(HEALTH_BONUS_PREFIX, (float) this.health));
        info.add(IToolStat.formatColoredPercentBoost(ARMOR_BONUS_PREFIX, this.armor));
        info.add(IToolStat.formatColoredPercentBoost(TOUGHNESS_BONUS_PREFIX, this.toughness));
        info.add(IToolStat.formatColoredPercentBoost(DAMAGE_BONUS_PREFIX, this.damage));
        info.add(IToolStat.formatColoredPercentBoost(ARROW_DAMAGE_BONUS_PREFIX, this.arrow_damage));
        return info;
    }

    public List<Component> getLocalizedDescriptions() {
        return DESCRIPTION;
    }

    public void apply(ModifierStatsBuilder builder, float scale) {
        STToolStats.MOVEMENT_SPEED.update(builder, this.movement_speed * scale);
        STToolStats.MAX_HEALTH.update(builder, (float) (this.health * scale));
        STToolStats.ARMOR.update(builder, this.armor * scale);
        STToolStats.ARMOR_TOUGHNESS.update(builder, this.toughness * scale);
        STToolStats.ATTACK_DAMAGE.update(builder, this.damage * scale);
        STToolStats.ARROW_DAMAGE.update(builder, this.arrow_damage * scale);
    }

    public int durability() {
        return 0;
    }

    public float movement_speed() {
        return this.movement_speed;
    }

    public float armor() {
        return this.armor;
    }

    public float toughness() {
        return this.toughness;
    }

    public float damage() {
        return this.damage;
    }

    public int health() {return this.health;}

    public float arrow_damage() {
        return this.arrow_damage;
    }

    static {
        TYPE = new MaterialStatType<>(ID, new CharmChainMaterialStats(0.0F, 0, 0.0F, 0.0F, 0.0F, 0.0F), RecordLoadable.create(
                FloatLoadable.ANY.defaultField("movement_speed", 0.0F, true, CharmChainMaterialStats::movement_speed),
                IntLoadable.FROM_ZERO.defaultField("health", 0, true, CharmChainMaterialStats::health),
                FloatLoadable.ANY.defaultField("armor", 0.0F, true, CharmChainMaterialStats::armor),
                FloatLoadable.ANY.defaultField("toughness", 0.0F, true, CharmChainMaterialStats::toughness),
                FloatLoadable.ANY.defaultField("damage", 0.0F, true, CharmChainMaterialStats::damage),
                FloatLoadable.ANY.defaultField("arrow_damage", 0.0F, true, CharmChainMaterialStats::arrow_damage), CharmChainMaterialStats::new));
        SPEED_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("movement_speed"));
        HEALTH_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("health"));
        ARMOR_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("armor"));
        TOUGHNESS_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("armor_toughness"));
        DAMAGE_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("damage"));
        ARROW_DAMAGE_BONUS_PREFIX = IMaterialStats.makeTooltipKey(SakuraTinker.location("arrow_damage"));
        DESCRIPTION = ImmutableList.of(
                IMaterialStats.makeTooltip(SakuraTinker.location("movement_speed.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("health.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("armor.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("armor_toughness.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("damage.description")),
                IMaterialStats.makeTooltip(SakuraTinker.location("arrow_damage.description"))
        );
    }
}
