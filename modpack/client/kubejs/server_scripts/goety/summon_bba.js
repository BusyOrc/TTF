ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:summon",
        "activation_item": {
            "item": "touhou_little_maid:wireless_io"
        },
        "craftType": "sabbath",
        "entity_to_summon": "youkaishomecoming:yukari",
        "soulCost": 10,
        "duration": 20,
        "ingredients": [
            {
                "item": "goety:mystic_core"
            },
            {
                "item": "goety:mystic_core"
            },
            {
                "item": "youkaishomecoming:oily_bean_curd"
            },
            {
                "item": "goety:void_bottle"
            },
            {
                "item": "goety:void_bottle"
            },
            {
                "item":"youkaishomecoming:yakumo_inari"
            }
        ],
        "result": {
            "item": "goety:jei_dummy/none"
        }
    })
})