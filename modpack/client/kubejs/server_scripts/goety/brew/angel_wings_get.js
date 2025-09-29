ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "irons_spellbooks:divine_pearl"
  },
  "effect": "irons_spellbooks:angel_wings",
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
})//天使之翼