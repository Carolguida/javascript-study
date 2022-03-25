const aprovados = ['Ana', 'Carol', 'Fernando', 'Aline', 'Mateus']

// dentro do forEach tem um for...
// recebe 3 parametros -> nome, indice, array
aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)