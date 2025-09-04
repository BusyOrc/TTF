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
  "pattern":[
  ' ABA ',
  'CCDCC',
  ' E E ',
  ' E E '
  ],
  "key":
{A:{"item":'iceandfire:earplugs'},
B:{"item":'simplehats:rabbitears'},
C:{"item":'minecraft:rabbit_hide'},
D:{"item":'simplehats:rabbitonhead'},
E:{"item":'minecraft:rabbit_foot'}
  },
  "result":{
    "item":'mystias_izakaya:reisen'
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

})


