const notas = [];

notas.push(10);
notas.push(10);
notas.push(4);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

const media = soma/notas.length;

console.log(media);