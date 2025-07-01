ServerEvents.tags('fluid', event => {

    event.add('forge:acetylene','chemlib:acetylene_fluid')
    event.add('forge:hydrogen','chemlib:hydrogen_fluid')
    event.add('forge:alkane',[
        'chemlib:methane_fluid',
        'chemlib:ethane_fluid',
        'chemlib:propane_fluid',
        'chemlib:butane_fluid',
        'chemlib:pentane_fluid',
        'chemlib:hexane_fluid'

    ])


    event.add("forge:blood",
        ["biomesoplenty:blood","create_wizardry:blood", "youkaishomecoming:blood"]
    )

    event.add("kubejs:magic_fuel","kubejs:magic_fuel")


})