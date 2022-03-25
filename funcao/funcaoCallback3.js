// exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('o evento ocorreu!')
}
// retorna um array com o primeiro elemento da função ([0])

// armazena a função
// quando acontecer o evento e percorrer os items chama a fn