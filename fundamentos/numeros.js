const peso1 = 1.0; // inteiro , porém 1.1 não é
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(typeof peso1);
console.log(typeof peso2);
console.log(Number.isInteger(peso1));
console.log(typeof Number); // function 