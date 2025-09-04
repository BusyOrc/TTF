var runes=['irons_spellbooks:arcane_rune', 'irons_spellbooks:nature_rune',
	 'irons_spellbooks:evocation_rune', 'irons_spellbooks:blood_rune',
	  'irons_spellbooks:holy_rune', 'irons_spellbooks:ender_rune',
	 'irons_spellbooks:lightning_rune', 'irons_spellbooks:ice_rune',
	  'irons_spellbooks:fire_rune', 'irons_spellbooks:protection_rune', 'irons_spellbooks:cooldown_rune']

ServerEvents.recipes(event => {


event.remove({id:'lightmanscurrency:coinmint'})
event.remove({id:'twilightforest:uncrafting_table'})
event.remove({id:'createappliedkinetics:energy_provider'})
event.remove({id:'create:milling/beetroot'})
event.remove({id:'exmodifier:refresh_table'})
event.remove({id:'createoreexcavation:vein_finder'})
event.remove({id:'immortalers_delight:golden_himekaido'})
event.remove({id:'mystias_izakaya:nan_gua'})
event.remove({id:'meetyourfight:haunted_bell'})
event.remove({id:'meetyourfight:devils_ante'})
event.remove({id:'meetyourfight:fossil_bait'})
event.remove({id:'meetyourfight:dusk_key'})
event.remove({id:'thermal:storage/gunpowder_block'})
event.remove({mod:"pipez"})
event.remove({mod:"mekanism"})
event.remove({mod:"projecte"})
event.remove({mod:"mushroom_daydream"})
event.remove({id:"cloudertinker:tables/dectird_ingot"})
event.remove({id:"cloudertinker:tables/prublaze_ingot"})
event.remove({id:"cloudertinker:tables/evilmare_ingot"})
event.remove({id:"cloudertinker:tables/bloodshed_ingot"})
event.remove({id:"supplementaries:strings"})
event.remove({id:"farmersdelight:rice_bag"})
event.remove({id:"mystias_izakaya:bing_kuai"})
event.remove({id:"mystias_izakaya:la_jiao"})
event.remove({id:"tofucraft:seeds_chili"})
event.remove({output:"ars_nouveau:mob_jar"})
event.remove({id:"mystias_izakaya:xi_hong_shi"})
event.remove({id:"mystias_izakaya:ning_meng"})
event.remove({id:"mystias_izakaya:huang_gua"})
event.remove({id:"tinkers_thinking:common/crystal/chromatic_crystal"})
event.remove({id:"tinkers_thinking:common/stabilized_gunpowder"})

let silverfish=['minecraft:infested_stone',
	 'minecraft:infested_stone_bricks', 'minecraft:infested_mossy_stone_bricks',
	  'minecraft:infested_cracked_stone_bricks', 'minecraft:infested_chiseled_stone_bricks',
	   'minecraft:infested_deepslate']


for(let i of silverfish)
{
event.remove({output:silverfish})
}

event.remove({id:"farmersdelight:milk_bottle"})

for(let rune of runes)
{
	event.remove({id:rune})
}


event.remove({id:/^createoreexcavation:ore_vein_type\//})

// event.remove({id:'thermal:machines/insolator/insolator_tomato'})

let coe =[
	'createoreexcavation:extractor/water',
	'createoreexcavation:drilling/coal',
	'createoreexcavation:drilling/copper',
	'createoreexcavation:drilling/diamond',
	'createoreexcavation:drilling/emerald',
	'createoreexcavation:drilling/glowstone',
	'createoreexcavation:drilling/hardened_diamond',
	'createoreexcavation:drilling/iron',
	'createoreexcavation:drilling/gold',
	'createoreexcavation:drilling/quartz',
	'createoreexcavation:drilling/redstone',
	'createoreexcavation:drilling/zinc',
    'createoreexcavation:drilling/lapis',
    'createoreexcavation:drilling/nether_gold',
    'createoreexcavation:drilling/netherite',
	"pasterdream:crafting_37",
	"pasterdream:crafting_38",
	"pasterdream:crafting_92",
	"farmersdelight:pie_crust",
	"thermal:machine_frame",
	"create:crafting/materials/electron_tube",
	'tofucraft:filtercloth'
	]
	for (let i of coe) {event.remove({id:`${i}`})}


let fxxking_knives=
[
	['aquaculture:wooden_fillet_knife', 'aquaculture:stone_fillet_knife',
	'aquaculture:iron_fillet_knife','aquaculture:gold_fillet_knife','aquaculture:diamond_fillet_knife']
]

for(let i of fxxking_knives){event.remove({output:i})}

//	event.remove({ output: /.*fillet_knife:.*/ })

let aae=
['advanced_ae:quantum_upgrade_base',  
	 'advanced_ae:quantum_helmet','advanced_ae:quantum_chestplate','advanced_ae:quantum_leggings',
	'advanced_ae:quantum_boots', 'advanced_ae:swim_speed_card', 'advanced_ae:night_vision_card', 'advanced_ae:flight_drift_card',
	 'advanced_ae:recharging_card', 'advanced_ae:pick_craft_card', 'advanced_ae:portable_workbench_card', 'advanced_ae:attack_speed_card',
	  'advanced_ae:walk_speed_card', 'advanced_ae:sprint_speed_card', 'advanced_ae:step_assist_card', 'advanced_ae:jump_height_card',
	   'advanced_ae:lava_immunity_card', 'advanced_ae:flight_card', 'advanced_ae:water_breathing_card', 'advanced_ae:auto_feeding_card',
	    'advanced_ae:auto_stock_card', 'advanced_ae:magnet_card', 'advanced_ae:hp_buffer_card', 'advanced_ae:evasion_card','thermal:rf_coil',
	 'advanced_ae:regeneration_card', 'advanced_ae:strength_card', 'advanced_ae:luck_card', 'advanced_ae:reach_card', 'advanced_ae:quantum_upgrade_base',
	'functionalstorage:fluid_1', 'functionalstorage:fluid_2', 'functionalstorage:fluid_4','alexsmobs:dimensional_carver',"alexsmobs:transmutation_table",
	'iceandfire:gold_pile','iceandfire:silver_pile','iceandfire:copper_pile','lightmanscurrency:coinblock_copper', 'lightmanscurrency:coinblock_iron',
		 'lightmanscurrency:coinblock_gold','lightmanscurrency:coinblock_emerald', 'lightmanscurrency:coinblock_diamond', 'lightmanscurrency:coinblock_netherite',
'lightmanscurrency:coinpile_copper', 'lightmanscurrency:coinpile_iron',
	 'lightmanscurrency:coinpile_gold', 'lightmanscurrency:coinpile_emerald', 'lightmanscurrency:coinpile_diamond', 'lightmanscurrency:coinpile_netherite',
	 'createdeco:netherite_coin', 'createdeco:gold_coin', 'createdeco:brass_coin', 'createdeco:iron_coin', 'createdeco:copper_coin', 'createdeco:industrial_iron_coin', 'createdeco:zinc_coin'
]

for(let i of aae)
{
	event.remove({output:i})
}



let temp_ban=["minecraft:stone_pickaxe"
]
for(let j of temp_ban)
{
	event.remove({id:j})
	event.remove({output:j})
}

})