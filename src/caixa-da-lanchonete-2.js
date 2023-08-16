import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

let pedido = [];
let continuarPedindo = "S";

while (continuarPedindo === "S") {
  const pedidoItem = prompt("Qual o código do item? ").toLowerCase();
  if (
    pedidoItem != "cafe" &&
    pedidoItem != "chantily" &&
    pedidoItem != "suco" &&
    pedidoItem != "sanduiche" &&
    pedidoItem != "queijo" &&
    pedidoItem != "salgado" &&
    pedidoItem != "combo1" &&
    pedidoItem != "combo2"
  ) {
    console.log("Item inválido!");
  } else if (pedidoItem === "") {
    console.log("Não há itens no carrinho de compra!");
    continuarPedindo === "S";
  } else {
    let pedidoQtd = "0";
    while (pedidoQtd === "0") {
      pedidoQtd = prompt("Qual a quantidade? ");
      if (pedidoQtd === "0") {
        console.log("Quantidade inválida!");
      }
    }

    const pedidoFormatado = `${pedidoItem}, ${pedidoQtd}`;
    pedido.push(pedidoFormatado);

    continuarPedindo = prompt("Continuar pedindo (S/N)? ").toUpperCase();
  }
}

// prompt("Qual será a forma de pagamento (dinheiro, debito ou credito)? ");

// let valorTotal = 0;
// let valorPedido = 0;

// switch (formaPagamento) {
//   case "dinheiro":
//     valorTotal = valorPedido - valorPedido * 0.05;
//     break;
//   case "debito":
//     valorTotal = valorPedido;
//     break;
//   case "credito":
//     valorTotal = valorPedido + valorPedido * 0.03;
//     break;
//   default:
//     console.log("Forma de pagamento inválida!");
//     break;
// }

console.log(pedido);

// const valorcafe = 3;
// const valorChantily = 1.5;
// const valorSuco = 6.2;
// const valorSanduice = 6.5;
// const valorQueijo = 2.0;
// const valorSalgado = 7.25;
// const valorCombo1 = 9.5;
// const valorCombo2 = 7.5;
