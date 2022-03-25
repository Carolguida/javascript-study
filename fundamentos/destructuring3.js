function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor)
}
// passa um objeto para essa função e dentro da função ele ja vai tirar dentro do obj o atributo min e max prontos sem precisar usar a anotação ponto para acessar o objeto

console.log(rand({max: 50, min: 40}))
// Note que aqui estamos passando um objeto