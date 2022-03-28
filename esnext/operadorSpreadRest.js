// operador ...rest(juntar)/spread(espalhar)
// usar rest como parâmetro de fn

// usar spread com obj

const funcionario = {nome: 'Maria', salario: 12366.23}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// spread em array
const grupoA =['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)