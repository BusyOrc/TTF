EntityJSEvents.addGoalSelectors('minecraft:blaze', event => {
    event.arbitraryGoal(1, (e) => {
        return new WarlockAttackGoal(e, 0.5, 90,60,1) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('irons_spellbooks:fireball'),Spell.of('irons_spellbooks:fire_breath'),Spell.of('irons_spellbooks:scorch')], // Attack
                [], // Defense
                [Spell.of('irons_spellbooks:burning_dash')], // Movement
                [] // Support
            )
   })
})

EntityJSEvents.addGoalSelectors('minecraft:witch', e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            let target = mob.target//进入战斗状态
            if (target != null) {
                if (mob.age % 120 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.BALL_LIGHTNING_SPELL.get(), 5)
                } 
                if (mob.age % 85 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.ICICLE_SPELL.get(), 4)
                }

                if (mob.age % 180 == 0) {
                    return mob.initiateCastSpell(SpellRegistry.BLIGHT_SPELL.get(), 3)
                    
                } 

            }
        }
    )
})

EntityJSEvents.addGoalSelectors('youkaishomecoming:cirno', event => {
    event.arbitraryGoal(1, (e) => {
        return new WarlockAttackGoal(e, 0.5, 120,60,1) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('touhoutinkermodifier:absolutezero'),Spell.of('touhoutinkermodifier:arcticstorm')], // Attack
                [], // Defense
                [], // Movement
                [] // Support
            )
   })
})

EntityJSEvents.addGoalSelectors('ars_nouveau:wilden_boss', e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            let target = mob.target
            if (target != null) {
                if (mob.age % 240 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.STARFALL_SPELL.get(), 7)
                } 
                if (mob.age % 180 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.DEVOUR_SPELL.get(), 3)
                }

                if (mob.age % 600 == 0) {
                    return mob.initiateCastSpell(SpellRegistry.HEARTSTOP_SPELL.get(), 2)
                    
                } 

            }
        }
    )
})

EntityJSEvents.addGoalSelectors('irons_spellbooks:citadel_keeper', e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            let target = mob.target
            if (target != null) {
                if (mob.age % 120 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.FLAMING_STRIKE_SPELL.get(), 5)
                } 
                if (mob.age % 280 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.SONIC_BOOM_SPELL.get(), 5)
                }

                if (mob.age % 400 == 0) {
                    return mob.initiateCastSpell(SpellRegistry.OAKSKIN_SPELL.get(), 3)
                } 
            }
        }
    )
})

EntityJSEvents.addGoalSelectors('hmag:imp', e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            let target = mob.target
            if (target != null) {
                if (mob.age % 210 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.BLOOD_SLASH_SPELL.get(), 6)
                } 
                if (mob.age % 150 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.DEVOUR_SPELL.get(), 4)
                }

                if (mob.age % 300 == 0) {
                    return mob.initiateCastSpell(SpellRegistry.BLOOD_NEEDLES_SPELL.get(), 5)
                    
                } 

            }
        }
    )
})

EntityJSEvents.addGoalSelectors('hmag:kasha', e => {
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => { },
        mob => { },
        true,
        mob => {
            let target = mob.target
            if (target != null) {
                if (mob.age % 95 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.FIREBOLT_SPELL.get(), 4)
                } 
                if (mob.age % 160 == 0) {
                    mob.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    return mob.initiateCastSpell(SpellRegistry.FIRE_BREATH_SPELL.get(), 4)
                }

            }
        }
    )
})