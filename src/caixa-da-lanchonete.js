class CaixaDaLanchonete {
  validarItemPrincipalNoPedido(itemPrincipal, itens) {
    for (const itemQuantidade of itens) {
      const [item] = itemQuantidade.split(",");
      if (item.trim() === itemPrincipal) {
        return true;
      }
    }
    return false;
  }

  validarPedido(itens) {
    if (itens.length === 0) {
      throw new Error("Não há itens no carrinho de compra!");
    }

    for (const itemQuantidade of itens) {
      const [item, quantidade] = itemQuantidade.split(",");

      if (
        item.trim() != "cafe" &&
        item.trim() != "chantily" &&
        item.trim() != "suco" &&
        item.trim() != "sanduiche" &&
        item.trim() != "queijo" &&
        item.trim() != "salgado" &&
        item.trim() != "combo1" &&
        item.trim() != "combo2"
      ) {
        throw new Error("Item inválido!");
      } else if (
        (item.trim() === "chantily" &&
          !this.validarItemPrincipalNoPedido("cafe", itens)) ||
        (item.trim() === "queijo" &&
          !this.validarItemPrincipalNoPedido("sanduiche", itens))
      ) {
        throw new Error("Item extra não pode ser pedido sem o principal.");
      } else if (quantidade === "0" || quantidade < 0) {
        throw new Error("Quantidade inválida!");
      }
    }
  }

  calcularValorPedido(itens) {
    const valorCafe = 3;
    const valorChantily = 1.5;
    const valorSuco = 6.2;
    const valorSanduiche = 6.5;
    const valorQueijo = 2.0;
    const valorSalgado = 7.25;
    const valorCombo1 = 9.5;
    const valorCombo2 = 7.5;
    let valorPedido = 0;

    for (const itemQuantidade of itens) {
      const [item, quantidade] = itemQuantidade.split(",");

      switch (item.trim()) {
        case "cafe":
          valorPedido += valorCafe * quantidade;
          break;

        case "chantily":
          valorPedido += valorChantily * quantidade;
          break;

        case "suco":
          valorPedido += valorSuco * quantidade;
          break;

        case "sanduiche":
          valorPedido += valorSanduiche * quantidade;
          break;

        case "queijo":
          valorPedido += valorQueijo * quantidade;
          break;

        case "salgado":
          valorPedido += valorSalgado * quantidade;
          break;

        case "combo1":
          valorPedido += valorCombo1 * quantidade;
          break;

        case "combo2":
          valorPedido += valorCombo2 * quantidade;
          break;
      }
    }

    return valorPedido;
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    try {
      this.validarPedido(itens);
      const valorPedido = this.calcularValorPedido(itens);

      switch (metodoDePagamento) {
        case "dinheiro":
          const valorTotalDinheiro = valorPedido - valorPedido * 0.05;
          console.log(`R$ ${valorTotalDinheiro.toFixed(2).replace(".", ",")}`);
          break;
        case "debito":
          const valorTotalDebito = valorPedido;
          console.log(`R$ ${valorTotalDebito.toFixed(2).replace(".", ",")}`);
          break;
        case "credito":
          const valorTotalCredito = valorPedido + valorPedido * 0.03;
          console.log(`R$ ${valorTotalCredito.toFixed(2).replace(".", ",")}`);
          break;
        default:
          console.log("Forma de pagamento inválida!");
          break;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

// new CaixaDaLanchonete().calcularValorDaCompra("debito", ["chantily,1"]);

// new CaixaDaLanchonete().calcularValorDaCompra("debito", [
//   "cafe,1",
//   "chantily,1",
// ]);

// new CaixaDaLanchonete().calcularValorDaCompra("credito", [
//   "combo1,1",
//   "cafe,2",
// ]);

export { CaixaDaLanchonete };
