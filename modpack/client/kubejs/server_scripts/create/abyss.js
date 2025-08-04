ServerEvents.recipes(event => {

    //绿宝石
event.custom(
    {
        "type": "sculkcatalyticchamber:chamber",
        "topIngredients": [
          {
            "item": "minecraft:lime_dye"
          },
          {
            "item": "minecraft:lime_dye"
          },
          {
            "tag": "forge:sawdust"
          },
          {
            "tag": "forge:sawdust"
          }
        ],
        "bottomIngredients": [
          {
            "item": "minecraft:stone"
          }
        ],
        "catalysts": [
            {
                "amount": 1000,
                "fluid": "minecraft:water",
                "nbt": {}
              }
        ],
        "results": [
          {
            "item": "minecraft:emerald"
          },
          {
            "item": "minecraft:emerald_block",
            "chance": 0.3
          }
        ]
      }
)

//潜影壳
event.custom(
    {
        "type": "sculkcatalyticchamber:chamber",
        "heatRequirement": "heated",
        "topIngredients": [
          {
            "tag": "forge:plates/iron"
          }
        ],
        "bottomIngredients": [
          {
            "tag": "forge:bat_wings"
          }
        ],
        "catalysts": [
          {
            "fluidTag": "forge:blood",
            "amount":1000
          }
        ],
        "chances": 1.0,
        "results": [
          {
            "item": "minecraft:shulker_shell"
          }
        ]
      }
)

event.custom(
    {
        "type": "sculkcatalyticchamber:chamber",
        "heatRequirement": "heated",
        "topIngredients": [
          {
            "tag": "forge:plates/iron"
          }
        ],
        "bottomIngredients": [
          {
            "item": "ars_nouveau:wilden_wing"
          }
        ],
        "catalysts": [
          {
            "fluid": "starbunclemania:source_fluid",
            "amount":1000
          }
        ],
        "chances": 1.0,
        "results": [
          {
            "item": "minecraft:shulker_shell"
          }
        ]
      }
)

//邪恶水晶
event.custom(
    {
        "type": "sculkcatalyticchamber:chamber",
        "heatRequirement": "heated",
        "topIngredients": [
          {
            "tag": "forge:dyes/black"
          },
          {
            "tag": "forge:dyes/black"
          },
          {
            "item": "biomesoplenty:porous_flesh"
          }
        ],
        "bottomIngredients": [
          {
            "tag": "forge:dusts/tin"
          },
          {
            "tag": "forge:dusts/tin"
          }
        ],
        "catalysts": [
          {
            "amount": 500,
            "fluidTag": "forge:blood",
            "nbt": {}
          }
        ],
        "chances": 0.8,
        "results": [
          {
            "item": "hmag:evil_crystal"
          }
        ]
      }
)

//灵魂之心
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "heatRequirement": "heated",
      "topIngredients": [
        {
          "item": "hmag:soul_apple"
        },
        {
          "item": "quark:soul_bead"
        }
      ],
      "bottomIngredients": [
        {
          "item": "minecraft:echo_shard"
        }
      ],
      "catalysts": [
        {
          "item": "minecraft:dragon_head"
        }
      ],
      "chances": 0.5,
      "results": [
        {
          "item": "alexsmobs:soul_heart"
        }
      ]
    }
)

//魔法燃料
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "heatRequirement": "heated",
      "topIngredients": [
        {
          "item": "touhou_little_maid:power_point"
        },
        {
          "item": "quark:moss_paste"
        },
        {
          "item": "quark:moss_paste"
        }

      ],
      "bottomIngredients": [
        {
          "fluid": "starbunclemania:source_fluid",
          "amount":1000
        }
      ],
      "catalysts": [
        {
          "fluid": "alexscaves:acid",
          "amount":1000
        }
      ],
      "chances": 0.98,
      "results": [
        {
          "fluid": "kubejs:magic_fuel",
          "amount":200
        }
      ]
    }
)
/*
//ghast
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "topIngredients": [
        {
          "item": "minecraft:ghast_tear"
        }
      ],
      "bottomIngredients": [
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
      "catalysts": [
        {
          "item": "minecraft:snow_block"
        }
      ],
      "chances": 1,
      "results": [
        {
          "item": "ghasts_update:dried_ghast"
        }
      ]
    }
)
*/
//youmu
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "heatRequirement": "superheated",
      "topIngredients": [
        {
          "item": "touhou_little_maid:garage_kit"
        }
      ],
      "bottomIngredients": [
        {
          "item": "minecraft:iron_sword"
        },
        {
          "item": "minecraft:diamond_sword"
        }
      ],
      "catalysts": [
        {
          "tag": "youkaishomecoming:dango"
        }
      ],
      "chances": 1,
      "results": [
        {
          "item": "kubejs:youmus_dualswords"
        },
        {
          "item": "kubejs:youmus_dualswords"
        }
      ]
    }
)

//suwako hat
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "heatRequirement": "superheated",
      "topIngredients": [
        {
          "item": "youkaishomecoming:straw_hat"
        }
      ],
      "bottomIngredients": [
        {
          "tag": "quark:corundum"
        }
      ],
      "catalysts": [
        {
          "item": "twilightforest:maze_map_focus"
        }
      ],
      "chances": 1,
      "results": [
        {
          "item": "youkaishomecoming:suwako_hat"
        }
      ]
    }
)

//cirno
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "topIngredients": [
        {
          "item": "minecraft:enchanted_book"
        }
      ],
      "bottomIngredients": [
        {
          "item": "minecraft:blue_ice"
        },
        {
          "item": "minecraft:blue_ice"
        },
        {
          "item": "minecraft:blue_ice"
        }
      ],
      "catalysts": [
      ],
      "results": [
        {
          "item": "youkaishomecoming:fairy_ice_crystal"
        }
      ]
    }
)
//ex cirno
event.custom(
  {
      "type": "sculkcatalyticchamber:chamber",
      "topIngredients": [
        {
          "item": 'ars_nouveau:drygmy_charm'
        },
        {
          "item":'irons_spellbooks:ice_upgrade_orb'
        },
        {
          "tag":'youkaishomecoming:frozen_frog'
        }
      ],
      "bottomIngredients": [
        {
          "item": 'youkaishomecoming:fairy_ice_crystal'
        },
        {
          "item": 'youkaishomecoming:fairy_ice_crystal'
        },
        {
          "item": 'youkaishomecoming:fairy_ice_crystal'
        }
      ],
      "catalysts": [
        {
          "fluid":"kubejs:molten_bomb",
          "amount":810
        }
      ],
      "results": [
        {
          "item": "kubejs:ice_warrior"
        }
      ]
    }
)

})