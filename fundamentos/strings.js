const escola = "cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charCodeAt(3)); // 51 -> tabela unicode
console.log(escola.indexOf('3')) // 3

console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // cod
console.log('Escola '.concat(escola).concat('!')) //Escola cod3r!
console.log(escola.replace(3, 'e')) //coder
console.log('ana, maria, pedro'.split(',')) // quebra a string a partir da adição da vírgula -> [ 'ana', ' maria', ' pedro' ]