// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a fn acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

/* function dentro(){
    return x
} */

function fora () {
    const x = 'Local'
     function dentro(){
        return x
    }

    return dentro
}

const minhaFn = fora()
console.log(minhaFn())


// como a fn dentro foi declarada dentro da fn fora, ele vai pegar no escopo daquela fn, por isso o resultado é 'Local'