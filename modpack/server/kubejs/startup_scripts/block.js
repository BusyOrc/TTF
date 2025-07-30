StartupEvents.registry('block', event => {
  event.create('kosuzu').stoneSoundType().displayName("防撞桶").hardness(8.0).resistance(50)
  .tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:dragon_immune").tagBlock("minecraft:needs_diamond_tool")
  .tagBlock("minecraft:wither_immune")
})