const { identificarBandeira } = require('./index');

describe('identificarBandeira', () => {
    test('deve identificar Visa', () => {
        expect(identificarBandeira('4111 1234 5678 9012')).toBe('Visa');
    });

    test('deve identificar MasterCard', () => {
        expect(identificarBandeira('5100 1234 5678 9012')).toBe('MasterCard');
        expect(identificarBandeira('2221 1234 5678 9012')).toBe('MasterCard');
    });

    test('deve identificar Elo', () => {
        expect(identificarBandeira('4011 1234 5678 9012')).toBe('Elo');
        expect(identificarBandeira('4312 1234 5678 9012')).toBe('Elo');
        expect(identificarBandeira('4389 1234 5678 9012')).toBe('Elo');
    });

    test('deve identificar American Express', () => {
        expect(identificarBandeira('3400 123456 78901')).toBe('American Express');
        expect(identificarBandeira('3700 123456 78901')).toBe('American Express');
    });

    test('deve identificar Discover', () => {
        expect(identificarBandeira('6011 1234 5678 9012')).toBe('Discover');
        expect(identificarBandeira('6500 1234 5678 9012')).toBe('Discover');
        expect(identificarBandeira('6440 1234 5678 9012')).toBe('Discover');
        expect(identificarBandeira('6499 1234 5678 9012')).toBe('Discover');
    });

    test('deve identificar Hipercard', () => {
        expect(identificarBandeira('6062 1234 5678 9012')).toBe('Hipercard');
    });

    test('deve retornar desconhecida para número inválido', () => {
        expect(identificarBandeira('1234 5678 9012 3456')).toBe('Bandeira desconhecida');
    });
});