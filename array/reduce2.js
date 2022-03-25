const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true},
]
const bolsista = alunos.map(aluno => aluno.bolsista)

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado = bolsista.reduce(todosBolsistas)
console.log(resultado)

// Desafio 2: Algum aluno é  bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resultado2 = bolsista.reduce(algumBolsista) 
console.log(resultado2)

// resultado -> acumulador (valor anterior)
// bolsista -> atual