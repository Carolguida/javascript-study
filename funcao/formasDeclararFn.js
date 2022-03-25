// neste caso posso chamar a fn antes de ter declarado ela (fn tradicional)
console.log(soma(3,4))
// forma tradicional -> function declaration
function soma(x, y) {
  return x + y;
}

// declarar fn anonima e atribuir a uma variavel ou const -> fn expression
const sub = function (x, y) {
  return y - x;
};

// named fn expression -> fn nomeada (pouco usada)
const mult = function mult(x, y) {
  return x * y;
};


/* const sub =  (x, y) => {
  return y - x;
};
console.log(sub(5,1)) */