var SetProps = () => {
    btn.forEach((element) => {
        element.style.border = "none"
        let nameButton = element.children.item(1).textContent.toLowerCase()
        db.liquids.map((item) => {
            if(item.name == nameButton){
                element.style.background = item.color
            }
        })

        element.children.item(0).innerText = nameButton.slice(0,2).toUpperCase()
        element.children.item(0).style.fontWeight = "bold"
    })
}

SetProps()