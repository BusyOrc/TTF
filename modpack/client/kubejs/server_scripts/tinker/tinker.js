ServerEvents.recipes(event => {

//蛙鸣灯
    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cast": {
              "item": "create:brass_casing"
            },
            "cast_consumed": true,
            "cooling_time": 360,
            "fluid": {
              "amount": 500,
              "fluid": "chemlib:neon_fluid"
            },
            "result": "minecraft:ochre_froglight"
          }
    )

    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cast": {
              "item": "create:brass_casing"
            },
            "cast_consumed": true,
            "cooling_time": 360,
            "fluid": {
              "amount": 500,
              "fluid": "chemlib:argon_fluid"
            },
            "result": "minecraft:verdant_froglight"
          }
    )

    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cast": {
              "item": "create:brass_casing"
            },
            "cast_consumed": true,
            "cooling_time": 360,
            "fluid": {
              "amount": 500,
              "fluid": "chemlib:krypton_fluid"
            },
            "result": "minecraft:pearlescent_froglight"
          }
    )



event.custom(
  {
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "tag": "tconstruct:smeltery_bricks"
      }
    ],
    "result": [
      {
        "count": 4,
        "item": "tconstruct:seared_brick"
      }
    ],
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": "pickaxe_dig"
    }
  }
)

        event.custom({//浇筑大卢恩
            "type": "tconstruct:casting_table",
            "cast": {
                "item": "cataclysm:lava_power_cell"
            },
            "cast_consumed": true,
            "cooling_time": 64,
            "fluid": {
                "amount": 90,
                "fluid": "kubejs:greatrune_forgery_fluid"
            },
            "result": "kubejs:greatrune"
        })
    
 //       event.recipes.create.compacting('2x kubejs:youmus_dualswords', ['spartanweaponry:iron_katana','#youkaishomecoming:dango', 'spartanweaponry:iron_longsword']).heated()

        //event.recipes.create.mixing('kubejs:baka_wings',['6x minecraft:blue_ice', Fluid.of("minecraft:water",1000)])
        event.recipes.create.mixing('kubejs:daiyouseis_bomb',['youkaishomecoming:fairy_ice_crystal','minecraft:lime_dye'])

//秘封
/*
event.recipes.create.mechanical_crafting('9x kubejs:mysterious_hat', [

  'BMBMB',
  'ALLLA',
  'ALSLA',
  'ALLLA',
  'ABMBA'
], {
A: '#forge:gears/emerald',
B: '#forge:gears/signalum',
L: 'mystias_izakaya:lian_zi',
S: 'minecraft:writable_book',
M: '#forge:dusts/ender_pearl'

})
*/
event.custom(
  {
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "amount": 1000,
        "tag": "forge:acid"
      },
      {
        "amount": 100,
        "tag": "forge:crude_oil"
      },
      
      {
        "amount": 250,
        "fluid": "kubejs:fluid_cloud"
      },
      {
        "amount": 300,
        "fluid": "jaopca:molten.coal"
      }
    ],
    "result": {
      "amount": 2000,
      "tag": "forge:crude_oil"
    },
    "temperature": 1360
  }
)

event.custom(
{
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": "forge:sculk"
  },
  "result": {
    "amount": 400,
    "fluid": "tinkers_thinking:molten_echo"
  },
  "temperature": 50,
  "time": 40
}
  )

event.custom(
  {
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "amount": 100,
        "fluid": "tinkerscalibration:moltenvibratingcrystal"
      },
      {
        "amount": 500,
        "tag": "forge:milk"
      },
      {
        "amount": 90,
        "tag": "forge:molten_gold"
      }
    ],
    "result": {
      "amount": 90,
      "fluid": "mushroom_daydream:no_head"
    },
    "temperature": 470
  }
)

event.custom(
  {
    "type": "tconstruct:melting",
    "ingredient": [
      {
        "tag": "forge:dusts/blaze"
      }
    ],
    "result": {
      "amount": 20,
      "tag": "tconstruct:blazing_blood"
    },
    "temperature": 1000,
    "time": 10
  }
)

event.custom(
  {
    "type": "tconstruct:melting",
    "ingredient": [
      {
        "item": "delightful:animal_fat"
      }
    ],
    "result": {
      "amount": 250,
      "fluid": "tinkers_delight:edible_oil"
    },
    "temperature": 50,
    "time": 10
  }
)

event.custom(
  {
    "type": "tconstruct:alloy",
    "inputs": [
      {
        "amount": 540,
        "fluid": "tconstruct:molten_iron"
      },
      {
        "amount": 100,
        "fluid": "jaopca:molten.coal"
      }
    ],
    "result": {
      "amount": 360,
      "fluid": "tconstruct:molten_steel"
    },
    "temperature": 980
  }
)

//event.remove({output:"tconstruct:molten_netherite",input:'#tconstruct:parts'})







})