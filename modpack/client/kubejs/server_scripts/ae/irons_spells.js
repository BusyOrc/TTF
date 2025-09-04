ServerEvents.recipes(event => {
event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 60000,
  "fluid": {
    "fluidStack": {
      "Amount": 1000,
      "FluidName": "create_enchantment_industry:ink"
    }
  },
  "input_items": [
    {
      "amount": 8,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 16,
      "ingredient": {
        "item": 'thermal:sawdust_block'
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
  "energy": 80000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 8,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 32,
      "ingredient": {
        "item": "irons_spellbooks:common_ink"
      }
    },
    {
      "amount": 32,
      "ingredient": {
        "item": 'create:sturdy_sheet'
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
  "energy": 80000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 8,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 32,
      "ingredient": {
        "item": "irons_spellbooks:uncommon_ink"
      }
    },
    {
      "amount": 64,
      "ingredient": {
        "item": "minecraft:lapis_lazuli"
      }
    },
    {
      "amount": 64,
      "ingredient": {
        "item": 'create:electron_tube'
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
  "energy": 80000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 8,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 32,
      "ingredient": {
        "item": "irons_spellbooks:rare_ink"
      }
    },
    {
      "amount": 64,
      "ingredient": {
        "item": "minecraft:amethyst_shard"
      }
    },
    {
      "amount": 64,
      "ingredient": {
        "item": 'create:precision_mechanism'
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
  "energy": 160000,
  "fluid": {
    "fluidStack": {
      "Amount": 4000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 8,
      "ingredient": {
        "item": "ars_nouveau:source_gem_block"
      }
    },
    {
      "amount": 32,
      "ingredient": {
        "item": "irons_spellbooks:epic_ink"
      }
    },
    {
      "amount": 16,
      "ingredient": {
        "item": "create:experience_block"
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": 'advanced_ae:quantum_alloy_plate'
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

event.custom(
    {
  "type": "advanced_ae:reaction",
  "energy": 100000,
  "fluid": {
    "fluidStack": {
      "Amount": 6000,
      "FluidName": "starbunclemania:source_fluid"
    }
  },
  "input_items": [
    {
      "amount": 16,
      "ingredient": {
        "item": 'cataclysm:black_steel_ingot'
      }
    },
    {
      "amount": 4,
      "ingredient": {
        "item": 'minecraft:netherite_scrap'
      }
    },
    {
      "amount": 8,
      "ingredient": {
        "item": 'appflux:charged_redstone'
      }
    }
  ],
  "output": {
    "#": 4,
    "#c": "ae2:i",
    "id": 'irons_spellbooks:cinder_essence'
  }
}
)

})