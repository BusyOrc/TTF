Ponder.registry((event) => {
	event.create(["#ae2:p2p_attunements/me_p2p_tunnel",'#ae2:smart_dense_cable','#ae2:smart_cable',
        '#ae2:covered_cable','#ae2:glass_cable','#ae2:covered_dense_cable'
    ])
		.scene(
			"kubejs:cable",
			"线缆",
			"kubejs:cable", 
			(scene, utils) => {
                scene.showStructure(1)
                scene.idle(20)
                scene.text(60, "线缆本质上只有两种区别：粗线和细线").attachKeyFrame()
                scene.idle(70)
                scene.text(70, "这部分看起来很粗的就是粗线，能承载32个频道", [6.5, 1.5, 3.5])
                scene.idle(80)
                scene.addKeyframe()
                scene.text(100, "这部分看起来比粗线要细的都是细线，能承载8个频道。不用在意细线之间的区别，本质上都是细线。", [2.5, 1.5, 4.5])
                scene.idle(110)
                scene.addKeyframe()
                scene.text(60, "粗线能承担更多频道，那么代价是什么呢？")
                scene.idle(70)
                scene.text(70, "代价就是无法直接和总线相连，如存储总线").attachKeyFrame()
                scene.idle(80)
                scene.text(70, "线缆本质上还有有两种区别：默认色和染色")
                scene.idle(80)
                scene.text(80, "注意看，这是默认颜色的线缆，能连接染色线缆。", [2.5, 1.5, 3])
                scene.idle(90)
                scene.text(80, "注意看，这是染色的线缆，无法连接旁边不同颜色的线缆。可以连接同色，但是粗细不同的线缆。", [2.5, 1.5, 4.5]).attachKeyFrame()
                scene.idle(90)
                scene.text(80, "智能线缆可以显示频道，方便在不熟悉的情况下学习频道的机制。", [2.5, 1.5, 4.5])
                scene.idle(90)
                scene.text(80, "注意看，这是石英纤维。无法传递频道，但是能传递电力。", [3.5, 1.5, 6])
                scene.idle(90)




            })
        })