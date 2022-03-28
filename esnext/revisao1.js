// let e const
// let -> escopo de bloco e de função
// var -> escopo de função e global

{
    var a = 2
    let b = 3
}

console.log(a) // consigo acessar a
// console.log(b) // b is not defined

// Template String
// `${}`

// Destructuring -> tirar algo de dentro de arrays, strings...
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2]
console.log(x, y) // 1 2

const { idade, nome } = { nome: 'Ana', idade: 9}
console.log(idade, nome) // 9 Ana