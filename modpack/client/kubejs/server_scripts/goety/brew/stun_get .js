ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "tconstruct:hepatizon_block"
  },
  "effect": "cataclysm:stun",
  "soulCost": 25,
  "capacityExtra": 4,
  "duration": 600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "cataclysm"
    }
  ]
    })
})//眩晕