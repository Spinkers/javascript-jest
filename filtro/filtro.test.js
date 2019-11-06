const filtro = require('./filtro');

const contatos = [{"nome": "Giovanni", "sobrenome": "Manganotti"}, {"nome": "Lucas", "sobrenome": "Lopes"}];

const encontrado = {"nome": "Lucas", "sobrenome": "Lopes"};

describe('Filtro', () => {
    test('Pesquisar um nome que existe na base', () => {
        expect(filtro(contatos, "Lucas")).toEqual(encontrado)
    });

    test('Pesquisar um nome que não existe na base', () => {
        expect(filtro(contatos, "Larissa")).toBeUndefined()
    });
});