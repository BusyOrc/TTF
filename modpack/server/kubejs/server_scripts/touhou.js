LootJS.modifiers((event) => {

  event
        .addLootTableModifier("chest")
        .removeLoot('touhou_little_maid:power_point')
        .removeLoot('touhou_little_maid:shrine')
        .removeLoot('supplementaries:rope')
        .removeLoot('farmersdelight:rope')
        .removeLoot('minecraft:rail')
        .removeLoot('minecraft:powered_rail')
        .removeLoot('minecraft:detector_rail')






});
//remove items in loot chests

ServerEvents.recipes(event => {
//P_point
    event.shaped(
        "2x touhou_little_maid:power_point", 
        [
          " A ",
          "BCB", 
          " A "
        ],
        {
          A: 'minecraft:red_wool',
          B: 'minecraft:redstone',  
          C: 'minecraft:experience_bottle'
        }
      )

      //shrine
      event.shaped(
        "touhou_little_maid:shrine", 
        [
          " A ",
          "BCB", 
          "DDD"
        ],
        {
          A: '#minecraft:planks',
          B: 'minecraft:redstone',  
          C: '#forge:gems',
          D: '#minecraft:wooden_slabs'
        }
      )

      //合成末影终结者附魔书
      event.custom({
type: 'touhou_little_maid:altar_crafting',
"output": {
  "type": "minecraft:item",
  "nbt": {
    "Item": {
      "id": "minecraft:enchanted_book",
      "Count": 1,
      "tag": {
          "Enchantments": [{id:"touhou_little_maid:enders_ender", lvl:1}]
        }
    }
  }
},
"power": 0.5,
"ingredients": [
  {
    "item": 'ends_delight:ender_pearl_grain'
  },
  {
    "item": 'ends_delight:ender_pearl_grain'
  },
  {
    "item": 'ae2:ender_dust'
  },
  {
    "item": 'ae2:ender_dust'
  },
  {
    "item": "minecraft:book"
  },
  {
    "item": 'create:precision_mechanism'
  }
]
      })
//Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:health_siphon', 1)
//合成生命虹吸附魔
event.custom({
  type: 'touhou_little_maid:altar_crafting',
  "output": {
    "type": "minecraft:item",
    "nbt": {
      "Item": {
        "id": "minecraft:enchanted_book",
        "Count": 1,
        "tag": {
            "Enchantments": [{id:"domesticationinnovation:health_siphon", lvl:1}]
          }
      }
    }
  },
  "power": 0.5,
  "ingredients": [
    {
      "item": 'minecraft:golden_apple'
    },
    {
      "item": 'tconstruct:cheese_block'
    },
    {
      "item": 'tconstruct:venombone'
    },
    {
      "item": 'minecraft:redstone'
    },
    {
      "item": "minecraft:book"
    },
    {
      "tag": 'forge:eggs'
    }
  ]
        })

        //Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:bubbling', 2)
      //合成冒泡2附魔书
      event.custom({
        type: 'touhou_little_maid:altar_crafting',
        "output": {
          "type": "minecraft:item",
          "nbt": {
            "Item": {
              "id": "minecraft:enchanted_book",
              "Count": 1,
              "tag": {
                  "Enchantments": [{id:"domesticationinnovation:bubbling", lvl:2}]
                }
            }
          }
        },
        "power": 0.3,
        "ingredients": [
          {
            "item": 'minecraft:prismarine_bricks'
          },
          {
            "item": 'minecraft:sea_lantern'
          },
          {
            "item": 'create:polished_rose_quartz'
          },
          {
            "tag": 'forge:slimeballs'
          },
          {
            "item": "minecraft:book"
          },
          {
            "tag": 'forge:slimeballs'
          }
        ]
              })

//Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:vampire', 2)
      //合成吸血2附魔书
      event.custom({
        type: 'touhou_little_maid:altar_crafting',
        "output": {
          "type": "minecraft:item",
          "nbt": {
            "Item": {
              "id": "minecraft:enchanted_book",
              "Count": 1,
              "tag": {
                  "Enchantments": [{id:"domesticationinnovation:vampire", lvl:2}]
                }
            }
          }
        },
        "power": 1.0,
        "ingredients": [
          {
            "tag": 'forge:ingots/silver'
          },
          {
            "tag": 'forge:gems/sapphire'
          },
          {
            "item": 'irons_spellbooks:arcane_ingot'
          },
          {
            "item": 'create:brass_hand'
          },
          {
            "item": "minecraft:book"
          },
          {
            "item": 'supplementaries:flax'
          }
        ]
              })

//herding
//Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:herding', 2)
event.custom({
  type: 'touhou_little_maid:altar_crafting',
  "output": {
    "type": "minecraft:item",
    "nbt": {
      "Item": {
        "id": "minecraft:enchanted_book",
        "Count": 1,
        "tag": {
            "Enchantments": [{id:"domesticationinnovation:herding", lvl:2}]
          }
      }
    }
  },
  "power": 0.2,
  "ingredients": [
    {
      "tag": 'forge:seeds'
    },
    {
      "item": 'minecraft:carrot'
    },
    {
      "item": 'minecraft:wheat'
    },
    {
      "item": 'minecraft:potato'
    },
    {
      "item": "minecraft:book"
    },
    {
      "item": 'farmersdelight:rice'
    }
  ]
        })


        //唱片
        //Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:disc_jockey', 1)
        event.custom({
          type: 'touhou_little_maid:altar_crafting',
          "output": {
            "type": "minecraft:item",
            "nbt": {
              "Item": {
                "id": "minecraft:enchanted_book",
                "Count": 1,
                "tag": {
                    "Enchantments": [{id:"domesticationinnovation:disc_jockey", lvl:1}]
                  }
              }
            }
          },
          "power": 0.1,
          "ingredients": [
            {
              "item": 'minecraft:iron_ingot'
            },
            {
              "item": 'minecraft:jukebox'
            },
            {
              "tag": 'minecraft:planks'
            },
            {
              "item": 'minecraft:note_block'
            },
            {
              "item": "minecraft:book"
            },
            {
              "item": 'minecraft:note_block'
            }
          ]
                })

//恶名诅咒
//Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:infamy_curse', 1)
event.custom({
  type: 'touhou_little_maid:altar_crafting',
  "output": {
    "type": "minecraft:item",
    "nbt": {
      "Item": {
        "id": "minecraft:enchanted_book",
        "Count": 1,
        "tag": {
            "Enchantments": [{id:"domesticationinnovation:infamy_curse", lvl:1}]
          }
      }
    }
  },
  "power": 0.3,
  "ingredients": [
    {
      "tag": 'forge:bones'
    },
    {
      "tag": 'forge:leather'
    },
    {
      "item": 'minecraft:rotten_flesh'
    },
    {
      "item": 'biomesoplenty:flesh'
    },
    {
      "item": "minecraft:book"
    },
    {
      "item": 'minecraft:spider_eye'
    }
  ]
        })

//魅力3
//Item.of('minecraft:enchanted_book').enchant('domesticationinnovation:charisma', 3)
event.custom({
  type: 'touhou_little_maid:altar_crafting',
  "output": {
    "type": "minecraft:item",
    "nbt": {
      "Item": {
        "id": "minecraft:enchanted_book",
        "Count": 1,
        "tag": {
            "Enchantments": [{id:"domesticationinnovation:charisma", lvl:3}]
          }
      }
    }
  },
  "power": 0.6,
  "ingredients": [
    {
      "item": 'lightmanscurrency:coin_gold'
    },
    {
      "item": 'lightmanscurrency:coin_iron'
    },
    {
      "item": 'lightmanscurrency:coin_copper'
    },
    {
      "item": 'minecraft:emerald'
    },
    {
      "item": "minecraft:book"
    },
    {
      "item": 'minecraft:emerald'
    }
  ]
        })

//Item.of('minecraft:enchanted_book').enchant('lightmanscurrency:coin_magnet', 3)
//磁力3
        event.custom({
          type: 'touhou_little_maid:altar_crafting',
          "output": {
            "type": "minecraft:item",
            "nbt": {
              "Item": {
                "id": "minecraft:enchanted_book",
                "Count": 1,
                "tag": {
                    "Enchantments": [{id:"lightmanscurrency:coin_magnet", lvl:3}]
                  }
              }
            }
          },
          "power": 0.2,
          "ingredients": [
            {
              "item": 'minecraft:redstone_block'
            },
            {
              "item": 'minecraft:iron_ingot'
            },
            {
              "item": 'minecraft:fishing_rod'
            },
            {
              "item": 'minecraft:compass'
            },
            {
              "item": "minecraft:book"
            },
            {
              "item": 'minecraft:compass'
            }
          ]
                })



        event.recipes.create.crushing(['5x youkaishomecoming:flesh',Item.of('youkaishomecoming:flesh').withChance(0.5)], 'easy_villagers:villager')




  })




                //warden x maid
               EntityEvents.death("minecraft:warden", event => {
                  //如果包含条件车万女仆，并且不是玩家，并且非空
                 if(event.source.getActual() != null)

                {
                  const killer=event.source.getActual()
                  if(killer.type=="touhou_little_maid:maid" && !killer.isPlayer())
                  {
 //                   event.entity.block.popItem(Item.of('mushroom_daydream:legend_paper', 1))
                      event.entity.block.popItem(Item.of('youkaishomecoming:rumia_hairband', 1))
//                    console.log(killer.type)
//                    console.log(!killer.isPlayer())
//                    console.log(killer.name)
//                    console.log(killer.isHolding("minecraft:diamond"))
//                    console.log(killer.maxHealth)
//                    console.log(killer.getOffhandItem())
                  }
                  else
                  {
                    event.entity.block.popItem(Item.of('minecraft:echo_shard', 1))
                  }
                }
                  

                })
                



