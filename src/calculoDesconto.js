//Escrevam uma função para fazer o cálculo no qual a pessoa tenha que informar o valor da compra e o desconto e retornar o valor final da compra.
function calcularDesconto(valorCompra, descontoCompra){
    const valorComDesconto = valorCompra - descontoCompra;
    return valorComDesconto;
}

module.exports = {
    calcularDesconto
}