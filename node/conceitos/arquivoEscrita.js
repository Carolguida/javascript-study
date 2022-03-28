// escrever arquivo utilizando o modulo core do node -> file system

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 3025.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})