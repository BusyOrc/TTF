ServerEvents.recipes(event => {

    //沥青沙
event.recipes.createoreexcavation.vein('{"text": "沥青沙"}', 'thermal:oil_sand')
.placement(24, 8, 114514).id("kubejs:oil_sand").alwaysFinite().priority(10).veinSize(8, 12)
.biomeWhitelist('minecraft:is_overworld') 

event.recipes.createoreexcavation
.drilling(['thermal:oil_sand', Item.of('thermal:oil_red_sand').withChance(0.3)], 'kubejs:oil_sand', 1200)
.id("kubejs:thermal_oil")
.fluid('minecraft:water 200') .stress(128);
   

event.recipes.createoreexcavation.vein('{"text": "下界远古矿脉"}', 'minecraft:ancient_debris')
.placement(24, 8, 1919810).id("kubejs:nether_ancient_vein").alwaysFinite().priority(30).veinSize(7,9.5 )
.biomeWhitelist('minecraft:is_nether') 

event.recipes.createoreexcavation
.drilling([Item.of('minecraft:ancient_debris').withChance(0.45), 'minecraft:magma_block', Item.of('tconstruct:ichor_slime_ball').withChance(0.7), Item.of('minecraft:blaze_powder').withChance(0.5)], 'kubejs:nether_ancient_vein', 3600)
.id("kubejs:nether_ancient_mining").drill('createoreexcavation:netherite_drill') 
.fluid('kubejs:fluid_cloud 100') .stress(360);
   
event.recipes.createoreexcavation.vein('{"text": "巨型酸液池"}', 'alexscaves:acid_bucket')
.placement(16, 8, 1919).id("kubejs:acid_pool").priority(30)
.biomeWhitelist('is_ocean') 

event.recipes.createoreexcavation
.extracting(Fluid.of('alexscaves:acid'), 'kubejs:acid_pool', 1800)
.id("kubejs:acid").drill('createoreexcavation:diamond_drill') ;

//心
event.recipes.createoreexcavation.vein('{"text": "铜锌深层矿脉"}', 'minecraft:raw_copper')
.placement(16, 8, 514).id("kubejs:cu_zn_vein").alwaysInfinite().priority(0)
.biomeWhitelist('minecraft:is_overworld') 

event.recipes.createoreexcavation
.drilling(['minecraft:raw_copper', Item.of('minecraft:raw_copper').withChance(0.4), 'create:raw_zinc',
    Item.of('thermal:niter').withChance(0.2),Item.of('thermal:apatite').withChance(0.2)
], 'kubejs:cu_zn_vein', 1200)
.id("kubejs:cu_zn_drilling").stress(128);

//魔力
event.recipes.createoreexcavation.vein('{"text": "魔力聚集地"}', 'minecraft:amethyst_cluster')
.placement(24, 12, 11451980).id("kubejs:magic_site").alwaysFinite().priority(5).veinSize(25, 33)
.biomeWhitelist("twilightforest:in_twilight_forest") 

event.recipes.createoreexcavation
.drilling([Item.of('minecraft:amethyst_cluster').withChance(0.4)
    ,Item.of('minecraft:lapis_lazuli').withChance(0.8), 'createoreexcavation:raw_redstone',Item.of('irons_spellbooks:arcane_salvage').withChance(0.09),
    Item.of('minecraft:raw_gold').withChance(0.35),Item.of('hmag:diamond_fragment').withChance(0.4),'create:experience_nugget'
], "kubejs:magic_site", 800)
.id("kubejs:magic_exc").drill('createoreexcavation:diamond_drill') 
.fluid('create_wizardry:common_ink 100').stress(256);




//豆腐世界
//硬化
event.recipes.createoreexcavation.vein('{"text": "硬化豆腐矿脉"}', 'kubejs:gap_tofu')
.placement(24, 12, 4424).id("kubejs:hardened_tofu").alwaysInfinite().priority(5)
.biomeWhitelist("tofucraft:in_tofu_world") 

event.recipes.createoreexcavation
.drilling([Item.of('kubejs:gap_tofu').withChance(0.55),
    Item.of('tofucraft:tofudiamondnugget'),
    Item.of('tofucraft:tofumetal').withChance(0.75),
    Item.of('tofucraft:tofuslate').withChance(0.8),
], "kubejs:hardened_tofu", 400)
.id("kubejs:hardened_exc").drill('createoreexcavation:diamond_drill') 
.fluid('kubejs:ancient_resin 400').stress(64);

event.recipes.createoreexcavation.vein('{"text": "软质豆腐矿脉"}', 'kubejs:fantasy_tofu')
.placement(24, 12, 13894).id("kubejs:soft_tofu").alwaysInfinite().priority(0)
.biomeWhitelist("tofucraft:in_tofu_world") 

event.recipes.createoreexcavation
.drilling([Item.of('kubejs:fantasy_tofu').withChance(0.55),
    Item.of('tofucraft:tofukinu'),
    Item.of('tofucraft:tofumomen').withChance(0.5),
    Item.of('tofucraft:tofuishi').withChance(0.8),
], "kubejs:soft_tofu", 200)
.id("kubejs:soft_exc")
.fluid('tofucraft:soymilk 600').stress(16);







})