const CHECK_INTERVAL = 59;
let tickCounter = 0;

PlayerEvents.tick(event=>{
        tickCounter++;
  if (tickCounter % CHECK_INTERVAL !== 0) return;

if(event.player.hasEffect("youkaishomecoming:youkaified"))
{
  // console.log(event.player.getEffect("youkaishomecoming:youkaified").duration)
      if(event.player.getEffect("youkaishomecoming:youkaified").duration>72000)
      event.player.stages.add("youkai")
      else{
            event.player.stages.remove("youkai")
      }
}



        const Insight= event.player.nbt["ForgeCaps"]["improvedmobs:player_cap"]["Difficulty"]
//        event.server.runCommand("/say "+Insight)
//        console.log(Insight)

})