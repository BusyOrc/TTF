BlockEvents.rightClicked('pasterdream:cloud', event => {
let dim= event.level.getDimension()
let r_item=event.player.mainHandItem
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
    if(dim=="pasterdream:dyedream_world" && event.player.mainHandItem=='hmag:soul_powder')
    {
        if(event.item.count>=9)
        {
            event.player.mainHandItem.count-=9
            event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} create:encased_fan`)
            event.cancel()
        }
        else{
            var text = Component.red(`数量不足，至少需要⑨个`)
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
        if(event.player.mainHandItem.hasTag('forge:coral_blocks/alive'))
        {
            event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} tconstruct:smeltery_controller`)
            var text = Component.green(`梦境的奇异力量让方块变成了新的形态`)
            event.player.setStatusMessage(text)
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
    if(event.player.mainHandItem=='quark:bottled_cloud')
    {
        
        event.server.runCommandSilent(`execute in pasterdream:dyedream_world run setblock ${x} ${y} ${z} air`)
//        event.player.mainHandItem.count-=1
//        event.player.give("minecraft:glass_bottle")
        event.block.popItem('minecraft:phantom_membrane')
        event.cancel()
        
    }
}
    
})

/* BlockEvents.rightClicked(event=>{
    if(event.item!=null)
    {
        if(event.item.hasTag("forge:tools") && event.item.nbt["tic_broken"]==true)
            event.cancel()
        event.server.runCommand(`say ${event.item.nbt["tic_broken"]}`)
    }
}) */


ServerEvents.recipes(event=>{
event.custom(
    {
  "type": "ae2:transform",
  "circumstance": {
    "type": "fluid",
    "tag": "minecraft:water"
  },
  "ingredients": [
    {
      "tag": "hmag:milk"
    },
    {
      "item": "minecraft:sugar"
    },
    {
        "item":"minecraft:cocoa_beans"
    }
  ],
  "result": {
    "count": 2,
    "item": "create:bar_of_chocolate"
  }
}
)



/* event.shaped(
    "minecraft:apple",
    [
        'ABB'
    ],
    {A:Item.of("tconstruct:pickaxe",'{tic_broken:false}').weakNBT(),
      B:   "minecraft:iron_ingot"}
).damageIngredient("#minecraft:pickaxes",1).keepIngredient("#minecraft:pickaxes") */





})

