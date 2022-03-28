// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Fkamengo')
times.add('Vasco')

console.log(times) // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Fkamengo' }
// possui fn has, size, delete

const nome = ['Carla', 'Joao', 'Lucas', 'Ana', 'Lucas']
const nomesSet = new Set(nome)
console.log(nomesSet) //Set(4) { 'Carla', 'Joao', 'Lucas', 'Ana' }