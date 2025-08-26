BlockEvents.rightClicked('pasterdream:cloud', event => {
let dim= event.level.getDimension()
let r_item=event.item
    let x=event.block.getX()
    let y=event.block.getY()
    let z=event.block.getZ()

//event.server.runCommand(`say ${dim} and ${r_item.hasTag("forge:dream_plants")}`)
if(r_item!=null &&dim!=null)
{if(dim== "pasterdream:dyedream_world" && r_item.hasTag("forge:dream_plants"))
{
    event.player.mainHandItem.count-=1
    event.block.popItem('create:andesite_alloy')
    event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} air`)
    event.cancel()
}

if(dim== "pasterdream:dyedream_world" && r_item=='minecraft:glass_bottle')
{
    event.player.mainHandItem.count-=1
    event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} air`)
    event.player.give('quark:bottled_cloud')
    event.cancel()
}
}

})

BlockEvents.rightClicked("create:andesite_casing",event =>{
    let x=event.block.getX()
    let y=event.block.getY()
    let z=event.block.getZ()
    let dim= event.level.getDimension()
if(event.item!=null)
{
    if(dim=="pasterdream:dyedream_world" && event.item=="minecraft:flint")
    {
        if(event.item.count>=9)
        {
            event.player.mainHandItem.count-=9
            event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} create:encased_fan`)
            event.cancel()
        }
        else{
            var text = Component.red(`燧石数量不足，至少需要⑨个`)
            event.player.setStatusMessage(text)
            event.cancel()
        }
    }
}

    
})

BlockEvents.rightClicked('#tconstruct:smeltery',event=>{
    let x=event.block.getX()
    let y=event.block.getY()
    let z=event.block.getZ()
    let dim= event.level.getDimension()
    if(event.block!=null && event.item!=null)
    {
        if(event.block.hasTag("tconstruct:smeltery") && dim== "pasterdream:dyedream_world")
    {
        if(event.item.hasTag('forge:coral_blocks/alive'))
        {
            event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} tconstruct:smeltery_controller`)
            event.server.runCommand(`say 梦境的奇异力量让方块变成了新的形态`)
            event.player.mainHandItem.count-=1
            event.cancel()
            
        }
    }
}
//    event.server.runCommand(`say true`)
})



BlockEvents.rightClicked('pasterdream:dyedream_leaves', event=>{
    let x=event.block.getX()
    let y=event.block.getY()
    let z=event.block.getZ()
if(event.item!=null)
{
    if(event.item=='quark:bottled_cloud')
    {
        
        event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} air`)
        event.player.mainHandItem.count-=1
        event.block.popItem('minecraft:phantom_membrane')
        event.cancel()
        
    }
}
    
})



