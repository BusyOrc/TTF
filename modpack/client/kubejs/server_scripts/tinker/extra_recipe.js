      //          event          流体id   材料id    mb 温度  时间
      let crushed_melting = (event,flu    ,mat, amt, tmp ,tim) =>{
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {//所需物品
                "item": mat
            },
            "result": {//结果
                "amount": amt,
                "fluid": flu
            },
            "temperature": tmp,
            "time": tim
        })}


let crushed_ores=['create:crushed_raw_iron', 'create:crushed_raw_gold',
   'create:crushed_raw_copper', 'create:crushed_raw_zinc',
    'create:crushed_raw_silver', 'create:crushed_raw_tin',
     'create:crushed_raw_lead', 'create:crushed_raw_nickel']






ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "tconstruct:casting_basin",

            "cooling_time": 180,
            "fluid": {
              "amount": 810,
              "fluid": "tinkerscalibration:moltentitanium"
            },
            "result":"tinkerscalibration:titanium_block"
                
          }
        )

        event.custom(
            {
                "type": "tconstruct:casting_basin",
    
                "cooling_time": 180,
                "fluid": {
                  "amount": 810,
                  "fluid": "sakuratinker:molten_nihilite"
                },
                "result":"jaopca:storage_blocks.nihilite"
                    
              }
            )

        event.custom(
            {
                "type": "tconstruct:casting_basin",
                      "cast": {
                "item": "thermal:obsidian_glass"
              },
              "cast_consumed": true,
                "cooling_time": 20,
                "fluid": {
                  "amount": 90,
                  "fluid": "tconstruct:molten_lead"
                },
                "result":"alchemistry:reactor_glass"
                    
              }
            )


            crushed_melting(event,"tconstruct:molten_iron",'create:crushed_raw_iron',120, 800,60)
            crushed_melting(event,"tconstruct:molten_gold",'create:crushed_raw_gold',120, 700,56)
            crushed_melting(event,"tconstruct:molten_copper",'create:crushed_raw_copper',120, 500,48)
            crushed_melting(event,"tconstruct:molten_zinc",'create:crushed_raw_zinc',120, 420,44)
            crushed_melting(event,"tconstruct:molten_silver",'create:crushed_raw_silver',120, 790,60)
            crushed_melting(event,"tconstruct:molten_tin",'create:crushed_raw_tin',120, 225,36)
            crushed_melting(event,"tconstruct:molten_lead",'create:crushed_raw_lead',120, 330,40)
            crushed_melting(event,"tconstruct:molten_nickel",'create:crushed_raw_nickel',120, 950,64)




/*
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": 'irons_spellbooks:frozen_bone'
            },
            "result": {//结果
                "amount": 250,
                "fluid": "constructs_casting:ice_essence"
            },
            "temperature": 720,
            "time": 4
        })*/

        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {
                "item": "minecraft:echo_shard"
            },
            "result": {//结果
                "amount": 100,
                "fluid": "tinkers_thinking:molten_echo"
            },
            "temperature": 50,
            "time": 20
        })





})