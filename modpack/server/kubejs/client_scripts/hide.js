JEIEvents.hideItems((event) => {

    let hiddenItems = ['advanced_ae:quantum_upgrade_base', 'minecraft:campfire', 'immortalers_delight:oxidized_ancient_stove',
	 'nethersdelight:blackstone_stove', 'advanced_ae:quantum_helmet','advanced_ae:quantum_chestplate','advanced_ae:quantum_leggings',
	'advanced_ae:quantum_boots', 'advanced_ae:swim_speed_card', 'advanced_ae:night_vision_card', 'advanced_ae:flight_drift_card',
	 'advanced_ae:recharging_card', 'advanced_ae:pick_craft_card', 'advanced_ae:portable_workbench_card', 'advanced_ae:attack_speed_card',
	  'advanced_ae:walk_speed_card', 'advanced_ae:sprint_speed_card', 'advanced_ae:step_assist_card', 'advanced_ae:jump_height_card',
	   'advanced_ae:lava_immunity_card', 'advanced_ae:flight_card', 'advanced_ae:water_breathing_card', 'advanced_ae:auto_feeding_card',
	    'advanced_ae:auto_stock_card', 'advanced_ae:magnet_card', 'advanced_ae:hp_buffer_card', 'advanced_ae:evasion_card',
	 'advanced_ae:regeneration_card', 'advanced_ae:strength_card', 'advanced_ae:luck_card', 'advanced_ae:reach_card', 'advanced_ae:quantum_upgrade_base',
'mushroom_daydream:blue_eye_white_dragon', 'mushroom_daydream:shiguan', 'mushroom_daydream:rat_world',
 'mushroom_daydream:dragon_gobber', 'mushroom_daydream:mizi', 'mushroom_daydream:sjngp',
     'mushroom_daydream:pure_horror', 'mushroom_daydream:liga', 'mushroom_daydream:sublimation_substance','mushroom_daydream:ultimate_alchemical_compound',
      'mushroom_daydream:holy', 'mushroom_daydream:zero_mushroom'
    ]

    let regexHide = []
    hiddenItems.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem)
        }
    })

    regexHide.forEach((regexExpression) => {
        event.hide(regexExpression)
    })
})
