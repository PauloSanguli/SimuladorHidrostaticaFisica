

var calculeEmpuxe = (obj)  => {
    let liquid_recip = liquidRecip.d.value

    let E = "sobe"
    if(obj.d.value > liquid_recip){
        E = "afunda"
    }else if(obj.d.value == liquid_recip){
        E = "permanece"
    }

    obj.e.value = E
    obj.e.unity = ""

    return obj.e
}

var calculeDensity = (obj)  => {
    d = obj.m.value / obj.v.value

    obj.d.value = d
    obj.d.unity = "kg/m^3"

    obj.e = calculeEmpuxe(obj)

    return obj
}
