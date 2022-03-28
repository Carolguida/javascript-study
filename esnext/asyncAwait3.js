function gerarNumeros(min, max, numProibido) {
    if(min > max) {
       [max, min] = [min, max] // destructuring / array
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if(numProibido.includes(aleatorio)){
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}    

async function gerarMegasena(qtdeNum) {
  const numeros = [];
  try {
    for (let _ of Array(qtdeNum).keys()) {
      numeros.push(await gerarNumeros(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    console.log(e);
    // throw 'Errooo'
  }
}

gerarMegasena(8)
    .then(console.log)
    .catch(console.log)


// gerarNumeros(1, 5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)


// includes -> determina se um array contém ou não um determinado elemento -> retorna boolean