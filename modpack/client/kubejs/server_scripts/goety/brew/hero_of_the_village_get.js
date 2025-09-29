ServerEvents.recipes(event => {
    event.custom({
  "type": "goety:brewing",
  "ingredient": {
    "item": "minecraft:emerald_block"
  },
  "effect": "minecraft:hero_of_the_village",
  "soulCost": 10,
  "capacityExtra": 1,
  "duration": 3600,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "minecraft"
    }
  ]
    })
})//村庄英雄