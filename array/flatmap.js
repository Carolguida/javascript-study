const escola = [
  {
    nome: "M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaAluno = aluno => aluno.nota
const getNotasTurmas = turma => turma.alunos.map(getNotaAluno)

const notas1= escola.map(getNotasTurmas)
console.log(notas1) // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])) // [ 8.1, 9.3, 8.9, 7.3 ]


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback)) // [] -> vai ser o this dentro do concat
}

const notas2 = escola.flatMap(getNotasTurmas)
console.log(notas2) // [ 8.1, 9.3, 8.9, 7.3 ]