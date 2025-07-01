Ponder.registry((event) => {
	event.create(['ae2:pattern_provider','ae2:cable_pattern_provider',/.*crafting_storage.*/,
    //    /.*ae2:crafting.*/,
    /^(?=.*ae2:crafting)(?!.*card).+$/,
        'megacells:mega_crafting_accelerator',
        'ae2:blank_pattern','ae2:molecular_assembler','ae2:pattern_access_terminal','ae2:pattern_encoding_terminal'
    ])
		.scene(
            "kubejs:provider",
			"自动合成",
			"kubejs:provider", 
			(scene, utils) => {
                scene.showBasePlate()
                scene.idle(20)
                scene.world.showSection([2, 1, 6, 3, 2, 6], Direction.DOWN)
                scene.idle(20)
                scene.text(80, '这是§a合成存储器§r，合成处理单元（CPU）中\n§b唯一必要§r的方块，其他方块均为§b可选', [3.5, 1.5, 6.5])
                scene.idle(90)
                scene.text(60, '这是并行处理单元，能够增强并行合成的能力', [2.5, 1.5, 6.5])
                scene.idle(70)
                scene.text(60, '合成监控器可以在合成时，方便地查看正在进行的步骤', [2.5, 2.5, 6.5])
                scene.idle(70)
                scene.text(60, '合成单元唯一的作用是§b凑数§r，以保证多方块结构为§b完整的长方体', [3.5, 2.5, 6.5])
                scene.idle(70)
                scene.world.setBlocks([3, 2, 6], "minecraft:air",true)
                scene.world.modifyBlock([3,1,6], (state) => state.with("formed", "false"), false)
                scene.world.modifyBlock([2,2,6], (state) => state.with("formed", "false"), false)
                scene.world.modifyBlock([2,1,6], (state) => state.with("formed", "false"), false)
                scene.idle(20)
                scene.addKeyframe()
                scene.text(60, '即使是凑数，也要凑成完整长方体，否则无法形成多方块结构', [3.5, 2.5, 6.5])
                scene.idle(70)
                scene.world.setBlocks([3, 2, 6], "ae2:crafting_unit",true)
                scene.world.showSection([3, 2, 6], Direction.DOWN)
                scene.world.modifyBlock([3,1,6], (state) => state.with("formed", "true"), false)
                scene.world.modifyBlock([2,2,6], (state) => state.with("formed", "true"), false)
                scene.world.modifyBlock([2,1,6], (state) => state.with("formed", "true"), false)
                scene.world.modifyBlock([3,2,6], (state) => state.with("formed", "true"), false)
                scene.idle(20)
                scene.world.showSection([0, 1, 0, 7, 5, 5], Direction.DOWN)
                scene.idle(20)
                scene.text(60, '在有了合适的CPU情况下，可以将写好的样板放入样板供应器中', [4.5, 1.5, 2.5])
                scene.idle(70)
                scene.text(60, '热力的机器可以设置§a自动输入输出§r', [5.5, 1.5, 2.5])
                scene.idle(70)
                scene.text(120, '打开机器GUI，将样板供应器这一面设置为同时输入输出，也就是红蓝交错的图标情况，并打开左侧的自动输入输出选项', [5.5, 1.5, 2.5])
                scene.idle(130)
                scene.addKeyframe()
                scene.text(60, '编写样板需要在§a样板编码终端§r里进行', [3.5, 1.8, 0.5])
                scene.showControls(50, [3.5, 1.8, 0.5], "right") 
                .rightClick()
                .withItem("ae2:blank_pattern") 
                scene.idle(70)
                scene.addKeyframe()
                scene.text(60, '样板也可以通过§a样板管理终端§r放入样板供应器', [2.5, 1.8, 0.5])
                scene.showControls(50, [2.5, 1.8, 0.5], "right") 
                .rightClick()
                .withItem("ae2:blank_pattern") 
                scene.idle(70)
                scene.text(60, '在§a合成终端§r里下单即可自动让机器生产', [4.5, 1.8, 0.5])
                scene.world.modifyBlock([5,1,2], (state) => state.with("active", "true"), false)
                scene.idle(70)
                scene.text(60, '推荐使用§a无线终端§r以远程操控')
                scene.idle(70)
                scene.addKeyframe()
                scene.text(70, '对于工作台等简单配方的合成，\n可以在§a分子装配室§r里进行', [6.5, 3.5, 5.5])
                scene.idle(80)
                scene.text(70, '可以这样交替排列组合，提高效率和利用率', [6.5, 3.5, 5.5])
                scene.idle(80)
                scene.text(70, '但是每个样板供应器仍需要消耗一个频道', [5.5, 3.5, 5.5])
                scene.idle(80)



            })
        })

     //   /setblock 161 80 108 ae2:crafting_monitor[facing=north,formed=false,powered=false,spin=0]{ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:0b}},core:0b,paintedColor:16b,proxy:{p:0}}
// /setblock 161 80 108 ae2:crafting_monitor[facing=north,formed=true,powered=true,spin=0]{ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:0b}},core:0b,paintedColor:16b,proxy:{e:25.0d,p:0}}
// /setblock 164 79 104 thermal:machine_furnace[active=false,facing=north]{Active:0b,ActivePrev:0b,Enchantments:[],Energy:50000,
// Facing:2b,ForgeCaps:{"improvedmobs:opened_flag":{HasBeenOpened:1b}},Proc:0,ProcMax:0,ProcTick:20,RSControl:{RSMode:0b,RSPower:0b,RSThreshold:0b},
// Security:{SecAccess:0b,SecName:"[None]",SecUUID:"1ef1a6f0-87bc-4e78-0a0b-c6824eb787ea"},Sides:[B;0B,0B,0B,0B,3B,0B],
// TrackIn:4,TrackOut:4,Xfer:{XferIn:1b,XferOut:1b}}