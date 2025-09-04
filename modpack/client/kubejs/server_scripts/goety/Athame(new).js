ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:fanged_dagger"
        },
        "craftType": "forge",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "iceandfire:shiny_scales"
            },
            {
                "item": "minecraft:prismarine_crystals"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "result": {
            "item": "cataclysm:athame"
        }
    })
})