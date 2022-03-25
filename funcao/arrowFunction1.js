// função arrow é sempre uma fn anonima -> para chamá-la é preciso armazenar numa variavel

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}

olá = () => 'olá' // sem parametro
console.log(ola())

// OBS: o let e var podem ser reescritos
// a diferença está na onde estes podem ser declarados em questão de escopo
// let ->  permite que você declare variáveis limitando seu escopo no bloco
// var -> Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.
// o ideal é sempre usar const -> constante