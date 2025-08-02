EntityJSEvents.addGoalSelectors('minecraft:blaze', event => {
    event.arbitraryGoal(1, (e) => {
        return new WarlockAttackGoal(e, 0.5, 120,60,1) // Parameters: entity, movement speed modifier, cast interval
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

EntityJSEvents.addGoalSelectors('hmag:kasha', event => {
    event.arbitraryGoal(1, (e) => {
        return new WarlockAttackGoal(e, 0.5, 120,60,1) // Parameters: entity, movement speed modifier, cast interval
            .setSpells(
                [Spell.of('irons_spellbooks:firebolt'),Spell.of('irons_spellbooks:blaze_storm')], // Attack
                [], // Defense
                [Spell.of('touhoutinkermodifier:burning_dash')], // Movement
                [] // Support
            )
   })
})


