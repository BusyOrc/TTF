ServerEvents.recipes(event => {

    event.replaceInput(
        { input: 'vanillacookbook:cheese' }, // Arg 1: the filter
        'vanillacookbook:cheese',            // Arg 2: the item to replace
        '#forge:cheese'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )


})