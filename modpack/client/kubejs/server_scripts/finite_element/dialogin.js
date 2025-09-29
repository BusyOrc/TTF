PlayerEvents.loggedIn((event) => {
    let {player} = event
    if (player.stages.has("first_login")) {
        return
    }
    else
    {
        event.server.runCommandSilent(`/execute in pasterdream:dyedream_world run tp ${player.uuid} ${player.x} ${player.y} ${player.z}`)
        event.server.runCommandSilent(`/execute in pasterdream:dyedream_world run spawnpoint ${player.uuid} ${player.x} ${player.y} ${player.z}`)
        event.server.runCommandSilent(`/execute as ${player.uuid} run dialog show first_dream`)
        player.stages.add("first_login")
    }
    

})