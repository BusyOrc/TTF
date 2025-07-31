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

    //湿海绵
    event.custom(
        {
            "type": "tconstruct:casting_basin",
            "cast": {
              "item": "minecraft:sponge"
            },
            "cast_consumed": true,
            "cooling_time": 20,
            "fluid": {
              "amount": 1000,
              "fluid": "minecraft:water"
            },
            "result": "minecraft:wet_sponge"
          }
    )

event.recipes.create.filling("minecraft:wet_sponge",[Fluid.of("minecraft:water",1000),"minecraft:sponge"])

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
    

        event.recipes.create.mixing('kubejs:daiyouseis_bomb',['youkaishomecoming:fairy_ice_crystal','minecraft:lime_dye'])

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

//烈焰人炉子
event.custom(
    {
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "create:empty_blaze_burner"
        },
        "cast_consumed": true,
        "cooling_time": 180,
        "fluid": {
          "amount": 540,
          "fluid": "tconstruct:blazing_blood"
        },
        "result":"create:blaze_burner"
            
      }
    )

event.custom(
    {
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "kubejs:little_devil"
        },
        "cast_consumed": true,
        "cooling_time": 60,
        "fluid": {
          "amount": 1000,
          "fluid": "starbunclemania:source_fluid"
        },
        "result":"kubejs:devil"
            
      }
    )



})