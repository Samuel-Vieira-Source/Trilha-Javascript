// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
const precoEtiqueta = 100;
const codPagamento = 1;

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros/100)));
}



if (codPagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (codPagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (codPagamento === 3) {
  console.log(precoEtiqueta);
} else if (codPagamento === 4) {
  console.log(aplicarJuros(precoEtiqueta, 10));
} else {
  console.log("Código de pagamento inválido!");
  process.exit();
}

// console.log("O valor final a ser pago é R$ " + valorFinal.toFixed(2));