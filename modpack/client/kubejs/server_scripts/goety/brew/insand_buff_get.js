ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "pasterdream:nightmare_fuel"
  },
  "effect": "pasterdream:insand_buff",
  "soulCost": 25,
  "capacityExtra": -3,
  "duration": 1600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "pasterdream"
    }
  ]
    })
})//疯狂