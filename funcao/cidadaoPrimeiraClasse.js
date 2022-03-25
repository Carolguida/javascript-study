// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar a função de forma literal
function fun1() {}
// toda função retorna undefined se você nao retornar nada

// Armazenar em uma variável
const fun2 = function () {}; // -> função anonima passada para uma constante

// Armazenar a função dentro de um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3)); // 5

// Armazenar em um atributo de um objeto
const obj = {};
obj.falar = function () {
  return "Oba";
};
console.log(obj.falar());

// Passar função como parametro para outra função
function run(fun) {
  fun(); // aqui chama a função que foi passada
}

run(function () {
  console.log("Executando..."); // passando função como parametro aqui
}); 

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
// duas formas de poder chamar a função
soma(2,3)(5)
const cincoMais = soma(2,3)
cincoMais(5)
