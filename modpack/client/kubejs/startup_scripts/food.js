StartupEvents.registry('item', event => {
event.create('kubejs:magnetic_apple').displayName("磁场苹果").rarity("rare").food(food => {
    food
      .hunger(4)
      .saturation(1.5)
      .effect('minecraft:hunger', 20*10, 0, 1)
      .effect('minecraft:resistance', 20*120, 1, 1)
    })
event.create('kubejs:magnetic_cola')
      .useAnimation("drink")
      .displayName("磁场可乐").rarity("rare").food(food => {
    food
      .hunger(2)
      .saturation(2)
      .effect('minecraft:nausea', 20*30, 0, 0.5)
      .effect('minecraft:resistance', 20*180, 1, 1)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:glass_bottle")
        }
      })
    })
event.create('kubejs:nuclear_soda')
      .useAnimation("drink")
      .displayName("核子汽水").rarity("rare").food(food => {
    food
      .hunger(3)
      .saturation(2)
      .effect('minecraft:nausea', 20*30, 0, 1)
      .effect('minecraft:speed', 20*180, 1, 1)
      .effect('farmersdelight:comfort',20*20,0,1)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:glass_bottle")
        }
      })
    })
event.create('kubejs:amber_bubble_tea')
      .useAnimation("drink")
      .displayName("珍珠琥珀饮").rarity("rare").food(food => {
    food
      .hunger(3)
      .saturation(2)
      .effect('minecraft:strength', 20*120, 1, 1)
      .effect('minecraft:speed', 20*120, 0, 1)
      .effect('farmersdelight:comfort',20*60,0,1)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:glass_bottle")
        }
      })
    })
  })