Ponder.registry((event) => {
	event.create(['ae2:storage_bus','ae2:import_bus','ae2:export_bus'])
		.scene(
            "kubejs:bus",
			"总线",
			"kubejs:bus", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([1, 1, 1, 7, 7, 8], Direction.DOWN)
                scene.idle(20)
                scene.text(60, "三种总线只能和细线连接，无法和粗线连接").attachKeyFrame()
                scene.idle(70)
                scene.text(60, '存储总线能够读取所连接方块库存内的物品', [7, 1.5, 1.5])
                scene.idle(70)
                scene.text(60, '可以连接类似于抽屉管理器的方块', [7, 1.5, 1.5])
                scene.idle(70)
                scene.text(60, '也能直接连接容器本身', [4, 1.5, 3.5])
                scene.idle(70)
                scene.addKeyframe()
                scene.text(60, '输出总线会持续输出物品到所连接方块内', [4, 1.5, 5.5])
                scene.idle(70)
                scene.addKeyframe()
                scene.text(60, '输入总线相反，会将容器内物品输入到ME网络的库存中', [4, 1.5, 7.5])
                scene.idle(70)



            })
        })