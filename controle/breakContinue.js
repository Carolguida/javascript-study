// break e continue -> switch, for e while

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in numeros) {
    if(x == 5) break
    console.log(`${x} = ${numeros[x]}`)
}
// para quando x = 5

for(y in numeros) {
    if (y == 5) continue
    console.log(`${y} = ${numeros[y]}`)
}

// as duas palavras reservadas causam desvio de fluxo
// break -> vai parar a repetição - sai do laço
// continue -> interrompe a repetição atual e vai para a próxima rep

// break age no laço mais próximo