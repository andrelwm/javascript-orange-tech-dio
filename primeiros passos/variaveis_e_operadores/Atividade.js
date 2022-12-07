/* Faça um programa para calcular o valor de uma viagem:
    Você terá 3 variáveis:
        1 - O preço do combustível;
        2 - O gasto médio de combustível por KM do carro;
        3 - A distânca da viagem.

    Imprima no console o valor gasto para a viagem.
*/

const valorCombustivel = 5;
const mediaCarro = 10;
const distancia = 100;

const valorGasto = (distancia/mediaCarro)*valorCombustivel

console.log('O valor gasto para essa viagem é de R$ ' + valorGasto)