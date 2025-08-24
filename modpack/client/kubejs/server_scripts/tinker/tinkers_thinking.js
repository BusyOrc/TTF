ServerEvents.recipes(event => {

    event.recipes.create.mixing(Fluid.of("thermal:syrup",500),[Fluid.of("minecraft:water",500),"minecraft:beetroot"]).heated()
event.remove({mod:"pipez"})
event.remove({mod:"mekanism"})
event.remove({mod:"projecte"})
event.remove({mod:"mushroom_daydream"})

})