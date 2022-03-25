// novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa 
// tire de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade) // ana 5

const { nome: n, idade: i } = pessoa 
// posso criar uma variavel a partir dos atributos
console.log(n, i) // ana 5

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true

const { endereco: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep) //rua abc 1000 undefined