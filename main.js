const e = 2.718

function reglaFalsa(xi, xu, fxi, fxu){
    let xr = xu - ((fxu * (xi - xu)) / (fxi - fxu));
    let fxr = Math.pow(e, xr)*xr - 1;
    let fParo = ((xr - xi) / xr)*100;

    do {
        xi = xr
        fxi = fxr
        xr = xu - ((fxu * (xi - xu)) / (fxi - fxu))
        fxr = Math.pow(e, xr)*xr - 1
        fParo = ((xr - xi) / xr)*100
    } while (fParo > 1);
    return `${xr}, ${xi}, ${fParo}%, ${fxr}`
}

function sustitucionSucesiva(x0){
    let x1= 0;
    let fParo = 100;
    do {
        
        x1 = Math.cos(x0)
        fParo = ((x1 - x0)/ x1) *100
        x0 = x1
        
    } while (fParo > 1);

    return `${x0}, ${x1}, ${fParo}%`
}

console.log(sustitucionSucesiva(0))