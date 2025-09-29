ServerEvents.recipes(event=>{
let banid=['extendedcrafting:redstone_ingot','extendedcrafting:black_iron_ingot']
for(let i of banid)
{
    event.remove(i)
}

    event.shaped('extendedcrafting:redstone_ingot',
  [
    'SRS',
    'RSR',
    'SRS'
  ],
  {
    R:'appflux:redstone_crystal',
    S:'#forge:plates/steel'
  }
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "APA",
    "TBT",
    "SCS",
    "HBI",
    "APA"
  ],
  "key": {
    "A": {
      "item": "minecraft:sculk"
    },
    "P": {
      "tag": "forge:plates/obsidian"
    },
    "T": {
      "item": "create:fluid_tank"
    },
    "B": {
      "item": "create:basin"
    },
    "S": {
      "item": "minecraft:sculk_sensor"
    },
    "C": {
      "item": "create:andesite_casing"
    },
    "H": {
      "item": "create:hose_pulley"
    },
    "I": {
      "tag": "forge:storage_blocks/steel"
    }
  },
  "result": {
    "item": "sculkcatalyticchamber:chamber"
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "key": {
    "B": {
      "tag": "forge:storage_blocks/brass"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "D": {
      "item": "create:mechanical_drill"
    },
    "F": {
      "item": "create:brass_tunnel"
    },
    "S": {
      "item": "create:spout"
    },
    "b": {
      "tag": "forge:plates/brass"
    },
    "e": {
      "item": "create:electron_tube"
    },
    "m": {
      "item": "create:precision_mechanism"
    },
    "s": {
      "item": "create:sturdy_sheet"
    },
    "t": {
      "item": "create:copper_casing"
    }
  },
  "pattern": [
    "BbtbB",
    "beSeb",
    "CmDmF",
    "bsssb",
    "BbbbB"
  ],
  "result": {
    "item": "createoreexcavation:drilling_machine"
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "key": {
    "B": {
      "tag": "forge:storage_blocks/brass"
    },
    "C": {
      "item": "create:brass_casing"
    },
    "D": {
      "item": "create:mechanical_drill"
    },
    "H": {
      "item": "create:hose_pulley"
    },
    "P": {
      "item": "create:mechanical_pump"
    },
    "b": {
      "tag": "forge:plates/brass"
    },
    "e": {
      "item": "create:electron_tube"
    },
    "m": {
      "item": "create:precision_mechanism"
    },
    "s": {
      "item": "create:sturdy_sheet"
    }
  },
  "pattern": [
    "BbPbB",
    "beHeb",
    "CmDmb",
    "bsssb",
    "BbbbB"
  ],
  "result": {
    "item": "createoreexcavation:extractor"
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "key": {
    "C": {
      "item": "create:brass_casing"
    },
    "D": {
      "item": "create:mechanical_drill"
    },
    "b": {
      "tag": "forge:plates/brass"
    },
    "e": {
      "item": "create:electron_tube"
    },
    "m": {
      "item": "create:precision_mechanism"
    },
    "s": {
      "item": "create:sturdy_sheet"
    }
  },
  "pattern": [
    "beb",
    "mCb",
    "sDs"
  ],
  "result": {
    "item": "createoreexcavation:sample_drill"
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "P": {
      "tag": "minecraft:planks"
    },
    "S": {
      "tag": "forge:stone"
    }
  },
  "pattern": [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  "result": {
    "count": 2,
    "item": "create:crushing_wheel"
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "OOSOO",
    "OMPMO",
    "OMEMO",
    "OMPMO",
    "OOSOO"
  ],
  "key": {
    "S": {
      "item": "create:shaft"
    },
    "O": {
      "item": "minecraft:obsidian"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "minecraft:ender_eye"
    },
    "M": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "item": "createendertransmission:energy_transmitter"
  },
  "acceptMirrored": true
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "OOSOO",
    "OMPMO",
    "OMEMO",
    "OMPMO",
    "OOSOO"
  ],
  "key": {
    "S": {
      "item": "create:mechanical_pump"
    },
    "O": {
      "item": "minecraft:obsidian"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "minecraft:ender_eye"
    },
    "M": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "item": "createendertransmission:fluid_transmitter"
  },
  "acceptMirrored": true
}
)

event.custom(
  {
  "type":"extendedcrafting:shaped_table",
  "pattern": [
    "OOSOO",
    "OMPMO",
    "OMEMO",
    "OMPMO",
    "OOSOO"
  ],
  "key": {
    "S": {
      "item": "create:chute"
    },
    "O": {
      "item": "minecraft:obsidian"
    },
    "P": {
      "item": "create:precision_mechanism"
    },
    "E": {
      "item": "minecraft:ender_eye"
    },
    "M": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "item": "createendertransmission:item_transmitter"
  },
  "acceptMirrored": true
}
)

event.custom(
  {
  "type":"extendedcrafting:shaped_table",
  "pattern": [
    "RQQQR",
    "QIIIQ",
    "QMTMQ",
    "QIIIQ",
    "RQQQR"
  ],
  "key": {
    "R": {
      "item": 'ttf:rubber_sheet'
    },
    "Q": {
      "item": 'ae2:quartz_glass'
    },
    "M": {
      "item": 'ttf:magic_tube'
    },
    "I": {
      "item": 'tconstruct:ichor_congealed_slime'
    },
    "T": {
      "tag": 'forge:gears/tin'
    }
  },
  "result": {
    "item": "thermal:machine_frame"
  },
  "acceptMirrored": true
}
)

event.custom(
  {
  "type":"extendedcrafting:shaped_table",
  "pattern": [
    "ICCCI",
    "CDMDC",
    "CMBMC",
    "CDMDC",
    "ICCCI"
  ],
  "key": {
    "C": {
      "item": 'ae2:charged_certus_quartz_crystal'
    },
    "M": {
      "item": 'tconstruct:pattern'
    },
    "B": {
      "item": 'minecraft:bone_block'
    },
    "D": {
      "item": 'ae2:certus_quartz_dust'
    },
    "I": {
      "item": "minecraft:iron_block"
    }
  },
  "result": {
    "item": 'minecraft:skeleton_skull',
    "count":8
  }
}
)

event.custom(
  {
  "type":"extendedcrafting:shaped_table",
  "pattern": [
    "I LLI",
    "S M  ",
    "  T  ",
    "  M S",
    "ILL I"
  ],
  "key": {
    "T": {
      "item": 'tofucraft:tofu_core'
    },
    "M": {
      "item": 'ttf:magic_tube'
    },
    "L": {
      "item": 'irons_spellbooks:legendary_ink'
    },
    "I": {
      "item": 'sakuratinker:unholy_alloy'
    },
    "S": {
      "item": 'beyonddimensions:space_time_bar'
    }
  },
  "result": {
    "item": 'touhou_little_maid_spell:flow_core'
  }
}
)

event.custom(
  {
  "type":"extendedcrafting:shaped_table",
  "pattern": [
    " RRRRR ",
    "RRRRRRR",
    "RRUUURR",
    "RRUSURR",
    "RRUUURR",
    "RRRRRRR",
    " RRRRR "
  ],
  "key": {
    "U": {
      "item": 'ttf:rubber_sheet'
    },
    "S": {
      "item": 'minecraft:skeleton_skull'
    },
    "R": {
      "item": 'create:scorchia'
    }
  },
  "result": {
    "item": 'minecraft:wither_skeleton_skull',
    "count":2
  }
}
)

event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABAA",
    "ABCBA",
    "DEFED",
    "AFCFA",
    "AABAA"
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_block"
    },
    "B": {
      "item": "ae2:calculation_processor"
    },
    "C": {
      "item": "ttf:magic_tube"
    },
    "D": {
      "tag": "forge:ingots/melodium"
    },
    "E": {
      "item": "irons_spellbooks:epic_ink"
    },
    "F": {
      "item": "ae2:logic_processor"
    }
  },
  "result": {
    "item": "thermal_parallel:argument_parallel"
  }
}
)


event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABBBAA",
    "ACDDDCA",
    "BEFGFEB",
    "BHGFGHB",
    "BEFGFEB",
    "ACDDDCA",
    "AABBBAA"
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_block"
    },
    "B": {
      "item": 'advanced_ae:quantum_alloy'
    },
    "C": {
      "item": "advanced_ae:quantum_processor"
    },
    "D": {
      "tag": "forge:gears/diamond"
    },
    "E": {
      "item": "megacells:accumulation_processor"
    },
    "F": {
      "item": "ttf:magic_tube"
    },
    "G": {
      "item": "thermal_parallel:argument_parallel"
    },
    "H": {
      "item": "ae2:logic_processor"
    }
  },
  "result": {
    "item": 'thermal_parallel:argument_parallel_2'
  }
}
)


event.custom(
  {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABBBAAA",
    "ACDDEDDCA",
    "AFGEHEGFA",
    "IFEHJHEFI",
    "KIHJLJHIK",
    "IFEHJHEFI",
    "AFGEHEGFA",
    "ACDDEDDCA",
    "AAABBBAAA"
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_block"
    },
    "B": {
      "item": "kubejs:doremy_ingot"
    },
    "C": {
      "tag": "forge:ingots/dragon_steel"
    },
    "D": {
      "item": 'minecraft:magma_block'
    },
    "E": {
      "item": "touhou_little_maid:power_point"
    },
    "F": {
      "item": "kubejs:fantasy_tofu"
    },
    "G": {
      "item": "cataclysm:burning_ashes"
    },
    "H": {
      "item": "irons_spellbooks:legendary_ink"
    },
    "I": {
      "item": "kubejs:gap_tofu"
    },
    "J": {
      "item": "thermal_parallel:argument_parallel_2"
    },
    "K": {
      "item": "kubejs:flandre"
    },
    "L": {
      "item": "kubejs:devil"
    }
  },
  "result": {
    "item": 'thermal_parallel:argument_parallel_3'
  }
}
)

})


