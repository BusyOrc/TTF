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

EventRecipeRockGen('biomesoplenty:blood','minecraft:honey_block','biomesoplenty:porous_flesh','kubejs:flesh')

//流云
event.recipes.thermal.centrifuge([Fluid.of('kubejs:fluid_cloud', 250),'minecraft:glass_bottle'], 'quark:bottled_cloud')
//流云粉
event.recipes.thermal.crystallizer('kubejs:cloud_dust', ['advanced_ae:shattered_singularity', Fluid.of('kubejs:fluid_cloud', 250)])
//流云量产
event.recipes.thermal.smelter('4x kubejs:cloud_dust', ['ars_nouveau:air_essence','thermal:lumium_ingot', 'kubejs:cloud_dust'])



event.recipes.thermal.smelter('quark:diamond_heart', ['6x minecraft:diamond','3x #forge:ingots/dragon_steel', 'touhou_little_maid:power_point']).energyMod(16.0)
event.recipes.thermal.smelter('mystias_izakaya:reisen', ['16x ltc2:refined_salt_block','5x ltc2:hotaurum_ingot', 'hmag:fortune_crystal']).energyMod(16.0)
event.recipes.thermal.smelter('cataclysm:black_steel_ingot',['extendedcrafting:black_iron_ingot','thermal:coal_coke']).energyMod(2)

//粉变液态
event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_cloud', 250), 'kubejs:cloud_dust')


event.recipes.thermal.crucible(Fluid.of('starbunclemania:source_fluid', 100),'biomesoplenty:magic_planks').energyMod(0.8)

//远古
event.recipes.thermal.refinery([Fluid.of('kubejs:greatrune_forgery_fluid', 30), Fluid.of('kubejs:ancient_essence', 70)], Fluid.of('kubejs:ancient_resin', 100)).energyMod(4.0)


event.recipes.thermal.refinery(['5x thermal:rich_slag',Fluid.of('kubejs:waste_water', 900), Fluid.of('starbunclemania:source_fluid', 200)], Fluid.of('kubejs:ore_fluid', 1000)).energy(72000)
event.recipes.thermal.refinery(['thermal:rich_slag',Fluid.of('cofh_core:experience', 50), Fluid.of('minecraft:water', 450)], Fluid.of('kubejs:waste_water', 500)).energy(72000)

event.recipes.thermal.crystallizer('irons_spellbooks:lightning_bottle',[Fluid.of("starbunclemania:source_fluid",100),'minecraft:glass_bottle','hmag:lightning_particle'])

//绿宝石齿轮
event.recipes.thermal.press('thermal:emerald_gear', ['4x minecraft:emerald', 'thermal:press_gear_die'])

//lightning
event.recipes.thermal.centrifuge(["minecraft:glass_bottle",'hmag:lightning_particle'], 'irons_spellbooks:lightning_bottle').energy(50000)


event.recipes.thermal.centrifuge([Fluid.of('thermal:refined_fuel', 200),'2x thermal:rich_slag',
    'delightful:animal_fat'],'ltc2:refined_underground_oil').energy(24000)

event.recipes.thermal.insolator([Item.of('fruitsdelight:pineapple').withChance(1.5),Item.of('fruitsdelight:pineapple_sapling').withChance(1.2)],
    'fruitsdelight:pineapple_sapling').energyMod(4.0)

    event.recipes.thermal.insolator(Item.of('biomesoplenty:burning_blossom').withChance(1.8),
    'biomesoplenty:burning_blossom').energyMod(8.0)

event.recipes.thermal.centrifuge([Fluid.of("sakuratinker:molten_fire_dragon_blood",125),"minecraft:glass_bottle"],'iceandfire:fire_dragon_blood')
event.recipes.thermal.centrifuge([Fluid.of("sakuratinker:molten_ice_dragon_blood",125),"minecraft:glass_bottle"],'iceandfire:ice_dragon_blood')
event.recipes.thermal.centrifuge([Fluid.of("sakuratinker:molten_lightning_dragon_blood",125),"minecraft:glass_bottle"],'iceandfire:lightning_dragon_blood')
})