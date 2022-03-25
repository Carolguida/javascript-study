function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)
// Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }
// Usar o operador new não so cria um novo obj, mas o prototipo do obj criado
// aponta para a função criada, no caso Aula (Aula.prototype)

// simulando o operador new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    // array dos parametros da fn (params), primeiro parametro recebe o valor q será atribuido ao this.
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)
// Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 } 
// resultado será exatamente o mesmo