ItemEvents.entityInteracted('item.entity_interact' , event => {
    const player=event.player
    const net = DimensionsNet.getNetFromPlayer(player)
if(event.target.type!= null && event.item !=null)
    {
        if (event.target.type == "entity.youkaishomecoming.shrine_maiden" && event.player.mainHandItem == 'kubejs:doremy_ingot')
    {
        if(DimensionsNet.getNetFromPlayer(player)==null)
        {
        DimensionsNet.createNewNetForPlayer(player, 256, 32)
        player.mainHandItem.count-=1
        player.setStatusMessage(Component.green(`个人迷你存储隙间已创建`))
        }
        else
        {
        player.setStatusMessage(Component.red(`已经有一个存储隙间了`))
        }
       
    }
    else{
        if(player.stages.has("dev") && event.target.type == "entity.youkaishomecoming.shrine_maiden")
        {
            if(net == null )
                return;
            let storage= net.getUnifiedStorage()
            if(storage==null) return;
            storage.setSlotMaxSize(5)
            storage.setSlotCapacity(1024)
            //UnifiedStorage(DimensionsNet.getNetFromPlayer(player)).setSlotCapacity(560)
            //console.log(`12`)
            //UnifiedStorage.setSlotMaxSize(2)
            //DimensionsNet.getUnifiedStorage()
            /* let storage ={UnifiedStorage}
            storage.setSlotMaxSize(2);
            if(DimensionsNet.getNetFromPlayer(player)==null)
            {
                console.log(`23`)
            } */

        }
    }
}
})