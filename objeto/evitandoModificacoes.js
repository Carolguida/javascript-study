// Object.preventeExtensions -> não permite que o obj seja extendido (nao consegue add novos atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false

produto.nome = 'Borracha' // permite alterar os dados
produto.descricao = 'Borracha escolar branca' // mas nao permite add novas chaves e valores
delete produto.tag // excluindo tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal -> selar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // nao consegue add nem excluir atributos do obj, mas consegue modificar os valores
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.nome = 'Carla'
pessoa.profissao = 'Estudante'
delete pessoa.idade
console.log(pessoa) // { nome: 'Carla', idade: 35 }
// pode mudar os atributos, mas nao da p add e nem excluir
