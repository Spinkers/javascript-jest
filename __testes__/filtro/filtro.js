function filtro(contatos, termo) {
    return contatos.find(function(item) {
        return item.nome === termo;
    })
}

module.exports = filtro;