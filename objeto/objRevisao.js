// colecao dinamica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 220;

console.log(produto);
delete produto.preco; // deleta preco
console.log(produto);

const carro = {
  modelo: "A4",
  preco: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
};

// posso ter um array de objs e funções tb

carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.condutores
console.log(carro)
console.log(carro.condutores) // undefined -> acessa carro mas da undefined para condutores
console.log(carro.condutores.length) // quando tento acessar algo de undefined gera erro (TypeError: Cannot read property 'length' of undefined)