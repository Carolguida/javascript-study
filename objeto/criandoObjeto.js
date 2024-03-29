// usando notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
// preco e desconto nao posso mais alterar esses valores pois estao encapsulados(escondidos)
function produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }    
}
const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2898.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
// -> Padrão de projeto: função que fabrica alguma coisa, no caso um obj

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}
 const f1 = criarFuncionario('Joao', 7980, 4)
 const f2 = criarFuncionario('Maria', 11400, 1)
 console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Função json.parse -> json para obj
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info) // Sou um JSON
console.log(fromJson) //{ info: 'Sou um JSON' }