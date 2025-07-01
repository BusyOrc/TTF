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


})