ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "artifacts:crystal_heart"
  },
  "effect": "youkaishomecoming:higi",
  "soulCost": 25,
  "capacityExtra": 1,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "youkaishomecoming"
    }
  ]
    })
})//生命力