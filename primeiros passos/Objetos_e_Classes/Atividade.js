/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que, dado a quantidade de KM e o preço do combustível nos dê o valor
    gasto em reais para realizar esse percurso.

*/

class Carro {
    marca;
    cor;
    gasto;

    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;
    }

    gastoTotal(distancia, valorCombustivel) {
        return distancia * this.gasto * valorCombustivel;
    }

}

meuCarro = new Carro('Corsa', 'Preto', 1/11);

console.log(meuCarro);

gasto = meuCarro.gastoTotal(10, 5);

console.log(gasto);