class BandeiraCartao {
    constructor(nome, padroes) {
        this.nome = nome;
        this.padroes = padroes;
    }

    valida(numero) {
        return this.padroes.some((regex) => regex.test(numero));
    }
}

const bandeiras = [
    new BandeiraCartao('Visa', [
        /^4/
    ]),
    new BandeiraCartao('MasterCard', [
        /^5[1-5]/,
        /^222[1-9]/, /^22[3-9][0-9]/, /^2[3-6][0-9]{2}/, /^27[01][0-9]/, /^2720/
    ]),
    new BandeiraCartao('Elo', [
        /^4011/, /^4312/, /^4389/
        // Adicione outros intervalos conforme necessário
    ]),
    new BandeiraCartao('American Express', [
        /^34/, /^37/
    ]),
    new BandeiraCartao('Discover', [
        /^6011/, /^65/, /^64[4-9]/
    ]),
    new BandeiraCartao('Hipercard', [
        /^6062/
    ])
];

function identificarBandeira(numero) {
    const numeroLimpo = numero.replace(/\D/g, '');
    for (const bandeira of bandeiras) {
        if (bandeira.valida(numeroLimpo)) {
            return bandeira.nome;
        }
    }
    return 'Bandeira desconhecida';
}

// Exemplo de uso:
const exemplos = [
    '4011 1234 5678 9012', // Elo
    '5100 1234 5678 9012', // MasterCard
    '4111 1234 5678 9012', // Visa
    '6011 1234 5678 9012', // Discover
    '6062 1234 5678 9012', // Hipercard
    '3400 123456 78901'    // American Express
];

exemplos.forEach(numero => {
    console.log(`${numero}: ${identificarBandeira(numero)}`);
});

module.exports = { identificarBandeira };