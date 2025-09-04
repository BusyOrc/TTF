ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:summon",
        "activation_item": {
            "item": "tconstruct:blaze_head"
        },
        "craftType": "expert_nether",
        "entity_to_summon": "cataclysm:ignited_revenant",
        "soulCost": 10,
        "duration": 10,
        "ingredients": [
            {
                "item": "tconstruct:blazing_bone"
            },
            {
                "item": "tconstruct:blazing_bone"
            },
            {
                "item": "tconstruct:blazing_bone"
            },
            {
                "item": "tconstruct:blazing_bone"
            },
            {
                "item": "minecraft:shield"
            },
            {
                "item": "minecraft:shield"
            },
            {
                "item": "minecraft:shield"
            },
            {
                "item": "minecraft:shield"
            },
            {
                "item": "create:blaze_cake"
            },
            {
                "item": "create:blaze_cake"
            },
        ],
        "result": {
            "item": "goety:jei_dummy/none"
        }
    })
})