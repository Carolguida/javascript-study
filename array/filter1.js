const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Ipad Pro", preco: 4199, fragil: true},
    {nome: "Copo de vidro", preco: 12.44, fragil: true},
    {nome: "Copo de plástico", preco: 18.99, fragil: false},
]
// duas maneiras de fazer
console.log(produtos.filter(p => p.fragil == true && p.preco >= 500))
// [
//     { nome: 'Notebook', preco: 2499, fragil: true },
//     { nome: 'Ipad Pro', preco: 4199, fragil: true }
// ]

// return false // - []
// return true // todo o array produtos

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))