{
    {
        {
            { var sera = 'Será?' }
            console.log(sera);
        }
    }
}


// variável definida por var tem dois escopos possíveis

function teste() {
    var local = 123
    console.log(local)
}

teste() 
console.log(local) // local naõ é definido -> ficará visível apenas dentro da função

// var só tem dois escopos possiveis:
//global -> visivel para td mundo
// escopo de função -> ficará so no bloco da fn