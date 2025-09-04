ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:summon",
        "activation_item": {
            "item": "irons_spellbooks:tarnished_helmet"
        },
        "craftType": "sabbath",
        "entity_to_summon": "irons_spellbooks:dead_king",
        "soulCost": 100,
        "duration": 50,
        "ingredients": [
            {
                "item": "irons_spellbooks:necronomicon_spell_book"
            },
            {
                "item": "irons_spellbooks:blood_staff"
            },
            {
                "item": "minecraft:wither_skeleton_skull"
            },
            {
                "item": "goety:skull_pile"
            },
            {
                "item": "goety:skull_pile"
            },
            {
                "item": "goety:skull_pile"
            },
            {
                "item": "irons_spellbooks:blood_vial"
            },
            {
                "item": "irons_spellbooks:blood_vial"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item":"irons_spellbooks:ancient_knowledge_fragment"
            }
        ],
        "result": {
            "item": "goety:jei_dummy/none"
        }
    })
})