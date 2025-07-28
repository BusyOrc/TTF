const CHECK_INTERVAL = 59;
let tickCounter = 0;


PlayerEvents.tick(event=>{
        tickCounter++;
  if (tickCounter % CHECK_INTERVAL !== 0) return;
if(event.player.stages.has("dev"))
      return;
if(event.player.hasEffect("youkaishomecoming:youkaified"))
{
  // console.log(event.player.getEffect("youkaishomecoming:youkaified").duration)
      if(event.player.getEffect("youkaishomecoming:youkaified").duration>72000 && !event.player.stages.has("youkai"))
      event.player.stages.add("youkai")
      else{
            event.player.stages.remove("youkai")
      }
}
else
{
      if(event.player.stages.has("youkai"))
         event.player.stages.remove("youkai")   
}


const id= event.player.username
const Insight= event.player.nbt["ForgeCaps"]["improvedmobs:player_cap"]["Difficulty"]


if(Insight<0)
{
      event.server.runCommand(`/improvedmobs difficulty player ${id} set 0`)
}

//灵视判断
if(Insight<50){//默认情况，敌人持有1级匠魂材料工具
      if(!event.player.stages.has("easy_stage"))
      {
            event.player.stages.add("easy_stage")
            event.player.setStatusMessage(Component.green(`灵视降低使你无法再看见许多生物，但至少更安全了`))
      }
      if(event.player.stages.has("normal_stage"))
      {     
            event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_1`)
            event.player.stages.remove("normal_stage")
      }
      if(event.player.stages.has("challenge_stage"))
      {
            event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_2`)
            event.player.stages.remove("challenge_stage")
      }
      if(event.player.stages.has("hardcore_stage"))
      {
            event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_3`)
            event.player.stages.remove("hardcore_stage")
      }
      
}
else{
      if(Insight>=50 && Insight<100){//末影处刑者 死灵潜行者地下生成，敌人持有2级
            if(event.player.stages.has("easy_stage"))
            {
                  event.player.stages.remove("easy_stage")
            }
            if(!event.player.stages.has("normal_stage"))
            {     
                  event.player.setStatusMessage(Component.green(`随着灵视的提高，或许能在地下看见一些新生物`))
                  event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_1`)
                  event.player.stages.add("normal_stage")
            }
            if(event.player.stages.has("challenge_stage"))
            {
                  event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_2`)
                  event.player.stages.remove("challenge_stage")
            }
            if(event.player.stages.has("hardcore_stage"))
            {
                  event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_3`)
                  event.player.stages.remove("hardcore_stage")
            }
      }
      else{
                  if(Insight>=100 && Insight<150){//死灵，末影地上，洞穴蜈蚣地下，敌人持有3级，可破坏方块
                        if(event.player.stages.has("easy_stage"))
                        {
                              event.player.stages.remove("easy_stage")
                        }
                        if(!event.player.stages.has("normal_stage"))
                        {     
                              event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_1`)
                              event.player.stages.add("normal_stage")
                        }
                        if(!event.player.stages.has("challenge_stage"))
                        {
                              event.player.setStatusMessage(Component.green(`随着灵视提高，地面上也能看见一些新生物`))
                              event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_2`)
                              event.player.stages.add("challenge_stage")
                        }
                        if(event.player.stages.has("hardcore_stage"))
                        {
                              
                              event.server.runCommandSilent(`advancement revoke ${id} only tconstruct_emergence:bonus_tier_3`)
                              event.player.stages.remove("hardcore_stage")
                        }
                  }
                  else//无视亮度刷新部分敌人(暂未实装)，德格米刷新在蘑菇森林，繁密蘑菇森林，敌人持有4级
                  {
                        if(event.player.stages.has("easy_stage"))
                        {
                              event.player.stages.remove("easy_stage")
                        }
                        if(!event.player.stages.has("normal_stage"))
                        {     
                              event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_1`)
                              event.player.stages.add("normal_stage")
                        }
                        if(!event.player.stages.has("challenge_stage"))
                        {
                              event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_2`)
                              event.player.stages.add("challenge_stage")
                        }
                        if(!event.player.stages.has("hardcore_stage"))
                        {
                              event.player.setStatusMessage(Component.green(`随着灵视提高，或许在暮色森林里能找到一些奇特的小生物`))
                              event.server.runCommandSilent(`advancement grant ${id} only tconstruct_emergence:bonus_tier_3`)
                              event.player.stages.add("hardcore_stage")
                        }
                  }
            }
      }
})



//交换物品

BlockEvents.rightClicked("ars_nouveau:ritual_brazier",event=>{
      const id= event.player.username
      const Insight= event.player.nbt["ForgeCaps"]["improvedmobs:player_cap"]["Difficulty"]
      const off_item=event.player.offhandItem

      if(event.item=='irons_spellbooks:ancient_knowledge_fragment' && off_item=="minecraft:enchanted_book")
      {
            if(Insight<150)
            {
                  event.player.setStatusMessage(Component.red(`灵视不满足兑换要求，至少需要150点`))
            }
            else
            {
                  event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add -80`)
                  event.player.block.popItem('2x kubejs:kosuzu')
                  event.player.setStatusMessage(Component.green(`成功兑换`))
                  event.player.mainHandItem.count-=1
                  event.player.offhandItem.count-=1

            }
            event.cancel()
         //   event.player.setStatusMessage(Component.red(`${off_item}`))
         //   console.log(off_item=="minecraft:enchanted_book")
      }

      if(event.item=='cataclysm:essence_of_the_storm' && off_item=='cataclysm:witherite_ingot')
      {
            if(Insight<120)
            {
                  event.player.setStatusMessage(Component.red(`灵视不满足兑换要求，至少需要120点`))
            }
            else
            {
                  event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add -60`)
                  event.player.block.popItem('immortalers_delight:golden_himekaido')
                  event.player.setStatusMessage(Component.green(`成功兑换`))
                  event.player.mainHandItem.count-=1
                  event.player.offhandItem.count-=1
            }
            event.cancel()
      }

      if(event.item=='irons_spellbooks:keeper_flamberge' )
      {
            if(Insight<100)
            {
                  event.player.setStatusMessage(Component.red(`灵视不满足兑换要求，至少需要100点`))
            }
            else
            {
                  event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add -50`)
                  event.player.block.popItem('sakuratinker:fox_mask')
                  event.player.setStatusMessage(Component.green(`成功兑换`))
                  event.player.mainHandItem.count-=1
            }
            event.cancel()
      }

      if(event.item=='minecraft:diamond_block' && off_item=='cataclysm:ignitium_block')
      {
            if(Insight<180)
            {
                  event.player.setStatusMessage(Component.red(`灵视不满足兑换要求，至少需要100点`))
            }
            else
            {
                  event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add -30`)
                  event.player.block.popItem('mbd2:nuclear_plant')
                  event.player.setStatusMessage(Component.green(`成功兑换`))
                  event.player.mainHandItem.count-=1
                  event.player.offhandItem.count-=1
            }
            event.cancel()
      }

      const SeedLootTable=[
      { item: 'youkaishomecoming:udumbara_flower', chance: 0.1 },   
      { item: 'delightful:cantaloupe_seeds', chance: 0.15 }, 
      { item: 'fruitsdelight:durian_sapling', chance: 0.2 },
      { item: 'fruitsdelight:pineapple_sapling', chance: 0.2 },
      { item: 'fruitsdelight:lemon_seeds', chance: 0.2 },
      { item: 'fruitsdelight:hamimelon_seeds', chance: 0.2 },
      { item: 'farmersdelight:rice', chance: 0.6 },
      { item: 'farmersdelight:tomato_seeds', chance: 0.6 },
      { item: 'immortalers_delight:himekaido_seed', chance: 0.05 } ]
      let random = Math.random();
      let cumulativeChance = 0;
      if(event.item=='farmersdelight:straw_bale' )
      {
            if(Insight<10)
            {
                  event.player.setStatusMessage(Component.red(`灵视不满足兑换要求，至少需要10点`))
            }
            else
            {
                  for (const loot of SeedLootTable) {
                  cumulativeChance += loot.chance;
                  if (random <= cumulativeChance) {
                        event.player.block.popItem(Item.of(loot.item));
                        break; 
                  }
                  }
                  event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add -5`)
                  event.player.setStatusMessage(Component.green(`成功兑换`))
                  event.player.mainHandItem.count-=1
            }
            event.cancel()
      }
})


EntityEvents.death("#forge:bosses",event=>{

      const killer=event.source.getActual()
      const id= killer.username
      if(event.source.getActual() != null && killer.isPlayer())
      {
            event.server.runCommandSilent(`/improvedmobs difficulty player ${id} add 36`)
      }
})


      