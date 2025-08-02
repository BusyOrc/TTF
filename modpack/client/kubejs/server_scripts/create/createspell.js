ServerEvents.recipes(event =>{
let TI="irons_spellbooks:blank_rune"
let rune_recipes=(event, fluid_amout, fluid_name, rune_name)=>{
      event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item":"irons_spellbooks:blank_rune"
        },
        "cast_consumed": true,
        "cooling_time": 40,
        "fluid": {
            "amount": 2*fluid_amout,
            "fluid": fluid_name
        },
        "result": "irons_spellbooks:"+rune_name+"_rune"
    })

    event.recipes.create.sequenced_assembly(
  ["irons_spellbooks:"+rune_name+"_rune"],
  TI,
  [
    event.recipes.createFilling(TI, [TI, Fluid.of(fluid_name,fluid_amout)]),
    event.recipes.createFilling(TI, [TI, Fluid.of(fluid_name,fluid_amout)]),
]).transitionalItem(TI).loops(1)

}

rune_recipes(event, 270, "tconstruct:molten_lumium", "protection")
rune_recipes(event, 540, "tconstruct:molten_brass", "fire")
rune_recipes(event, 360, "tconstruct:molten_invar", "ice")
rune_recipes(event, 270, "tconstruct:molten_signalum", "holy")
rune_recipes(event, 360, "tconstruct:molten_electrum", "nature")
rune_recipes(event, 360, "tconstruct:molten_constantan", "evocation")
rune_recipes(event, 270, "tconstruct:molten_enderium", "ender")
rune_recipes(event, 360, "tconstruct:molten_bronze", "cooldown")
rune_recipes(event, 360, "tconstruct:molten_pewter", "lightning")

//猩红符文
      event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item":"irons_spellbooks:blank_rune"
        },
        "cast_consumed": true,
        "cooling_time": 40,
        "fluid": {
            "amount": 2000,
            "tag": "forge:blood"
        },
        "result": "irons_spellbooks:blood_rune"
    })

event.custom(
    {
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "irons_spellbooks:blank_rune"
  },
  "loops": 1,
  "results": [
    {
      "item": "irons_spellbooks:blood_rune"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "irons_spellbooks:blank_rune"
        },
        {
          "amount": 1000,
          "fluidTag": "forge:blood",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "irons_spellbooks:blank_rune"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "irons_spellbooks:blank_rune"
        },
        {
          "amount": 1000,
          "fluidTag": "forge:blood",
          "nbt": {}
        }
      ],
      "results": [
        {
          "item": "irons_spellbooks:blank_rune"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "irons_spellbooks:blank_rune"
  }
}
)

    event.recipes.create.splashing("irons_spellbooks:arcane_salvage","minecraft:netherite_scrap")
    event.recipes.create.splashing("irons_spellbooks:arcane_debris","minecraft:ancient_debris")

    event.replaceOutput(
        { input: 'irons_spellbooks:blood_vial' }, 
        "minecraft:glass_bottle",         
        'thermal:jar'
      )


}
)