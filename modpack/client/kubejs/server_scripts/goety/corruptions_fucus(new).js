ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:night_beacon"
        },
        "craftType": "magic",
        "soulCost": 6,
        "duration": 66,
        "ingredients": [
            {
                "item": "cataclysm:abyssal_egg"
            },
            {
                "item": "goety:undeath_potion"
            },
            {
                "item": "goety:forbidden_scroll"
            },
            {
                "item": "goety:void_bottle"
            }
        ],
        "result": {
            "item": "goety:corruption_focus"
        }
    })
})
