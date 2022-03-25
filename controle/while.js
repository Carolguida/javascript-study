// focado para quantidades indeterminadas de repetições

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = -1

while (opcao != -1) {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}`)
}

console.log('Até a próxima!')

// Neste caso, se opção iniciar com valor -1, não entrara no while