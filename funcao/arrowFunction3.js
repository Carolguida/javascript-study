let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) 
// console.log(typeof this)
// true 
//-> neste caso no node, dentro do this de uma função, será tb igual no escopo global

const obj = {}
//aqui vou associar o comparaConThis com o objeto através do bind
comparaComThis = comparaComThis.bind(obj)
// agora o comparaComThis vai apontar para o obj e não mais para o escopo global, devido ao bind
comparaComThis(global) // false
comparaComThis(obj) // true -> agora o comparaComThis aponta para o objeto

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true
comparaComThisArrow(this) // true -> igual ao module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false -> a fn arrow é mais "forte" que o bind
comparaComThisArrow(global) // flase
comparaComThisArrow(this) // true -> ainda aponta para o this (objeto que originalmente foi escrito)

// para a fn arrow, o this é associado ao contexto o qual a fn foi escrita, ou seja, não há variação de forma alguma