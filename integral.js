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