function gerarNumeros(min, max) {
    if(min > max) {
       [max, min] = [min, max] // destructuring / array
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}    

gerarNumeros(1, 60)
    .then(console.log)