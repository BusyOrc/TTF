ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "thermal:wrench"
  },
  "effect": "cofh_core:wrenched",
  "soulCost": 25,
  "capacityExtra": 0,
  "duration": 102000,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "thermal"
    }
  ]
    })
})//扭伤