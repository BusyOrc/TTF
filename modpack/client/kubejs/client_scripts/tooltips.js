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
    text.add(Text.gold("请勿搜索任何中文结构名称,"))
    text.add(Text.gold("否则可能无法得到结果甚至造成服务器宕机"))
  })

  event.addAdvanced(['cloudertinker:zombie_scepter_core', 'cloudertinker:lifedrain_scepter_core',
     'cloudertinker:twilight_scepter_core', 'cloudertinker:fortification_scepter_core'], (item, advanced, text) => {
    text.add(Text.gold("可以在黑市里交换其他物品"))
  })

    event.addAdvanced(['constructionwand:stone_wand', 'constructionwand:iron_wand',
     'constructionwand:diamond_wand', 'constructionwand:infinity_wand'], (item, advanced, text) => {
    text.add(Text.gold("请勿用手杖放置任何非原版特殊方块"))
  })

    event.addAdvanced('artifacts:bunny_hoppers', (item, advanced, text) => {
    text.add(Text.gold("服务器中佩戴时可能会无法打开机械动力的过滤器"))
  })

    event.addAdvanced('thermal:dynamo_stirling', (item, advanced, text) => {
    text.add(Text.gold("消耗固体燃料，基础发电量：120FE/t"))
  })

    event.addAdvanced('thermal:dynamo_compression', (item, advanced, text) => {
    text.add(Text.gold("消耗液体，基础发电量：160FE/t"))
  })
      event.addAdvanced('thermal:dynamo_magmatic', (item, advanced, text) => {
    text.add(Text.gold("消耗熔岩或烈焰血，基础发电量：60FE/t"))
  })
      event.addAdvanced('thermal:dynamo_numismatic', (item, advanced, text) => {
    text.add(Text.gold("消耗金属币，基础发电量：120FE/t"))
  })
      event.addAdvanced('thermal:dynamo_lapidary', (item, advanced, text) => {
    text.add(Text.gold("消耗珠宝或钱币，基础发电量：120FE/t"))
  })
event.addAdvanced('thermal:dynamo_disenchantment', (item, advanced, text) => {
    text.add(Text.gold("消耗附魔书，基础发电量：240FE/t"))
  })
event.addAdvanced('thermal:dynamo_gourmand', (item, advanced, text) => {
    text.add(Text.gold("消耗食物，基础发电量：160FE/t"))
  })

event.addAdvanced(Item.of('youkaishomecoming:rumia_hairband'), (item, advanced, text) => {
    text.add(Text.gold("额外获取方式与某个都市传说有关"))
  })

  event.addAdvanced('advanced_ae:adv_pattern_encoder', (item, advanced, text) => {
    text.add(Text.gold("将已经写好的普通样板放入其中，才能进行进一步处理"))
  })

})