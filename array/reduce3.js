Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1; // se valor inicial for setado, o indice inicial vai ser zero, caso contrário será 1.
  let acumulador = this[0] || valorInicial; // primeiro elemento do array ou um valor inicial setado
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce(soma)); // 21
console.log(nums.reduce(soma, 21)); // 42
