// pessoa aponta para um endereço de memória (123)
// la que tenho meu obj criado
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
// Quando eu aponto Pedro para nome, o obj continua apontando para o mesmo endereço
// Porém o obj que é apontado para 123 pode ser alterado
// o que nao pode ser alterado é a constante pessoa
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa -> 456 -> {...} 
// Aqui estou tentando apontar pessoa para um outro endereço de memoria
// pessoa = { nome: 'Ana'}
// Nesse caso, o obj pessoa sempre apontará p o endereço 123, por ser uma const,
// então ao tentar atribuit pessoa a um novo obj ocorrerá um erro

Object.freeze(pessoa) // congelando o obj pessoa 
// nao consigo mais mexer no obj
pessoa.nome= 'Maria'
console.log(pessoa.nome) // Pedro