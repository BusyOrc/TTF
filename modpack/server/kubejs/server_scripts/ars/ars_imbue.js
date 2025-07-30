ServerEvents.recipes(event => {
event.recipes.ars_nouveau.imbuement(
        'minecraft:charcoal', // input item
        'minecraft:coal', // output
        1000, // source cost
        []
    )

event.recipes.ars_nouveau.imbuement(
        'quark:charcoal_block', 
        'minecraft:coal_block', 
        9000, 
        []
    )    
})