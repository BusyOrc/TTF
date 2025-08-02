ServerEvents.recipes(event => {
event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 15000,
  "fluid": {
    "fluidStack": {
      "Amount": 1000,
      "FluidName": "create_enchantment_industry:ink"
    }
  },
  "input_items": [
    {
      "amount": 1,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": "irons_spellbooks:common_ink"
  }
}
)

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 20000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 1,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": "irons_spellbooks:common_ink"
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": "irons_spellbooks:uncommon_ink"
  }
}
)

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 20000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 1,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": "irons_spellbooks:uncommon_ink"
      }
    },
    {
      "amount": 16,
      "ingredient": {
        "item": "minecraft:lapis_lazuli"
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": "irons_spellbooks:rare_ink"
  }
}
)

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 20000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 1,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": "irons_spellbooks:rare_ink"
      }
    },
    {
      "amount": 16,
      "ingredient": {
        "item": "minecraft:amethyst_shard"
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": "irons_spellbooks:epic_ink"
  }
}
)

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 40000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 1,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": "irons_spellbooks:epic_ink"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": "create:experience_block"
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": "irons_spellbooks:legendary_ink"
  }
}
)

})