// tagged template - processar o template string dentro de uma fn

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

const preco = 29.90
const precoParcela = 11
console.log(tag `1x de ${preco} ou 3x de ${precoParcela}.`)