ItemEvents.tooltip(event => {

 //   event.add('simpletomb:grave_key', '小町把你带了回来，并送你这把钥匙。')

 event.addAdvanced('simpletomb:grave_key', (item, advanced, text) => {
    // shift, alt and ctrl are all keys you can check!

      text.add(Text.blue('小町把你带了回来，并送给了你这把钥匙，'))
      text.add(Text.blue('还不快说谢谢小町。'))
    
  })

  event.addAdvanced('kubejs:wu_yu_ingot', (item, advanced, text) => {

      text.add(Text.gold('据说山城高岭知道这种材料的获得方式'))
    
  })

  event.addAdvanced('akashictome:tome', (item, advanced, text) => {

    text.add(Text.gold('借助小恶魔的能力，能瞬间找到任意想要的书'))
    text.add(Text.gold('对着空气左键即可恢复原状'))
  
})


  event.addAdvanced("sakuratinker:tinker_arrow", (item, advanced, text) => {

    text.add(Text.gold("消耗耐久的箭矢，需要弓有箭矢装载强化才能使用"))
  
})

  event.addAdvanced("touhou_little_maid:shrine", (item, advanced, text) => {

    text.add(Text.gold("放入胶片可复活女仆"))
  
})

  event.addAdvanced("youkaishomecoming:steamer_pot", (item, advanced, text) => {
    text.add(Text.gold("需要装水才能正常使用"))
})

  event.addAdvanced("thermal:device_hive_extractor", (item, advanced, text) => {
    text.add(Text.gold("放置于蜂巢或蜂箱下方，可自动收集蜂蜜🍯和蜜脾"))
})

  event.addAdvanced(['thermal:servo_attachment', 'thermal:turbo_servo_attachment'], (item, advanced, text) => {

    text.add(Text.gold("用于热力的流体管道，可主动泵出流体"))
  
})

  event.addAdvanced(['sakuratinker:eezo_ore', 'sakuratinker:eezo_ingot'], (item, advanced, text) => {
    text.add(Text.gold("零素矿生成于主世界基岩层"))
})
  event.addAdvanced(['supplementaries:netherite_door', 'supplementaries:netherite_trapdoor'], (item, advanced, text) => {
    text.add(Text.gold("可在熔岩炉中熔融"))
})


  event.addAdvanced(['laserio:card_item', 'laserio:card_fluid', 'laserio:card_energy', 'laserio:card_redstone'], (item, advanced, text) => {
    text.add(Text.gold("右键可打开并配置模式"))
})

  event.addAdvanced('explorerscompass:explorerscompass', (item, advanced, text) => {
    text.add(Text.gold("建议根据任务说明来搜索对应英文结构名称,否则可能无法找到"))
    text.add(Text.darkGreen("因修改版指南针存在严重BUG，现已替换为未修改的指南针模组"))
  })

  event.addAdvanced(['cloudertinker:zombie_scepter_core', 'cloudertinker:lifedrain_scepter_core',
     'cloudertinker:twilight_scepter_core', 'cloudertinker:fortification_scepter_core'], (item, advanced, text) => {
    text.add(Text.gold("可以在黑市里交换其他物品"))
  })

    event.addAdvanced(['constructionwand:stone_wand', 'constructionwand:iron_wand',
     'constructionwand:diamond_wand', 'constructionwand:infinity_wand'], (item, advanced, text) => {
    text.add(Text.gold("请勿用手杖放置任何非原版特殊方块，如热力管道"))
  })

    event.addAdvanced('artifacts:bunny_hoppers', (item, advanced, text) => {
    text.add(Text.gold("服务器中佩戴时可能会无法打开机械动力的过滤器"))
  })

    event.addAdvanced('thermal:dynamo_stirling', (item, advanced, text) => {
    text.add(Text.gold("消耗固体燃料，基础发电量：480FE/t"))
  })

    event.addAdvanced('thermal:dynamo_compression', (item, advanced, text) => {
    text.add(Text.gold("消耗热力液体，基础发电量：1280FE/t"))
  })
      event.addAdvanced('thermal:dynamo_magmatic', (item, advanced, text) => {
    text.add(Text.gold("消耗熔岩或烈焰血，基础发电量：120FE/t"))
  })
      event.addAdvanced('thermal:dynamo_numismatic', (item, advanced, text) => {
    text.add(Text.gold("消耗金属币，基础发电量：240FE/t"))
  })
      event.addAdvanced('thermal:dynamo_lapidary', (item, advanced, text) => {
    text.add(Text.gold("消耗珠宝或钱币，基础发电量：960FE/t"))
  })
event.addAdvanced('thermal:dynamo_disenchantment', (item, advanced, text) => {
    text.add(Text.gold("消耗附魔书，基础发电量：1920FE/t"))
  })
event.addAdvanced('thermal:dynamo_gourmand', (item, advanced, text) => {
    text.add(Text.gold("消耗食物，基础发电量：1280FE/t"))
  })

event.addAdvanced(Item.of('youkaishomecoming:rumia_hairband'), (item, advanced, text) => {
    text.add(Text.gold("额外获取方式与某个都市传说有关"))
  })

  event.addAdvanced('advanced_ae:adv_pattern_encoder', (item, advanced, text) => {
    text.add(Text.gold("将已经写好的普通样板放入其中，才能进行进一步处理"))
  })

  event.addAdvanced('kubejs:inu', (item, advanced, text) => {
    text.add(Text.gold("对狼右键使用德格米碎片后获得"))
  })

  event.addAdvanced('immortalers_delight:empty_bamboo_cup', (item, advanced, text) => {
    text.add(Text.gold("溪竹茶喝完后剩下的杯子"))
  })
  event.addAdvanced('immortalers_delight:contains_tea_leisamboo', (item, advanced, text) => {
    text.add(Text.gold("嗅探兽在河流群系的挖掘产物，需要一片人工草地"))
  })
  event.addAdvanced('immortalers_delight:himekaido_seed', (item, advanced, text) => {
    text.add(Text.gold("嗅探兽在森林群系的挖掘产物"))
  })
  event.addAdvanced('immortalers_delight:pearlipearl', (item, advanced, text) => {
    text.add(Text.gold("嗅探兽在丛林群系的挖掘产物"))
  })
  event.addAdvanced('immortalers_delight:evolutcorn_grains', (item, advanced, text) => {
    text.add(Text.gold("嗅探兽在平原群系的挖掘产物"))
  })
  event.addAdvanced('immortalers_delight:kwat_wheat_seeds', (item, advanced, text) => {
    text.add(Text.gold("嗅探兽在绯红森林群系的挖掘产物，需要一片人工草地"))
  })
  event.addAdvanced('touhou_little_maid:garage_kit', (item, advanced, text) => {
    text.add(Text.gold("任意造型的手办均可用于配方合成"))
  })
  event.addAdvanced('irons_spellbooks:blood_upgrade_orb', (item, advanced, text) => {
    text.add(Text.gold("可与蕾米莉亚交换匠魂材料"))
  })
  event.addAdvanced('ars_nouveau:summon_focus', (item, advanced, text) => {
    text.add(Text.gold("强化召唤物，并且将作用于自身的法术应用于召唤物上"))
  })
  event.addAdvanced('irons_spellbooks:keeper_flamberge', (item, advanced, text) => {
    text.add(Text.gold("由远古骑士掉落"))
  })
  event.addAdvanced('sakuratinker:fox_mask', (item, advanced, text) => {
    text.add(Text.gold("灵视大于100点时，可消耗50点在仪式火盆处兑换得到"))
    text.add(Text.gold("主手需要：破败焰形剑"))
  })

  event.addAdvanced('immortalers_delight:golden_himekaido', (item, advanced, text) => {
    text.add(Text.gold("灵视大于120时，可消耗60灵视在仪式火盆处兑换得到"))
    text.add(Text.gold("主副手分别需要：风暴精华，凋灵合金锭"))
  })

event.addAdvanced('mbd2:nuclear_plant', (item, advanced, text) => {
    text.add(Text.gold("灵视大于180点时，可消耗30点在仪式火盆处兑换得到"))
    text.add(Text.gold("主副手分别需要：钻石块，腾炎块"))
  })

  event.addAdvanced('kubejs:kosuzu', (item, advanced, text) => {
    text.add(Text.gold("灵视大于150点时，可消耗80点在仪式火盆处兑换得到"))
    text.add(Text.gold("主副手分别需要：远古知识碎片，附魔书"))
  })

    event.addAdvanced('farmersdelight:straw_bale', (item, advanced, text) => {
    text.add(Text.gold("灵视大于10点时，可消耗5点灵视与此物品"))
    text.add(Text.gold("在仪式火盆处兑换随机农作物"))
  })
event.addAdvanced('kubejs:seija', (item, advanced, text) => {
    text.add(Text.gold("除了多方块合成，似乎还有一种特殊的，符合“下克上”原则的获得方式"))
  })
  event.addAdvanced('touhou_little_maid:favorability_tool_full', (item, advanced, text) => {
    text.add(Text.gold("可通过击败古明地恋获得"))
  })
  event.addAdvanced('create:blaze_burner', (item, advanced, text) => {
    text.add(Text.gold("可通过烈焰血浇筑获得"))
  })


  
})