ServerEvents.chestLootTables(event=>{
    /*
    //要塞图书馆
    event.modify("minecraft:stronghold_library",loot=>{
        loot.addPool(pool=>{
            pool.addItem("3x irons_spellbooks:blank_rune").weight(3)
            pool.addItem("2x irons_spellbooks:blank_rune").weight(4)
            pool.addItem("irons_spellbooks:legendary_ink").weight(5)
            pool.rolls = 5
            console.log(pool.conditions);
        })
    })
*/



//沉船
event.modify("minecraft:shipwreck_supply",loot=>{
    loot.addPool(pool=>{
        pool.addItem("17x create:crushed_raw_gold").weight(8)
        pool.addItem("26x create:crushed_raw_zinc").weight(5)
        pool.addItem("32x create:crushed_raw_zinc").weight(5)
        pool.addItem("19x create:crushed_raw_silver").weight(8)
        pool.addItem("21x create:crushed_raw_tin").weight(10)
        pool.addItem("27x create:crushed_raw_lead").weight(7)
        pool.addItem("41x create:crushed_raw_lead").weight(3)
        pool.addItem("28x create:crushed_raw_nickel").weight(5)
        pool.addItem("25x create:crushed_raw_nickel").weight(5)
        pool.addItem("21x create:crushed_raw_copper").weight(20)
        pool.addItem("14x create:crushed_raw_iron").weight(3)

        pool.rolls = 5
        console.log(pool.conditions);
    })
})



/*const houses=
[
    "minecraft:village_armorer", "minecraft:village_butcher",
    "minecraft:village_cartographer", "minecraft:village_fisher",
    "minecraft:village_fletcher", "minecraft:village_mason",
    "minecraft:village_shepherd", "minecraft:village_tannery",
    "minecraft:village_temple", "minecraft:village_toolsmith",
    "minecraft:village_weaponsmith"
]*/

const airships=
[
"bedroom","blacksmith","cleric",
"farmhouse","fletcher","mason","shepard"
]

const total_food=
[
    'aquaculturedelight:bass_stew', 'aquaculturedelight:baked_pollock_with_carrots',
    'farmersdelight:chicken_soup', 'farmersdelight:bone_broth',
    'farmersdelight:roast_chicken', 'miners_delight:cave_soup_cup',
    'miners_delight:rabbit_stew_cup', 'farmersdelight:egg_sandwich', 'farmersdelight:dumplings',
  'farmersdelight:apple_pie', 'farmersdelight:sweet_berry_cheesecake',
    'farmersdelight:noodle_soup', 'farmersdelight:vegetable_noodles', 'farmersdelight:squid_ink_pasta',
    'farmersdelight:grilled_salmon', 'farmersdelight:rice_roll_medley_block',
    'miners_delight:pumpkin_soup_cup', 'delightful:salmonberry_pie'
]



event.modify("integrated_villages:airship_village/airship_village",loot=>{
    loot.addPool(pool=>{
        /*
        pool.addItem("aquaculturedelight:bass_stew").weight(5)
        pool.addItem("aquaculturedelight:baked_pollock_with_carrots").weight(5)
        pool.addItem("farmersdelight:chicken_soup").weight(5)
        pool.addItem("farmersdelight:bone_broth").weight(5)
        pool.addItem("farmersdelight:roast_chicken").weight(5)
        pool.addItem("miners_delight:cave_soup_cup").weight(5)
        pool.addItem("miners_delight:rabbit_stew_cup").weight(5)
        pool.addItem("farmersdelight:egg_sandwich").weight(5)
        pool.addItem("farmersdelight:dumplings").weight(5)
        pool.addItem("farmersdelight:apple_pie").weight(5)
        pool.addItem("farmersdelight:sweet_berry_cheesecake").weight(5)
        pool.addItem("farmersdelight:noodle_soup").weight(5)
        pool.addItem("farmersdelight:vegetable_noodles").weight(5)
        pool.addItem("farmersdelight:squid_ink_pasta").weight(5)
        pool.addItem("farmersdelight:grilled_salmon").weight(5)
        pool.addItem("farmersdelight:rice_roll_medley_block").weight(5)
        pool.addItem("miners_delight:pumpkin_soup_cup").weight(5)
        pool.addItem("delightful:salmonberry_pie").weight(5)
*/


          for(let food of total_food)
          {
            pool.addItem(food)
          }

        pool.rolls = 3
        console.log(pool.conditions);
    })
})
for(let chest of airships){
event.modify("integrated_villages:airship_village/airship_village_"+chest,loot=>{
    loot.addPool(pool=>{

        for(let food of total_food)
            {
              pool.addItem(food)
            }
  
          pool.rolls = 1
          console.log(pool.conditions);
      })
  })
}

const vil_treasures = 
    [
    'constructionwand:diamond_wand', 'thermalendergy:melodic_range_augment',
     'thermalendergy:dynamo_consumption_nullifier_augment', 'thermalendergy:dynamo_fuel_nullifier_augment',
     'thermalendergy:energy_nullifier_augment', 'thermalendergy:resonant_catalyst_augment',
      'thermalendergy:efficiency_nullifier_augment'
    ]
event.modify("integrated_villages:airship_village/airship_village_treasure",loot=>{
    loot.addPool(pool=>{

        for(let tr of vil_treasures)
        {
            pool.addItem(tr)
        }


  
          pool.rolls = 1
          console.log(pool.conditions);
      })
  })

  event.modify("minecraft:ancient_city",loot=>{
    loot.addPool(pool=>{


        pool.addItem('ae2things:disk_drive_1k').weight(100)
        pool.addItem('ae2things:disk_drive_4k').weight(50)
        pool.addItem('ae2things:disk_drive_16k').weight(20)
        pool.addItem('minecraft:air').weight(200)
          pool.rolls = 1
          console.log(pool.conditions);
      })
  })

  event.modify("minecraft:buried_treasure",loot=>{
    loot.addPool(pool=>{
        pool.addItem('ae2things:disk_drive_64k').weight(100)
        pool.addItem('ae2things:disk_drive_256k').weight(50)
        pool.addItem('ae2_mega_things:item_disk_drive_1m').weight(20)
          pool.rolls = 1
          console.log(pool.conditions);
      })
  })

  const latiao=
  [
    'ltc2:treasure_pepper_black_latiao', 'ltc2:treasure_pepper_sweet_latiao',
     'ltc2:treasure_pepper_yellow_latiao', 'ltc2:treasure_pepper_jalapeno_latiao',
      'ltc2:treasure_pepper_jolokia_latiao', 'ltc2:treasure_cleanse_latiao',
       'ltc2:treasure_pepper_complained_latiao', 'ltc2:treasure_pepper_bloody_latiao',
     'ltc2:treasure_latiao', 'ltc2:treasure_underground_oil_latiao',
      'ltc2:treasure_pepper_red_latiao', 'ltc2:treasure_pepper_green_latiao',
       'ltc2:treasure_pepper_white_latiao'
    ]

    event.modify("minecraft:abandoned_mineshaft",loot=>{
        loot.addPool(pool=>{
            for(let lttr of latiao)
                {
                pool.addItem(lttr)
                }
              pool.rolls = 1
              console.log(pool.conditions);
          })
      })

      const wizards=
      [
        'irons_spellbooks:fireward_ring', 'irons_spellbooks:concentration_amulet',
         'irons_spellbooks:mana_ring', 'irons_spellbooks:blank_rune',
         'irons_spellbooks:frosted_helve', '2x irons_spellbooks:arcane_salvage',
          'irons_spellbooks:rare_ink', '3x irons_spellbooks:epic_ink', '5x irons_spellbooks:uncommon_ink'
        ]
    
      event.modify("idas:wizardtower_top",loot=>{
        loot.addPool(pool=>{
    
    for(let wiztr of wizards)
    {
            pool.addItem(wiztr)
    }
              pool.rolls = 2
          })
      })

      







})

LootJS.modifiers((event) => {

   event.removeGlobalModifier("@simplehats");



      event.addLootTableModifier(/.*hmag:entities.*/).killedByPlayer().pool((pool) => {
        pool.rolls([1, 4]);
        pool.addLoot("lightmanscurrency:coin_copper");
        
    }).pool((pool) => {
        pool.rolls([0, 2]);
        pool.addLoot("lightmanscurrency:coin_iron");
    }).pool((pool) => {
        pool.rolls([0, 1]);
        pool.addLoot("lightmanscurrency:coin_gold");
    })



    event.addLootTableModifier("hmag:entities/stray_girl")
    .addLoot('irons_spellbooks:frozen_bone')

    event.addLootTableModifier("hmag:entities/wither_skeleton_girl")
    .addLoot('wstweaks:fragment')

event.addBlockLootModifier("biomesoplenty:barley").addLoot('thermal:barley');
    event.addBlockLootModifier("biomesoplenty:barley").addLoot(
        LootEntry.of('thermal:barley').when((c) => c.randomChance(0.3)),
        LootEntry.of('thermal:barley_seeds').when((c) => c.randomChance(0.03))
    )
    event.addLootTableModifier(/.*hmag:.*/)
    .replaceLoot('hmag:copper_nugget','create:copper_nugget')

    event.addLootTableModifier("minecraft:entities/bat")
    .replaceLoot('hmag:bat_wing','miners_delight:bat_wing')

    event.addLootTableModifier("minecraft:entities/wither")
    .addLoot('3x hmag:nether_star_fragment')

    event.addBlockLootModifier("mystias_izakaya:cooking_range").addLoot("mystias_izakaya:cooking_range");
    event.addBlockLootModifier("mystias_izakaya:table").addLoot("mystias_izakaya:table");
    event.addBlockLootModifier("mystias_izakaya:cutting_board").addLoot("mystias_izakaya:cutting_board");
    event.addBlockLootModifier("mystias_izakaya:boiling_pot").addLoot("mystias_izakaya:boiling_pot");
    event.addBlockLootModifier("mystias_izakaya:frying_pan").addLoot("mystias_izakaya:frying_pan");
    event.addBlockLootModifier("mystias_izakaya:steamer").addLoot("mystias_izakaya:steamer");
    event.addBlockLootModifier("mystias_izakaya:grill").addLoot("mystias_izakaya:grill");

    event.addLootTableModifier("youkaishomecoming:entities/shrine_maiden").addLoot('youkaishomecoming:reimu_hairband')
    event.addLootTableModifier("youkaishomecoming:entities/kochiya_sanae").addLoot('youkaishomecoming:suwako_hat')

});


