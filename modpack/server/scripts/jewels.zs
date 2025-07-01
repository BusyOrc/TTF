import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.entity.attribute.AttributeOperation;
/*
// 定义属性
//val attackDamageAttribute = <entityattribute:minecraft:generic.attack_damage>; // 攻击伤害属性
//val attackSpeedAttribute = <entityattribute:minecraft:generic.attack_speed>; // 攻击速度属性

// 定义属性修饰符
//val damageModifier = EntityAttributeModifier.create("curios_damage_boost", 5.0, EntityAttributeModifier.Operation.ADDITION); // 增加 5 点攻击伤害
//val speedModifier = EntityAttributeModifier.create("curios_speed_boost", 0.5, EntityAttributeModifier.Operation.MULTIPLY_TOTAL); // 增加 50% 攻击速度

// 监听装备事件
events.onPlayerEquip(function(event as PlayerEquipEvent)) {
    val item = event.item; // 获取装备的物品
    val player = event.player; // 获取玩家

    // 检查物品是否为指定的饰品
    if (item.definition.id == "minecraft:diamond_sword") { // 替换为你的饰品 ID
        // 检查是否装备在 Curios 饰品栏
        if (event.slotType == "curios:ring") { // 替换为你的 Curios 槽位类型
            // 添加属性
            player.attributeMap.applyModifier(<entityattribute:minecraft:generic.attack_damage>, EntityAttributeModifier.create("curios_damage_boost", 5.0, EntityAttributeModifier.Operation.ADDITION));
            player.attributeMap.applyModifier(<entityattribute:minecraft:generic.attack_speed>, EntityAttributeModifier.create("curios_speed_boost", 0.5, EntityAttributeModifier.Operation.MULTIPLY_TOTAL));
        }
    }
};

// 监听卸下事件
events.onPlayerUnequip(function(event as PlayerUnequipEvent) {
    val item = event.item; // 获取卸下的物品
    val player = event.player; // 获取玩家

    // 检查物品是否为指定的饰品
    if (item.definition.id == "minecraft:diamond_sword") { // 替换为你的饰品 ID
        // 检查是否从 Curios 饰品栏卸下
        if (event.slotType == "curios:ring") { // 替换为你的 Curios 槽位类型
            // 移除属性
            player.attributeMap.removeModifier(<entityattribute:minecraft:generic.attack_damage>, EntityAttributeModifier.create("curios_damage_boost", 5.0, EntityAttributeModifier.Operation.ADDITION));
            player.attributeMap.removeModifier(<entityattribute:minecraft:generic.attack_speed>, EntityAttributeModifier.create("curios_speed_boost", 0.5, EntityAttributeModifier.Operation.MULTIPLY_TOTAL));
        }
    }
});
*/

//<tag:items:jewelcraft:diamond>.asIIngredient().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>,  "ring_armor1", 4, crafttweaker.api.entity.attribute.AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:head>]);