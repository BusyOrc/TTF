/* MystiasIzakayaEvents.collectCuisine(event=>{

})

MystiasIzakayaEvents.currencyChange(event=>{
    if (event.changeType=="to_donation"){
        var a = -event.getAmount()
        while(a>0){
            if(a>64){
                a=a-64;
                event.player.give(Item.of('lightmanscurrency:coin_copper',64))
            }else{
                event.player.give(Item.of('lightmanscurrency:coin_copper',a))
                a=0
            }
        }
        event.setCanceled(true)
    }
}) */
const rotten_litchi = [
    Item.of('minecraft:apple', "{display:{Lore:['{\"text\":\"起码名字叫“附魔金”\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"附魔金苹果\",\"color\":\"gold\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('minecraft:carrot', "{display:{Lore:['{\"text\":\"好像只是黄了点\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"金胡萝卜\",\"color\":\"gold\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('minecraft:mushroom_stew', "{display:{Lore:['{\"text\":\"好像是只是拿几个蘑菇煮了下水\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"秘制鲜菌煲\",\"color\":\"white\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('youkaishomecoming:soy_sauce_flask', "{display:{Lore:['{\"text\":\"喝起来像酱油\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"经典葡萄酒\",\"color\":\"red\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('farmersdelight:tomato_sauce', "{display:{Lore:['{\"text\":\"但是肉和面都没有放\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"番茄肉酱意大利面\",\"color\":\"gold\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('farmersdelight:dog_food', "{display:{Lore:['{\"text\":\"这个加血这个厉害\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"“晚餐”\",\"color\":\"white\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('farmersdelight:pie_crust', "{display:{Lore:['{\"text\":\"空气馅的\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"大号馅饼\",\"color\":\"yellow\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('farmersdelight:cooked_cod_slice', "{display:{Lore:['{\"text\":\"夜盲症确实解除了，怎么回事呢\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"八目鳗片\",\"color\":\"light_purple\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}"),
    Item.of('minecraft:rotten_flesh', "{display:{Lore:['{\"text\":\"精选狂野地沟油\",\"color\":\"gray\",\"bold\":true,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}'],Name:'[{\"text\":\"辣条\",\"color\":\"yellow\",\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false}]'}}")
]

const premium_litchi = [
    'youkaishomecoming:seven_colored_yokan',
    'youkaishomecoming:imitation_bear_paw',
    'youkaishomecoming:sauce_grilled_fish',
    'youkaishomecoming:pastitsio',
    'youkaishomecoming:cumberland_loin',
    'youkaishomecoming:scholar_ginkgo',
    'youkaishomecoming:tomato_sauce_cod',
    'youkaishomecoming:kaguya_hime',
    'youkaishomecoming:rice_powder_pork',
    'youkaishomecoming:hokkaido_salmon_hotpot',
    'youkaishomecoming:borscht',
    'youkaishomecoming:potato_soup',
    'youkaishomecoming:power_soup',
    'youkaishomecoming:rainbow_roll',
    'youkaishomecoming:volcano_roll',
    'youkaishomecoming:salmon_lover_roll',
    'youkaishomecoming:roe_california_roll',
    'youkaishomecoming:salmon_futomaki',
    'youkaishomecoming:tekka_maki',
    'youkaishomecoming:bowl_of_heart_throbbing_surprise',
    'youkaishomecoming:mapo_tofu',
    'youkaishomecoming:lions_head',
    'youkaishomecoming:udumbara_cake',
    'youkaishomecoming:honey_glazed_cucumber',
    'youkaishomecoming:tuscan_salmon',
    'youkaishomecoming:tofu_crab_stew',
    'youkaishomecoming:han_palace',
    'youkaishomecoming:shirayuki'
]

/* EntityEvents.death(event=>{
    if (event.entity && !event.entity.player && event.entity.monster && event.source.actual) {
        var target = event.entity
        var source = event.source.actual
        if(source!=null)
        {
            if (source.isPlayer()) {
            if (isEquippedCurio(source, 'endrem:corrupted_eye')) {
                target.persistentData.WillDropEmerald = true
            }
            if (target.type == 'entity.youkaishomecoming.mystia_lorelei' && !source.persistentData.WangShifu) {
                source.persistentData.WangShifu = true
                if (source.persistentData.rotten_litchi) {
                    source.tell('§d§l米斯蒂娅：§r补药打了，人家下次保证不坑你了')
                }
            }
        }
    }
    }
}) */

ItemEvents.rightClicked(event =>{
    let player = event.entity
    let entity = player.rayTrace(5,false).entity
    let item = event.item
//console.log(entity.type)
    
    if (player) {
        if (entity != null) {
            if (entity.type == 'entity.youkaishomecoming.rumia' && item.id == 'farmersdelight:cabbage') {
                if (entity.nbt.youkai_flags == 0) {
                    entity.attack(9999)
                    player.tell('§c§l露米娅:§r§l我!不!吃!')
                    player.swing()
                }
            }
            if (entity.type == 'entity.youkaishomecoming.mystia_lorelei') {
                
                if (item && (!entity.nbt['auto-serial'].targets || entity.nbt['auto-serial'].targets?.list.length == 0)) {
                    if (item.id == 'minecraft:emerald') {
                        if (item.count < 10) {
                            player.tell('§d§l米斯蒂娅：§r你的钱不够哦')
                        }else{
                            item.setCount(item.count - 10)
                            var food = rotten_litchi
                            if (player.persistentData.WangShifu) {
                                food = premium_litchi
                            }
                            var getfood = food[Math.floor(food.length * Math.random())]
                            if (player.persistentData.WangShifu) {
                                getfood = Item.of(getfood)
                            }else{
                                player.persistentData.rotten_litchi = true
                            }
                            player.tell('§d§l米斯蒂娅：§r多谢惠顾~')
                            player.give(getfood)

                            let position = entity.position()
                            player.level.spawnParticles('minecraft:happy_villager',false, position.x(),position.y()+2, position.z(), 0.5, 0.5, 0.5, 15, 0.8)
                
                        }
                    }else{
                        player.tell('§d§l米斯蒂娅：§r只收绿宝石啦')
                    }
                }
            }
            if (entity.type == 'entity.minecraft.frog' && item.id == 'youkaishomecoming:suwako_hat') {
                var sanae = entity.level.createEntity('youkaishomecoming:kochiya_sanae')
                var xyz = entity.getEyePosition()
                sanae.setPosition(xyz.x(),xyz.y(), xyz.z())
                sanae.mergeNbt({"modelId":'touhou_little_maid:hakurei_reimu'})
                sanae.spawn()
                entity.remove("killed")
                event.cancel()
                var test=entity.level.createEntity('youkaishomecoming:kochiya_sanae')
            }
        }
    }
})