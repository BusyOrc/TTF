ServerEvents.recipes(event => {


/*
event.recipes.create.mixing('alexscaves:polymer_plate',
    ['alexscaves:toxic_paste',
'#forge:dusts/sulfur',
'#forge:plates/brass',
'alexscaves:radon_bottle',
'chemlib:polyvinyl_chloride_plate'
 ]).superheated()
*/
let med="kubejs:incom_polymer_plate"
event.recipes.create.sequenced_assembly(['alexscaves:polymer_plate'],
'#forge:plates/brass',[
    event.recipes.createDeploying(med, [med, '#forge:dusts/sulfur']),
    event.recipes.createCutting(med, med),
    event.recipes.createDeploying(med, [med, 'alexscaves:toxic_paste']),
    event.recipes.createPressing(med, med)
]).transitionalItem(med).loops(1)



})