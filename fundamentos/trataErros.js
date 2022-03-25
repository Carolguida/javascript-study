function tratarErroWLancar(erro) {
  // throw new Error("....");
  // throw 10
  throw {
      nome: erro.name,
      msg: erro.message,
      date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroWLancar(e);
  } finally {
      console.log('final') // chama independente de erro 
  }
}

const obj = { name: "roberto" };

imprimirNomeGritado(obj);
// Cannot read property 'toUpperCase' of undefined (nome: 'roberto')
