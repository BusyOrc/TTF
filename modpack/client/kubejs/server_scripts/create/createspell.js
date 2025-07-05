ServerEvents.recipes(event =>{
let TI="irons_spellbooks:blank_rune"
/*
let create_spell_rune=(OP_rune, IP_fluid)=>{
event.recipes.create.sequenced_assembly(
  [OP_rune],
  TI,
  [
    event.recipes.createFilling(TI, [TI, Fluid.of(IP_fluid,1000)]),
    event.recipes.createFilling(TI, [TI, Fluid.of(IP_fluid,1000)]),
]).transitionalItem(TI).loops(1)
}
*/
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

//猩红，雷霆符文
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

          event.custom({
        "type": "tconstruct:casting_table",
        "cast": {
            "item":"irons_spellbooks:blank_rune"
        },
        "cast_consumed": true,
        "cooling_time": 40,
        "fluid": {
            "amount": 2000,
            "fluid": "create_wizardry:lightning"
        },
        "result": "irons_spellbooks:lightning_rune"
    })



    event.recipes.create.splashing("irons_spellbooks:arcane_salvage","minecraft:netherite_scrap")
    event.recipes.create.splashing("irons_spellbooks:arcane_debris","minecraft:ancient_debris")

    event.replaceOutput(
        { input: 'irons_spellbooks:blood_vial' }, // Arg 1: the filter
        "minecraft:glass_bottle",            // Arg 2: the item to replace
        'thermal:jar'         // Arg 3: the item to replace it with
      )
/*
event.recipes.create.mixing(Fluid.of("create_wizardry:epic_ink",750),[Fluid.of("create_wizardry:rare_ink",1000),
    Fluid.of("biomesoplenty:blood",500),'4x create:experience_nugget','irons_spellbooks:arcane_ingot']).heated()

event.recipes.create.mixing(Fluid.of("create_wizardry:epic_ink",750),[Fluid.of("create_wizardry:rare_ink",1000),
    Fluid.of("create_wizardry:blood",500),'4x create:experience_nugget','irons_spellbooks:arcane_ingot']).heated()
*/


/*
create_spell_rune('irons_spellbooks:nature_rune', 'constructs_casting:nature_essence')
create_spell_rune('irons_spellbooks:ice_rune','constructs_casting:ice_essence')
create_spell_rune('irons_spellbooks:cooldown_rune','tinkers_thinking:molten_lightite')
//create_spell_rune('irons_spellbooks:protection_rune','tconstruct:molten_lumium')
create_spell_rune('irons_spellbooks:fire_rune','constructs_casting:fire_essence')
create_spell_rune('irons_spellbooks:ender_rune','constructs_casting:ender_essence')
create_spell_rune('irons_spellbooks:holy_rune','constructs_casting:holy_essence')
create_spell_rune('irons_spellbooks:evocation_rune','constructs_casting:evocation_essence')

event.recipes.create.sequenced_assembly(
  ['irons_spellbooks:protection_rune'],
  TI,
  [
    event.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_lumium',360)]),
    event.recipes.createFilling(TI, [TI, Fluid.of('tconstruct:molten_lumium',360)]),
]).transitionalItem(TI).loops(1)
*/










}
)