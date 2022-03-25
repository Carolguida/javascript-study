const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`);
}

// dentro do array temos a fn forEach
fabricantes.forEach(imprimir);
fabricantes.forEach(function (fabricante) {
  console.log(fabricante);
});
// podemos fazer por fn arrow tb
fabricantes.forEach((fabricante) => console.log(fabricante));

// o calback é você passar uma função 
// e essa função ser chamada quando um evento acontecer
// no caso o evento é o looping
// quando encontra um novo elemento ele dispara um evento que é a fn que foi chamada
// ou seja, todo elemento percorrido no array