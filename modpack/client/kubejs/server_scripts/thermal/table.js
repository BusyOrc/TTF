ServerEvents.recipes(event=>{
    let ban_id=['extendedcrafting:luminessence']
    let ban_output=[]
for(let i of ban_id)
{
    event.remove({id:i})
}

    event.custom(
  {
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {
      "item": "ltc2:mortar",
      "data":32767
    },
    {
      "item": 'thermal:lumium_ingot'
    }
  ],
  "result": {
    "item": 'extendedcrafting:luminessence',
    "count": 1 
    
  }
}
)

})