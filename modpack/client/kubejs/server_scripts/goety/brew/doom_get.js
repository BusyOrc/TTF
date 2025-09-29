ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "goety:shadow_essence"
  },
  "effect": "goety:doom",
  "soulCost": 400,
  "capacityExtra": 3,
  "duration": 600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "goety"
    }
  ]
    })
})//末日