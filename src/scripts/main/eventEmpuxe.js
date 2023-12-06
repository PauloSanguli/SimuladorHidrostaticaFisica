document.getElementById("btn-start-simulation").addEventListener("click", ()=> {
    h = Number(document.getElementById("h-obj-selected").value)
    img = document.createElement("img")
    div = document.getElementById("water-recip")

    __finalMove__ = 200
    
    img.src = _objSelected.img
    div.appendChild(img)

    img.style.position = "relative"
    img.style.top = `${h}px`
    img.transition = "all .1s ease-in-out"

    _countinueMove = true
    EmpuxeObject(_objSelected,img, h, 0, __finalMove__)
})


var EmpuxeObject = (_objSelected,img, h, init=0,final,_countinueMove=true) => {
    
    setInterval(() => {
        if(_countinueMove){
            if(_objSelected.e == "sobe"){
                if(h != init){
                    h--
                    // document.getElementById("status-object").innerText = `${h}m -`
                    // document.getElementById("status-object").style.top = `${h+200}px`
                }else{
                    _countinueMove = false
                }
            }
            if(_objSelected.e == "permanece"){
                h = h
                // document.getElementById("status-object").innerText = `${h}m -`
                // document.getElementById("status-object").style.top = `${h+230}px`
                _countinueMove = false
            }
            if(_objSelected.e == "afunda"){
                if(h != final){
                    h++
                    // document.getElementById("status-object").innerText = `${h}m -`
                    // document.getElementById("status-object").style.top = `${h+230}px`
                }else{
                    _countinueMove = false
                }
            }
            img.style.top = `${h}px`
        }
    }, 100)
}
