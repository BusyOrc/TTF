ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "arsdelight:flourishing_bark"
  },
  "effect": "irons_spellbooks:oakskin",
  "soulCost": 25,
  "capacityExtra": 2,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "irons_spellbooks"
    }
  ]
    })
})//橡肤