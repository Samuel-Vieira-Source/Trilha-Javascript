
const numero =  5;
const numeroDivisivelPor5 =  (numero % 5) === 0;

if (numero === 0) {
    console.log('O Número é inválido');
}else if (numeroDivisivelPor5) {
    console.log('Sim');
}else {
    console.log('Não');
}



