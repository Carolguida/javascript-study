// parametros e retorno sao opcionais em js
function area(largura, altura) {
    const area = altura * largura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    }else {
        return area
    }
}

console.log(area(2,2))
console.log(area(5,5))
/* Valor acima do permitido: 25m2
retorno -> undefined */