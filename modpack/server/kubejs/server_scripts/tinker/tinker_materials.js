
//          event 流体id 材料id 锭id  块id 粒id  锭烧出来的mb    温度  时间            块和粒没有填"none"
let crtm = (event,flu    ,mat  ,ingo ,blo ,nug, cnt,           tmp ,tim) =>{
    if(ingo != "none"){    
    event.custom({//定义锭在炉子里融化
        "type": "tconstruct:melting",
        "ingredient": {//所需物品
            "item": ingo
        },
        "result": {//结果
            "amount": cnt,
            "fluid": flu//你定义的流体
        },
        "temperature": tmp,//温度 800是常规燃料 1000是岩浆 1500是烈焰血
        "time": tim//时间 100是25秒
    })
    event.custom({//浇筑为锭
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"
        },
        "cooling_time": tim,
        "fluid": {
            "amount": cnt,
            "fluid": flu
        },
        "result": ingo
    })
    event.custom({//浇筑为锭 红沙
        "type": "tconstruct:casting_table",
        "cast": {
            "tag": "tconstruct:casts/single_use/ingot"
        },
        "cast_consumed": true,
        "cooling_time": tim,
        "fluid": {
            "amount": cnt,
            "fluid": flu
        },
        "result": ingo
    })
}
    event.custom({//部件加工台
        "type": "tconstruct:material",
        "ingredient": {
            "item": ingo
        },
        "material": mat,
        "needed": 1,
        "value": 1
    })
    if(blo != "none"){
        event.custom({//定义块在炉子里融化
            "type": "tconstruct:melting",
            "ingredient": {//所需物品
                "item": blo
            },
            "result": {//结果
                "amount": cnt * 9,
                "fluid": flu//你定义的流体
            },
            "temperature": tmp,//温度 800是常规燃料 1000是岩浆 1500是烈焰血
            "time": tim//时间 100是25秒
        })
        event.custom({//定义块在部件加工台上
            "type": "tconstruct:material",
            "ingredient": {
                "item": blo
            },
            "leftover": {
                "count": 1,
                "item": ingo
            },
            "material": mat,
            "needed": 1,
            "value": 9
        })
        event.custom({//浇筑为块
            "type": "tconstruct:casting_basin",
            "cooling_time": tim*9,
            "fluid": {
                "amount": cnt * 9,
                "fluid": flu
            },
            "result": blo
        })
    }
    if(nug != "none"){
        event.custom({//定义粒在炉子里融化
            "type": "tconstruct:melting",
            "ingredient": {//所需物品
                "item": nug
            },
            "result": {//结果
                "amount": cnt / 9,
                "fluid": flu//你定义的流体
            },
            "temperature": tmp,//温度 800是常规燃料 1000是岩浆 1500是烈焰血
            "time": tim//时间 100是25秒
        })
        event.custom({//定义粒在部件加工台上
            "type": "tconstruct:material",
            "ingredient": {
                "item": nug
            },
            "material": mat,
            "needed": 9,
            "value": 1
        })
        event.custom({//浇筑为粒
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/multi_use/nugget"
            },
            "cooling_time": tim,
            "fluid": {
                "amount": cnt / 9,
                "fluid": flu
            },
            "result": nug
        })
        event.custom({//浇筑为粒 红沙
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/single_use/nugget"
            },
            "cast_consumed": true,
            "cooling_time": tim,
            "fluid": {
                "amount": cnt / 9,
                "fluid": flu
            },
            "result": nug
        })
    }
    event.custom({
        "type": "tconstruct:material_fluid",//浇筑
        "fluid": {
            "amount": cnt,//每单位
            "fluid": flu//你定义的流体
        },
        "temperature": tim,//这边指冷却时间
        "output": mat//输出，材料类型，你创建的材料
    })
    
}


//黄铜合金材料
ServerEvents.recipes(event => {
    crtm(event,"tconstruct:molten_brass","kubejs:brass","create:brass_ingot","create:brass_block","create:brass_nugget",90,605,52)

//fluix
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "ae2:fluix_crystal"
    },
    "material": "kubejs:fluix_crystal",
    "needed": 1,
    "value": 1
})

//Ir
crtm(event,"kubejs:molten_iridium","kubejs:iridium","chemlib:iridium_ingot","chemlib:iridium_metal_block","chemlib:iridium_nugget",90,1370,72)

//聚氯乙烯
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "chemlib:polyvinyl_chloride_plate"
    },
    "material": "kubejs:polyvinyl_chloride_plate",
    "needed": 1,
    "value": 1
})


//dragon
//crtm(event,"kubejs:molten_dragonsteel_lightning","kubejs:dragonsteel_lightning","iceandfire:dragonsteel_lightning_ingot","iceandfire:dragonsteel_lightning_block","none",90,1450,72)
//crtm(event,"kubejs:molten_dragonsteel_ice","kubejs:dragonsteel_ice","iceandfire:dragonsteel_ice_ingot","iceandfire:dragonsteel_block","none",90,1450,72)
//crtm(event,"kubejs:molten_dragonsteel_fire","kubejs:dragonsteel_fire","iceandfire:dragonsteel_fire_ingot","iceandfire:dragonsteel_block","none",90,1450,72)

//skysteel
crtm(event,"kubejs:molten_skysteel","kubejs:sky_steel","megacells:sky_steel_ingot","megacells:sky_steel_block","none",90,960,72)

//greatrune
crtm(event,"kubejs:molten_greatrune","kubejs:greatrune","kubejs:greatrune","none","none",90,1500,72)

//reisen
crtm(event,"kubejs:reisens_essence","kubejs:reisen","none","mystias_izakaya:reisen","none",90,725,72)

//baka
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": 'youkaishomecoming:fairy_ice_crystal'
    },
    "material": "kubejs:baka",
    "needed": 1,
    "value": 1
})

//daiyousei
crtm(event,"kubejs:molten_bomb","kubejs:daiyousei","kubejs:daiyouseis_bomb","none","none",90,520,72)
//doremy
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "kubejs:doremy_ingot"
    },
    "material": "kubejs:doremy",
    "needed": 1,
    "value": 1
})

//youmu
crtm(event,"kubejs:molten_youmu","kubejs:youmu","kubejs:youmus_dualswords","none","none",90,860,72)

//hifuu
crtm(event,"kubejs:molten_renko","kubejs:hifuu","kubejs:mysterious_hat","none","none",90,740,72)

//梦貘浇筑
event.custom(
{
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "quark:bottled_cloud"
    },
    "cast_consumed": true,
    "cooling_time": 60,
    "fluid": {
      "amount": 125,
      "fluid": "mushroom_daydream:nightmare_fuel"
    },
    "result":"kubejs:doremy_ingot"
        
  }
)

//小町
event.custom(
    {
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "alexsmobs:soul_heart"
        },
        "cast_consumed": true,
        "cooling_time": 40,
        "fluid": {
          "amount": 270,
          "fluid": "tconstruct:molten_platinum"
        },
        "result":"kubejs:komachis_scythe"
            
      }
    )

    event.custom({//部件加工台
        "type": "tconstruct:material",
        "ingredient": {
            "item": "kubejs:komachis_scythe"
        },
        "material": "kubejs:komachi",
        "needed": 1,
        "value": 1
    })

//reimu
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "kubejs:reimu"
    },
    "material": "kubejs:reimu",
    "needed": 1,
    "value": 1
})
event.recipes.create.mixing('4x kubejs:reimu',['youkaishomecoming:reimu_hairband','4x touhou_little_maid:power_point']).superheated()

//邪恶水晶😪
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "hmag:evil_crystal"
    },
    "material": "kubejs:evil_crystal",
    "needed": 1,
    "value": 1
})


//yyz
    event.recipes.create.mixing("kubejs:sakura",[Fluid.of("fruitsdelight:lychee_cherry_tea",250), "mystias_izakaya:yin_hua_bu_ding"])
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "item": "kubejs:sakura"
    },
    "material": "kubejs:sakura",
    "needed": 1,
    "value": 1
})

//棉花糖
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "item": "mystias_izakaya:yun_shan_miao_hua_tang"
    },
    "material": "mushroom_daydream:cotton_candy_wood",
    "needed": 1,
    "value": 1
})

//koishi
event.recipes.create.mixing("kubejs:koishi_hat",[Fluid.of("chemlib:ethylene_fluid",500),'2x chemlib:krypton', 'youkaishomecoming:koishi_mousse']).superheated()
crtm(event,"kubejs:molten_koishi","kubejs:koishi","kubejs:koishi_hat","none","none",90,514,72)


//sakura
event.recipes.create.compacting("sakuratinker:soul_sakura",['minecraft:chorus_flower', '3x tconstruct:cinderslime_ingot', 'minecraft:spore_blossom']).heated()

//奶酪
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "item": "thermal:cheese_wedge"
    },
    "material": "mushroom_daydream:cheese",
    "needed": 1,
    "value": 1
})
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "item": "tconstruct:cheese_ingot"
    },
    "material": "mushroom_daydream:cheese",
    "needed": 1,
    "value": 1
})
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "item": "refurbished_furniture:cheese"
    },
    "material": "mushroom_daydream:cheese",
    "needed": 1,
    "value": 1
})

//豆腐
event.custom({
    "type": "tconstruct:material",
    "ingredient": {
        "tag": "forge:tofu"
    },
    "material": "kubejs:tofu",
    "needed": 1,
    "value": 1
})



event.recipes.create.mixing(Item.of('tconstruct:maille', '{Material:"mushroom_daydream:whiterose_wood"}'),
['2x #forge:ingots/silver',Fluid.of('tconstruct:earth_slime',500)]).superheated()

event.recipes.create.mixing(Item.of('tconstruct:shield_core', '{Material:"mushroom_daydream:whiterose_wood"}'),
['4x #minecraft:planks','4x #forge:ingots/silver' ,Fluid.of('tconstruct:earth_slime',1000)]).superheated()



//白蔷薇
/*
event.custom(
    {
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "tconstruct:maille",
          "nbt":{"material":"tconstruct:silver"}
        },
        "cast_consumed": true,
        "cooling_time": 40,
        "fluid": {
          "amount": 500,
          "fluid": "tconstruct:earth_slime"
        },
        "result":"tconstruct:maille",
        "nbt":{"material":"mushroom_daydream:whiterose_wood"}
            
      }
    )
*/

//迷雾
event.custom(
    {
        "type": "tconstruct:casting_table",
        "cast": {
          "item": "minecraft:ender_pearl"
        },
        "cast_consumed": true,
        "cooling_time": 20,
        "fluid": {
          "amount": 120,
          "fluid": "tinkers_thinking:molten_lightite"
        },
        "result":"kubejs:eye_in_mist"
            
      }
    )
    event.custom({
        "type": "tconstruct:material",
        "ingredient": {
            "item": "kubejs:eye_in_mist"
        },
        "material": "kubejs:mist",
        "needed": 1,
        "value": 1
    })


//烈焰人炉子
event.custom(
    {
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "create:empty_blaze_burner"
        },
        "cast_consumed": true,
        "cooling_time": 180,
        "fluid": {
          "amount": 540,
          "fluid": "tconstruct:blazing_blood"
        },
        "result":"create:blaze_burner"
            
      }
    )


//姬海棠果
crtm(event,"kubejs:molten_himekaido","kubejs:himekaido","immortalers_delight:golden_himekaido","none","none",90,678,80)

//wuyu
crtm(event,"kubejs:molten_wu_yu","kubejs:wu_yu","kubejs:wu_yu_ingot","none","none",90,1485,40)

//天邪鬼
crtm(event,"kubejs:molten_seija","kubejs:seija","kubejs:seija","none","none",90,1800,40)
/*
event.custom({//部件加工台
    "type": "tconstruct:material",
    "ingredient": {
        "item": "sakuratinker:south_star"
    },
    "material": "sakuratinker:south_star",
    "needed": 1,
    "value": 1
})*/

})



