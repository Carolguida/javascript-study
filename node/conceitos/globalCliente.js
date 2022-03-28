require('./global')

console.log(MinhaApp.saudacao()) // Olá, pessoal

MinhaApp.nome = 'Vixe'

console.log(MinhaApp.nome) // Vixe

// utilizando Object.freeze posso evitar sobrescrever os atributos
// cuidado com escopo Global 