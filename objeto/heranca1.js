// Em OOP, herança refere-se a habilidade de um objeto acessar métodos e outras propriedades de outro objeto. 
// Estes objetos então herdam essas informações de outros objetos e podem utilizá-las da forma que preferirem.
// em js, um obj tem referencia pra seu prototipo, e essa é a forma como é definida herança em js -> vai acessando os prototipos até achar 
// o atributo desejado.
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volto = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined -> o obj tem apenas o atributo __proto__
console.log(ferrari.__proto__) // acessa quem é o prototipo desse obj (obj pai) -> {}
// [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype) // true 
console.log(volto.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__ === null) // true -> não existe um prototipo acima dele (mais alto nível na hierarquia)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto) // function function
console.log(Object.prototype) // [Object: null prototype] {}
console.log(meuObjeto.prototype) // {}

// obj tem referencia p seu prototipo -> forma como define herança

