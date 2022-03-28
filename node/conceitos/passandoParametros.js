// parametros de uma fn podem ser os parametros do seu módulo

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana, ${nome}!`)
}