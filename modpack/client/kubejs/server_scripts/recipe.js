ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:lodestone' })
    event.remove({ id: 'scannable:scanner' })
    event.remove({ id: 'scannable:rare_ores_module' })
    event.remove({ id: 'scannable:range_module' })
    event.remove({ id: 'scannable:chest_module' })
    event.remove({ id: 'scannable:block_module' })
    event.remove({ id: 'scannable:common_ores_module' })

    event.shaped(
        'minecraft:lodestone', 
        [
          'AAA',
          'ABA', 
          'AAA'
        ],
        {
          A: 'minecraft:chiseled_stone_bricks',
          B: 'minecraft:iron_ingot'
        }
      )



      event.shaped(
        'scannable:scanner', 
        [
          'A A',
          'BCB', 
          ' D '
        ],
        {
          A: 'thermalendergy:prismalium_ingot',
          B: 'ae2:sky_dust',  
          C: 'minecraft:lodestone',
          D:'ae2:fluix_crystal'
        }
      )

      event.shaped(
        'ae2:inscriber', 
        [
          'ABC',
          '  C', 
          'ABC'
        ],
        {
          A: 'create:andesite_alloy',
          B: 'minecraft:lodestone',  
          C: 'minecraft:copper_ingot'
        }
      )

      event.shaped(
        'scannable:rare_ores_module', 
        [
          ' A ',
          'BCD', 
          ' E '
        ],
        {
          A: '#forge:ingots/titanium',
          B: 'minecraft:diamond_block',  
          C: 'scannable:blank_module',
          D: 'minecraft:diamond',
          E: '#forge:ingots/silver'
        }
      )

      event.shapeless(
        'scannable:range_module', 
        [
          'scannable:blank_module',
          'ae2:wireless_receiver'
        ]
      )

      event.shapeless(
        'tinkers_thinking:chromatic_crystal', 
        ['tconstruct:ichor_slime_crystal', 'tinkers_thinking:magma_crystal', 'tconstruct:earth_slime_crystal', 'ae2:charged_certus_quartz_crystal',
           'ae2:fluix_crystal', 'hmag:evil_crystal', 'tconstruct:sky_slime_crystal', 'minecraft:amethyst_shard', 'tconstruct:ender_slime_crystal']
      )


      event.shapeless(
        'scannable:chest_module', 
        [
          'scannable:blank_module',
          'ae2:chest'
        ]
      )

      event.shapeless(
        'tconstruct:seared_drain', 
        [
          '#tconstruct:smeltery_bricks',
          'minecraft:phantom_membrane'
        ]
      )

      event.shapeless(
        'tconstruct:seared_chute', 
        [
          '#tconstruct:smeltery_bricks',
          'minecraft:phantom_membrane',
          'minecraft:bone_block'
        ]
      )

      event.shapeless(
        'scannable:block_module', 
        [
          'scannable:blank_module',
          'ae2:flawless_budding_quartz'
        ]
      )

      event.shapeless(
        'extendedcrafting:ultimate_component', 
        [
          'extendedcrafting:black_iron_slate',
          'extendedcrafting:luminessence',
          'goety:soul_emerald','goety:soul_emerald'
        ]
      )

      event.shapeless(
        'pasterdream:pale_boneneedle', 
        [
          'minecraft:bone',
          'kubejs:doremy_ingot',
          'minecraft:crying_obsidian',
          'ae2:fluix_crystal'
        ]
      )

      event.shapeless(
        'scannable:common_ores_module', 
        [
          'scannable:blank_module',
          'biomesoplenty:porous_flesh',
          'biomesoplenty:bramble'
        ]
      )

      event.shapeless(
        '4x tconstruct:blank_sand_cast', 
        [
          'pasterdream:dyedream_sand'
        ]
      )

      event.shapeless(
        '2x tinkers_thinking:ender_slime_drop', 
        [
          'tconstruct:ender_slime_ball',
          'thermal:ender_pearl_dust'
        ]
      )



      event.replaceOutput({input: 'minecraft:lodestone'}, 
        Ingredient.of('tconstruct:molten_netherite'), 
        Ingredient.of('tconstruct:molten_iron'))

      event.replaceInput({output: 'irons_spellbooks:alchemist_cauldron'}, 
          Ingredient.of('minecraft:iron_ingot'), 
          Ingredient.of('#forge:ingots/lead'))
      
      event.replaceInput({output: 'minecraft:fermented_spider_eye'}, 
              Ingredient.of('minecraft:brown_mushroom'), 
              Ingredient.of('#forge:bop_plants'))


        
//暮色木板合成箱子
event.shaped(
  'minecraft:chest', 
  [
    'AAA',
    'A A', 
    'AAA'
  ],
  {
    A: 'twilightforest:canopy_planks'
  }
)
event.shaped(
  'minecraft:chest', 
  [
    'AAA',
    'A A', 
    'AAA'
  ],
  {
    A: 'twilightforest:twilight_oak_planks'
    
  }
)

event.shaped(
  'createoreexcavation:vein_finder',
  [
' AB',
' DC',
'D  '
  ],
  {
    A:'irons_spellbooks:arcane_essence',
    B:'minecraft:ender_eye',
    C:'youkaishomecoming:blood_bottle',
    D:'minecraft:stick'
  }
)

event.shaped(
  'touhou_little_maid:favorability_tool_full',
  [
' A ',
'BCD',
' A '
  ],
  {
    A:'hmag:cubic_nucleus',
    B:'minecraft:diamond_block',
    C:'kubejs:creative_mechanism',
    D:'cataclysm:void_core'
  }
)



event.shaped('4x tinkers_thinking:silky_jewel',
  [' A ',
   'ABA',
   ' A '
  ],
    {A:'minecraft:emerald',
     B:'immortalers_delight:golden_fabric'
    }
)

/* event.shaped('exmodifier:refresh_table',
  [ 'EAE',
    'BCB',
    'DDD'
  ],
  {
    A:'kubejs:eye_in_mist',
    B:'thermal:enderium_glass',
    C:'thermal:enderium_gear',
    D:'minecraft:crying_obsidian',
    E:"#forge:ingots/dragon_steel"
  }
) */

event.shaped('mbd2:tofu_input',
  [
    'AAA',
    'BCD',
    'EEE'
  ],
  {
    A:'quark:moss_paste',
    B:'thermal:fluid_cell_frame',
    C:'ae2:controller',
    D:'thermal:energy_cell_frame',
    E:'tofucraft:kinako'
  }
)
/*
event.shaped('3x solarflux:mirror',
  [
    'AAA',
    'BCB'
  ],
  {
    A:'minecraft:glass',
    B:'ae2:matter_ball',
    C:'ae2:printed_silicon'
  }
)
event.shaped('2x solarflux:sp_6',
  [
    'AAA',
    'BCB',
    'BDB'
  ],
  {
    A:'solarflux:photovoltaic_cell_4',
    B:'solarflux:sp_5',
    C:'thermal:lumium_block',
    D:'advanced_ae:quantum_alloy'
  }
)
event.shaped('2x solarflux:sp_7',
  [
    'AAA',
    'BCE',
    'BDE'
  ],
  {
    A:'solarflux:photovoltaic_cell_5',
    B:'solarflux:sp_5',
    C:'thermal:invar_block',
    D:'advanced_ae:quantum_alloy_block',
    E:'solarflux:sp_tf.fiery'
  }
)
event.shaped('2x solarflux:sp_8',
  [
    'AAA',
    'BDE',
    'BDE'
  ],
  {
    A:'solarflux:photovoltaic_cell_6',
    B:'solarflux:sp_7',
    D:'advanced_ae:quantum_alloy_plate',
    E:'solarflux:sp_tf.carminite'
  }
)
*/
event.shaped('kubejs:flandre',
  [
    'ABC',
    'DEF',
    'GHI'
  ],
  {
    A:'quark:red_corundum_pane',
    B:'quark:orange_corundum_pane',
    C:'quark:yellow_corundum_pane',
    D:'quark:green_corundum_pane',
    E:'tinkers_thinking:chromatic_crystal',
    F:'quark:blue_corundum_pane',
    G:'quark:indigo_corundum_pane',
    H:'quark:violet_corundum_pane',
    I:'quark:white_corundum_pane'
  }
)


let controllers = ['mbd2:aqua', 'mbd2:touhou_shrine',
     'mbd2:small_tofu_shrine', 'mbd2:patch', 'mbd2:big_tofu_shrine', 'mbd2:border_stablizer']

for(let i of controllers){
event.recipes.minecraft.stonecutting(i,'ars_nouveau:source_gem_block')
}


event.shaped('createaddition:electric_motor',
  [
    ' S ',
    'CLC',
    ' S '
  ],
  {
L:'ae2:logic_processor',
S:'create:shaft',
C:'create:andesite_casing'
  }
)

event.shaped('createaddition:alternator',
  [
    ' S ',
    'CLC',
    ' S '
  ],
  {
L:'ae2:engineering_processor',
S:'create:shaft',
C:'create:andesite_casing'
  }
)

event.shaped('tconstruct:silky_cloth',
  [
    'DDD',
    ' P ',
    'SSS'
  ],
  {
    D:"pasterdream:dyedream_dirt",
    P:"#forge:dream_plants",
    S:'pasterdream:dyedream_glass'
  }
)

event.shaped("minecraft:wooden_axe",
  [
    ' DD',
    ' SD',
    ' S '
  ],
  {
    D:'#minecraft:planks',
    S:'create:cogwheel'
  }
)

event.shaped("minecraft:wooden_pickaxe",
  [
    'DDD',
    ' P ',
    ' P '
  ],
  {
    D:'#minecraft:planks',
    P:'create:cogwheel'
  }
)


event.shaped('twilightforest:transformation_powder',
  [
    'FFF',
    'FAF',
    'FFF'
  ],
  {
    F:'#minecraft:flowers',
    A:'minecraft:leather'
  }
)

event.shaped("3x minecraft:glass_bottle",
  [
    '   ',
    'F F',
    ' F '
  ],
  {
    F:'pasterdream:dyedream_glass'
  }
)

event.shaped('create:electron_tube',
  [
    ' R ',
    ' S ',
    ' F '
  ],
  {
    F:'ae2:fluix_crystal',
    S:'ae2:engineering_processor',
    R:'create:polished_rose_quartz'
  }
)

/*     event.shapeless('tconstruct:smeltery_controller', [
        '#minecraft:pickaxes',
        '#tconstruct:smeltery_bricks',
        '#forge:coral_blocks/alive'
    ])
    .damageIngredient(1)
    .keepIngredient('#minecraft:pickaxes') */
    
event.shaped('ttf:magic_tube',
  [
    ' R ',
    'CSC',
    ' C '
  ],
  {
    C:'minecraft:amethyst_shard',
    S:'starbunclemania:source_fluid_bucket',
    R:'create:electron_tube'
  }
)

event.shaped('extendedcrafting:crystaltine_ingot',
  [
    'CCC',
    'CRC',
    'CCC'
  ],
  {
    C:'ae2:charged_certus_quartz_crystal',
    R:'appflux:charged_redstone'
  }
)

event.shaped('thermal:rf_coil',
  [
    '  S',
    ' M ',
    'S  '
  ],
  {
S:'appflux:redstone_crystal',
M:'ttf:magic_tube'
  }
)

event.shaped('32x tofucraft:filtercloth',
  [
    ' W ',
    'WCW',
    ' W '
  ],
  {
W:"#minecraft:wool",
C:'minecraft:string'
  }
)

event.shaped(Item.of('irons_restrictions:manuscript', '{SchoolId:"cataclysm_spellbooks:abyssal"}'),
  [
    ' W ',
    'WCW',
    ' W '
  ],
  {
W:'irons_restrictions:fragment',
C:'goety_cataclysm:abyss_essence'
  }
)

event.shaped(Item.of('irons_restrictions:manuscript', '{SchoolId:"cataclysm_spellbooks:technomancy"}'),
  [
    ' W ',
    'WCW',
    ' W '
  ],
  {
W:'irons_restrictions:fragment',
C:'appflux:redstone_crystal'
  }
)

event.shaped(Item.of('irons_restrictions:manuscript', '{SchoolId:"alshanex_familiars:sound"}'),
  [
    ' W ',
    'WCW',
    ' W '
  ],
  {
W:'irons_restrictions:fragment',
C:'minecraft:note_block'
  }
)

event.shaped('createsifter:brass_sifter',
  [
    'LLL',
    'BCB',
    'BMB'
  ],
  {
M:"kubejs:magic_tube",
B:'create:brass_block',
C:'createsifter:sifter',
L:'thermal:lead_plate'
  }
)

event.shaped('kubejs:stacked_charged_redstone',
  [
    'SSS',
    'SSS',
    'SSS'
  ],
  {
S:'appflux:charged_redstone'
  }
)

event.shaped('beyonddimensions:net_interface',
  [
    'FMF',
    'MSM',
    'FMF'
  ],
  {
M:'expatternprovider:oversize_interface',
F:'fluxnetworks:flux_core',
S:'appflux:core_256m'
  }
)

event.shaped('mbd2:create1',
  [
    ' C ',
    'MAM',
    'LLL'
  ],
  {
M:'create:mechanical_saw',
A:'create:andesite_casing',
L:'create:linear_chassis',
C:'create:chain_conveyor'
  }
)

event.shaped('mbd2:mental_generator',
  [
    'MEM',
    'FAF',
    'MEM'
  ],
  {
M:'ae2:matter_ball',
F:'ae2:fluix_pearl',
E:'ae2:engineering_processor',
A:'ae2:cell_component_256k'
  }
)

event.shaped('mbd2:oil_drill',
  [
    'PSR',
    'ERE',
    'RSP'
  ],
  {
E:'extendedae_plus:64x_crafting_accelerator',
P:'create:precision_mechanism',
R:'thermal:rf_coil',
S:'create:sturdy_sheet'
  }
)

event.shaped('thermal:redstone_servo',
  [
    'C C',
    ' I ',
    'C C'
  ],
  {
    C:'appflux:charged_redstone',
    I:'create:iron_sheet'
  }
)

event.shaped('mbd2:input_casing',
  [
    ' C ',
    ' A ',
    ' C '
  ],
  {
    C:'create:chute',
    A:'create:andesite_casing'
  }
)

event.shaped('mbd2:output_casing',
  [
    ' C ',
    ' A ',
    ' C '
  ],
  {
    C:'create:andesite_funnel',
    A:'create:andesite_casing'
  }
)

event.shaped('mbd2:killing_machine',
  [
    ' S ',
    'FAF',
    ' S '
  ],
  {
    S:'create:shaft',
    A:'create:andesite_casing',
    F:'farmersdelight:safety_net'
  }
)

event.shaped('mbd2:mech_interface',
  [
    ' S ',
    'FIF',
    ' S '
  ],
  {
    S:'create_connected:six_way_gearbox',
    I:'ae2:interface',
    F:'farmersdelight:safety_net'
  }
)

event.shaped('mbd2:stress1',
  [
    'MMM',
    'MGM',
    'MMM'
  ],
  {
    G:'create:gearbox',
    M:'ae2:matter_ball'
  }
)

})