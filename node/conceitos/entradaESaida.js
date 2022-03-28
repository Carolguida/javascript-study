// process -> obj global disponível
// ler dados do teclado so user

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) -> pego parametro através da chamada no terminal

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n') // stdout -> saida padrão
    process.exit() // finaliza 
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('!\n', '')
        console.log(nome)
        process.stdout.write(`Fala ${nome}`)
        process.exit()
    }) 
}
// stdin -> entrada padrão: teclado -> pega o que foi digitado
// on data -> digita + enter