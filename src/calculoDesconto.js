function calcularDesconto(valorCompra, descontoCompra){
    const valorComDesconto = valorCompra - (valorCompra * (descontoCompra / 100));
    return valorComDesconto;
}

module.exports = {
    calcularDesconto
}