MaidEvents.interactMaid("minecraft:bucket",event=>{
//        console.log(`${event.getStack()}`)
    if(event.player.stages.has("maid"))
        {
        event.getStack().count-=1
    event.player.addItem("minecraft:milk_bucket")
    event.cancel()
}
})

EntityEvents.hurt("touhou_little_maid:maid", event=>{
    if(event.getSource()!=null)
    {
    let source= event.getSource().getActual().getType()
    if(source=="minecraft:player")
    {
//     event.server.runCommandSilent(`say 1`)
        event.cancel()
       
    }

    }
})

MaidEvents.interactMaid("minecraft:netherite_ingot",event=>{
let maid_name=event.getMaid().getDisplayName().toString()
//console.log(maid_name.includes("reisen"))
if(maid_name.includes("reisen"))
{
    event.player.addItem("kubejs:reisens_essence_bucket")
    event.getStack().count-=1
    event.cancel()
}

})

