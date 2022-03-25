// padrão de projetos
// factory é uma função que retorna um objeto (fabrica uma instancia de um obj)

// factory simples
function criarPessoa() {
  return {
    name: "Ana",
    sobrenome: "Silva",
  };
}

//console.log(criarPessoa())

// posso criar uma factory em que passo parametros
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
  };
}
console.log(criarProduto("bola de futebol", 10));
console.log(criarProduto("iPad", 1000));
console.log(criarProduto("Notebook", 4000));
