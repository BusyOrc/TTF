Ponder.registry((event) => {
	event.create([
		'alchemistry:fission_chamber_controller','alchemistry:fission_core',
		'alchemistry:fusion_chamber_controller', 'alchemistry:reactor_energy',
		 'alchemistry:reactor_casing', 'alchemistry:reactor_energy',
		  'alchemistry:reactor_glass', 'alchemistry:fusion_core',
		    'alchemistry:reactor_input','alchemistry:reactor_output'
		])
		.scene(
			"kubejs:fission",
			"聚变和裂变",
			"kubejs:fission", 
			(scene, utils) => {
				scene.showBasePlate()
				scene.scaleSceneView(0.8)
				scene.addKeyframe()
		let x,y,z=0;
				for(y=1;y<6;y++)
				{
					for(z=3;z<8;z++)
					{
						for(x=2;x<7;x++)
						{
							scene.world.showSection([x,y,z], Direction.down)
							scene.idle(2)
						}
					}
				}




				scene.idle(20)

				scene.world.setBlocks([4, 1, 0], 'createaddition:creative_energy')
				scene.world.setBlocks([4, 1, 1], 'pipez:energy_pipe')
				scene.world.setBlocks([4, 1, 2], 'pipez:energy_pipe')
				scene.world.showSection([4, 1, 0, 4, 1, 2], Direction.DOWN)
				scene.world.modifyBlock([4, 1, 1], (state) => state.with("north", "true").with("south", "true"), false)
				scene.world.modifyBlock([4, 1, 2], (state) => state.with("north", "true").with("south", "true"), false)
				scene.text(40, '§b能量从中间输入', [4.5, 1.5, 3.5])
				scene.idle(50)
				scene.addKeyframe()
				scene.text(40, '§b控制器', [4.5, 2.5, 3.5])
				scene.idle(50)
				scene.addKeyframe()
				scene.text(40, '§f左侧输入元素', [5.5, 1.5, 3.5])
				scene.idle(50)
				scene.addKeyframe()
				scene.text(40, '§f右侧输出元素', [3.5, 1.5, 3.5])
				scene.idle(50)
				scene.addKeyframe()
				scene.text(80,"除了控制器以外，其他输入输出方块均可放在该结构当前的其他反应堆外壳的位置")
				scene.idle(90)
				scene.text(50,"允许放置多个输入输出口")
				scene.idle(60)
				scene.text(70, '反应堆玻璃均可以替换为反应堆外壳，可按照自己的喜好修建', [4.5, 3.5, 3.5])
				scene.idle(80)
				scene.addKeyframe()
				scene.text(70, '如果遇到能量无法输入等问题，拆掉控制器重放通常能解决', [4.5, 2.5, 3.5])
				scene.idle(80)
				scene.text(70, '聚变反应堆和裂变反应堆的修建思路一致')
				scene.idle(80)
				scene.idle(20)
			})
})

// /setblock 209 79 152 pipez:energy_pipe[down=false,east=false,has_data=false,north=true,south=true,up=false,waterlogged=false,west=false]
