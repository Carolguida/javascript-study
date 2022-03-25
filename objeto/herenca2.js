// cadeia de prototipos (prototype chain)
Object.prototype.atr0 = '0' // não é recomendado


const avo = { atr1: 'A'} // referência: object.prototype como pai
const pai = { __proto__: avo, atr2: 'B'}
const filho = { __proto__: pai, atr3: 'C'}
console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    VelMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.VelMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.VelMax
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.VelMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    VelMax: 324 // shadowing -> a medida que ferrari ter como pai o carro, velMax será sobrescrita
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super referencia o prototipo (vai chamar o método do prototipo) -> carro 
        // aqui tb estamos sobrescrevendo/sombreando a função status() a partir do obj volvo
    }
}

// Aqui estabelece a relação de prototipo
Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //{ modelo: 'F40', VelMax: 324 }
console.log(volvo) //{ modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())  // V40: 100 km/h de 200 km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // 300 km/h de 324 km/h