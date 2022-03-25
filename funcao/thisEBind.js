const pessoa = {
  saudacao: "Olá",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // undefined -> conflito entre paradigmas, pois não contém saudação dentro da função falar,
// e não chamei esta fn dentro do contexto do obj pessoa

const falarDePessoa = pessoa.falar.bind(pessoa)
// bind -> Para uma determinada função, cria uma função vinculada que tem o mesmo corpo da função original. 
// Este objeto da função associada está associado ao objeto especificado e possui os parâmetros iniciais especificados.
falarDePessoa(); // Olá