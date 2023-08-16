import promptsync from "prompt-sync";
const prompt = promptsync({ sigint: true });

function itemPrincipalNoPedido(itemPrincipal) {
  for (const itemQuantidade of pedido) {
    const [item] = itemQuantidade.split(",");
    if (item.trim() === itemPrincipal) {
      return true;
    }
  }
  return false;
}

let pedido = [];
let continuarPedindo = "S";

const valorCafe = 3;
const valorChantily = 1.5;
const valorSuco = 6.2;
const valorSanduiche = 6.5;
const valorQueijo = 2.0;
const valorSalgado = 7.25;
const valorCombo1 = 9.5;
const valorCombo2 = 7.5;

let valorTotal = 0;
let valorPedido = 0;

// realizar pedido dos itens
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
  } else if (
    (pedidoItem === "chantily" && !itemPrincipalNoPedido("cafe")) ||
    (pedidoItem === "queijo" && !itemPrincipalNoPedido("sanduiche"))
  ) {
    console.log("Item extra não pode ser pedido sem o principal.");
  } else {
    let pedidoQtd = "0";
    while (pedidoQtd === "0" || pedidoQtd < 0) {
      pedidoQtd = prompt("Qual a quantidade? ");
      if (pedidoQtd === "0" || pedidoQtd < 0) {
        console.log("Quantidade inválida!");
      }
    }

    // cálculo valor pedido
    switch (pedidoItem) {
      case "cafe":
        valorPedido += valorCafe * pedidoQtd;
        break;
      case "chantily":
        valorPedido += valorChantily * pedidoQtd;
        break;
      case "suco":
        valorPedido += valorSuco * pedidoQtd;
        break;
      case "sanduiche":
        valorPedido += valorSanduiche * pedidoQtd;
        break;
      case "queijo":
        valorPedido += valorQueijo * pedidoQtd;
        break;
      case "salgado":
        valorPedido += valorSalgado * pedidoQtd;
        break;
      case "combo1":
        valorPedido += valorCombo1 * pedidoQtd;
        break;
      case "combo2":
        valorPedido += valorCombo2 * pedidoQtd;
        break;
    }

    const pedidoFormatado = `${pedidoItem}, ${pedidoQtd}`;
    pedido.push(pedidoFormatado);

    if (pedido.length === 0) {
      console.log("Não há itens no carrinho de compra!");
    }

    continuarPedindo = prompt("Continuar pedindo (S/N)? ").toUpperCase();
  }
}

// cálculo do valorTotal conforme forma de pagamento
let formaPagamento = prompt(
  "Qual será a forma de pagamento (dinheiro, debito ou credito)? "
);

switch (formaPagamento) {
  case "dinheiro":
    valorTotal = valorPedido - valorPedido * 0.05;
    console.log(`R$ ${valorTotal.toFixed(2).replace(".", ",")}`);
    break;
  case "debito":
    valorTotal = valorPedido;
    console.log(`R$ ${valorTotal.toFixed(2).replace(".", ",")}`);
    break;
  case "credito":
    valorTotal = valorPedido + valorPedido * 0.03;
    console.log(`R$ ${valorTotal.toFixed(2).replace(".", ",")}`);
    break;
  default:
    console.log("Forma de pagamento inválida!");
    break;
}
