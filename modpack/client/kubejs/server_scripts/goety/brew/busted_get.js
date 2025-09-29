ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "cataclysm:black_steel_ingot"
  },
  "effect": "goety:busted",
  "soulCost": 25,
  "capacityExtra": 1,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "goety"
    }
  ]
    })
})//穿孔