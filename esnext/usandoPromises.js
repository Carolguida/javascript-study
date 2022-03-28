// com promises

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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])    
    .then(turmas => [].concat(...turmas)) // concateno tudo em um array só de turmas -> espalhando (spread)
    .then(alunos => alunos.map(aluno => aluno.nome))// no array de turmas pego o nome dos alunos
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))