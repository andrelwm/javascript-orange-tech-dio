/*
    1 - Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
    Ex.:
        Dados de entrada:
        5
        50
        10
        98
        23

        Saída:
        98

*/

const { gets, print } = require('./Funcoes_Importacao_e_Exportacao');

const lista = []

for (let i = 0; i < 5; i++){
    const numero = gets();
    lista.push(numero);
}

let maiorValor = 0;

for(let i = 0; i < lista.length; i++){
    if (lista[i] > maiorValor) {
        maiorValor = lista[i];
    }
}

print(maiorValor);

