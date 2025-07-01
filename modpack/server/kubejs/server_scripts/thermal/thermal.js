ServerEvents.recipes(event => {

event.recipes.thermal.smelter('4x ae2:sky_stone_block', ['ae2:sky_dust','minecraft:crying_obsidian', '2x minecraft:cobblestone'])


function EventRecipeRockGen(adjacent,below,out,id) {
    let recipe =  {
        "type": "thermal:rock_gen",
        "adjacent": adjacent,//右槽
        "result": Item.of(out)
    }
    if (below != '') {
        recipe.below = below
    }
    event.custom(recipe).id(id)
}
//EventRecipeRockGen(Slot_1, Slot_2, Output, Recipes ID)
EventRecipeRockGen('alexscaves:acid','ae2:flawless_budding_quartz','minecraft:andesite','kubejs:andesite')
EventRecipeRockGen('biomesoplenty:blood','minecraft:honey_block','biomesoplenty:porous_flesh','kubejs:flesh')

//流云
event.recipes.thermal.centrifuge([Fluid.of('kubejs:fluid_cloud', 250),'minecraft:glass_bottle'], 'quark:bottled_cloud')
//流云粉
event.recipes.thermal.crystallizer('kubejs:cloud_dust', ['chemlib:strontium_chloride', Fluid.of('kubejs:fluid_cloud', 250)])
//流云量产
event.recipes.thermal.smelter('4x kubejs:cloud_dust', ['chemlib:rubidium_carbonate_dust','thermal:lumium_ingot', 'kubejs:cloud_dust'])



event.recipes.thermal.smelter('quark:diamond_heart', ['6x minecraft:diamond','3x #forge:ingots/dragon_steel', 'touhou_little_maid:power_point']).energyMod(16.0)


//流云从粉变液态
event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_cloud', 250), 'kubejs:cloud_dust')

//下界合金门熔融
event.recipes.thermal.crucible(Fluid.of('tconstruct:molten_debris', 90),'supplementaries:netherite_trapdoor').energyMod(4.0)
event.recipes.thermal.crucible(Fluid.of('tconstruct:molten_debris', 90),'supplementaries:netherite_door').energyMod(4.0)

event.recipes.thermal.crucible(Fluid.of('create_wizardry:mana', 100),'biomesoplenty:magic_planks').energyMod(8.0)

//远古
event.recipes.thermal.refinery([Fluid.of('kubejs:greatrune_forgery_fluid', 30), Fluid.of('kubejs:ancient_essence', 70)], Fluid.of('kubejs:ancient_resin', 100)).energyMod(4.0)
event.recipes.thermal.centrifuge([Item.of('4x chemlib:chromium_oxide'), Fluid.of('kubejs:ancient_resin', 20)], 'alexscaves:tree_star').energyMod(4.0)

event.recipes.thermal.refinery(['5x thermal:rich_slag',Fluid.of('kubejs:waste_water', 900), Fluid.of('chemlib:sulfuric_acid_fluid', 100)], Fluid.of('kubejs:ore_fluid', 1000)).energy(72000)
event.recipes.thermal.refinery(['thermal:rich_slag',Fluid.of('cofh_core:experience', 50), Fluid.of('minecraft:water', 450)], Fluid.of('kubejs:waste_water', 500)).energy(72000)
//event.recipes.thermal.tree_extractor(Fluid.of('kubejs:ancient_resin', 100), 'minecraft:jungle_log', 'alexscaves:ancient_leaves')
//event.recipes.thermal.tree_extractor(Fluid.of('kubejs:ancient_resin', 100), 'quark:ancient_log', 'quark:ancient_leaves')

//绿宝石齿轮
event.recipes.thermal.press('thermal:emerald_gear', ['4x minecraft:emerald', 'thermal:press_gear_die'])

//lightning
event.recipes.thermal.centrifuge(["minecraft:glass_bottle",'hmag:lightning_particle'], 'irons_spellbooks:lightning_bottle').energy(50000)

//雷电粒子
event.recipes.thermal.chiller('hmag:lightning_particle',Fluid.of("create_wizardry:lightning",250)).energy(50000)

//prom
event.recipes.thermal.press('lavafishing:promethium_ingot', '64x chemlib:promethium').energy(100000)
event.recipes.thermal.centrifuge('64x chemlib:promethium', 'lavafishing:promethium_ingot')

event.recipes.thermal.centrifuge([Fluid.of('thermal:refined_fuel', 200),'2x thermal:rich_slag',
     Item.of('alexscaves:guano').withChance(0.2), 'delightful:animal_fat'],'ltc2:refined_underground_oil').energy(24000)



})