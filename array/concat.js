// elementos concatenados em um novo array
// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos, 'Fulano')

console.log(todos) // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ]
// [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ] -> passando 'Fulano'

console.log([].concat([1,2],[3,4], 5, [[6,7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
