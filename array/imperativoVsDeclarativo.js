const alunos = [
  { nome: "Joao", nota: 7.3 },
  { nome: "Pedro", nota: 9.8 },
];

// Calcular a média dos alunos

// Abordagem Imperativa -> detalhes do passo-a-passo
let total1 = 0;
for (var i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length); // 8.55

// Abordagem Declarativa
const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length); // 8.55
