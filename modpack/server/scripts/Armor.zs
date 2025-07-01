import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.entity.attribute.AttributeOperation;


//turtle
<item:minecraft:turtle_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "helmet3_armor", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:minecraft:turtle_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "helmet3_toughness", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:minecraft:turtle_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>,  "helmet3_speed", -0.1, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:minecraft:turtle_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance> ,  "helmet3_knock", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);


//cyborg
<item:create:extendo_grip>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:experience_gained>,  "hand1_exp", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
<item:create:extendo_grip>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:mining_speed>,  "hand1_mining", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:offhand>]);
//shield of the deep
//<item:alexsmobs:shield_of_the_deep>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:regeneration>,  "shield1_reg", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:offhand>]);
//fish boots
<item:alexsmobs:flying_fish_boots>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:dodge_chance>,  "fishboots_dodge", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:alexsmobs:flying_fish_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "fishboots_armor", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);

//turtle_shell
<item:alexsmobs:spiked_turtle_shell>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "st_helmet_armor", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:spiked_turtle_shell>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "st_helmet_toughness", 6, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:spiked_turtle_shell>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>,  "st_helmet_speed", -0.25, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:spiked_turtle_shell>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:healing_received>,  "st_helmet_heal", 0.25, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//centipede
<item:alexsmobs:centipede_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>,  "centi_mhp", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:legs>]);
<item:alexsmobs:centipede_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "centi_toughness", 2.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:legs>]);
<item:alexsmobs:centipede_leggings>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "centi_armor", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:legs>]);

//rocky_chestplate
<item:alexsmobs:rocky_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "rock_toughness", 3.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:rocky_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "rock_armor", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:rocky_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance>,  "rock_knock", 0.4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);

//crocodile_chestplate
<item:alexsmobs:crocodile_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance>,  "croc_knock", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:crocodile_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "croc_armor", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);
<item:alexsmobs:crocodile_chestplate>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "croc_tough", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);

//moose
<item:alexsmobs:moose_headgear>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:experience_gained>,  "moose_exp", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
//<item:alexsmobs:moose_headgear>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:magic_resistance>,  "moose_magi", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//nov hat
<item:alexsmobs:novelty_hat>.anyDamage().addGlobalAttributeModifier(<attribute:attributeslib:experience_gained>,  "novelty_hat_exp", 1.0, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:novelty_hat>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>,  "novelty_hat_speed", 0.2, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:novelty_hat>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.luck>,  "novelty_hat_luck", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//froststalker_helmet
<item:alexsmobs:froststalker_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "frost_tough", 2.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:alexsmobs:froststalker_helmet>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "frost_armor", 1, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//cap
//<item:alexsmobs:frontier_cap>.anyDamage().addGlobalAttributeModifier(<attribute:obscure_api:regeneration>,  "cap_reg", 0.5, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);

//roadrunner_boots

<item:alexsmobs:roadrunner_boots>.anyDamage().addGlobalAttributeModifier( <attribute:attributeslib:healing_received>,  "rr_heal", 0.15, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);

//forgotten_hat
<item:quark:forgotten_hat>.anyDamage().addGlobalAttributeModifier( <attribute:minecraft:generic.armor>,  "forhat_armor", 2, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:quark:forgotten_hat>.anyDamage().addGlobalAttributeModifier( <attribute:minecraft:generic.armor_toughness>,  "forhat_tough", 3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);
<item:quark:forgotten_hat>.anyDamage().addGlobalAttributeModifier( <attribute:attributeslib:experience_gained>,  "forhat_exp", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);





