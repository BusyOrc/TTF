ServerEvents.recipes(event => {

event.recipes.create.mixing([Fluid.of("thermal:ender",1000),'thermal:raw_lead','thermal:raw_silver',Item.of('minecraft:netherite_scrap').withChance(0.75)],
['kubejs:gap_tofu',Fluid.of("thermal:heavy_oil",250)]).heated()

event.recipes.create.mixing([Fluid.of("thermal:glowstone"),'thermal:raw_tin','thermal:raw_nickel','chemlib:polyvinyl_chloride_plate'],
['kubejs:fantasy_tofu',Fluid.of("thermal:light_oil")]).heated()



})