ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "ars_nouveau:sourceberry_bush"
  },
  "effect": "ars_nouveau:mana_regen",
  "soulCost": 25,
  "capacityExtra": 0,
  "duration": 1800,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "ars_nouveau"
    }
  ]
    })
})//魔力再生