let herb;
let descriptions;
let utonium1 = "Utonium";
let utonium;
let chemicalX;
let blossom;
let bubbles;
let buttercup;
let names;

function preload() {
    herb = loadJSON('https://raw.githubusercontent.com/ambikajo/powerpuff-gurls/master/assets/herbs.json')
    descriptions = loadJSON('https://raw.githubusercontent.com/ambikajo/powerpuff-gurls/master/assets/descriptions.json')
    utonium = loadJSON('https://raw.githubusercontent.com/ambikajo/powerpuff-gurls/master/assets/chemicals.json')
    names = loadJSON('https://raw.githubusercontent.com/ambikajo/powerpuff-gurls/master/assets/pregnancy.json')
}

function setup() {
    noCanvas()
    //    rand1 = random()
    let len1 = herb.herbs.length - 1
    let ran1 = floor(abs(random(0, len1)))
    let herb1 = herb.herbs[ran1]
    //   herb1.addClass("chng")
    console.log(herb1)

    let len2 = herb.spices.length - 1
    let ran2 = floor(abs(random(0, len2)))
    let spice = herb.spices[ran2]
    console.log(spice)

    let len3 = utonium.chemicals.length - 1
    let ran3 = floor(abs(random(0, len3)))
    let chemName = utonium.chemicals[ran3]
    let chemicalX = chemName.toUpperCase()
    console.log(chemName)

    let len4 = names.pregnancy.length - 1;
    let ran4 = floor(abs(random(0, len4)))
    let blossom = names.pregnancy[ran4].fruit
    let bubbles = names.pregnancy[ran4 + 1].fruit
    let buttercup = names.pregnancy[ran4 + 2].fruit

    let str = herb1 + ", " + spice + " and everything nice! <br> These were the ingredients chosen to create the perfect little girl. <br><br>But Professor " + utonium1 + " accidentally added an EXTRA INGREDIENT to the concoction...." + chemicalX + ".<br> <br>Thus, the POWERPUFF GURLS WERE BORN! Using their ultra super powers - Blossom, Bubbles and Buttercup have dedicated their lives to FIGHTING CRIME and the FORCES OF EVIL!!!"

    createP(str).addClass('chng')
}
