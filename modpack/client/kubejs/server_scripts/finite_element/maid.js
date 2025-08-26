MaidEvents.interactMaid("minecraft:bucket",event=>{
//        console.log(`${event.getStack()}`)
    event.getStack().count-=1
    event.player.addItem("minecraft:milk_bucket")
    event.cancel()
})

EntityEvents.hurt("touhou_little_maid:maid", event=>{
    if(event.getSource()!=null)
    {
    let source= event.getSource().getType()
    if(source=="player"||"minecraft:player")
    {
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

