// Arrow Function

const soma = (a, b) => a + b
console.log(soma(4,5))

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,8,9,10)) // 29