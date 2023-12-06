var formatCard = (obj) => {
    let img = document.getElementById("img-obj-selected")
    let p = document.getElementById("text-obj-selected")
    let d = document.getElementById("d-obj-selected")

    d.innerText = `${obj.d.value}${obj.d.unity}`
    p.innerText = obj.name
    img.innerText = obj.name.slice(0,2).toLowerCase()
    img.style.background = obj.color

    liquidSelected = obj
}

var SelectObj = (nameObj) => {
    let obj = getItemByName(nameObj)

    formatCard(obj)
}

var getItemByName = (name) => {
    let obj = {}
    db.liquids.map((item) => {
        if(item.name == name){
            obj = item
        }
    })
    return obj
}

var createObject = () => {
    imgSelected = "src/assets/undefined2.png"

    let obj = {
        "name": document.getElementById("add-object-name").value,
        "d": {
            "value": document.getElementById("add-object-d").value,
            "unity": "kg/m^3"
        },
        "color": "#ec5f64"
    }

    liquidSelected = obj

    formatCard(obj)
}
