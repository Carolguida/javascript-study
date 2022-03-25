let  num1 = 1
let num2 = 2

// formas pós-fixada
 num1++ // acrescenta 1 a mais no valor:  num1 = 1 + 1 = 2
console.log(num1)
// formas pré-fixada: mais "apressada"
--num1 // tira 1 no valor: num1 = 2 - 1 = 1
console.log(num1)

console.log(++num1 === num2--)
// Ambos valem 2 
// isso acontece pq o ++num1 é compilado antes da comparação e após é lido somente o num2 sem decrementar

// IMPORTANTE: deixar o código o mais simples possível