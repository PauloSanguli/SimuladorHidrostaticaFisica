var page = document.getElementById("add-object")

document.getElementById("button-create-object").addEventListener("click", () => {

    page.style.transition = "all .3s ease-in-out"
    page.style.width = 0
    page.style.height = 0

    createObject()
})


document.getElementById("button-show-add-object").addEventListener("click", () => {

    page.style.width = "100%"
    page.style.height = "100vh"
    page.style.transition = "all .3s ease-in-out"

})


document.getElementById("liquids").addEventListener("change", (e) => {
    EventSelectLiquidRecip(e.target.value)    
})
function EventSelectLiquidRecip(value){
   
    let water_recip = document.getElementById("water-recip")
    db.liquids.map((item) => {
        if(item.name == value){
            
            liquidRecip = item

            document.getElementById("span-name-liquid").innerText = item.name

            document.getElementById("color-liquid").innerText = `densidade: ${item.d.value}${item.d.unity}`
            document.getElementById("color-liquid").style.transition = "all 1s ease-in-out"
            document.getElementById("color-liquid").style.borderColor = item.color
            
            water_recip.innerHTML = " "
            water_recip.style.transition = "all 1s ease-in-out"
            water_recip.style.backgroundColor = item.color
        }
    })
    SelectObj(_objSelected.name)
}
