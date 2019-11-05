const filtro = require('./filtro');

const contatos = [{"nome": "paulo", "sobrenome": "camargo"}, {"nome": "Lucas", "sobrenome": "Lopes"}];

const encontrado = {"nome": "paulo", "sobrenome": "camargo"};

describe('Filtro', () => {
    test('Pesquisar um nome que existe na base', () => {
        expect(filtro(contatos, "paulo")).toEqual(encontrado)
    });

    test('Pesquisar um nome que não existe na base', () => {
        expect(filtro(contatos, "xpto")).toBeUndefined()
    });
});