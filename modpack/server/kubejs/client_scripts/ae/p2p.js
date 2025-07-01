Ponder.registry((event) => {
	event.create(['ae2:me_p2p_tunnel','ae2:memory_card',
        'ae2:item_p2p_tunnel','ae2:fluid_p2p_tunnel','ae2:redstone_p2p_tunnel',
    'ae2:fe_p2p_tunnel','ae2:light_p2p_tunnel'])
		.scene(
            "kubejs:p2p",
			"P2P通道",
			"kubejs:p2p1", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.showStructure(6)
                scene.world.showSection([1, 1, 1, 7, 7, 8], Direction.DOWN)
                scene.idle(20)
                scene.text(40, "P2P本质上就是用线缆建立点到点的连接").attachKeyFrame()
                scene.idle(50)
                scene.text(60, "可以传递频道，红石信号，物品，流体等，这里以频道为例")
                scene.idle(70)
                scene.text(50, '要将此作为P2P的输入端，只需用一张内存卡潜行右键', [1.5, 1.5, 2])
                scene.showControls(30, [1.5, 1.5, 2], "right") 
    .rightClick()   .whileSneaking() 
    .withItem("ae2:memory_card") 
                scene.idle(60)
                scene.text(50, '要将此作为输出端，用刚才的同一张内存卡直接右键即可', [4, 1.5, 2.5])
                scene.showControls(30, [4, 1.5, 2.5], "right") 
                .rightClick()
                .withItem("ae2:memory_card") 
                scene.idle(60)
                scene.addKeyframe()
                scene.text(50, '现在这里的粗线相当于直连控制器的一个面，有32个频道上限', [4.5, 1.5, 2.5])
                scene.idle(60)
                scene.text(50, '这部分蓝色细线则是为P2P提供频道', [3.5, 1.5, 2.5])
                scene.idle(60)
                scene.text(50, 'P2P通道本身也要消耗频道', [3.5, 1.5, 2.5])
                scene.idle(60)
                scene.text(50, '在此例子中，控制器的顶面负责提供P2P的频道', [1.5, 2, 2.5])
                scene.idle(60)
                scene.addKeyframe()
                scene.rotateCameraY(90)
                scene.idle(20)
                scene.text(50, '还可以将控制器这个面的频道接入另一个P2P，用内存卡潜行右键设置为输入端', [2, 1.5, 2.5])
                scene.showControls(30, [2, 1.5, 2.5], "right") 
                .rightClick()   .whileSneaking() 
                scene.idle(60)
                scene.text(50, '用内存卡右键，频道就会传递到这里的紫色粗线', [3.5, 1.7, 4.5])
                scene.showControls(30, [3.5, 1.7, 4.5], "right") 
                .rightClick().withItem("ae2:memory_card") 
                scene.idle(60)
                scene.text(80, "P2P只能有一个输入端，但是可以有多个输出端").attachKeyFrame()
                scene.idle(90)




        })

        event.create(['ae2:me_p2p_tunnel','ae2:memory_card',
            'ae2:item_p2p_tunnel','ae2:fluid_p2p_tunnel','ae2:redstone_p2p_tunnel',
        'ae2:fe_p2p_tunnel','ae2:light_p2p_tunnel'])
            .scene(
                "kubejs:p2p2",
                "P2P传输流体",
                "kubejs:p2p2", 
                (scene, utils) => {
                    scene.showBasePlate()
                    scene.idle(20)
                    scene.showStructure(6)
                    scene.world.showSection([1, 1, 1, 7, 7, 8], Direction.DOWN)
                    scene.idle(20)
                    scene.text(40, "传输流体同样是点到点的传输方式").attachKeyFrame()
                    scene.idle(50)
                    scene.text(50, '这次在使用内存卡之前，需要先对P2P通道进行调谐', [3, 1.5, 2])
                    scene.idle(60)
                    scene.text(50, '调谐就是改变通道的类型，使其可以传输流体', [3, 1.5, 2])
                    scene.idle(60)
                    scene.text(50, '如果要改变为流体通道，使用桶右键即可', [3, 1.5, 2])
                    scene.showControls(40, [3, 1.5, 2], "right") 
                    .rightClick()
                    .withItem("minecraft:bucket") 
                    scene.idle(60)
                    scene.addKeyframe()
                    scene.text(50, '输出端无需调谐，直接用刚才的内存卡右键即可', [5, 1.5, 5.5])
                    scene.showControls(40, [5, 1.5, 5.5], "right") 
                    .rightClick()
                    .withItem("ae2:memory_card") 
                    scene.idle(60)
                    scene.text(50, 'P2P可以有多个输出端，这里同样也能接收流体', [5, 1.5, 5.5])
                    scene.showControls(40, [7, 1.5, 1.5], "right") 
                    .rightClick()
                    .withItem("ae2:memory_card") 
                    scene.idle(60)


                })
    })

