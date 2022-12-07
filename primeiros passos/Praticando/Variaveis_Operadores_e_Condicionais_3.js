/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha
da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o cálculo adequado.

Condições de pagamento:
    - À vista Débito = 10% de Desconto;
    - À vista no dinheiro ou PIX = 15% de Desconto;
    - Em duas vezes = preço normal, sem juros;
    - Acima de duas vezes = juros de 10%.

*/

let precoProduto = 100;
let formaDePagamanto = 'parcelado';
let qntParcelas = 4;

let precoFinal;

if (formaDePagamanto == 'debito') {
    precoFinal = precoProduto * 0.9
} else if (formaDePagamanto == 'dinheiro' || formaDePagamanto == 'pix') {
    precoFinal = precoProduto * 0.85
} else if (formaDePagamanto == 'parcelado' && qntParcelas == 2) {
    precoFinal = precoProduto
} else {
    precoFinal = precoProduto*1.10
}

console.log('Forma de pagamento escolhida: ' + formaDePagamanto + '.\nO valor do produto será R$ ' + precoFinal.toFixed(2))
