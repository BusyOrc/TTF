LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.ENTITY, LootType.FISHING, LootType.CHEST) 
        .removeLoot("tconstruct:war_pick")
        .removeLoot("tconstruct:melting_pan")
        .removeLoot("tconstruct:swasher")
        .removeLoot("tconstruct:battlesign");

    event.addEntityLootModifier("hmag:ender_executor").addLoot("ends_delight:enderman_gristle")


});