PlayerEvents.loggedIn((event) => {
    let {player} = event
player.tell(player.username+"来到了东方匠魂传的世界")
if (Platform.isLoaded("carryon"))
{
    player.tell("搬运模组极易造成存档永久损坏，并且无法恢复，建议卸载该模组后再重新启动整合包。如果使用该模组造成任何损失，与本整合包无关。")
}
})