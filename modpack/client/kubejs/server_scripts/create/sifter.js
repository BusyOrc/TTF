BlockEvents.rightClicked('#forge:sifters',event=>{
    if(event.player.mainHandItem== "minecraft:water_bucket")
    {
//        console.log(`${event.player.name}`)
        let sifter="createsifter:sifter"
        if(event.block.item=="createsifter:sifter")
        {
            sifter="createsifter:sifter"
        }
        else{
            if(event.block.item=="createsifter:brass_sifter")
                sifter="createsifter:brass_sifter"
            else
                return;
        }
        event.player.mainHandItem.count-=1
        event.player.give("minecraft:bucket")
//      event.server.runCommand(`/say ${event.block.getBlockState()}`) 
        event.server.runCommandSilent(`execute in ${event.entity.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run playsound minecraft:item.bucket.empty master @a ~ ~ ~ 1 1`)
        event.server.runCommandSilent(`execute in ${event.entity.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${sifter}[waterlogged=true] replace`) 
        event.cancel()
    }
})




//event.recipes.createsifter.sifting("minecraft:iron_ingot","minecraft:iron_ingot",tick processing time,false,min speed)
ServerEvents.recipes(event=>{
let sifter=event.recipes.createsifter.sifting
sifter(Item.of('2x minecraft:clay_ball'),'pasterdream:dyedream_sand',80,false,1)
sifter(['6x minecraft:iron_nugget',Item.of('minecraft:iron_nugget').withChance(0.5), "minecraft:bone_meal"],['minecraft:bone_block','createsifter:andesite_mesh'],100,true,1)






})