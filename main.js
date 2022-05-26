const e = 2.718

function reglaFalsa(xi, xu, fxi, fxu) {
    let xr = xu - ((fxu * (xi - xu)) / (fxi - fxu));
    let fxr = Math.pow(e, xr) * xr - 1;
    let fParo = ((xr - xi) / xr) * 100;

    do {
        xi = xr
        fxi = fxr
        xr = xu - ((fxu * (xi - xu)) / (fxi - fxu))
        fxr = Math.pow(e, xr) * xr - 1
        fParo = ((xr - xi) / xr) * 100
    } while (fParo > 1);
    return `${xr}, ${xi}, ${fParo}%, ${fxr}`
}

function f(x) {
    return (x * x) + 1;
}

function integrar(a, b, n) {
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    if (n <= 0) { return false; }
    var i = a;
    var h = ((b - a) / n);
    var suma = 0;
    while (i <= b) {
        suma = suma + h * f(i);
        i = i + h;
    }
    return suma;
}



function recojerDatos() {
    let xi = document.getElementById("xi").innerHTML
    let xu = document.getElementById("xu").innerHTML
    let resultado = xi + xu
    console.log(resultado)

}

console.log(recojerDatos())