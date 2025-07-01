BlockEvents.rightClicked("minecraft:reinforced_deepslate", event => {
    if(event.item === "minecraft:nether_star") {//右键消耗的物品
 //     event.server.runCommandSilent(`setblock ${event.getBlock().getX()} ${event.getBlock().getY()} ${event.getBlock().getZ()} minecraft:grass_block`)//此处为转换的物品
      event.server.runCommandSilent(`particle crop_growth_emitter 0 0.65 0 1 ${event.getBlock().getX()} ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ()} 0.25 0.2 0.25 1 100 force`)//此处为执行成功时的粒子效果，这个可以注释掉，没什么意义

      event.player.give(Item.of('tofucraft:tofustick', 1))
      event.getItem().setCount(event.item.getCount() - 1)//物品-1
      var text = Component.green(`下界之星被转换为了新的形态`)
      event.player.setStatusMessage(text)

    }
  })

PlayerEvents.respawned(event=>{
    event.player.potionEffects.add("youkaishomecoming:unconscious",600,0,false,true)
    event.player.potionEffects.add("minecraft:slow_falling",200,2,false,true)
    event.player.potionEffects.add("minecraft:resistance",60,3,false,true)
    event.server.runCommand(`say 古明地恋对${event.player.username}说：“菜，就多练”，并给予了短时间无意识效果（强力隐身，但攻击时会消失）`)
})




  ItemEvents.entityInteracted('item.entity_interact' , event => {
    if (event.target.type == "alexsmobs:snow_leopard" && event.player.getHeldItem(event.hand) == 'quark:ancient_tome'
    && event.target.type!= null && event.item!= null)
        {
            event.player.mainHandItem.count-=1
            
            event.entity.block.popItem('ae2_mega_things:mega_item_disk_housing')
            event.server.runCommand(`say ${event.player.username} 试图让雪豹学习古卷，雪豹回馈了奖励并且说：知识雪豹`)
            
        }
        else
        {

    if(event.item.nbt != null)
    {
         //   console.log(event.item.nbt["tic_modifiers"].toString().includes("tconstruct:photo") ); // 若包含则输出true
         //   console.log(event.player.getAttributeValue("minecraft:generic.max_health"))
    }
            
        }
  }
  )

  EntityEvents.death("tofucraft:tofu_gandlem", event => {

   if(event.source.getActual() != null)
   {
    const killer=event.source.getActual()
    if(killer.type="player" && killer.getAttributeValue("minecraft:generic.max_health")<40)
    {
        event.server.runCommand(`say ${event.source.getActual().username} 成功低血量击杀豆腐战神，获得额外奖励`)
        event.source.getActual().give('6x irons_spellbooks:upgrade_orb')
    }
   }
  })

  EntityEvents.death("cataclysm:ancient_remnant", event => {

    if(event.source.getActual() != null)
    {
        const killer=event.source.getActual()
     if(killer.isPlayer())
     {

        let speed=event.source.actual.mainHandItem.nbt["tic_stats"]["tconstruct:attack_speed"]
        if(speed<0.8)
        {
   
         event.server.runCommand(`say ${event.source.actual.username} 以低攻速匠魂武器击杀远古遗魂，获得额外奖励`)
         event.source.actual.give('8x irons_spellbooks:blank_rune')
         console.log(speed)
        }
     }

    }
   })

  EntityEvents.death("minecraft:ender_dragon", event => {

    if(event.source.getActual() != null)
    {
        const killer=event.source.getActual()
    if(killer.type="player" && killer.getAttributeValue("minecraft:generic.max_health")<40)
     {

   
         event.server.runCommand(`say ${event.source.actual.username} 在低血量情况下击杀末影龙，受到了某位天邪鬼的青睐`)
         event.source.actual.give('4x kubejs:seija')
        
     }

    }
   })   



