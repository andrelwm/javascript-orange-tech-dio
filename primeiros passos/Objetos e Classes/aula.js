class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.\nMeu anode nascimento é ${this.anoDeNascimento}.`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}!`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}!`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`)
    }
}

const erica = new Pessoa('Erica de Oliveira Xavier', 23);
const andre = new Pessoa('André Luiz Wanderley de Melo', 29);

compararPessoas(erica, andre);