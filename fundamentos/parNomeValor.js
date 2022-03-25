// par nome/valor
const saudacao = 'Oi' 
// contexto léxico 1
// é um local no qual a variável foi definida fisicamente no código

// uma funcao define um contexto - mais restrito-
function exec(){
    const saudacao = 'inhai' //contexto lexico 2
    return saudacao
}

// const saudacao = 'Epaaa' // ERRO -> da erro de declaração pois ja foi declarado acima

// objetos sao grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Pedro',
    idadE: 32,
    peso: 60,
    endereco: {
        logradouro: 'rua bla bla bla',
        numero: 222,
        complemento: 'sei la'
    }
}



console.log(saudacao);
console.log(exec());
console.log(cliente)
