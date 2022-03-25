// construtor

class Pessoa {
    constructor(nome) {
        this.nome = nome       
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

// pego as variáveis a partir da instancia da classe e passo através da método falar
const p1 = new Pessoa('João')
p1.falar()

// função factory 
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('marcelo')
p2.falar()

// no caso da função factory, temos uma vantagem
// se formos para o browser e tentar acessar a variável nome através da classe criada, veremos uma diferença
// Se acessarmos o body através do document e click e pedirmos para a cada click aparecer no console a mensagem "Meu nome é ${this.nome}",
// veremos que o this.nome = undefined
// de acordo com quem disparou a chamada dessa fn, o this pode variar de valor
// porém isso não acontece com a fn factory! Sempre vai apontar para a variável certa, pois não precisei do this -> ciencia do contexto léxico - acesso ao escopo mais abrangente