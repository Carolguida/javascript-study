class Lancamento {
  constructor(nome = "Generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((lancamento) => this.lancamentos.push(lancamento));
    // faço forEach nos lancamentos que passei como parametro
    // percorro cada elemento e dou um push no array lancamentos
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((lancamento) => {
      valorConsolidado += lancamento.valor; // soamtorio
    });

    return valorConsolidado;
  }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario()) // 44780
