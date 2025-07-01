ServerEvents.chestLootTables(event=>{
    const strongholdtr=
    ['irons_spellbooks:legendary_ink', 'irons_spellbooks:epic_ink', 'irons_spellbooks:rare_ink',
         'irons_spellbooks:lesser_spell_slot_upgrade', 'irons_spellbooks:upgrade_orb',
          'irons_spellbooks:arcane_salvage', 'irons_spellbooks:blank_rune', 'irons_spellbooks:arcane_ingot']
    
          event.modify("integrated_stronghold:grand_library",loot=>{
            loot.addPool(pool=>{
        
        for(let sttr of strongholdtr)
        {
                pool.addItem(sttr)
        }
                  pool.rolls = 3
                  pool.bonusRolls=1
              })
          })
    

const reimu_places=
[
    "integrated_stronghold:secret_lab",
    "integrated_stronghold:armory",
    "integrated_stronghold:bedroom",
    "integrated_stronghold:brewing",
    "integrated_stronghold:crypt",
    "integrated_stronghold:dining_hall",
    "integrated_stronghold:enchanting",
    "integrated_stronghold:farm",
    "integrated_stronghold:grand_library",
    "integrated_stronghold:maze",
    "integrated_stronghold:prison",
    "integrated_stronghold:sanctorum",
    "integrated_stronghold:storage",
    "integrated_stronghold:torture_chamber"
]

for(let reimu of reimu_places){
          event.modify(reimu,loot=>{
            loot.addPool(pool=>{
                pool.addItem('youkaishomecoming:reimu_hairband').weight(1)
                pool.addItem('minecraft:iron_ingot').weight(199)
                  pool.rolls = 1
              })
          })
        }

          event.modify(
            "integrated_stronghold:treasure",loot=>{
            loot.addPool(pool=>{
                pool.addItem('youkaishomecoming:reimu_hairband').weight(3)
                pool.addItem('minecraft:iron_ingot').weight(97)
                  pool.rolls = 1
              })
          })
    
})