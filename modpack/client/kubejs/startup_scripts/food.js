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
      .saturation(1)
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

event.create('kubejs:lava_bowl')
      .useAnimation("drink")
      .displayName("碗装熔岩").rarity("rare").food(food => {
    food
      .hunger(4)
      .saturation(0.25)
      .effect('ltc2:hot', 20*15, 1, 1)
      .effect('minecraft:speed', 20*30, 0, 1)
      .effect('immortalers_delight:warm_current_surges',20*60,0,1)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:bowl")
        }
      })
    })
event.create('kubejs:fire_dragon_stew')
      .displayName("火龙肉炖").rarity("rare").food(food => {
    food
      .hunger(16)
      .saturation(0.75)
      .effect('minecraft:resistance', 20*600, 1, 1)
      .effect('minecraft:strength', 20*300, 14, 1)
      .effect('farmersdelight:nourishment', 20*600, 0, 1)
      .effect('farmersdelight:comfort',20*600,0,1)
      .effect('immortalers_delight:incandescence',20*300,1,1)
      .effect('immortalers_delight:warm_current_surges',20*300,3,1)
      .effect('ltc2:hot',20*5,0,0.75)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:bowl")
        }
      })
    })
event.create('kubejs:ice_dragon_stew')
      .displayName("冰龙肉炖").rarity("rare").food(food => {
    food
      .hunger(16)
      .saturation(0.75)
      .effect('minecraft:resistance', 20*600, 1, 1)
      .effect('farmersdelight:nourishment', 20*600, 0, 1)
      .effect('farmersdelight:comfort',20*600,0,1)
      .effect('ltc2:cryoshield',20*300,1,1)
      .effect('immortalers_delight:cool',20*300,3,1)
      .effect('twilightforest:frosted',20*5,0,0.75)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:bowl")
        }
      })
    })
event.create('kubejs:lightning_dragon_stew')
      .displayName("电龙肉炖").rarity("rare").food(food => {
    food
      .hunger(16)
      .saturation(0.75)
      .effect('minecraft:resistance', 20*600, 1, 1)
      .effect('minecraft:strength', 20*600, 2, 1)
      .effect('farmersdelight:nourishment', 20*600, 0, 1)
      .effect('farmersdelight:comfort',20*600,0,1)
      .effect('irons_spellbooks:charged',20*300,4,1)
      .effect('cofh_core:shocked',20*5,2,0.75)
      .eaten(foodEaten=>{
        /**
         * @type {$Player}
         */
        let Player = foodEaten.getPlayer()
        if (Player !=null){
          Player.give("minecraft:bowl")
        }
      })
    })




  })