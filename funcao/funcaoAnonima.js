// função anonima é uma fn sem nome '-'

const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

// Aqui passo os parametros a e b, e como recebo operação = soma como parametro, ja passa a e b para soma
imprimirResultado(3, 4);

// posso passar a função soma tb
imprimirResultado(3, 4, soma);

// aqui não usa a fn soma, mas sim a função que foi passada
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});

// Aqui passo uma fn arrow como parametro (fn arrow sempre será anonima!)
imprimirResultado(3, 4, (x, y) => x * y);

/* const testando = () => console.log('testando...')
testando() 
const testando2 = () => {return 'Testando 2...'}
console.log(testando2())*/


// outro ex de fn anonima é aquela utilizada em objs

const pessoa = {
  falar: function () {
    console.log("Olá");
  },
};
pessoa.falar();

// nova versão do js essa sintaxe tb é valida:
const pessoa2 = {
    falar() {
      console.log("Olá");
    },
  };

pessoa2.falar();
