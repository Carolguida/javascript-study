// serve mais para fugir do escopo global (browser)
// funcoes auto-invocadas
//IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()