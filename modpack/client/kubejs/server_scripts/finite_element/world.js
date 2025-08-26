BlockEvents.rightClicked("minecraft:reinforced_deepslate", event => {
    if(event.item === "minecraft:nether_star") {//右键消耗的物品
 //     event.server.runCommandSilent(`setblock ${event.getBlock().getX()} ${event.getBlock().getY()} ${event.getBlock().getZ()} minecraft:grass_block`)//此处为转换的物品
      event.player.give(Item.of('tofucraft:tofustick', 1))
      event.getItem().setCount(event.item.getCount() - 1)//物品-1
      var text = Component.green(`下界之星被转换为了新的形态`)
      event.player.setStatusMessage(text)

    }
  })

  BlockEvents.rightClicked("#lootr:containers", event => {
   // console.log(`${event.block.hasTag("lootr:containers")}`)

if(event.player.hasEffect("youkaishomecoming:unconscious") && event.block.hasTag("lootr:containers"))
{
    event.player.removeEffect("youkaishomecoming:unconscious")
    
    event.player.addItemCooldown("youkaishomecoming:koishi_hat",400)
}
  })

  let lemon=['fruitsdelight:lemon', 'fruitsdelight:lemon_jelly', 'fruitsdelight:lemon_jello',
     'fruitsdelight:lemon_juice', 'fruitsdelight:lemon_slice', 'fruitsdelight:lemon_tart',
      'fruitsdelight:lemon_cookie', 'hmag:lemon', 'hmag:honeyed_lemon','hmag:lemon_pie',
       'youkaishomecoming:lemon_black_tea', 'youkaishomecoming:avgolemono',"mystias_izakaya:ning_meng"]






PlayerEvents.respawned(event=>{
    event.player.potionEffects.add("youkaishomecoming:unconscious",2400,0,false,true)
    event.player.potionEffects.add("minecraft:slow_falling",200,2,false,true)
    event.player.potionEffects.add("minecraft:resistance",60,3,false,true)
    event.server.runCommand(`say 古明地恋对${event.player.username}说：“菜，就多练”，并给予了短时间无意识效果（强力隐身，但攻击或开箱时会消失）`)
   if( event.player.stages.has("youkai"))
   {
    event.player.stages.remove("youkai")
   }

})
/*
PlayerEvents.advancement(event=>{
  event.player.advancement.has("tconstruct_emergence:bonus_tier_1")
  event.server.runCommand("say 114514")
  event.server.runCommand("advancement revoke ElysiaTopaz only tconstruct_emergence:bonus_tier_1")
})
  */



  ItemEvents.entityInteracted('item.entity_interact' , event => {
    if (event.target.type == "entity.youkaishomecoming.cirno" && event.player.getHeldItem(event.hand) == 'quark:ancient_tome'
    && event.target.type!= null && event.item!= null)
        {
            event.player.mainHandItem.count-=1
            event.entity.block.popItem('ae2_mega_things:mega_item_disk_housing')
            event.entity.block.popItem('ae2_mega_things:mega_fluid_disk_housing')
            event.server.runCommand(`say ${event.player.username} 试图让baka学习古卷，baka回馈了奖励并且说：知识学爆`)  
        }

         if (event.target.type == "entity.youkaishomecoming.cirno" && event.player.getHeldItem(event.hand)=='fruitsdelight:lemon_jelly_block'
    && event.target.type!= null && event.item!= null )
  {
    event.player.mainHandItem.count-=1
    event.entity.block.popItem("kubejs:paru")
  }
  //console.log(event.target.type)

    if(event.target.type == "entity.youkaishomecoming.remilia_scarlet" && event.player.getHeldItem(event.hand)=="irons_spellbooks:blood_upgrade_orb")
      if(event.player.mainHandItem.count>=3)
      {
        event.player.mainHandItem.count-=3
        event.entity.block.popItem("kubejs:remilia")
        var text = Component.red(`成功换取`)
        event.player.setStatusMessage(text)
      }
      else
      {
      var text = Component.red(`材料数量不足3个，无法换取`)
      event.player.setStatusMessage(text)
      }

  }
  )

  ItemEvents.entityInteracted('item.entity_interact' , event => {
    if (event.target.type == "entity.minecraft.wolf" && event.player.getHeldItem(event.hand) == 'ars_nouveau:drygmy_shard'
    && event.target.type!= null && event.item!= null)
        {
            event.player.mainHandItem.count-=1
            event.entity.block.popItem('kubejs:inu')
        }
  }
  )

  EntityEvents.death("tofucraft:tofu_gandlem", event => {
   if(event.source.getActual() != null)
   {
    const killer=event.source.getActual()
    if(killer.isPlayer() && killer.getAttributeValue("minecraft:generic.max_health")<40)
    {
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
    if(killer.isPlayer() && killer.getAttributeValue("minecraft:generic.max_health")<40)
     {
         event.source.actual.give('4x kubejs:seija')

     }

    }
   })   

   EntityEvents.death("youkaishomecoming:rumia", event => {
  const killer=event.source.getActual()
  const flag=event.entity.nbt["youkai_flags"]
    if(event.source.getActual() != null && killer.isPlayer())
    {
      
      if(flag<1)
      {
        event.source.actual.give('10x kubejs:rumia')
        console.log("1 yes")
      }
    
     else
     { 
         event.source.actual.give('10x kubejs:ex_rumia')  
         console.log("2 yes")
     }

    }

   })   


var TouhouCharacter = {
    'youkaishomecoming:shrine_maiden':'§c§l博丽灵梦:解决异变的战利品我就收下了',
    'youkaishomecoming:kirisame_marisa':'§e§l雾雨魔理沙:这些东西等我老死了再还你',
    'youkaishomecoming:kochiya_sanae':'§2§l东风谷早苗:这些危险的东西我就先回收了',
}

EntityEvents.drops(event=>{
    if (event.entity && !event.entity.player && event.entity.monster && event.source.actual && TouhouCharacter[event.source.actual.type]) {
        var target = event.entity
        if (target.maxHealth > 100) {
            target.level.entities.forEach(entity => {
                if (entity.player && target.distanceToEntity(entity) < 30) {
                    entity.tell(TouhouCharacter[event.source.actual.type])
                }
            })
        }
        event.cancel()
    }
})



