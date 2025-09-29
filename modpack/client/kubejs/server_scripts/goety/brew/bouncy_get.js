ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "minecraft:slime_block"
  },
  "effect": "tconstruct:bouncy",
  "soulCost": 10,
  "capacityExtra": 1,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "tconstruct"
    }
  ]
    })
})//弹跳