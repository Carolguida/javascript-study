// comparando apenas valor 
console.log('1)', '1' == 1) // 1) true

// comparando apenas valor e tipo
console.log('2)', '2' === 2) // 2) false

console.log('3)', '3' != 3) // 3) false

console.log('4)', '3' !== 3) // true

console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) //true

const d1 = new Date(0) // marco zero
const d2 = new Date(0)
console.log('09)', d1 === d2) // false compara referencia de memoria
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() == d2.getTime()) // false

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false

// mais adequado usar o ===

