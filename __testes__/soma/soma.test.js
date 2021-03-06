const soma = require('./soma');

describe('Somas', () => {
    test('A soma de dois números, 2 e 3', () => {
        const resultado = soma(2,3);
        expect(resultado).toEqual(5);
    });

    //Este teste funciona não somente para string mas para qualquer coisa que não seja um número.
    test('A soma de uma string com um inteiro', () => {
        const resultado = soma("teste", 3);
        expect(resultado).toEqual(undefined);
    });
});