let p = new Promise(resolve => {
    resolve(['ANA', 'BEATRIZ', 'JOSÉ', 'FERNANDO'])
})

p
    .then(lista => lista)
    .then(primeiroValor => primeiroValor[0])
    .then(primeiraLetra => primeiraLetra[0])
    .then(letraMinuscula => letraMinuscula.toLowerCase())
    .then(console.log)

    // posso passar console.log() sem passar o valor, pois implicitamente o then retorna UM valor que será então passado