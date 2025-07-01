ServerEvents.recipes(event => {

  //1UP
    event.custom(
{
    "type": "alchemistry:combiner",
    "group": "alchemistry:combiner",
    "input": [
      {
        "count": 8,
        "ingredient": {
          "item": "chemlib:neptunium"
        }
      },
      {
        "count": 16,
        "ingredient": {
          "item": "chemlib:gold"
        }
      },
      {
        "count": 27,
        "ingredient": {
          "item": "chemlib:lead_carbonate"
        }
      },

    ],
    "result": {
      "item": "minecraft:totem_of_undying"
    }
  }
)

//火把花，瓶子草
event.custom(
{
  "type": "alchemistry:combiner",
  "group": "alchemistry:combiner",
  "input": [
    {
      "count": 12,
      "ingredient": {
        "item": "chemlib:cellulose"
      }
    },
    {
      "count": 4,
      "ingredient": {
        "item": "chemlib:diammonium_phosphate_dust"
      }
    },
    {
      "count": 16,
      "ingredient": {
        "item": "chemlib:copper_chloride"
      }
    }
  ],
  "result": {
    "item": "minecraft:torchflower_seeds"
  }
}
)


event.custom( 
{
  "type": "alchemistry:combiner",
  "group": "alchemistry:combiner",
  "input": [
    {
      "count": 12,
      "ingredient": {
        "item": "chemlib:cellulose"
      }
    },
    {
      "count": 4,
      "ingredient": {
        "item": "chemlib:calcium_sulfate_dust"
      }
    },
    {
      "count": 12,
      "ingredient": {
        "item": "chemlib:sodium_carbonate"
      }
    },
    {
      "count": 16,
      "ingredient": {
        "item": "chemlib:keratin"
      }
    }
  ],
  "result": {
    "item": "minecraft:pitcher_pod"
  }
}
)

//盐
event.custom(
  {
    "type": "alchemistry:dissolver",
    "group": "alchemistry:dissolver",
    "input": {
      "count": 1,
      "ingredient": {
        "tag": "forge:salt"
      }
    },
    "output": {
      "groups": [
        {
          "probability": 100.0,
          "results": [
            {
              "count": 6,
              "item": "chemlib:sodium_chloride"
            },
            {
              "count": 1,
              "item": "chemlib:potassium_chloride"
            }
          ]
        }
      ],
      "rolls": 1,
      "weighted": false
    }
  }
)

event.custom(
  {
    "type": "alchemistry:dissolver",
    "group": "alchemistry:dissolver",
    "input": {
      "count": 1,
      "ingredient": {
        "tag": "forge:salt_blocks"
      }
    },
    "output": {
      "groups": [
        {
          "probability": 100.0,
          "results": [
            {
              "count": 54,
              "item": "chemlib:sodium_chloride"
            },
            {
              "count": 9,
              "item": "chemlib:potassium_chloride"
            }
          ]
        }
      ],
      "rolls": 1,
      "weighted": false
    }
  }
)











})