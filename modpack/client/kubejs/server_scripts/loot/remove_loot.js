LootJS.modifiers((event) => {
    event.removeGlobalModifier("farmersdelight:rope")
    event.removeGlobalModifier("supplementaries:rope")
    //矿道
    event
    .addLootTableModifier("minecraft:chests/abandoned_mineshaft")
    .removeLoot("minecraft:rail")
    .removeLoot("minecraft:detector_rail")
    .removeLoot("minecraft:powered_rail")
    .removeLoot("minecraft:torch")
    .removeLoot("minecraft:coal")
    .removeLoot("farmersdelight:rope")
    .removeLoot("supplementaries:rope")
    .removeLoot("minecraft:activator_rail")
    
    event.addLootTableModifier("minecraft:chests/shipwreck_supply")
    .removeLoot("farmersdelight:rope")

    event
        .addBlockLootModifier("minecraft:grass")
        .removeLoot(["thermal:tomato_seeds",
            "thermal:flax_seeds",
            "thermal:onion_seeds",
        "tofucraft:seeds_rice",
    "thermal:rice_seeds","tofucraft:seeds_chili","thermal:bell_pepper"])

    })