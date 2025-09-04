ServerEvents.recipes(event => {
event.custom(
    {
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 4.0,
        "ingredients": [
          {
            "item": "kubejs:reimu"
          },
          {
            "tag": "forge:tofu"
          },
          {
            "item": "minecraft:cherry_leaves"
          },
          {
            "item": "minecraft:cherry_leaves"
          },
          {
            "item": "minecraft:cherry_leaves"
          },
          {
            "item": "minecraft:cherry_leaves"
          }

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:fantasy_tofu"
        }
      }
)

event.custom(
    {
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 4.0,
        "ingredients": [
          {
            "item": "touhou_little_maid:wireless_io"
          },
          {
            "tag": "forge:tofu"
          },
          {
            "item": "minecraft:chorus_fruit"
          },
          {
            "item": "minecraft:chorus_fruit"
          },
          {
            "item": "minecraft:chorus_fruit"
          },
          {
            "item": "minecraft:chorus_fruit"
          }

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:gap_tofu"
        }
      }
)

event.custom(
    {
        "type": "farmersdelight:cooking",
        "cookingtime": 300,
        "experience": 6.0,
        "ingredients": [
          {
            "item": "kubejs:fantasy_tofu"
          },
          {
            "tag": 'forge:milk/milk_bottle'
          },
          {
            "item": "immortalers_delight:yogurt"
          }

        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:dream_tofu"
        }
      }
)

event.recipes.farmersdelight.cutting(
        'minecraft:calcite',
        '#minecraft:pickaxes',
            ['minecraft:cobblestone',
                Item.of("minecraft:bone_meal").withChance(0.5)
            ]
    )

event.recipes.farmersdelight.cutting(
        'minecraft:bone_block',
        '#minecraft:pickaxes',
            ['minecraft:bone',
                Item.of('minecraft:bone').withChance(0.75)
            ]
    )
event.recipes.farmersdelight.cutting(
        'pasterdream:dyedream_sand',
        '#minecraft:shovels',
            [
                Item.of('minecraft:clay_ball').withChance(0.2)
            ]
    )

event.custom(
  {
  "type": "minecraft:crafting_shapeless",
  "group":"pepper_powder",
  "ingredients": [
    {
      "item": "ltc2:mortar",
      "data":32767
    },
    {
      "item": 'minecraft:calcite'
    },
    {
      "item": 'minecraft:calcite'
    }
  ],
  "result": {
    "item": 'minecraft:cobblestone',
    "count": 1 
    
  }
}
)









})