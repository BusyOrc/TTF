Ponder.registry((event) => {
	event.create(['ae2:level_emitter','ae2:energy_level_emitter'])
		.scene(
            "kubejs:emitter",
			"发信器",
			"kubejs:emitter", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([1, 1, 1, 7, 7, 8], Direction.DOWN)
                scene.idle(20)
                scene.text(60, "能源发信器可以根据网络中的能量情况发送红石信号",[3.5, 1.8, 3.5]).attachKeyFrame()
                scene.idle(70)
                scene.text(60, "可以设置小于或者大于等于某数值时才发出信号",[3.5, 1.8, 3.5])
                scene.idle(70)
                scene.addKeyframe()
                scene.text(60, "而标准发信器则是根据物品数量来决定是否发出信号",[3.5, 1.8, 1.5])
                scene.idle(70)
                scene.text(60, "标准发信器如果放入合成卡，则变为两种新的工作模式",[3.5, 1.8, 1.5])
                scene.showControls(30, [3.5, 1.7, 1.5], "right") 
                .rightClick().withItem("ae2:crafting_card") 
                scene.idle(70)
                scene.text(60, "模式1：某物品合成时，发出信号",[3.5, 1.8, 1.5])
                scene.idle(70)
                scene.text(60, "模式2：发出信号以合成物品",[3.5, 1.8, 1.5])
                scene.idle(70)
                scene.addKeyframe()
                scene.text(100, "模式2并不关心原材料，只关注两个要素：\n1.是否提交了合成需求\n2.网络是否收到了所有需求的成品",[3.5, 1.8, 1.5])
                scene.idle(110)
                scene.text(60, "具体的合成由红石信号来控制机器进行，与ME网络无关",[5.5, 1.2, 1.5])
                scene.idle(70)
            })
        })

        // /setblock 146 78 116 create:redstone_link[facing=up,powered=true,receiver=false]
        // {ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:1b}},FrequencyFirst:{Count:1b,id:"minecraft:copper_ingot"},
        // FrequencyLast:{Count:1b,id:"minecraft:iron_ingot"},LastKnownPosition:40132174889038L,Receive:0,ReceivedChanged:0b,Transmit:15,Transmitter:1b}