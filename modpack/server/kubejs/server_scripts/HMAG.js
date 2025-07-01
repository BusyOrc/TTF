ServerEvents.recipes(event => {
/*
	let inter = 'kubejs:incomplete_biochem_mechanism' // making a variable to store the transitional item makes the code more readable
	event.recipes.create.sequenced_assembly([
		Item.of('minecraft:spore_blossom').withChance(16.0), // this is the item that will appear in JEI as the result

	], 'minecraft:flowering_azalea_leaves', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'minecraft:hanging_roots']),
		event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
		event.recipes.createDeploying(inter, [inter, 'minecraft:moss_carpet']),
		event.recipes.createCutting(inter, inter)
	]).transitionalItem(inter).loops(2)
*/
})