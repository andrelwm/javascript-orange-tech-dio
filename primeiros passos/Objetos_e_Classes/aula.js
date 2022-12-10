class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const erica = new Pessoa();
erica.nome = 'Erica de Oliveira Xavier';
erica.idade = 23;

const andre = new Pessoa();
andre.nome = 'André Luiz Wanderley de Melo';
andre.idade = 29;

erica.descrever();
andre.descrever();