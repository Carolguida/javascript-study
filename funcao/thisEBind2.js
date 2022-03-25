function pessoa () {
    this.idade = 0

    const self = this
     //dispara outra função a partir de um intervalo 
    setInterval(function (){
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000)  
}
new pessoa

/* .bind(this) -> neste caso o this ja aponta para pessoa*/