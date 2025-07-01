Ponder.registry((event) => {
	event.create(['ae2:controller'])
		.scene(
			"kubejs:ae_controller",
			"ME控制器",
			"kubejs:ae_controller", 
			(scene, utils) => {
				scene.showBasePlate()
				scene.scaleSceneView(0.8)
                scene.idle(20)
				scene.addKeyframe()
                scene.world.showSection([1, 1, 1, 7, 7, 8], Direction.DOWN)
                scene.idle(20)
                scene.text(50, '§fME控制器的搭建相当自由，在保证供电的前提下', [1.5, 1.5, 2.5])
                scene.idle(60)
                scene.text(50, '§f可以在7X7X7范围内任意组合', [1.5, 1.5, 2.5])
                scene.idle(60)
                scene.text(50, '§f但是必须满足以下要求：', [1.5, 1.5, 2.5])
                scene.idle(60)
                scene.addKeyframe()
                scene.world.setBlocks([1, 1, 1, 7, 7, 8], 'minectaft:air',false)

         //       scene.world.showSection([3, 1, 4, 5,1,4], Direction.DOWN)
                scene.world.setBlocks([3, 1, 4, 5,1,4], 'ae2:controller')
                scene.world.modifyBlock([3, 1, 4], (state) => state.with("state", "online"), false)
                scene.world.modifyBlock([4, 1, 4], (state) => state.with("state", "online").with("type","column_x"), false)
                scene.world.modifyBlock([5, 1, 4], (state) => state.with("state", "online"), false)
                scene.idle(10)
                scene.text(50, '§f1.所有控制器必须直接相连\n不能用线缆连接', [3.5, 1.5, 4.5])
                scene.idle(60)
                scene.text(60, '§f2.对于一个控制器，有2个相邻方块的轴最多只能有一个', [3.5, 1.5, 4.5])
                scene.idle(70)
                scene.world.setBlocks([4,1,3], 'ae2:controller')
                scene.world.showSection([4,1,3], Direction.DOWN)
                scene.world.modifyBlock([4,1,3], (state) => state.with("state", "online"), false)
                scene.idle(30)
                scene.world.setBlocks([4,1,5], 'ae2:controller')
                scene.world.showSection([4,1,5], Direction.DOWN)
                scene.idle(5)
let contrs=[
    [4,1,3],[4,1,5],[3,1,4],[5,1,4]
]
for(let i of contrs)
{
    scene.world.modifyBlock(i, (state) => state.with("state", "conflicted"), false)
}
scene.world.modifyBlock([4,1,4], (state) => state.with("state", "conflicted").with("type","inside_a"), false)
scene.text(40, '§f这种连接方式是无效的', [3.5, 1.5, 4.5])

        })
    })




// /setblock 198 80 158 ae2:controller[state=online,type=column_x]{ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:0b}},internalCurrentPower:8000.0d,proxy:{e:25.0d,p:0}}
    // /setblock 199 80 158 ae2:controller[state=online,type=block]{ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:0b}},internalCurrentPower:8000.0d,proxy:{e:25.0d,p:0}}

  //  /setblock 198 79 155 ae2:controller[state=conflicted,type=inside_a]{ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:0b}},internalCurrentPower:8000.0d,proxy:{e:25.0d,p:0}}