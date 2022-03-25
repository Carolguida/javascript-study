function meuObjeto() {}
console.log(meuObjeto.prototype) // {} -> existe e é um obj

// instanciar objetos a partir de uma função
const obj1 = new meuObjeto
const obj2 = new meuObjeto 

console.log(obj1.__proto__ === obj2.__proto__) 
// true -> os prototipos desses objs que vieram de função construtora apontam para um mesmo obj padrão? Sim

console.log(meuObjeto.prototype === obj1.__proto__) // true
// quando cria-se um obj a partir de uma fn construtora usam new, o prototipo desse obj automaticamente aponta para a fn que você criou. prototype
// mas nao para Object.prototype

meuObjeto.prototype.nome = 'Anonimo'
// qualquer obj que for criado a partir dessa fn construtora vai ter no pai dele (prototipo desse obj) o atributo nome
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() // Bom dia! Meu nome é Anonimo!
obj2.nome= 'rafael'
obj2.falar() // Bom dia! Meu nome é rafael!

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype // prototipo do obj será agr meuObjeto
obj3.nome = 'Objeto 3'
obj3.falar() //Bom dia! Meu nome é Objeto 3!