ServerEvents.recipes(event => {



let med="kubejs:incom_polymer_plate"
event.recipes.create.sequenced_assembly(['alexscaves:polymer_plate'],
'#forge:plates/brass',[
    event.recipes.createDeploying(med, [med, '#forge:dusts/sulfur']),
    event.recipes.createCutting(med, med),
    event.recipes.createDeploying(med, [med, 'alexscaves:toxic_paste']),
    event.recipes.createPressing(med, med)
]).transitionalItem(med).loops(1)



})