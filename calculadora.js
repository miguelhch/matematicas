function sumar(a , b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

sumar(5, 3); // 8
restar(5, 3); // 2

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}