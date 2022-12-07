/* Faça um programa para calcular o valor de uma viagem:
    Você terá 5 variáveis:
        1 - O preço do Etanol;
        2 - O preço da Gasolina;
        3 - O tipo de combustível que o seu carro usa;
        4 - O gasto médio de combustível por KM do carro;
        5 - A distânca da viagem em KM.

    Imprima no console o valor gasto para a viagem.
*/

const valorEtanol = 3.5;
const valorGasolina = 5;
var tipoCombustivel = 'Etanol';
const gastoMedio = 10;
const distancia = 100;

let valorGasto;

if (tipoCombustivel == 'Etanol') {
    valorGasto = (distancia/gastoMedio)*valorEtanol
} else {
    valorGasto = (distancia/gastoMedio)*valorGasolina
}

console.log('Seu carro usa ' + tipoCombustivel + '. O valor gasto para essa viagem é de R$ ' + valorGasto)