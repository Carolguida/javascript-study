const http = require('http')

const getTurma = letraTurma => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`
    return new Promise((resolve, reject) => {

        http.get(url, (res) => {
            let resultado = ''
    
            res.on('data', dados => resultado += dados)

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Recurso ES8
// O objetivo do async await é simplificar o uso de promises
// sempre que estiver lidando com promises, posso utilizar async/await

let obterAlunos = async () => {
    const turmaA= await getTurma('A')
    const turmaB= await getTurma('B')
    const turmaC= await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))

