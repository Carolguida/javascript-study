const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //7.7 9.2
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length) // 5 elementos
valores.push({id: 3}, false, null, 'teste') // adiciona no array 
console.log(valores)
console.log(valores.pop()) //tira ultimo valor do array e retornar = teste
delete valores[0] // deleta o primeiro elemento do array
console.log(valores)
console.log(typeof valores) // object


