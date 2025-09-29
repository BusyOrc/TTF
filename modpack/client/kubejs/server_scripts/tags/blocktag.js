ServerEvents.tags('block', event => {
//mystia
event.add('minecraft:mineable/pickaxe',
    [   'mystias_izakaya:table',
        "mystias_izakaya:cutting_board",
        "mystias_izakaya:boiling_pot",
        "mystias_izakaya:frying_pan",
        "mystias_izakaya:steamer",
        "mystias_izakaya:grill"
    ] )
event.add("forge:clusters",
    ['tconstruct:ichor_slime_crystal_cluster', 'tconstruct:earth_slime_crystal_cluster',
         'tconstruct:ender_slime_crystal_cluster', 'tconstruct:sky_slime_crystal_cluster']
)
//sakura
event.add('forge:ores',
    ['sakuratinker:eezo_ore',
     'sakuratinker:prometheum_ore',
      'sakuratinker:orichalcum_ore',
      'sakuratinker:orichalcum_ore_deepslate',
    'sakuratinker:terracryst_ore',
'sakuratinker:terracryst_ore_deepslate',
'irons_spellbooks:arcane_debris']
)

event.add('forge:rare_ores',
    ['sakuratinker:terracryst_ore',
         'tinkerscalibration:inert_witherium_ore',
          'tinkers_thinking:deepslate_chlorophyll_ore', 'tinkers_thinking:chlorophyll_ore',
           'tinkers_thinking:ardite_ore', 'sakuratinker:orichalcum_ore_deepslate',
            'sakuratinker:orichalcum_ore', 'sakuratinker:prometheum_ore', 'sakuratinker:eezo_ore',
             'tinkerscalibration:deepslate_titanium_ore',
         'tinkerscalibration:titanium_ore', 'tinkerscalibration:deepslate_stellarium_ore',
          'tinkerscalibration:stellarium_ore', 'sakuratinker:terracryst_ore_deepslate',
        'irons_spellbooks:arcane_debris']
)
event.add("minecraft:replaceable",['pasterdream:grass_3', 'pasterdream:grass_4',
     'pasterdream:dyedream_seagrass', 'pasterdream:fourleaf_clover',
      'pasterdream:grass_14', 'pasterdream:grass_15','pasterdream:grass_2', 'pasterdream:grass_1',
         'pasterdream:grass_7', 'pasterdream:grass_8', 'pasterdream:grass_9', 'pasterdream:grass_10',
          'pasterdream:grass_11', 'pasterdream:grass_12', 'pasterdream:grass_13'])


event.add('minecraft:crops',
    ['fruitsdelight:blueberry_bush',
    'fruitsdelight:cranberry_bush',
    'fruitsdelight:pineapple',
    'immortalers_delight:evolutcorn',
    'fruitsdelight:lemon_tree',
    'immortalers_delight:himekaido_shrub',
    'immortalers_delight:pearlipearl_stalk',
    'immortalers_delight:kwat_wheat']
)

event.add('nethersdelight:soul_compost_activators',['thermal:phytosoil_tilled','thermal:phytosoil'])
event.add('nethersdelight:fungus_colony_growable_on',['thermal:phytosoil_tilled','thermal:phytosoil'])

event.add("create:wrench_pickup",["#thermal:machines","#thermal:dynamos","#thermal:ducts",
    'laserio:laser_connector','laserio:laser_node','laserio:laser_connector_advanced',"#thermal:glass/hardened",
"thermal:energy_cell","thermal:fluid_cell",'thermal:fluid_cell_frame','thermal:energy_cell_frame','thermal:machine_frame',
'thermal:device_hive_extractor', 'thermal:device_tree_extractor', 'thermal:device_fisher', 'thermal:device_composter',
     'thermal:device_soil_infuser', 'thermal:device_water_gen', 'thermal:device_rock_gen', 'thermal:device_collector', 'thermal:device_xp_condenser',
    'thermal:device_xp_condenser', 'thermal:device_nullifier', 'thermal:device_potion_diffuser','thermal:item_buffer', 'thermal:charge_bench', 'thermal:tinker_bench',
    'sfm:cable', 'sfm:fancy_cable', 'sfm:manager', 'sfm:printing_press', 'sfm:water_tank',"#forge:heads",'mystias_izakaya:cooking_range',
'ars_nouveau:agronomic_sourcelink', 'ars_nouveau:enchanting_apparatus', 'ars_nouveau:source_jar', 'ars_nouveau:relay',
 'ars_nouveau:imbuement_chamber', 'ars_nouveau:relay_splitter', 'ars_nouveau:arcane_core', 'ars_nouveau:spell_turret', 'ars_nouveau:volcanic_sourcelink',
'ars_nouveau:wixie_cauldron', 'ars_nouveau:creative_source_jar', 'ars_nouveau:potion_jar', 'ars_nouveau:potion_melder', 'ars_nouveau:alchemical_sourcelink',
     'ars_nouveau:vitalic_sourcelink', 'ars_nouveau:mycelial_sourcelink', 'ars_nouveau:relay_deposit', 'ars_nouveau:relay_warp',"#ars_nouveau:summon_bed",
    'ars_nouveau:basic_spell_turret', 'ars_nouveau:timer_spell_turret', 'ars_nouveau:spell_prism', 'ars_nouveau:relay_collector', 'ars_nouveau:scryers_oculus',
         'ars_nouveau:potion_diffuser', 'ars_nouveau:void_prism', 'ars_nouveau:rotating_spell_turret', 'ars_nouveau:arcane_platform',
'ars_nouveau:magelight_torch', 'ars_nouveau:brazier_relay', 'ars_nouveau:arcane_pedestal', 'ars_nouveau:ritual_brazier', 'ars_nouveau:item_detector',
     'ars_nouveau:spell_sensor', 'ars_nouveau:redstone_relay', 'arseng:source_p2p_tunnel', 'starbunclemania:fluid_jar',
    'starbunclemania:source_condenser', 'starbunclemania:fluid_sourcelink', 'starbunclemania:cooking_pot_wixie_cauldron'])

})