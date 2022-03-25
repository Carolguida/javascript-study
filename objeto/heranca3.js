const pai = { nome: 'Pedro', corCabelo: 'preto'}


const filha1 = Object.create(pai) //cria um obj novo a partir do prototipo que foi passado (pai)
filha1.nome = 'Ana'
console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: { value: 'bia', writable: false, enumerable: true}
})

console.log(filha2.nome) // bia

filha2.nome = 'Carla' // nao muda nome pq ta como writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // bia tem cabelo preto

console.log(Object.keys(filha1)) // [ 'nome' ] -> só aparece pq setamos Ana (filha1.nome = 'Ana')
console.log(Object.keys(filha2)) // [ 'nome' ] -> enumerable: true

for(let key in filha2){
    console.log(key) // nome corCabelo
    
}

for(let key in filha2){
    // se a propriedade pertence a filha2
    filha2.hasOwnProperty(key) ? 
    console.log(`Pertence a ele: ${key}`) : console.log(`Por herança: ${key}`)
// nome
// Por herança: corCabelo
}
