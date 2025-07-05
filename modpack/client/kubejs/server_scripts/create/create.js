ServerEvents.recipes(event => {

event.recipes.create.milling(['thermal:niter','chemlib:carbonate_dust','2x chemlib:phosphate_dust'], 'biomesoplenty:dried_salt')
event.recipes.create.crushing(['thermal:niter','2x chemlib:carbonate_dust','3x chemlib:phosphate_dust'], 'biomesoplenty:dried_salt')

event.recipes.create.haunting('minecraft:rotten_flesh','#forge:foods/meat/raw')
event.recipes.create.splashing(['minecraft:blaze_powder',Item.of('minecraft:blaze_powder').withChance(0.3)],'biomesoplenty:burning_blossom')
event.recipes.create.filling('alexscaves:radon_bottle',[Fluid.of('chemlib:radon_fluid',250),'minecraft:glass_bottle'])

event.recipes.create.deploying('create:polished_rose_quartz', ['#forge:gems/rose_quartz', 'chemlib:polyvinyl_chloride_plate']).keepHeldItem()

//event.recipes.create.filling('youkaishomecoming:blood_bottle',[Fluid.of('biomesoplenty:blood',250),'minecraft:glass_bottle'])

event.recipes.create.mixing(Fluid.of("create_wizardry:lightning",250),'hmag:lightning_particle').heated()
event.recipes.create.mixing(Fluid.of('chemlib:sulfuric_acid_fluid', 50),['thermal:sulfur_dust','4x minecraft:blue_ice']).superheated()


event.custom(
{
  "type": "youkaishomecoming:simple_fermentation",
  "ingredients": [
    {
      "item": "minecraft:rose_bush"
    },
    {
      "item": "minecraft:rose_bush"
    },
    {
      "item": "minecraft:poppy"
    },
    {
      "item": "youkaishomecoming:red_circle_danmaku"
    },
    {
      "item": "youkaishomecoming:red_circle_danmaku"
    }
  ],
  "inputFluid": {
    "amount": 1000,
    "fluid": "biomesoplenty:blood"
  },
  "outputFluid": {
    "amount": 1000,
    "fluid": "youkaishomecoming:scarlet_mist"
  },
  "results": [],
  "time": 3600
}
)
event.recipes.create.compacting('irons_spellbooks:frozen_bone',['4x minecraft:blue_ice','minecraft:bone'])

event.custom(
{
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "item": "minecraft:nether_wart",
      },
      {
        "amount": 500,
        "fluid": "minecraft:milk",
        "nbt": {}
      },
      {
        "item": "createaddition:biomass_pellet"
      }
    ],
    "results": [
      {
        "amount": 1000,
        "fluid": "biomesoplenty:blood",
        "nbt": {}
      }
    ]
  }
)



//烈焰血
  event.custom(
  {
      "type": "create:mixing",
      "heatRequirement": "superheated",
      "ingredients": [
        {
          "item": "biomesoplenty:porous_flesh",
        },
        {
          "amount": 1000,
          "fluid": "minecraft:lava",
          "nbt": {}
        },
        {
          "item": "quark:moss_paste",
        }
      ],
      "results": [
        {
          "amount": 1000,
          "fluid": "tconstruct:blazing_blood",
          "nbt": {}
        }
      ]
    }
  )

  event.custom(
      {
          "type": "create:mixing",
          "heatRequirement": "heated",
          "ingredients": [
            {
              "amount": 50,
              "fluid": "minecraft:water",
              "nbt": {}
            },
            {
              "amount": 100,
              "fluid": 'minecraft:lava',
              "nbt": {}
            }
          ],
          "results": [
            {
              "amount": 100,
              "fluid": "tconstruct:molten_obsidian",
              "nbt": {}
            }
          ]
        }
      )


        
//alex洞穴

        event.recipes.create.mechanical_crafting('minecraft:sniffer_egg', [

          ' C D ',
          'GBABG',
          ' E F '
        ], {
A: 'alexscaves:pearl',
B: '#alexscaves:radon_lamps',
C: 'alexscaves:scarlet_neodymium_ingot',
D: 'alexscaves:azure_neodymium_ingot',
E: 'alexscaves:ancient_sapling',
F: 'alexscaves:moth_ball',
G: 'chemlib:uranium_dust'

        })

    //种田
event.recipes.create.mechanical_crafting('8x ae2:fluix_block', [
          'AGHA',
          'ACDA',
          'AEFA',
          'BBBB'
        ], {
A: 'farmersdelight:safety_net',
B: 'farmersdelight:rich_soil',
C: 'miners_delight:pasta_with_veggieballs',
D: 'fruitsdelight:lychee_chicken',
E: 'nethersdelight:warped_moldy_meat',
F: 'farmersdelight:fruit_salad',
G: 'minecraft:pumpkin_pie',
H: 'supplementaries:candy'

        })



      

//黑曜石缠魂
event.recipes.create.haunting('minecraft:crying_obsidian','minecraft:obsidian')


//粉碎陨石
/*
event.custom(
{"type":"immersiveengineering:crusher",
  "energy":6000,
  "input":{"item":'ae2:sky_stone_block'},
  "result":{"base_ingredient":{"item":'ae2:sky_stone_block'},"count":1},
  "secondaries":[{"chance":0.55,"output":{"item":'ae2:sky_dust'}}]}
)
*/
//搅拌得无暇母岩
event.recipes.create.mixing('ae2:flawless_budding_quartz', ['4x ae2:charged_certus_quartz_crystal', 'ae2:flawed_budding_quartz', 'minecraft:crying_obsidian',Fluid.of("supplementaries:lumisene",1000)]).heated()

//荧光
event.recipes.create.mixing(Fluid.of("supplementaries:lumisene",125),'minecraft:glow_berries')



let IBM = 'kubejs:incomplete_biochem_mechanism'
event.recipes.create.sequenced_assembly(
  ['kubejs:biochem_mechanism'],
  'hmag:fortune_crystal_plus',
  [
    event.recipes.createDeploying(IBM, [IBM, 'minecraft:torchflower']),
    event.recipes.createFilling(IBM, [IBM, Fluid.of('thermal:refined_fuel',1000)]),
    event.recipes.createDeploying(IBM, [IBM, 'quark:ancient_fruit']),
    event.recipes.createDeploying(IBM, [IBM, 'minecraft:totem_of_undying']),
    event.recipes.createDeploying(IBM, [IBM, 'minecraft:honey_block']),
    event.recipes.createDeploying(IBM, [IBM, '#minecraft:decorated_pot_sherds']),
    event.recipes.createDeploying(IBM, [IBM, 'chemlib:polyvinyl_chloride_plate'])
  
]).transitionalItem(IBM).loops(3)




//岩浆
event.recipes.create.mixing(Fluid.of("tconstruct:magma",1000),['chemlib:potassium_permanganate', 'chemlib:copper_nitrate', Fluid.of('chemlib:hydrogen_sulfide_fluid',500)]).heated()



//添彩
event.recipes.create.crushing(['2x minecraft:red_dye','2x minecraft:sugar',Item.of('minecraft:beetroot_seeds').withChance(0.1)],'minecraft:beetroot')
event.recipes.create.milling(['2x minecraft:red_dye','2x minecraft:sugar',Item.of('minecraft:beetroot_seeds').withChance(0.1)],'minecraft:beetroot')

//乳胶
event.recipes.create.mixing('3x thermal:rubber',Fluid.of('thermal:latex',1000))
event.recipes.create.mixing('thermal:rubber',[Fluid.of('minecraft:water',1000),'8x minecraft:vine'])
event.recipes.create.mixing('thermal:rubber',[Fluid.of('minecraft:water',1000),'8x minecraft:dandelion'])


//生化构件反哺陶片
event.recipes.create.mixing(['kubejs:biochem_mechanism','3x minecraft:prize_pottery_sherd' ],['kubejs:biochem_mechanism','3x minecraft:brick','minecraft:nether_star'])

//缠魂木炭
event.recipes.create.haunting('minecraft:coal','minecraft:charcoal')
event.recipes.create.haunting('minecraft:coal_block','#forge:storage_blocks/charcoal')

//荆棘
event.recipes.create.mixing(Fluid.of("biomesoplenty:blood", 500), [Fluid.of("minecraft:water",500),'biomesoplenty:bramble'])

event.recipes.create.filling('irons_spellbooks:blank_rune', ['chemlib:actinium_plate', Fluid.of('kubejs:ancient_essence',180)])

let ICM = 'kubejs:incomplete_creative_mechanism'
event.recipes.create.sequenced_assembly(
  ['kubejs:creative_mechanism'],
  'kubejs:biochem_mechanism',
  [
    event.recipes.createDeploying(ICM, [ICM, 'irons_spellbooks:blank_rune']),
    event.recipes.createFilling(ICM, [ICM, Fluid.of('sakuratinker:molten_eezo',1000)]),
    event.recipes.createDeploying(ICM, [ICM, 'irons_spellbooks:upgrade_orb']),
    event.recipes.createFilling(ICM, [ICM, Fluid.of('chemlib:epinephrine_fluid',1000)]),
    event.recipes.createDeploying(ICM, [ICM, 'hmag:endless_pearl']),
    event.recipes.createDeploying(ICM, [ICM, 'quark:diamond_heart'])
  
]).transitionalItem(ICM).loops(5)
/*
//创哥
event.recipes.create.mechanical_crafting('createaddition:creative_energy', [
  'NSSSN',
  'SDAVS',
  'SACAS',
  'SUAFS',
  'NSSSN'
], {
A: 'createaddition:alternator',
C: 'kubejs:creative_mechanism',
S: 'ae2:singularity',
N: '#forge:storage_blocks/netherite',
D:'quark:diamond_heart',
V:'cataclysm:void_core',
U:'cataclysm:cursium_block',
F:'cataclysm:music_disc_the_leviathan'
})

event.recipes.create.mechanical_crafting('create:creative_blaze_cake', [
  'NSSSN',
  'SKDMS',
  'SACES',
  'SOFRS',
  'NSSSN'
], {
A: 'vanillacookbook:glow_berry_cake',
D: 'tconstruct:magma_cake',
E: 'tconstruct:ender_cake',
F: 'nffgirls:soul_cake',
C: 'kubejs:creative_mechanism',
S: 'ae2:singularity',
N:'create:blaze_cake_base',
K:'irons_spellbooks:keeper_flamberge',
M:'cataclysm:ancient_metal_block',
O:'cataclysm:monstrous_horn',
R:'alexscaves:resistor_shield'
})

*/

/*
//重油轻油洗矿
event.recipes.create.mixing([
  '2x chemlib:rubidium_carbonate_dust',
  Item.of('create:raw_zinc_block').withChance(0.98),
  Item.of('thermal:raw_lead_block').withChance(0.98),
  Item.of('thermal:raw_tin_block').withChance(0.98),
  '5x tconstruct:debris_nugget',
  Fluid.of('thermal:ender',1000)

],['alexscaves:polymer_plate',Fluid.of('thermal:heavy_oil',500)]).superheated()

event.recipes.create.mixing([
  '3x chemlib:strontium_chloride_dust',
  Item.of('tconstruct:raw_cobalt_block').withChance(0.2),
  Item.of('thermal:raw_silver_block').withChance(0.98),
  Item.of('thermal:raw_nickel_block').withChance(0.98),
  Item.of('minecraft:raw_copper_block').withChance(0.98),
  Fluid.of('thermal:glowstone',1000)

],['alexscaves:polymer_plate',Fluid.of('thermal:light_oil',500)]).superheated()
*/
//CD
event.recipes.create.deploying('minecraft:music_disc_cat',['netmusic:music_cd','betterarcheology:ocelot_fossil']).keepHeldItem()
event.recipes.create.deploying('minecraft:music_disc_13',['netmusic:music_cd','betterarcheology:creeper_fossil']).keepHeldItem()

event.recipes.create.emptying([Fluid.of('supplementaries:lumisene',250), 'minecraft:glass_bottle'], 'supplementaries:lumisene_bottle')
event.recipes.create.filling('supplementaries:lumisene_bottle',[Fluid.of('supplementaries:lumisene',250), 'minecraft:glass_bottle'] )




//黑石
event.recipes.create.mixing('minecraft:gilded_blackstone',['minecraft:blackstone',Fluid.of('tconstruct:molten_gold',270)]).heated()

//铃仙
event.recipes.create.mechanical_crafting('mystias_izakaya:reisen', [
  ' ABA ',
  'CCDCC',
  ' E E ',
  ' E E '
], {
A:'iceandfire:earplugs',
B:'simplehats:rabbitears',
C:'minecraft:rabbit_hide',
D:'simplehats:rabbitonhead',
E:'minecraft:rabbit_foot'
})
/*
event.recipes.create.mixing(
  ['8x minecraft:gold_nugget', '11x minecraft:iron_nugget', '5xtconstruct:debris_nugget',Item.of('tconstruct:debris_nugget').withChance(0.5), '6x minecraft:rotten_flesh'],
  ['4x quark:moss_paste', 'easy_villagers:villager', Fluid.of('alexscaves:acid',1000), Fluid.of('thermal:heavy_oil',500)]).superheated()
*/




//event.recipes.create.mixing(Fluid.of("kubejs:magic_fuel",1000),["touhou_little_maid:power_point", "irons_spellbooks:arcane_essence"]).heated()

event.custom(
  {
  "type": "create:item_application",
  "ingredients": [
    {
      "tag": "forge:stripped_logs"
    },
    {
      "item": "irons_spellbooks:arcane_ingot"
    }
  ],
  "results": [
    {
      "item": "create_wizardry:arcane_casing"
    }
  ]
}
)









  })