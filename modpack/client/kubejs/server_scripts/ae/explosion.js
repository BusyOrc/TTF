ServerEvents.recipes(event => {


event.custom(
{
    "type": "ae2:transform",
    "circumstance": {
      "type": "explosion"
    },
    "ingredients": [
      {
        "item": "tconstruct:ichor_slime_crystal"
      },

      {
        "item": "ae2:flawed_budding_quartz"
      }
    ],
    "result": {
      "count": 1,
      "item": "tconstruct:budding_ichor_slime_crystal"
    }
  }
)



})