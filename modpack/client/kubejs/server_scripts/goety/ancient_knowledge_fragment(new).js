ServerEvents.recipes(event => {
    event.custom(
  {
    "type": "goety:brazier",
    "soulCost": 20000,
    "ingredients": [
      {
        "item": "hmag:ancient_stone"
      },
      {
        "item": "minecraft:paper"
      },
      {
        "item":"minecraft:echo_shard"
      }
    ],
    "result": {
      "item": "irons_spellbooks:ancient_knowledge_fragment"
    }
  })
})