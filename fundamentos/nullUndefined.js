let valor; // nao inicializada
console.log(valor); // undefined

 valor = null  
 console.log(valor) // não tem nenhum valor primitivo e nenhum endereço de local de memória
// mas nesse caso não é undefined (foi inicializada)
// ausencia de valor

// console.log(valor.toString()); //Erro!

const produto =  {}; //objeto vazio
console.log(produto.preco); // preço está indefinido 
console.log(produto) // {}

produto.preco = 3.5

console.log(produto) // agora o objeto tem um valor atribuido

produto.preco = undefined
console.log(!!produto.preco); // false7
//delete produto.preco

produto.preco = null // não aponta mais para o endereço de memória, e não aponta para nada
console.log(!!produto.preco)
console.log(produto) // preco: null

