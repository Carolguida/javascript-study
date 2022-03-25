function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) 
// R$ NaN -> escopo global, não pega o this
// definindo como global as variaveis = R$ 18
console.log(produto.getPreco()) // R$ 3900.65

const carro = {
    preco: 40000, desc: 0.2
}

// utilizando o call
console.log('call',getPreco.call(carro))
// utilizando o apply
console.log('apply',getPreco.apply(carro))


// mudando os parametros que serao passados no call
// primeiro é o contexto, depois todos os parametros 
console.log(getPreco.call(carro, 0.17, '$')) // $ 37440

// agora passando o apply
// primeiro parametro será o contetxo de execução e depois um array com todos os parametros
console.log(getPreco.apply(carro, [0.17, '$'])) // $ 37440

