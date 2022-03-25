// obj é uma coleção dinâmica de chaves e valores
const pessoa = {
    nome: 'Rebeca', // chave/valor
    idade: 2,
    peso: 13
}

// Aqui pega todas as chaves do obj
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
// Aqui pega os valores
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
// Pega os registros -> array de chave e valor
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] -> array com sub-arrays de chaves e valores

// utilizando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
// result:
// nome: Rebeca
// idade: 2
// peso: 13
 
// Função para definir uma propriedade -> target, 'nomePropriedade'
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // permite numeração (permite object.keys)
    writable: false, // não permite ser alterada
    value: '01/01/2013'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2013
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso', 'dataNascimento' ] 


// Object.assign (ECMAscript 2015)
const destino = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(destino, o1, o2) // pega os atributos (o1, o2) e coloca no atributo de destino (destino) - concatena no obj passado no primeiro parametro

console.log(obj) // { a: 4, b: 2, c: 3 }

Object.freeze(obj) // n ão permite incorporações/mudanças no obj
obj.c = 123
console.log(obj) // { a: 4, b: 2, c: 3 }
