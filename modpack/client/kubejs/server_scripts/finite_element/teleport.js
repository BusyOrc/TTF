PlayerEvents.chat(event=>{

let mes=event.getMessage().toString().trim()
if(mes.includes("紫妈") ||mes.includes("紫老太婆"))
{
    Utils.server.scheduleInTicks(40, () => {
    Utils.server.tell("紫：有人说我的坏话了对吧，马上送进隙间")
    Utils.server.runCommandSilent(`/execute in ttf:gap run tp ${event.player.username} 0 -52 0`)
})
}
if(mes.includes("帮我") && mes.includes("永琳"))
    if(event.player.stages.has("heal"))
    {
        var text = Component.red(`至少等半小时再来拜托永琳吧`)
        event.player.setStatusMessage(text)
    }
    else
{
    Utils.server.scheduleInTicks(30, () => {
    event.server.runCommandSilent(`heal ${event.player.username}`)
    event.server.runCommand(`say 永琳治好了${event.player.username}的伤势，大夫妙手回春啊`)
    event.player.stages.add("heal")
    })
    Utils.server.scheduleInTicks(20*1800, () => {
    Utils.player.stages.remove("heal")
})


}




})