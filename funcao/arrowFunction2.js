function Pessoa () {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

// o this dentro de uma função arrow é fixo, ou seja,
// é baseado no contexto o qual a fn foi escrita, e não influenciado por ser chamado de locais diferentes

