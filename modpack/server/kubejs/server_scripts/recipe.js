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
          B: 'jewelcraft:golden_ring_diamond',  
          C: 'scannable:blank_module',
          D: 'jewelcraft:golden_amulet_diamond',
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
        'scannable:chest_module', 
        [
          'scannable:blank_module',
          'ae2:chest'
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
        'scannable:common_ores_module', 
        [
          'scannable:blank_module',
          'biomesoplenty:porous_flesh',
          'biomesoplenty:bramble'
        ]
      )

      event.remove([{id:'alchemistry:reactor_input'}, {id:'alchemistry:reactor_output'}, {id:'alchemistry:fusion_chamber_controller'}, {id:'alchemistry:fission_chamber_controller'}])
      event.shaped(
        'alchemistry:reactor_input', 
        [
          ' B ',
          ' A ', 
          ' B '
        ],
        {
          A: 'alchemistry:reactor_casing',
          B: 'create:brass_funnel'
        }
      )

      event.shaped(
        'alchemistry:reactor_output', 
        [
          ' B ',
          ' A ', 
          ' B '
        ],
        {
          A: 'alchemistry:reactor_casing',
          B: 'create:portable_storage_interface'
        }
      )

      event.shaped(
        'alchemistry:fusion_chamber_controller', 
        [
          'ABA',
          'CDE', 
          'ABA'
        ],
        {
          A: '#forge:ingots/dragon_steel',
          B: 'create:portable_storage_interface',
          C:'#thermal:glass/hardened',
          D:'cataclysm:witherite_ingot',
          E:'ae2:sky_dust'
        }
      )

      event.shaped(
        'alchemistry:fission_chamber_controller', 
        [
          'ABA',
          'ACA', 
          'ABA'
        ],
        {
          A: 'twilightforest:ironwood_ingot',
          B: 'quark:soul_bead',
          C: 'create:precision_mechanism'
        }
      )


      event.replaceOutput({input: 'minecraft:lodestone'}, 
        Ingredient.of('tconstruct:molten_netherite'), 
        Ingredient.of('tconstruct:molten_iron'))

      event.replaceInput({output: 'irons_spellbooks:alchemist_cauldron'}, 
          Ingredient.of('minecraft:iron_ingot'), 
          Ingredient.of('#forge:ingots/lead'))
    
      event.replaceInput({output: 'alchemistry:reactor_energy'}, 
            Ingredient.of('minecraft:redstone'), 
            Ingredient.of('create:electron_tube'))
      
      event.replaceInput({output: 'minecraft:fermented_spider_eye'}, 
              Ingredient.of('minecraft:brown_mushroom'), 
              Ingredient.of('#forge:bop_plants'))


         

      //雾化
      event.shaped(
        'alchemistry:atomizer', 
        [
          'ABA',
          'CDC', 
          'ABA'
        ],
        {
          A: '#forge:ingots/tin',
          B: 'create:mechanical_piston',
          C:  'irons_spellbooks:alchemist_cauldron',
          D: 'ae2:controller'
        }
      )

      //化合
      event.shaped(
        'alchemistry:combiner', 
        [
          'ABA',
          'CDC', 
          'AEA'
        ],
        {
          A: '#forge:ingots/brass',
          B: 'ae2:crafting_unit',
          C:  'irons_spellbooks:rare_ink',
          D: 'ae2:controller',
          E:'create:mechanical_piston'
        }
      )

      //压缩,溶解，液化

      event.shaped(
        'alchemistry:compactor', 
        [
          'ABA',
          'BCB', 
          'DBD'
        ],
        {
          A: '#forge:ingots/brass',
          B: 'create:mechanical_piston',
          C:  'ae2:controller',
          D: '#forge:ingots/lead'
        }
      )

      event.shaped(
        'alchemistry:dissolver', 
        [
          'ABA',
          'CDC', 
          'AEA'
        ],
        {
          A: '#forge:ingots/constantan',
          B: 'create:fluid_valve',
          C: 'irons_spellbooks:uncommon_ink',
          D: 'ae2:controller',
          E:'create_connected:brass_gearbox'
        }
      )

      event.shaped(
        'alchemistry:liquifier', 
        [
          'ABA',
          'ADA', 
          'ACA'
        ],
        {
          A: '#forge:ingots/electrum',
          B: 'create:fluid_valve',
          C:  'create:fluid_tank',
          D: 'ae2:controller'
        }
      )

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

event.replaceInput({output: '#jewelcraft:rose'}, 
  Ingredient.of('minecraft:pink_dye'), 
  Ingredient.of('create:polished_rose_quartz'))

event.replaceInput({output: '#jewelcraft:shadow'}, 
  Ingredient.of('minecraft:purple_dye'), 
  Ingredient.of('irons_spellbooks:arcane_essence'))

//egg tomato
/*
event.shapeless('farmersdelight:fried_egg','vanillacookbook:cooked_egg')
event.shapeless('vanillacookbook:cooked_egg','farmersdelight:fried_egg')
event.shaped(
  '3x farmersdelight:tomato', 
  [
    'AAA'
  ],
  {
    A: 'thermal:tomato'
    
  }
)
event.shaped(
  '3x thermal:tomato', 
  [
    'AAA'
  ],
  {
    A: 'farmersdelight:tomato'
    
  }
)
*/
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
    C:'irons_spellbooks:blood_vial',
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
    B:'alexsmobs:soul_heart',
    C:'kubejs:creative_mechanism',
    D:'cataclysm:void_core'
  }
)
/*
event.shaped(
  'immortalers_delight:golden_himekaido',
  [
'ABA',
'CDC',
'CBC'
  ],
  {
    A:'quark:moss_paste',
    B:'#forge:feathers',
    C:'#forge:ingots/gold',
    D:'immortalers_delight:himekaido'
  }
)
  */
/*
event.shaped(
  'ghasts_update:ghast_saddle',
  [
'   ',
'AAA',
'BCB'
  ],
  {
    A:'minecraft:leather',
    B:"minecraft:blue_wool",
    C:'create:goggles'
  }
)

event.shaped(
  'ghasts_update:purple_ghast_saddle',
  [
'   ',
'AAA',
'BCB'
  ],
  {
    A:'minecraft:leather',
    B:"minecraft:purple_wool",
    C:'create:goggles'
  }
)
*/


event.shaped('6x mystias_izakaya:nan_gua',
  ['PP'],
    {P:'minecraft:pumpkin'}
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

event.shaped('exmodifier:refresh_table',
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
)

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

let controllers = ['mbd2:aqua', 'mbd2:touhou_shrine',
     'mbd2:small_tofu_shrine', 'mbd2:patch', 'mbd2:big_tofu_shrine', 'mbd2:border_stablizer']

for(let i of controllers){
event.recipes.minecraft.stonecutting(i,'create_wizardry:arcane_casing')
}
})