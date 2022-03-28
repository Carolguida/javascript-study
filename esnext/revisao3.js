// ES8: Object.values Object.entries
// Object.values -> pega os valores
// Object.entries -> pega chave e valor
// retorna os valores num array

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias notação literal

const nome = "Carla"
const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}

console.log(pessoa.nome, pessoa.ola()) 

// Classes
class Animal {}
class Cachorro extends Animal { // herança
    falar(){
        return 'AU AU'
    }
}

console.log(new Cachorro().falar())
