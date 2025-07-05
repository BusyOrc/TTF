ServerEvents.recipes(event => {
    event.recipes.thermal.press('ae2:printed_calculation_processor', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press'])
    event.recipes.thermal.press('ae2:printed_engineering_processor', ['minecraft:diamond', 'ae2:engineering_processor_press'])
    event.recipes.thermal.press('ae2:printed_logic_processor', ['minecraft:gold_ingot', 'ae2:logic_processor_press'])
    event.recipes.thermal.press('ae2:printed_silicon', ['ae2:silicon', 'ae2:silicon_press'])

    event.recipes.thermal.smelter('ae2:calculation_processor', ['minecraft:redstone','ae2:printed_silicon','ae2:printed_calculation_processor'])
    event.recipes.thermal.smelter('ae2:engineering_processor', ['minecraft:redstone','ae2:printed_silicon','ae2:printed_engineering_processor'])
    event.recipes.thermal.smelter('ae2:logic_processor', ['minecraft:redstone','ae2:printed_silicon','ae2:printed_logic_processor'])

    event.recipes.thermal.smelter('2x ae2:fluix_crystal', ['minecraft:redstone','ae2:charged_certus_quartz_crystal','#ae2:all_nether_quartz'])
    event.recipes.thermal.pulverizer("ae2:sky_dust","ae2:sky_stone_block").energyMod(0.5)
    event.recipes.thermal.pulverizer('4x create:powdered_obsidian',"minecraft:obsidian").energyMod(1.5)

    event.recipes.thermal.crystallizer('ae2:damaged_budding_quartz', ['ae2:charged_certus_quartz_crystal', 'ae2:quartz_block',Fluid.of('minecraft:water',250)])
    event.recipes.thermal.crystallizer('ae2:chipped_budding_quartz', ['ae2:charged_certus_quartz_crystal', 'ae2:damaged_budding_quartz',Fluid.of('minecraft:water',250)])
    event.recipes.thermal.crystallizer('ae2:flawed_budding_quartz', ['ae2:charged_certus_quartz_crystal', 'ae2:chipped_budding_quartz',Fluid.of('minecraft:water',250)])

//能源炉
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_copper').energy(200)
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_iron').energy(2000)
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_gold').energy(20000)
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_emerald').energy(200000)
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_diamond').energy(2000000)
    event.recipes.thermal.lapidary_fuel('lightmanscurrency:coin_netherite').energy(20000000)


    ['ae2:charged_certus_quartz_crystal', 'ae2:quartz_block', 'ae2:damaged_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:flawed_budding_quartz']
})