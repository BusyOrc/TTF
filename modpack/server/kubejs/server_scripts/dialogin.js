PlayerEvents.loggedIn((event) => {
    let {player} = event
    if (player.stages.has("first_login")) {
        return
    }
    else
    {
        player.runCommand("dialog show gensokyo_start")
        player.stages.add("first_login")
    }
    

})