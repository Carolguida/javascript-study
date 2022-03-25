const valor = 'Global'

function minhaFn(){
    console.log(valor)
}

//minhaFn()

function exec (){
    const valor = 'Local'
    minhaFn()
}

exec() // Global

// neste caso, como MinhaFn tem escopo léxico global, ele vai procurar o valor mais prox, no caso o Global
// isso significa que o contexto léxico não está onde a fn está sendo chamada, mas sim onde ela está sendo definida