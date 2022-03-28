const fs = require('fs')
const caminho = __dirname + '/arquivo.json'


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {            
            resolve(JSON.parse(conteudo))            
        })
    })
}

lerArquivo(caminho)
    .then(console.log)


