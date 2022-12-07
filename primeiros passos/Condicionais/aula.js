const numero = 10;
const ePar = numero % 2 == 0;

if (numero == 0) {
    console.log('Número Inválido!!')
} else if (ePar){
    console.log('É par!')
} else {
    console.log('É ímpar!')
}