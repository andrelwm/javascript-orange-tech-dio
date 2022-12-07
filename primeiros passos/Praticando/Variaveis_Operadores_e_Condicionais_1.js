/* 

Faça um algoritmo que dadas as três notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média
e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovação.

*/

let nota1 = 4; 
let nota2 = 9.5;
let nota3 = 4;

let media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log('Sua média = ' + media.toFixed(2) + '\nREPROVADO!!')
} else if (media >= 5 && media < 7) {
    console.log('Sua média = ' + media.toFixed(2) + '\nRECUPERAÇÃO!!')
} else {
    console.log('Sua média = ' + media.toFixed(2) + '\nPARABÉNS, VOCÊ FOI APROVADO!!')
}