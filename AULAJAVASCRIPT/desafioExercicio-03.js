// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;




let precoEtiqueta = 100;
let codPagamento = 3;
let valorFinal;

if (codPagamento === 1) {
  let valorDesconto = precoEtiqueta * 0.1;
  valorFinal = precoEtiqueta - valorDesconto;
} else if (codPagamento === 2) {
  let valorDesconto = precoEtiqueta * 0.15;
  valorFinal = precoEtiqueta - valorDesconto;
} else if (codPagamento === 3) {
  valorFinal = precoEtiqueta;
} else if (codPagamento === 4) {
  let valorJuros = precoEtiqueta * 0.1;
  valorFinal = precoEtiqueta + valorJuros;
} else {
  console.log("Código de pagamento inválido!");
  process.exit();
}

console.log("O valor final a ser pago é R$ " + valorFinal.toFixed(2));
