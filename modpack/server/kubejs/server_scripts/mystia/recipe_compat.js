ServerEvents.recipes(event => {
event.remove({id:"mystias_izakaya:mian_fen"})

event.replaceInput(
    {input:"create:dough"},
    "create:dough",
    "#forge:dough"
)



})