import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.entity.attribute.AttributeOperation;

//reimu
<item:youkaishomecoming:reimu_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "reimu_toughness", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:reimu_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:life_steal>,  "reimu_leech", 0.1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:reimu_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:forge:entity_gravity>,  "reimu_gravity", -0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:reimu_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>,  "reimu_speed", 0.15, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:reimu_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:dodge_chance>,  "reimu_dodge", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//koishi
<item:youkaishomecoming:koishi_hat>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "koish_armor", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:koishi_hat>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:crit_damage>,  "koish_crit", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:koishi_hat>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:cold_damage>,  "koish_cold", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//lumia
<item:youkaishomecoming:rumia_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:crit_damage>,  "lumia_crit", 1.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:rumia_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>,  "lumia_attspeed", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:youkaishomecoming:rumia_hairband>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:healing_received>,  "lumia_heal", -0.6, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);

//suwako
<item:youkaishomecoming:suwako_hat>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>,  "suwako_life", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
//<item:youkaishomecoming:suwako_hat>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:regeneration>,  "suwako_life", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);


