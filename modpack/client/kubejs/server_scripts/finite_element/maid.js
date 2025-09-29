const $MaidWorldData=Java.loadClass("com.github.tartaricacid.touhoulittlemaid.world.data.MaidWorldData")
const $EntityMaid=Java.loadClass("com.github.tartaricacid.touhoulittlemaid.entity.passive.EntityMaid")
const $ChatBubbleManager=Java.loadClass("com.github.tartaricacid.touhoulittlemaid.entity.chatbubble.ChatBubbleManger")
const $InteractionHand=Java.loadClass('net.minecraft.world.InteractionHand')
const $ANFakePlayer=Java.loadClass('com.hollingsworth.arsnouveau.api.ANFakePlayer')
const $BlockHitResult=Java.loadClass('net.minecraft.world.phys.BlockHitResult')

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
    if(event.getSource().getActual()!=null)
    {
    let source= event.getSource().getActual().getType()
    if(source=="minecraft:player")
    {
        event.cancel()
       
    }

    }
})

MaidEvents.interactMaid("minecraft:netherite_ingot",event=>{
let maid_name=event.getMaid().getDisplayName().toString()
if(maid_name.includes("reisen"))
{
    event.player.addItem("kubejs:reisens_essence_bucket")
    event.getStack().count-=1
    event.cancel()
}

})


/* let gift={
    'mynethersdelight:magma_cake_block':24,
    'youkaishomecoming:koishi_mousse':48,
    'youkaishomecoming:scarlet_devil_cake':80,
    'youkaishomecoming:higi_doughnut':72
}

ItemEvents.entityInteracted(event=>{

    if(event.target.type!="entity.touhou_little_maid.maid")return;

    if(event.item.hasTag("kubejs:gift")){
        let level=event.level;
        let item=event.item;
        let maid=event.target;
        let player=event.player;

        if(!maid.isOwnedBy(player))return;
        let timestamp=parseInt(level.dayTime()/(24000))
        let old_timestamp=maid.persistentData.getInt("gift_timestamp")
        if(old_timestamp!=timestamp){
            maid.persistentData.putInt("gift_timestamp",timestamp)
            maid.getFavorabilityManager().add(gift[item.id]);
 //           $ChatBubbleManager.addInnerChatText(maid,"maid.kubejs.present_received")
            level.spawnParticles("minecraft:heart",false,maid.x,maid.y+1.5,maid.z,0.5,0.5,0.5,3,0.01)
            player.setStatusMessage(`好感度 +${gift[item.id]}`)
            item.shrink(1);
        }
        else{
            player.setStatusMessage(`每天只能给每个女仆送一份礼物！`)
        }
        event.cancel()
    } 

})*/

const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let side = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]

MaidRegister.TASK.walkToBlockTask("kubejs:crystal", "ae2:certus_quartz_crystal")
    .addConditionDesc("need_pickaxe", maid => maid.mainHandItem.hasTag("minecraft:pickaxes"))
    .setCloseEnoughDist(3)
    .setVerticalSearchRange(3) // 搜索范围,默认是2,太大影响性能
    .setSearchCondition(maid => {
        return maid.mainHandItem.hasTag("minecraft:pickaxes")
    })
    .setBlockPredicate( // 其实可以直接找水晶簇然后采的,但貌似女仆看不到太高的方块
        (maid, blockPos) => {
            return maid.level.getBlock(blockPos.getX(), blockPos.getY(), blockPos.getZ()).hasTag("forge:budding")
        })
    .setArriveAction(
     /**
     * @param {Internal.EntityMaid} maid - 女仆实体
     * @param {BlockPos} blockPos - 打算执行逻辑的方块的位置
     */
        (maid, blockPos) => {
            let level = maid.level
            side.forEach(value => {
                let x = blockPos.getX() + value[0]
                let y = blockPos.getY() + value[1]
                let z = blockPos.getZ() + value[2]
                let targetPos = $BlockPos(x, y, z)
                if (level.getBlock(x, y, z).hasTag("forge:clusters")) {
                    maid.swing()
                    maid.destroyBlock(targetPos)
                    // 这边可以 maid.mainHandItem 获取主手镐子然后扣耐久,但是我认为没必要(
                }
            })
        })






