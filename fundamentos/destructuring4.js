function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor)
}

console.log(rand([50, 40])) // aqui inverte os valores de min e max
console.log(rand([992])) // max = 1000
console.log(rand([])) //array vazio
console.log(rand([, 10])) // min = 0