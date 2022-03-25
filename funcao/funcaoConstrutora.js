// função construtora
function Carro (velocidadeMax = 200, delta = 5) {
    // atributo privado (pertence somente ao escopo da fn carro)
    let velocidadeAtual = 0

    // método publico 
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    // outro método publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// quando instanciado -> vira um objeto
const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

