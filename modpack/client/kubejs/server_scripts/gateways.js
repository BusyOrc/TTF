ServerEvents.recipes(event => {

    event.custom(
        {
  "type": "gateways:gate_recipe",
  "group": "gateways",
  "pattern": [
    "CGC",
    "AJB",
    "CGC"
  ],
  "key": {
    "A": {
      "item": "youkaishomecoming:flesh_dumplings"
    },
	"B": {
      "item": 'youkaishomecoming:flesh_stew'
    },
    "J":{
        "item":'minecraft:jack_o_lantern'
    },
    "C":{
        "item":'minecraft:cobweb'
    },
    "G":{
        "item":'youkaishomecoming:flesh_roll'
    }
  },
  "result": {
    "item": "gateways:gate_pearl"
  },
  "gateway": "gateways:wild_hunt"
}
    )


})