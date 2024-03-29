Array.prototype.filter2 = function(callback){
    const newArray = []
      
    for (let i = 0; i < this.length; i++){
        // se retorna true, o elemento é add no novo array
       if(callback(this[i], i, this)) {
           newArray.push(this[i])  
       }       
    }
    return newArray;
}

// this -> proprio array
// this[i] -> elemento atual

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.44, fragil: true},
    {nome: "Copo de plástico", preco: 18.99, fragil: false},
]

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil))