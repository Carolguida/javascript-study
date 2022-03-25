const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Ana", nota: 8.7, bolsista: true},
]

console.log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado) // 35
// console.log(resultado) // 45 (passando 10 como atual)