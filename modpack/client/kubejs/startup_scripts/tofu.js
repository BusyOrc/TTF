StartupEvents.registry('item', event => {
event.create('kubejs:gap_tofu').displayName("隙间豆腐").rarity("epic").food(food => {
    food
      .hunger(9)
      .saturation(0.5)
      .effect('tconstruct:enderference', 200, 0, 1)
})
event.create('kubejs:fantasy_tofu').displayName("幻想豆腐").rarity("rare").food(food => {
    food
      .hunger(8)
      .saturation(0.5)
      .effect('fruitsdelight:heal_aura', 300, 0, 1)
      .effect('minecraft:glowing', 600, 0, 1)
})

event.create('kubejs:dream_tofu').displayName("梦幻豆腐").rarity("epic").food(food => {
  food
    .hunger(12)
    .saturation(0.5)
    .effect('fruitsdelight:recovering', 400, 0, 1)
    .effect('minecraft:glowing', 600, 0, 1)
})

})