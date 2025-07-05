ServerEvents.recipes(event => {

  event.recipes.create.cutting(['2x create:rose_quartz', Item.of('create:rose_quartz').withChance(0.5)], 'biomesoplenty:rose_quartz_block')
  event.recipes.create.cutting('create:rose_quartz', 'biomesoplenty:rose_quartz_chunk')

  event.recipes.create.crushing([Item.of('minecraft:gunpowder').withChance(0.7)], 'biomesoplenty:brimstone')
  event.recipes.create.crushing(['9x minecraft:gunpowder'], 'biomesoplenty:brimstone_fumarole')

  event.recipes.create.crushing(['2x thermal:sulfur',Item.of('chemlib:sulfur_dust').withChance(0.7)], 'biomesoplenty:thermal_calcite')
  event.recipes.create.crushing(['3x thermal:sulfur',Item.of('chemlib:sulfur_dust'), '4x chemlib:sulfur'], 'biomesoplenty:thermal_calcite_vent')

  event.recipes.create.cutting('biomesoplenty:porous_flesh', 'biomesoplenty:flesh')
  //event.recipes.create.filling('biomesoplenty:flesh',['minecraft:rotten_flesh',Fluid.of('forge:blood',500)])
  event.custom(
  {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:rotten_flesh"
      },
      {
        "amount": 500,
        "fluidTag": "forge:blood"
      }
    ],
    "results": [
      {
        "item": "biomesoplenty:flesh"
      }
    ]
  }
)

  //event.recipes.create.mixing('4x youkaishomecoming:flesh',['4x youkaishomecoming:soy_sauce_bottle','biomesoplenty:porous_flesh'])
  event.recipes.create.mixing('4x youkaishomecoming:flesh',[Fluid.of('youkaishomecoming:soy_sauce',1000),'biomesoplenty:porous_flesh']) 
  event.recipes.create.mixing(Fluid.of('youkaishomecoming:soy_sauce',1000),[Fluid.water(1000),'4x chemlib:cellulose']).heated() 

  event.recipes.create.crushing('minecraft:string', 'biomesoplenty:hanging_cobweb')
  event.recipes.create.crushing('minecraft:string', 'biomesoplenty:webbing')

let bop_planks=[
  "biomesoplenty:palm_planks","biomesoplenty:magic_planks","biomesoplenty:umbran_planks",
  "biomesoplenty:fir_planks","biomesoplenty:pine_planks","biomesoplenty:maple_planks","biomesoplenty:mahogany_planks",
  "biomesoplenty:jacaranda_planks","biomesoplenty:redplanks_planks","biomesoplenty:dead_planks","biomesoplenty:hellbark_planks","biomesoplenty:willow_planks"
]

for(let planks of bop_planks)
{
  event.shaped(
    "minecraft:chest",
    [
      'AAA',
      'A A',
      'AAA'
    ],
    {
      A: planks
    }
  )
}




})