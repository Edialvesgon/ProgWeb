const valorConta = 100
const percentualGorjeta = 15

function calcularGorjeta(Conta, Gorjeta) {
    return (Conta * Gorjeta) / 100
}

const gorjeta = calcularGorjeta(valorConta, percentualGorjeta);

const valorTotal = valorConta + gorjeta;

console.log(`Valor da conta: R$ ${valorConta.toFixed(2)}, gorjeta: ${gorjeta}%, valor total: R$ ${valorTotal.toFixed(2)}`);