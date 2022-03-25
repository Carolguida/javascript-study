// map serve para mapear os elementos de um array para outro

const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map((e) => {
  return e * 2;
});

console.log(resultado) // [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraReais)

console.log(resultado)