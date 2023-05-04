/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - Preço do combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar essa viagem.
*/


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


