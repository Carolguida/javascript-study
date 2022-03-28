function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// esperarPor(1500)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor(1500))
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor(1500))
//     .then(() => console.log('Executando Promise 3...'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`) 
    // so vai executar essa linha de código quando acima estiver ok 
    // quando a promise estiver resolvida

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`) 

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`) 

    return valor + 3
}

executar()

// Não posso fazer
// const v = executar() // Promise { <pending> }
// console.log(v)
// essa função devolve uma promise
// ou seja, não consigo pegar nenhum valor
// e também não posso marcar como await -> node não permite
// const v = await executar()

// nesse caso temos que chamar o then
executar().then(console.log)