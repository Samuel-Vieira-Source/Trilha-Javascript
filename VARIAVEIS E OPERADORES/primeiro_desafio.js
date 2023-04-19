
/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const kmLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto .toFixed(2));

