StartupEvents.registry('item', event => {

//event.modify('chemlib:lithium_ingot').texture('chemlib:textures/item/lithium_ingot')
//event.create('kubejs:lithium_ingot').displayName("锂锭")
event.create('kubejs:gap_tofu').displayName("隙间豆腐").rarity("epic").food(food => {
    food
      .hunger(18)
      .saturation(2)
      .effect('tconstruct:enderference', 200, 0, 1)
})
event.create('kubejs:fantasy_tofu').displayName("幻想豆腐").rarity("rare").food(food => {
    food
      .hunger(12)
      .saturation(2)
      .effect('fruitsdelight:heal_aura', 300, 0, 1)
      .effect('minecraft:glowing', 600, 0, 1)
})

event.create('kubejs:dream_tofu').displayName("梦幻豆腐").rarity("epic").food(food => {
  food
    .hunger(24)
    .saturation(1)
    .effect('fruitsdelight:recovering', 400, 0, 1)
    .effect('minecraft:glowing', 600, 0, 1)
})

})