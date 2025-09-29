ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "youkaishomecoming:fairy_candy"
  },
  "effect": "youkaishomecoming:fairy",
  "soulCost": 25,
  "capacityExtra": -2,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "youkaishomecoming"
    }
  ]
    })
})//妖精化