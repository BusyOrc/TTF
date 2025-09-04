ServerEvents.recipes(event => {
    event.remove({id:'goety:focus/corruption_focus'})//移除腐化聚晶原配方
    event.remove({id:'goety:haunted/haunted_armor_stand'})//移除缠魂盔甲架配方
    event.remove({id:'goety:flame_capture'})//移除捕捉笼配方
    //event.remove({id:'goety_revelation:broken_halo2'})//移除破碎之环配方（启示录去除，注释掉）
})