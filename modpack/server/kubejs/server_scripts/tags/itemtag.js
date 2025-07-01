ServerEvents.tags('item', event => {
    //添加职务标签，工作的时候称植物
    event.add('forge:bop_plants', [
        'biomesoplenty:enderphyte',
        'biomesoplenty:lumaloop',
        '#supplementaries:flower_box_plantable',
        'biomesoplenty:cattail',
        'biomesoplenty:tiny_cactus',
        'biomesoplenty:reed',
        'biomesoplenty:watergrass',
        'biomesoplenty:bramble',
        'biomesoplenty:bramble_leaves',
        'biomesoplenty:dune_grass',
        'biomesoplenty:sea_oats',
        'biomesoplenty:sprout',
        'biomesoplenty:bush',
        'biomesoplenty:high_grass',
        'biomesoplenty:clover',
        'biomesoplenty:huge_clover_petal',
        'biomesoplenty:huge_lily_pad',
        'biomesoplenty:waterlily',
        'biomesoplenty:tundra_shrub',
        'biomesoplenty:dead_grass',
        'biomesoplenty:desert_grass'

    ])


    event.add('forge:stoves',['refurbished_furniture:light_stove', 'twilightdelight:maze_stove',
         'nethersdelight:blackstone_stove', 'tinkers_delight:scorched_stove_on',
         'tinkers_delight:seared_stove_on', 'farmersdelight:stove', 'ends_delight:end_stove'])

    event.add('forge:salt','refurbished_furniture:sea_salt')
    event.add('forge:soysauce','youkaishomecoming:soy_sauce_bottle')
    event.add('forge:ingots/dragon_steel',['iceandfire:dragonsteel_fire_ingot','iceandfire:dragonsteel_ice_ingot','iceandfire:dragonsteel_lightning_ingot'])
    event.add('forge:heads','supplementaries:enderman_head')
    event.add('thermal:crafting/casts','tconstruct:ingot_cast')
    event.add('forge:crops',
        ['fruitsdelight:cranberry',
             'fruitsdelight:pineapple',
              'immortalers_delight:kwat_wheat',
             'fruitsdelight:lemon',
              'immortalers_delight:pearlipearl',
               'fruitsdelight:blueberry',
                'immortalers_delight:himekaido',
                'immortalers_delight:evolutcorn_grains']
    )

    event.add('forge:seeds',
        ['fruitsdelight:cranberry', 'immortalers_delight:pearlipearl',
             'fruitsdelight:blueberry', 'immortalers_delight:evolutcorn_grains',
              'immortalers_delight:himekaido_seed', 'immortalers_delight:kwat_wheat_seeds']
    )

    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium')

    event.add('thermal:crafting/dies',['ae2:calculation_processor_press', 'ae2:engineering_processor_press', 'ae2:logic_processor_press', 'ae2:silicon_press'])

    event.add('forge:cheese',['vanillacookbook:cheese', 'refurbished_furniture:cheese'])

event.add('forge:ingots/uranium', 'alexscaves:uranium')


    event.add('createaddtion:plants', [
        'biomesoplenty:enderphyte',
        'biomesoplenty:lumaloop',
        '#supplementaries:flower_box_plantable',
        'biomesoplenty:cattail',
        'biomesoplenty:tiny_cactus',
        'biomesoplenty:reed',
        'biomesoplenty:watergrass',
        'biomesoplenty:bramble',
        'biomesoplenty:bramble_leaves',
        'biomesoplenty:dune_grass',
        'biomesoplenty:sea_oats',
        'biomesoplenty:sprout',
        'biomesoplenty:bush',
        'biomesoplenty:high_grass',
        'biomesoplenty:clover',
        'biomesoplenty:huge_clover_petal',
        'biomesoplenty:huge_lily_pad',
        'biomesoplenty:waterlily',
        'biomesoplenty:tundra_shrub',
        'biomesoplenty:dead_grass',
        'biomesoplenty:desert_grass'



    ])

//    const hats = Ingredient.of(/.*simplehats.*/).getObjectIds()
//    const blacklist1 = Ingredient.of(/.*hatbag.*/)
//    const blacklist2 = Ingredient.of(/.*scrap.*/)
//    const blacklist3 = Ingredient.of(/.*hatdisplay.*/)
//    hats.forEach(hat => {
//        if ((!blacklist1.test(hat)) * (!blacklist2.test(hat)) * (!blacklist3.test(hat)))
//            event.add('curios:head', hat)
//    })



event.add('curios:body', ['create_jetpack:jetpack','create_jetpack:netherite_jetpack' ])
/*
event.add('forge:twohanded_weapons', [
'#spartanweaponry:pikes',
'#spartanweaponry:quarterstaves',
'#spartanweaponry:katanas',
'#spartanweaponry:warhammers',
'#spartanweaponry:longswords',
'#spartanweaponry:halberds',
'#spartanweaponry:greatswords',
'#spartanweaponry:glaives',
'#spartanweaponry:battleaxes',
'#spartanweaponry:flanged_maces'

])

*/

//jewels
event.add('jewelcraft:rose',/^jewelcraft.*_rose$/ )
event.add('jewelcraft:shadow',/^jewelcraft.*_shadow$/ )
event.add('jewelcraft:onyx',/^jewelcraft.*_onyx$/)
event.add('jewelcraft:quartz',/^jewelcraft.*_quartz$/)
event.add('jewelcraft:redstone',/^jewelcraft.*_redstone$/)
event.add('jewelcraft:lapis',/^jewelcraft.*_lapis$/ )
event.add('jewelcraft:diamond',/^jewelcraft.*_diamond$/ )
event.add('jewelcraft:emerald',/^jewelcraft.*_emerald$/ )
event.add('jewelcraft:amethyst',/^jewelcraft.*_amethyst$/ )

//mashu
event.add('youkaishomecoming:dango', 'mystias_izakaya:ma_shu')

//油腻
event.add('forge:sculk',['minecraft:sculk_sensor', 'minecraft:sculk_shrieker', 'minecraft:sculk_catalyst'] )

//空心
event.add('quark:hollow_logs',['twilightforest:hollow_cherry_log', 'twilightforest:hollow_vangrove_log',
     'twilightforest:hollow_warped_stem', 'twilightforest:hollow_crimson_stem', 'twilightforest:hollow_dark_oak_log',
      'twilightforest:hollow_acacia_log', 'twilightforest:hollow_jungle_log', 'twilightforest:hollow_birch_log',
       'twilightforest:hollow_spruce_log', 'twilightforest:hollow_twilight_oak_log', 'twilightforest:hollow_canopy_log',
        'twilightforest:hollow_mangrove_log', 'twilightforest:hollow_dark_log', 'twilightforest:hollow_time_log',
     'twilightforest:hollow_transformation_log', 'twilightforest:hollow_mining_log', 'twilightforest:hollow_sorting_log', 'twilightforest:hollow_oak_log'])

event.add('forge:legendary_items','mushroom_daydream:legend_paper')

event.add('forge:tofu',['youkaishomecoming:tofu','tofucraft:tofuishi'])

event.remove('minecraft:music_discs', 'supplementaries:pancake')

//event.add('spartanweaponry:oilable_weapons','#tconstruct:modifiable/melee')

/*let melee=[
    "tconstruct:cleaver", "tinkers_things:halberd", "tconstruct:broadaxe", "tconstruct:scythe",
     "things:amethyst_staff", "things:quartz_staff", "tconstruct:sword", "tconstruct:hand_axe",
      "tinkers_thinking:paxel", "tconstruct:dagger", "mushroom_daydream:gun"
    ]
for(let i of melee)
{
    event.add('spartanweaponry:oilable_weapons', i) 
}*/
let controllers = ['mbd2:aqua', 'mbd2:touhou_shrine',
     'mbd2:small_tofu_shrine', 'mbd2:patch', 'mbd2:big_tofu_shrine']

event.add('forge:multiblock_controller', controllers)

event.add('tconstruct:modifiable/multipart','tinkers_thinking:mace')




let tr_latiaos=
['ltc2:treasure_cleanse_latiao', 'ltc2:treasure_pepper_white_latiao',
     'ltc2:treasure_pepper_green_latiao', 'ltc2:treasure_pepper_red_latiao',
      'ltc2:treasure_latiao', 'ltc2:treasure_pepper_jalapeno_latiao',
       'ltc2:treasure_pepper_yellow_latiao', 'ltc2:treasure_pepper_sweet_latiao',
        'ltc2:treasure_pepper_black_latiao', 'ltc2:treasure_pepper_jolokia_latiao',
     'ltc2:treasure_pepper_bloody_latiao', 'ltc2:treasure_pepper_complained_latiao',
      'ltc2:treasure_underground_oil_latiao',
    'ltc2:enchanted_diamond_latiao', 'ltc2:enchanted_netherite_latiao',
         'ltc2:evil_latiao', 'ltc2:time_latiao', 'ltc2:poseidon_latiao', 'ltc2:undying_latiao',
         'ltc2:enchanter_latiao', 'ltc2:chirencqr_latiao', 'ltc2:thmy_latiao',
          'ltc2:sjkd_latiao', 'ltc2:plr_latiao', 'ltc2:gingermeow_latiao', 'ltc2:treasure_soylatiao']


//宝藏辣条
for(let i of tr_latiaos)
{
event.add('forge:treasure_latiao',i)
}

event.add("tconstruct:modifiable/held",["mushroom_daydream:gun","mushroom_daydream:tachi","mushroom_daydream:longjian"])
event.add('forge:salt_blocks',['ltc2:refined_salt_block', 'ltc2:salt_block', 'tofucraft:salt_block'])

event.add("forge:raw_materials/nihilite", 'sakuratinker:nihilite_raw_ore')
event.add("forge:raw_materials", 'sakuratinker:nihilite_raw_ore')
event.remove('forge:salt','ltc2:refined_salt')
event.add('forge:refined_salt','ltc2:refined_salt')

let casts=['tconstruct:patterns/reusable', 'tconstruct:patterns', 'eminecraft:piglin_loved',
    'tconstruct:casts/gold', 'tconstruct:casts'
]


for(let cast of casts)
{
    event.add(cast,'tinkersancient:swasher_head_cast')
}

event.add("forge:youkai_brew",[
    'youkaishomecoming:dassai',
    'youkaishomecoming:full_moons_eve',
    'youkaishomecoming:tengu_tango',
    'youkaishomecoming:daiginjo'])

event.add('tconstruct:modifiable/held',[
    'sakuratinker:swift_sword',
    'sakuratinker:great_sword',
    'sakuratinker:laser_gun',
    'sakuratinker:grappling_hook',
    'tinkers_things:twinblade',
    "tinkerscalibration:cutlass"
])

event.add('tconstruct:modifiable/bonus_slots',[
    'sakuratinker:swift_sword',
    'sakuratinker:great_sword',
    'sakuratinker:laser_gun',
    'sakuratinker:grappling_hook',
    'tinkers_things:twinblade',
    "tinkerscalibration:cutlass"
])

//BOP wood
event.add("forge:stripped_logs",['biomesoplenty:stripped_pine_wood',
     'biomesoplenty:stripped_pine_log', 'biomesoplenty:stripped_maple_log',
      'biomesoplenty:stripped_maple_wood', 'biomesoplenty:stripped_empyreal_log',
       'biomesoplenty:stripped_empyreal_wood'])

event.add("minecraft:cluster_max_harvestables","tinkerscalibration:paxel")

event.add('forge:foods/meat/raw', 'youkaishomecoming:flesh')
event.add('thermal:crafting/casts/ingot', ['tconstruct:ingot_cast', 'thermal:chiller_ingot_cast'])

event.add('tconstruct:casts/multi_use', 'thermal:chiller_ingot_cast')
event.add('tconstruct:casts/multi_use/ingot', 'thermal:chiller_ingot_cast')
event.add('tconstruct:patterns/reusable', 'thermal:chiller_ingot_cast')

event.add('create:sandpaper', 'chemlib:polyvinyl_chloride_plate')

event.add('forge:fished_treasure_chest',['lavafishing:prometheus_bounty','aquaculture:neptunes_bounty'])

event.add('forge:cakes',['vanillacookbook:book_cake', 'tconstruct:sky_cake',
     'tconstruct:earth_cake', 'vanillacookbook:glow_berry_cake', 'meetyourfight:aether_glazed_cupcake',
      'tconstruct:magma_cake', 'tconstruct:blood_cake', 'tconstruct:ender_cake', 'tconstruct:ichor_cake',
       'tofucraft:tofucake', 'tofucraft:zundatofucake', 'tofucraft:steamed_bread', 'tofucraft:steamed_bread_cocoa',
        'thermal:carrot_cake', 'thermal:chocolate_cake', 'thermal:potion_cake', 'thermal:spice_cake',
         'createaddition:chocolate_cake', 'vanillacookbook:cheesecake', 'vanillacookbook:carrot_cake',
          'vanillacookbook:berry_cake', 'mystias_izakaya:xing_hong_e_mo_dan_gao','mystias_izakaya:pu_tong_xia_dan_gao',
           'youkaishomecoming:red_velvet_cake', 'youkaishomecoming:scarlet_devil_cake', 'nffgirls:soul_cake', 'createaddition:honey_cake',
     'vanillacookbook:chocolate_cake', 'vanillacookbook:mohnkuchen', 'vanillacookbook:ice_cream_cake',
      'vanillacookbook:rose_cake', 'vanillacookbook:chorus_cake','vanillacookbook:book_cake',
       'tconstruct:sky_cake', 'tconstruct:earth_cake', 'vanillacookbook:glow_berry_cake', 'meetyourfight:aether_glazed_cupcake'])

event.add('forge:golden_fabric',['immortalers_delight:golden_fabric','tinkers_thinking:gilded_silky_cloth'])
event.add('forge:flour/wheat',['mystias_izakaya:mian_fen','refurbished_furniture:dough'])




event.add('ftbultimine:tools',["thermal:flux_drill","thermal:flux_saw"])
event.add('forge:tools',["thermal:flux_drill","thermal:flux_saw"])


})

