
const $WarlockAttackGoal = Java.loadClass('io.redspace.ironsspellbooks.entity.mobs.goals.WarlockAttackGoal')

/*
ItemEvents.entityInteracted(event => {
    if (event.target.type == 'nffgirls:hmag_crimson_slaughterer'
        && event.player.getHeldItem(event.hand) == 'minecraft:coal') {
        let info = event.target.getNbt()
        let exp = parseInt(event.target.nbt.ForgeCaps['nffgirls:xp_level'])
        event.server.runCommand(`say ${info}`)
        event.server.runCommand(`say hahaha ${exp}`)

    }
})
*/
EntityJSEvents.addGoalSelectors('nffgirls:hmag_crimson_slaughterer', event => {

    Utils.server.scheduleInTicks(20 * 5, () => {
        event.arbitraryGoal(1, (entity) => {

            //console.info('start!')
            let exp = parseInt(entity.nbt.ForgeCaps['nffgirls:xp_level'])
            //console.info(exp)

            //0~100级每5级对应的经验
            let SPexp = [0, 55, 160, 315, 550, 910, 1395, 2045, 2920, 4020, 5345, 6895,
                8670, 10670, 12895, 15345, 18020, 20920, 24045, 27395, 30970]
            //攻击法术
            let atk_spells = []
            //防御法术
            let def_spells = []
            //位移法术
            let mov_spells = []
            //支援法术
            let sup_spells = []
            //法术的强度区间
            let minSQ = 0.1
            let maxSQ = 0.2

            let BLOOD_SLASH = Spell.of('irons_spellbooks:blood_slash')
            let BLOOD_NEEDLES = Spell.of('irons_spellbooks:blood_needles')
            let RAY_OF_SIPHONING = Spell.of('irons_spellbooks:ray_of_siphoning')
            let DEVOUR = Spell.of('irons_spellbooks:devour')
            let BLOOD_STEP = Spell.of('irons_spellbooks:blood_step')
            let ACUPUNCTURE = Spell.of('irons_spellbooks:acupuncture')

            if (exp < SPexp[1]) {//0级初始法术“鲜血斩击”
                console.info('0-5 level')
                atk_spells = [BLOOD_SLASH]
            }
            else if (exp < SPexp[2]) {//5级法术增强
                console.info('5-10 level')
                atk_spells = [BLOOD_SLASH]
                minSQ = 0.2
                maxSQ = 0.3
            }
            else if (exp < SPexp[3]) {//10级学会法术“猩红之刺”
                console.info('10-15 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, //67%
                    BLOOD_NEEDLES] //33%
                minSQ = 0.2
                maxSQ = 0.3
            }
            else if (exp < SPexp[4]) {//15级法术增强
                console.info('15-20 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, //67%
                    BLOOD_NEEDLES] //33%
                minSQ = 0.3
                maxSQ = 0.4
            }
            else if (exp < SPexp[5]) {//20级学会法术“血吸光束”
                console.info('20-25 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //60%
                    BLOOD_NEEDLES, BLOOD_NEEDLES] //40%
                def_spells = [RAY_OF_SIPHONING]
                minSQ = 0.3
                maxSQ = 0.4
            }
            else if (exp < SPexp[6]) {//25级法术增强
                console.info('25-30 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //60%
                    BLOOD_NEEDLES, BLOOD_NEEDLES] //40%
                def_spells = [RAY_OF_SIPHONING]
                minSQ = 0.4
                maxSQ = 0.5
            }
            else if (exp < SPexp[7]) {//30级学会法术“嗜血啃咬”
                console.info('30-35 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //50%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, //33.3%
                    DEVOUR] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                minSQ = 0.4
                maxSQ = 0.5
            }
            else if (exp < SPexp[8]) {//35级法术增强
                console.info('35-40 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //50%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, //33.3%
                    DEVOUR] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                minSQ = 0.5
                maxSQ = 0.6
            }
            else if (exp < SPexp[9]) {//40级学会法术“血步”
                console.info('40-45 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //44.5%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, //33.3%
                    DEVOUR, DEVOUR] //22.2%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.5
                maxSQ = 0.6
            }
            else if (exp < SPexp[10]) {//45级法术增强
                console.info('45-50 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //44.5%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, //33.3%
                    DEVOUR, DEVOUR] //22.2%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.6
                maxSQ = 0.7
            }
            else if (exp < SPexp[11]) {//50级学会法术“猩红刺狱”
                console.info('50-55 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //37.5%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, //25%
                    DEVOUR, DEVOUR, //25%
                    ACUPUNCTURE] //12.5%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.6
                maxSQ = 0.7
            }
            else if (exp < SPexp[12]) {//55级法术增强
                console.info('55-60 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, //37.5%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, //25%
                    DEVOUR, DEVOUR, //25%
                    ACUPUNCTURE] //12.5%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.7
                maxSQ = 0.8
            }
            else if (exp < SPexp[13]) {//60级法术增强
                console.info('60-65 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//40%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//26.7%
                    DEVOUR, DEVOUR, DEVOUR,//20%
                    ACUPUNCTURE, ACUPUNCTURE] //13.3%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.8
                maxSQ = 0.9
            }
            else if (exp < SPexp[14]) {//65级法术增强
                console.info('60-65 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//40%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//26.7%
                    DEVOUR, DEVOUR, DEVOUR,//20%
                    ACUPUNCTURE, ACUPUNCTURE] //13.3%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 0.9
                maxSQ = 1.0
            }
            else if (exp < SPexp[15]) {//70级法术增强
                console.info('70-75 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//40%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//26.7%
                    DEVOUR, DEVOUR, DEVOUR,//20%
                    ACUPUNCTURE, ACUPUNCTURE] //13.3%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.0
                maxSQ = 1.1
            }
            else if (exp < SPexp[16]) {//75级法术增强
                console.info('75-80 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//40%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//26.7%
                    DEVOUR, DEVOUR, DEVOUR,//20%
                    ACUPUNCTURE, ACUPUNCTURE] //13.3%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.1
                maxSQ = 1.2
            }
            else if (exp < SPexp[17]) {//80级法术增强
                console.info('80-85 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//41.6%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//25%
                    DEVOUR, DEVOUR,//16.7%
                    ACUPUNCTURE, ACUPUNCTURE] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.2
                maxSQ = 1.3
            }
            else if (exp < SPexp[18]) {//85级法术增强
                console.info('85-90 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//41.6%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//25%
                    DEVOUR, DEVOUR,//16.7%
                    ACUPUNCTURE, ACUPUNCTURE] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.3
                maxSQ = 1.4
            }
            else if (exp < SPexp[19]) {//90级法术增强
                console.info('90-95 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//41.6%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//25%
                    DEVOUR, DEVOUR,//16.7%
                    ACUPUNCTURE, ACUPUNCTURE] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.4
                maxSQ = 1.5
            }
            else if (exp < SPexp[20]) {//95级法术增强
                console.info('95-100 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//41.6%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//25%
                    DEVOUR, DEVOUR,//16.7%
                    ACUPUNCTURE, ACUPUNCTURE] //16.7%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.6
                maxSQ = 1.8
            }
            else {//100级法术增强
                console.info('100 level')
                atk_spells = [BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH, BLOOD_SLASH,//40%
                    BLOOD_NEEDLES, BLOOD_NEEDLES, BLOOD_NEEDLES,//30%
                    DEVOUR,//10%
                    ACUPUNCTURE, ACUPUNCTURE] //20%
                def_spells = [RAY_OF_SIPHONING]
                mov_spells = [BLOOD_STEP]
                minSQ = 1.8
                maxSQ = 2.0
            }

            //console.info('magic!')

            return new $WarlockAttackGoal(entity, 1, 30, 60, 2)
                .setMeleeBias(0.5, 0.5)
                .setAllowFleeing(false)
                .setSpells(
                    atk_spells, // Attack
                    def_spells, // Defense
                    mov_spells, // Movement
                    sup_spells // Support
                )
                .setSpellQuality(minSQ, maxSQ)
        })
    })


})