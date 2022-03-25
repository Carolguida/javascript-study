// JSON é um formato de dados -> interoperabilidade...
// pode ser entendida como uma característica que se refere à capacidade de diversos sistemas e organizações trabalharem em conjunto
// comunica sistemas que possuem tecnologias diferentes -> ler json em qualquer linguagem

const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3} -> fn foi excluida
// isso pq JSON é um formato textual, diferente de obj que consigo manipular dados, ter fn, etc..

// console.log(JSON.parse("{ a: 1, b:2, c: 3}")); // erro
// console.log(JSON.parse("{ 'a': 1, 'b': 3, 'c': 3 }")) //n]ao é formato valido tb

// formato válido de JSON -> aqui transforma JSON em 
console.log(JSON.parse('{ "a": 1, "b": 3.2, "c": "string", "d": true, "e": {}, "f": [] }')) 



