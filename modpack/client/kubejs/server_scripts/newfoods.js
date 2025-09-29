ServerEvents.recipes(event => {
let ICM = 'kubejs:magnetic_apple'
/* event.recipes.create.sequenced_assembly(
  ['kubejs:magnetic_apple'],
  'minecraft:golden_apple',
  [
    event.recipes.createFilling(ICM, [ICM, Fluid.of('tinker_in_caves:molten_scarlet_neodymium',90)]),
    event.recipes.createFilling(ICM, [ICM, Fluid.of('tinker_in_caves:molten_azure_neodymium',90)]),

]).transitionalItem("minecraft:golden_apple").loops(1) */
event.custom(
{
  "type": "youkaishomecoming:simple_fermentation",
  "ingredients": [
    {
      "item": "kubejs:magnetic_apple"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": 'ars_nouveau:starbuncle_shards'
    }
  ],
  "inputFluid": {
    "amount": 1000,
    "fluid": "minecraft:water"
  },
  "outputFluid": {
    "amount": 1000,
    "fluid": "kubejs:magnetic_cola"
  },
  "results": [],
  "time": 3600
}
)
event.recipes.create.filling('kubejs:magnetic_cola',[Fluid.of('kubejs:magnetic_cola',250),'minecraft:glass_bottle'])
event.custom(
{
  "type": "youkaishomecoming:simple_fermentation",
  "ingredients": [
    {
      "item": "alexscaves:green_soylent"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "thermal:sulfur_dust"
    },
    {
      "item": 'ars_nouveau:starbuncle_shards'
    }
  ],
  "inputFluid": {
    "amount": 1000,
    "fluid": "minecraft:water"
  },
  "outputFluid": {
    "amount": 1000,
    "fluid": "kubejs:nuclear_soda"
  },
  "results": [],
  "time": 3600
}
)
event.recipes.create.filling('kubejs:nuclear_soda',[Fluid.of('kubejs:nuclear_soda',250),'minecraft:glass_bottle'])
event.custom(
    {
        "type": "farmersdelight:cooking",
        "container":{
          "item":"minecraft:glass_bottle"
        },
        "cookingtime": 200,
        "experience": 4.0,
        "ingredients": [
          {
            "tag": "forge:milk"
          },
          {
            "item": "alexscaves:amber_curiosity"
          },
          {
            "item": "youkaishomecoming:oolong_tea_leaves"
          }

        ],
        "recipe_book_tab":"drinks",
        "result": {
          "item": "kubejs:amber_bubble_tea"
        }
      }
)
event.custom(
    {
        "type": "farmersdelight:cooking",
        "container":{
          "item":"minecraft:bowl"
        },
        "cookingtime": 300,
        "experience": 40.0,
        "ingredients": [
          {
            "item": "iceandfire:fire_dragon_flesh"
          },
          {
            "item": "iceandfire:fire_dragon_blood"
          },
          {
            "item": "iceandfire:fire_lily"
          },
          {
            "item": "iceandfire:dragonbone"
          },
          {
            "item": "minecraft:gold_nugget"
          },
          {
            "item": "minecraft:potato"
          },

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:fire_dragon_stew"
        }
      }
)
event.custom(
    {
        "type": "farmersdelight:cooking",
        "container":{
          "item":"minecraft:bowl"
        },
        "cookingtime": 300,
        "experience": 40.0,
        "ingredients": [
          {
            "item": "iceandfire:ice_dragon_flesh"
          },
          {
            "item": "iceandfire:ice_dragon_blood"
          },
          {
            "item": "iceandfire:frost_lily"
          },
          {
            "item": "iceandfire:dragonbone"
          },
          {
            "tag": "forge:nuggets/silver"
          },
          {
            "item": "minecraft:potato"
          },

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:ice_dragon_stew"
        }
      }
)
event.custom(
    {
        "type": "farmersdelight:cooking",
        "container":{
          "item":"minecraft:bowl"
        },
        "cookingtime": 300,
        "experience": 40.0,
        "ingredients": [
          {
            "item": "iceandfire:lightning_dragon_flesh"
          },
          {
            "item": "iceandfire:lightning_dragon_blood"
          },
          {
            "item": "iceandfire:lightning_lily"
          },
          {
            "item": "iceandfire:dragonbone"
          },
          {
            "tag": "forge:nuggets/copper"
          },
          {
            "item": "minecraft:potato"
          },

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:lightning_dragon_stew"
        }
      }
)
})