var calculeEmpuxe = (densityRecip, densitySelected) => {
    if(densityRecip < densitySelected){
        return "bottom"
    }
    return "top"
}