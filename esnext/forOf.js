// itera em cima de valores

const letras = "Cod3r"
for(let letra of letras) {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
])

for(let assunto of assuntosMap) {
    console.log(assunto) // traz chave/valor
}

for(let assunto of assuntosMap.keys()) {
    console.log(assunto) // traz chave
}

for(let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}
