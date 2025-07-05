ServerEvents.recipes(event => {

    event.shaped(
        'meetyourfight:fossil_bait', 
        [
          ' A ',
          'CBC', 
          ' A '
        ],
        {
          A: '#forge:slimeballs',
          B: '#minecraft:fishes',
          C: 'biomesoplenty:chiseled_brimstone_bricks'
        }
      )

    event.shaped(
        'meetyourfight:fossil_bait', 
        [
          'DAD',
          'CBC', 
          'DAD'
        ],
        {
          A: 'thermal:deep_aquachow',
          B: '#minecraft:fishes',
          C: 'quark:gunpowder_sack',
          D: 'thermal:red_rockwool'
        }
      )

    event.shaped(
        'meetyourfight:haunted_bell', 
        [
          'NNN',
          'BAB', 
          'NNN'
        ],
        {
          A: 'minecraft:bell',
          B: 'biomesoplenty:cattail',
          N: 'minecraft:nether_bricks'
        }
      )

    event.shaped(
        'meetyourfight:haunted_bell', 
        [
          'NNN',
          'BAB', 
          'NNN'
        ],
        {
          A: 'create:haunted_bell',
          B: 'thermal:electrum_gear',
          N: 'thermal:signalum_plate'
        }
      ) 
    event.shaped(
        'meetyourfight:devils_ante', 
        [
          'CSB',
          'ARA', 
          'BSC'
        ],
        {
          A: 'hmag:randomberry',
          B: 'supplementaries:blackstone_lamp',
          C: 'minecraft:red_glazed_terracotta',
          R: 'biomesoplenty:waterlily',
          S: 'hmag:shulker_shell_block'
        }
      )        
    event.shaped(
        'meetyourfight:devils_ante', 
        [
          'BSB',
          'ARA', 
          'BSB'
        ],
        {
          A: 'thermalendergy:prismalium_block',
          B: 'create:rose_quartz_lamp',
          R: 'create:blaze_cake_base',
          S: 'chemlib:polyvinyl_chloride_plate'
        }
      )      
      
    event.shaped(
        'meetyourfight:dusk_key', 
        [
          'TPT',
          'GKG', 
          'DDD'
        ],
        {
            T:'biomesoplenty:huge_clover_petal',
            P:'#minecraft:decorated_pot_sherds',
            G:'nethersdelight:propelplant_cane',
            K:'kubejs:dream_tofu',
            D:'farmersdelight:rich_soil'
        }
      )        

    event.shaped(
        'meetyourfight:dusk_key', 
        [
          'TPT',
          'GKG', 
          'DDD'
        ],
        {
            T:'sakuratinker:aurumos',
            P:'ae2:singularity',
            G:'thermalendergy:stellarium_plate',
            K:'storagedrawers:personal_key_cofh',
            D:'thermal:phytosoil'
        }
      )       

})