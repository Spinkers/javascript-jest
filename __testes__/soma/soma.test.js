const soma = require('./soma');

describe('Somas', () => {
    test('A soma de dois números, 2 e 3', () => {
        const resultado = soma(2,3);
        expect(resultado).toEqual(5);
    });
});