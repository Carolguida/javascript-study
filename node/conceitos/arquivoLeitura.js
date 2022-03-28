// como ler arquivos/

const fs = require('fs') // vem previamente instalado no node

const caminho = __dirname + '/arquivo.json'
// __dirname -> representa o diretorio atual

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) 
})

// poderia usar desta forma para ler arquivos json, também sincrono: 
const config = require('./arquivo.json')
console.log(config.db) 

// outra forma 
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
})