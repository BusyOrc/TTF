ServerEvents.loaded((event) => {
  const { server } = event;

  const seed = server.worldData.worldGenOptions().seed();
  server.persistentData.putLong("seed", seed);

  //server.scheduleInTicks(10, () => server.runCommandSilent("reload"));
});

BlockEvents.rightClicked("minecraft:reinforced_deepslate", event => {
  const { server } = Utils;

  if (!server) return;
  const seed = server.persistentData.getLong("seed");
console.log(seed%7)
  // do_something(seed);
});