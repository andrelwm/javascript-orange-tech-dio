/* 

O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso
de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura*altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de aconrdo com a tabela abaixo:

IMC:
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obesidade Mórbida.

*/

let altura = 1.8; 
let peso = 59;

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Seu IMC = ' + imc.toFixed(2) + '\nAbaixo do peso!!')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu IMC = ' + imc.toFixed(2) + '\nPeso normal!!')
} else if (imc >= 25 && imc < 30){
    console.log('Seu IMC = ' + imc.toFixed(2) + '\nAcima do peso!!')
} else if (imc >= 30 && imc < 40) {
    console.log('Seu IMC = ' + imc.toFixed(2) + '\nObesidade!!')
} else {
    console.log('Seu IMC = ' + imc.toFixed(2) + '\nObesidade Mórbida!!')
}