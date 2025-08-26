ServerEvents.recipes(event => {
event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 20000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "minecraft:water"
    }
  },
  "input_items": [
    {
      "amount": 16,
      "ingredient": {
        "tag": "create_enchantment_industry:ink_ingredient"
      }
    }
  ],
  "output": {
    "#": 4000,
    "#c": "ae2:f",
    "id": "create_enchantment_industry:ink"
  }
}
)

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 80000,
  "fluid": {
    "fluidStack": {
      "Amount": 6000,
      "FluidName": "thermal:refined_fuel"
    }
  },
  "input_items": [
    {
      "amount": 2,
      "ingredient": {
        "item": 'sakuratinker:youkai_ingot'
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": 'irons_spellbooks:legendary_ink'
      }
    },
    {
      "amount": 48,
      "ingredient": {
        "item": 'thermal:tar'
      }
    }
  ],
  "output": {
    "#": 500,
    "#c": "ae2:f",
    "id": "kubejs:youkai_fuel"
  }
}
)

})