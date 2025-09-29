ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "expatternprovider:circuit_cutter",
  "fluid_input": {
    "amount": 100,
    "ingredient": {
      "fluid": "minecraft:water"
    }
  },
  "item_input": {
    "amount": 1,
    "ingredient": {
      "item": 'kubejs:stacked_charged_redstone'
    }
  },
  "output": {
    "count": 9,
    "item": 'appflux:printed_energy_processor'
  }
}
    )
})