// objetivo: pegar todas as notas menores que 7
// vamos utilizar a fn callback e sem tb

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []
for (let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// usando callback -> passa um callback para o filter que retorna vdd ou falson
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
// retorna vdd ou falso
console.log(notasBaixas2)

//usando arrow fn tb c callback
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)