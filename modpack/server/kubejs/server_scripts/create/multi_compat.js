ServerEvents.recipes(event =>{

event.recipes.create.splashing('quark:white_corundum','#quark:corundum')

let corundumColor=["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black"]
for(let cColor of corundumColor)
{
    var dye_color
    dye_color=cColor
if(cColor=="indigo")
    {
                dye_color="cyan";
}
else
{
    if(cColor=="violet")
            {
                dye_color="purple";
            }
    }
event.recipes.minecraft.crafting_shapeless("quark:"+cColor+"_corundum",
    ['quark:white_corundum',"4x minecraft:"+dye_color+"_dye"]
)
}

event.recipes.create.crushing(["4x minecraft:black_dye",Item.of("minecraft:black_dye").withChance(0.5)],"thermal:tar")
event.recipes.create.milling(["4x minecraft:black_dye",Item.of("minecraft:black_dye").withChance(0.5)],"thermal:tar")









})