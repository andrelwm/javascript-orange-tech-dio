// 1 - Faça um programa que dado um número imprima a sua tabuada.

const numero = 7;

for (i = 0; i < 10; i++){
    let produto = numero*(i+1);
    console.log(`${numero} x ${i+1} = ${produto}`);
}