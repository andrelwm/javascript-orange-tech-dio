const lista = [5, 50, 10, 98, 23];
let i = 0;


function gets() {
    const numero = lista[i];
    i++;
    return numero;
}

function print(texto){
    console.log(texto);
}

module.exports = {print, gets}