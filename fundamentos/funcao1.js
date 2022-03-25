// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 3, 5 ,4, 10); // 5
imprimirSoma(); // NaN

// função com retorno

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 2