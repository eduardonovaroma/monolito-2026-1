const listarContatos = (req, res) => {

    const contatos = [
        { id: 1, nome: "João", email: "joao@example.com" },
        { id: 2, nome: "Maria", email: "maria@example.com" },
        { id: 3, nome: "Pedro", email: "pedro@example.com" }
    ];

    res.render("contatos/contatos", { contatos });
}

const novoContato = (req, res) => {
    res.render("contatos/new");
}
const excluirContato = (req, res) => {
    const contatoId = req.params.id;
    res.render("contatos/delete", { contatoId });
}

const editarContato = (req, res) => {
    const contatoId = req.params.id;
    res.render("contatos/edit", { contatoId });
}

export default {
    listarContatos,
    novoContato,
    editarContato,
    excluirContato
}