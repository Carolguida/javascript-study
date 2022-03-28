// sem promises

const http = require("http")

const getTurma = (letraTurma, callback) => {    
    const externalUrl = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`       

    http.get(externalUrl, res => {
        
        let resultado = ''

        res.on('data', dados => resultado += dados)
        res.on('end', () => callback(JSON.parse(resultado)))
    })
}

let nomes = []

getTurma('A', (alunos) => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

    getTurma('B', (alunos) => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
       
        getTurma('C', (alunos) => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})

// aninhar callbacks não é uma boa prática.
