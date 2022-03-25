console.log(Math.ceil(6.1)) // arredondar para mais = 7


const obj1 = {}
obj1.nome = 'bola' // cria atributo para o obj1

console.log(obj1)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome) // cadeira
console.log(obj3.nome) //mesa