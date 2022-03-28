const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios"); // client HTTP

// Desafio: Retornar uma mulher chinesa com menor salario.

axios.get(url).then((res) => {
  const employee = res.data;

  const lowestSalary = employee
    .filter((item) => item.genero === "F" && item.pais === "China")
    .reduce((funcA, funcB) => (funcA.salary < funcB.salary ? funcA : funcB));

  console.log(lowestSalary); 
});
