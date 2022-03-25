// usando var -> sofre hoisting

console.log("a =", a); // a = undefined
var a = 2;
console.log("a =", a); // a = 2

// a variável a existe no primeiro console, porém não definida

function teste() {
  console.log("a =", a); // a = undefined
  var a = 2;
  console.log("a =", a); // a = 2
}

teste()

// e com let?
// console.log("b =", b); // Erro
let b = 2
console.log("b =", b);