console.log(typeof Object) // function

console.log(typeof new Object()) 
// object - pode omitir os parenteses tb
// aqui instancia uma função que gera um objeto

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente()) // object

class Produto {}
console.log(typeof Produto()) // function