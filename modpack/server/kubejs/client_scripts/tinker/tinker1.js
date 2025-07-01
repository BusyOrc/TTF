Ponder.registry((event) => {
	event.create(['tconstruct:seared_melter', 'tconstruct:seared_heater',
         'tconstruct:seared_table', 'tconstruct:seared_basin',
          'tconstruct:seared_faucet',"#tconstruct:smeltery"])
		.scene(
			"kubejs:tinker",
			"匠魂基础熔炼",
			"kubejs:tinker", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.scaleSceneView(1.2)
                scene.addKeyframe()
                const blocks1=[
                    [3,1,1],[2,1,1],[1,1,1],
                    [2,2,1],[3,2,1],[1,2,1]
                ]
                for(let block of blocks1){
                scene.world.showSection(block, Direction.down)
                    scene.idle(2)
                }
                scene.idle(25)
                scene.text(60, "在焦黑加热器中放入燃料，也可以替换为存放有液体燃料的匠魂储罐", [2.5, 1.5, 1.5])
                scene.showControls(40, utils.grid.at(2.5, 1.5, 1.5), 'down')
				.rightClick().withItem('minecraft:coal')
                scene.idle(70)
                scene.text(60, "在上方的焦黑熔化炉中放入需要融化的材料", [2.5, 2.5, 1.5])
                scene.idle(70)
                scene.text(60, "为了演示方便，这里为已经融化完成的熔融绿宝石", [2.5, 2.5, 1.5])
                scene.idle(70)

                scene.text(60, "在这里放上沙子铸模或金质铸模", [1.5, 2, 1.5])
                scene.showControls(40, utils.grid.at(1.5, 2, 1.5), 'down')
				.rightClick().withItem('tconstruct:chestplate_plating_cast')
                scene.idle(70)
                scene.text(60, "融化完成后，右键点击浇注口就能完成浇筑", [1.8, 2.3, 1.5])
                scene.idle(70)
                scene.text(60, "对于很多有对应方块的液体，可以浇筑到铸造盆里形成方块", [3.3, 2.3, 1.5])
                scene.idle(70)


                for(let block of blocks1)
                {
                    scene.world.setBlocks(block, "minecraft:air", true)
                    scene.idle(2)
                }

                scene.idle(20)
                scene.world.showSection([2,1,2,8,8,8], Direction.down)
                scene.idle(20)

                scene.addKeyframe()
                scene.text(90, "冶炼炉多方块结构可以§b生产合金§r和使用更高温度的熔融液体")
                scene.idle(100)
                scene.text(100, "包括匠魂储罐在内的各种相应方块可以任意组合形成多方块结构")
                scene.idle(110)
                scene.text(100, "对于焦黑冶炼炉，边角可以缺失，顶部可以镂空，但是必须有§b控制器",[4.5,2.5,3.5])
                scene.idle(110)
                scene.text(80, "冶炼炉多方块结构只能使用液体燃料",[3.5,2.5,4.5])
                scene.idle(90)
                scene.rotateCameraY(90)
                scene.idle(20)
                scene.addKeyframe()
                scene.text(70, "这是焦黑排液孔，能输入输出液体",[5.5,2.5,3.5])
                scene.idle(80)
                scene.text(80, "用储罐右键也能进行互动，拿取或放入液体",[5.5,2.5,3.5])
                scene.showControls(40, utils.grid.at(1.5, 2, 1.5), 'right')
				.rightClick().withItem('tconstruct:seared_fuel_gauge')
                scene.idle(90)

                scene.text(70, "这是焦黑滑槽，能输入输出物品",[6.5,2.5,4.5])
                scene.idle(80)
                scene.text(70, "漏斗也可以换成其他管道等物流方式",[7.5,2.5,4.5])
                scene.idle(80)
                scene.rotateCameraY(90)
                scene.idle(20)
                scene.addKeyframe()
                scene.text(70, "这是焦黑输导孔，可以放入装有液体的铜罐控制过滤",[6.5,2.5,5.5])
                scene.showControls(40, utils.grid.at(6.5,2.5,5.5), 'right')
				.rightClick().withItem('tconstruct:copper_can')
                scene.idle(80)
                scene.rotateCameraY(90)
                scene.idle(20)
                scene.text(70, "这是用管道传输液体进入铸造盆的情况，铸造台同理",[4.5,2.5,7.5])
                scene.idle(80)
                scene.text(70, "甚至可以用AE的总线来控制输入和输出",[3.5,2.5,6.5])
                scene.idle(80)


            })

            event.create([/*'tconstruct:seared_melter', 'tconstruct:seared_heater',
                'tconstruct:seared_table', 'tconstruct:seared_basin',
                 'tconstruct:seared_faucet',"#tconstruct:smeltery",*/
                "#tconstruct:foundry",'tconstruct:scorched_table',
                 'tconstruct:scorched_alloyer', 'tconstruct:scorched_basin', 'tconstruct:scorched_faucet'])
               .scene(
                   "kubejs:tinker2",
                   "匠魂进阶熔炼",
                   "kubejs:tinker2", 
                   (scene, utils) => {
                    const blocks1=[
                        [2,1,1],[2,2,1],[3,2,1],
                        [1,2,1]
                    ]
                    scene.showBasePlate()
                    scene.idle(20)
                    for(let block of blocks1){
                        scene.world.showSection(block, Direction.down)
                            scene.idle(2)
                        }               
                         scene.idle(20)
                         scene.addKeyframe()
                    scene.text(100, "在合金炉两侧摆上储罐，下方放置加热器或储罐，也能制造合金",[2.5,2.5,1.5])
                    scene.idle(110)
                    scene.text(70, "但是这种方式并不常用",[2.5,2.5,1.5])
                    scene.idle(80)

                for(let block of blocks1)
                    {
                        scene.world.setBlocks(block, "minecraft:air", true)
                        scene.idle(2)
                    }
                    scene.idle(20)
                    scene.world.showSection([1,1,2,8,8,8], Direction.down)
                    scene.idle(20)
                    scene.addKeyframe()
                    scene.text(100, "焦褐炉不能省掉边角方块，并且无法制造合金")
                    scene.idle(110)
                    scene.text(100, "但是冶炼金属时会有额外副产品产出")
                    scene.idle(110)
                    scene.addKeyframe()
                    scene.text(100, "焦褐铸件台和铸造盆必须有物品（如铸模）放入其中才能通入液体",[4.5,1.5,2.5])
                    scene.idle(110)
                    scene.text(100, "适合用于部分自动化浇筑的进行",[4.5,1.5,2.5])
                    scene.idle(110)
                    scene.text(100, "如果其中没有任何物品，则无法浇筑",[4.5,1.5,2.5])
                    scene.idle(110)
                   }
               )

        })


        ///setblock 134 79 116 tconstruct:seared_ingot_gauge[in_structure=false]
        // {ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:1b}},tank:{Amount:2000,FluidName:"tconstruct:molten_copper"}}


