var num = 1;

{
    let num = 2;
    console.log('dentro =', num) // dentro = 2 -> fica restrito neste escopo
}

console.log('fora =', num) // fora = 1

// embora tenham o mesmo nome (num), o let respeita o bloco/escopo