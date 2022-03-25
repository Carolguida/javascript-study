
function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = -1

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima!')

// Ja aqui, se opção iniciar com -1, ocorrerá a repetiçao pelo menos uma vez
// até chegar no while e por fim na rep