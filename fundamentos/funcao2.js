// armazenando função numa variável

const imprimirSona = function (a, b) {
    console.log(a + b);
}
imprimirSona(2, 3); 

// armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b;
}

console.log(soma(5,5));

// retorno implícito

const subtracao = (a,b) => a-b // função vai executar apenas uma sentença de código -> por isso será retornado
 
console.log(subtracao(5, 2));