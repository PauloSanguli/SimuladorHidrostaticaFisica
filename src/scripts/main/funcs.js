var SelectObj = (name) => {
    let obj = {}
    
    db.solids.map((item) => {
        if(item.name == name){
            obj = item
        }
    })

    obj.d = {"value": 0, "unity": ""}
    obj.e = {"value": "", "unity": ""}

    calculesRepo(obj)
}

var calculesRepo = (obj) => {
    obj = calculeDensity(obj)
    
    objSelected(obj)
}

var objSelected = (obj) => {

    _objSelected = {    
        "img": imgSelected,
        "name": obj.name,
        "m": obj.m.value,
        "v": obj.v.value,
        "d": obj.d.value,
        "e": obj.e.value
    }

    let img = document.getElementById("img-obj-selected").src = _objSelected.img
    let p = document.getElementById("text-obj-selected").innerText = _objSelected.name
    let m = document.getElementById("m-obj-selected").innerText = `${_objSelected.m}kg`
    let v = document.getElementById("v-obj-selected").innerText = `${_objSelected.v}m3`
    let d = document.getElementById("d-obj-selected").innerText = `${_objSelected.d.toFixed(2)}kg/m3`    
}

var createObject = () => {
    imgSelected = "src/assets/undefined2.png"

    let obj = {
        "name": document.getElementById("add-object-name").value,
        "m": {
            "value": document.getElementById("add-object-m").value,
            "unity": "kg"
        },
        "v": {
            "value": document.getElementById("add-object-v").value,
            "unity": "m^3"
        },
        "d": {
            "value": 0,
            "unity": ""
        },
        "e": {
            "value": 0,
            "unity": ""
        }
    }

    obj = calculeDensity(obj)

    objSelected(obj)
}
