console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

// os três possuem um atributo chamado .prototype, pois toda função possui isso.

// podemos atribuir funcionalidades novas usando o .prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola coder'.reverse()) // redoc alocsE

// const texto = 'Escola coder'
// console.log(texto.split('')) // da uma separada na string e transforma em array

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first()) // 1