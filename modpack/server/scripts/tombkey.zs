import crafttweaker.api.ingredient.IIngredient;

<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.movement_speed>,  "key_speed", 0.3, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:forge:swim_speed>,  "key_swim", 0.4, crafttweaker.api.entity.attribute.AttributeOperation.MULTIPLY_TOTAL, [<constant:minecraft:equipmentslot:mainhand>]);
<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>,  "key_att", 16, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "key_armor",20, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);

<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:puffish_attributes:stealth>,  "key_stealth",8, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);


<item:simpletomb:grave_key>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>,  "key_armor_toughness",20, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);