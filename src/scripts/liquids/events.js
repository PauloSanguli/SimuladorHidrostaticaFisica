var page = document.getElementById("add-object")
var firstLiquid = document.getElementById("first-liquid")
var secondLiquid = document.getElementById("second-liquid")


document.getElementById("liquids").addEventListener("change", (e) => {
    EventSelectLiquidRecip(e.target.value)
})

document.getElementById("button-create-object").addEventListener("click", () => {

    page.style.transition = "all .3s ease-in-out"
    page.style.width = 0
    page.style.height = 0

    createObject()
})

document.getElementById("btn-start-simulation").addEventListener("click", () => {
    EventStartSimulation()
})

function EventSelectLiquidRecip(value){
    let obj = getItemByName(value)
    let spanColor = document.getElementById("span-color-liquid")
    let spanName = document.getElementById("span-name-liquid")
    let waterColor = document.getElementById("water")

    waterColor.innerHTML = `<span>${obj.name}</span>`

    spanColor.innerText = `densidade: ${obj.d.value}${obj.d.unity}`
    spanColor.style.borderColor = obj.color
    
    spanName.innerText = obj.name

    waterColor.style.background = obj.color

    firstLiquid.style.background = obj.color
    firstLiquid.children.item(0).innerText = ""

    secondLiquid.style.background = obj.color
    secondLiquid.children.item(0).innerText = ""

    liquidRecip = obj
}

function EventStartSimulation(){
    _response = calculeEmpuxe(liquidRecip.d.value, liquidSelected.d.value)

    if(_response == "top"){
        firstLiquid.style.background = liquidSelected.color
        firstLiquid.children.item(0).innerText = liquidSelected.name

        secondLiquid.style.background = liquidRecip.color
        secondLiquid.children.item(0).innerText = ""
    }else if(_response == "bottom"){
        secondLiquid.style.background = liquidSelected.color
        secondLiquid.children.item(0).innerText = liquidSelected.name
        
        firstLiquid.style.background = liquidRecip.color
        firstLiquid.children.item(0).innerText = ""
    }
}

document.getElementById("button-show-add-object").addEventListener("click", () => {
    
    page.style.width = "100%"
    page.style.height = "100vh"
    page.style.transition = "all .3s ease-in-out"

})