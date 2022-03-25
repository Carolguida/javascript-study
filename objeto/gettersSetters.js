const sequencia = {
  _valor: 1, // atr privado (apenas convenção)
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};
// get
console.log(sequencia.valor, sequencia.valor)
// set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // como o valor é menor que o que ja estava antes (1000), vai ignorar
console.log(sequencia.valor, sequencia.valor)