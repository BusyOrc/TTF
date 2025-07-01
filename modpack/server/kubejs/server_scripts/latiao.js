//latiao
let ltc=(event,color)=>{
    event.recipes.thermal.smelter('ltc2:pepper_'+color+'_latiao',['ltc2:unprocessed_latiao','4x ltc2:pepper_'+color+'_powder'])
    event.recipes.thermal.smelter('ltc2:rare_pepper_'+color+'_latiao',['ltc2:latiao','4x ltc2:pepper_'+color+'_powder'])
    event.recipes.thermal.smelter('ltc2:superior_pepper_'+color+'_latiao',['ltc2:rare_latiao','4x ltc2:pepper_'+color+'_powder'])
    event.recipes.thermal.smelter('ltc2:delicacy_pepper_'+color+'_latiao',['ltc2:superior_latiao','4x ltc2:pepper_'+color+'_powder'])
    /*
    event.recipes.create.mixing('ltc2:pepper_'+color+'_latiao',['ltc2:unprocessed_latiao','4x ltc2:pepper_'+color+'_powder']).heated()
    event.recipes.create.mixing('ltc2:rare_pepper_'+color+'_latiao',['ltc2:latiao','4x ltc2:pepper_'+color+'_powder']).heated()
    event.recipes.create.mixing('ltc2:superior_pepper_'+color+'_latiao',['ltc2:rare_latiao','4x ltc2:pepper_'+color+'_powder']).heated()
    event.recipes.create.mixing('ltc2:delicacy_pepper_'+color+'_latiao',['ltc2:superior_latiao','4x ltc2:pepper_'+color+'_powder']).heated()
*/

}
let ltc2=(event,id,type)=>{
    event.recipes.thermal.smelter('ltc2:'+type+'_latiao',['ltc2:unprocessed_latiao',id])
    event.recipes.thermal.smelter('ltc2:rare_'+type+'_latiao',['ltc2:latiao',id])
    event.recipes.thermal.smelter('ltc2:superior_'+type+'_latiao',['ltc2:rare_latiao',id])
    event.recipes.thermal.smelter('ltc2:delicacy_'+type+'_latiao',['ltc2:superior_latiao',id])
    /*
    event.recipes.create.mixing('ltc2:'+type+'_latiao',['ltc2:unprocessed_latiao',id]).heated()
    event.recipes.create.mixing('ltc2:rare_'+type+'_latiao',['ltc2:latiao',id]).heated()
    event.recipes.create.mixing('ltc2:superior_'+type+'_latiao',['ltc2:rare_latiao',id]).heated()
    event.recipes.create.mixing('ltc2:delicacy_'+type+'_latiao',['ltc2:superior_latiao',id]).heated()
    */
}
let ltc3=(event,latiao,op,ip)=>{
    event.recipes.thermal.smelter(op,[latiao,ip,"2x #ltc2:pepper_powders"])
 //   event.recipes.create.mixing(op,[latiao,ip,"2x #ltc2:pepper_powders"]).heated()
}
ServerEvents.recipes(event => {
/*
ltc(event,"red")
ltc(event,"green")
ltc(event,"white")
ltc(event,"black")
ltc(event,"sweet")
ltc(event,"yellow")
ltc(event,"jalapeno")
ltc(event,"jolokia")
ltc(event,"bloody")
ltc(event,"complained")
ltc2(event,'4x ltc2:cleanse_powder',"cleanse" )
ltc2(event,'4x ltc2:refined_underground_oil',"underground_oil" )
ltc3(event,"ltc2:rare_latiao", 'ltc2:hotaurum_latiao', "8x minecraft:gold_ingot")
ltc3(event,"ltc2:superior_latiao", 'ltc2:diamond_latiao', "8x minecraft:diamond")
ltc3(event,'ltc2:diamond_latiao', 'ltc2:netherite_latiao', "minecraft:netherite_ingot")
ltc3(event,"ltc2:superior_latiao", 'ltc2:naga_latiao', '8x twilightforest:naga_scale')
ltc3(event,"ltc2:superior_latiao", 'ltc2:fiery_latiao', '8x twilightforest:fiery_tears')
ltc3(event,"ltc2:latiao", 'ltc2:farmers_latiao', '8x farmersdelight:cabbage_leaf')
*/

event.custom(
    {
        "type": "ltc2:pepper_transmutation",
        "input": {
          "item": "thermalendergy:endergy_upgrade_3"
        },
        "output": {
          "item": "sakuratinker:south_star",
          "count": 1
        },
        "experience": 8,
        "chance": 50
      }
)


event.custom(
    {
        "type": "ltc2:pepper_transmutation",
        "input": {
          "item": "tconstruct:manyullyn_block"
        },
        "output": {
          "item": "twilightforest:mining_sapling",
          "count": 1
        },
        "experience": 4,
        "chance": 10
      }
)








})