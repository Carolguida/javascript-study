const moduloA = require('../../moduloA')
console.log(moduloA)
console.log(moduloA.saudacao)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)