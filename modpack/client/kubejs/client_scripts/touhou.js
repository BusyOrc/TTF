Ponder.registry((event) => {
	event.create(['touhou_little_maid:chisel','touhou_little_maid:garage_kit',
        'touhou_little_maid:camera', 'minecraft:clay'])
		.scene(
			"kubejs:touhou1",
			"如何制作手办",
			"kubejs:touhou1", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([0,1,0,2,3,2], Direction.down)
                scene.idle(20)
                scene.text(70, "要制作手办，首先需要用§a凿子§r雕刻出1X1大小的雕像", [1.5, 3.5, 1.5])
                scene.overlay.showOutline("red", {}, [1, 3, 1], 70)
                scene.idle(80)
                scene.text(70, "副手拿女仆的照片，主手拿凿子，右键§a黏土块§r即可", [1.5, 3.5, 1.5])
                scene.idle(80)
                scene.showControls(40, utils.grid.at(1.5, 3.5, 1.5), 'right')
				.rightClick().withItem('touhou_little_maid:chisel')
                scene.idle(50)
                scene.text(70, "雕刻后等待火烤数分钟即可得到手办", [1.5, 2.5, 1.5])
                scene.idle(80)
                scene.text(60, "任意形象的手办均可用于后续配方使用")
                scene.idle(80)
                scene.addKeyframe()
                scene.text(60, "要获得女仆的照片，使用§a文文的相机§r右键女仆即可")
                scene.idle(70)
                scene.text(70, "上述相关物品可在§a祭坛§r多方块结构中制作")
                scene.idle(80)
            }
        )}
    )