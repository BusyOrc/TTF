ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "arsdelight:activated_bastion_jam"
  },
  "effect": "arsdelight:synchronized_shield",
  "soulCost": 25,
  "capacityExtra": 0,
  "duration": 1600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "arsdelight"
    }
  ]
    })
})//同频护盾