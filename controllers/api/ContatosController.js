import Contato from "../../models/Contato.js";

// GET /api/contatos
const listar = async (req, res) => {
    try {
        const contatos = await Contato.findAll({ order: [["nome", "ASC"]] });
        res.json(contatos);
    } catch (error) {
        console.error("Erro ao listar contatos:", error);
        res.status(500).json({ erro: "Erro ao listar contatos." });
    }
}

// GET /api/contatos/:id
const buscar = async (req, res) => {
    try {
        const contato = await Contato.findByPk(req.params.id);

        if (!contato) {
            return res.status(404).json({ erro: "Contato não encontrado." });
        }

        res.json(contato);
    } catch (error) {
        console.error("Erro ao recuperar contato:", error);
        res.status(500).json({ erro: "Erro ao recuperar contato." });
    }
}

// POST /api/contatos
const salvar = async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const contato = await Contato.create({ nome, email, telefone });
        res.status(201).json(contato);
    } catch (error) {
        console.error("Erro ao salvar contato:", error);
        res.status(500).json({ erro: "Erro ao salvar contato." });
    }
}

// PUT /api/contatos/:id
const atualizar = async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const contato = await Contato.findByPk(req.params.id);

        if (!contato) {
            return res.status(404).json({ erro: "Contato não encontrado." });
        }

        await contato.update({ nome, email, telefone });
        res.json(contato);
    } catch (error) {
        console.error("Erro ao atualizar contato:", error);
        res.status(500).json({ erro: "Erro ao atualizar contato." });
    }
}

// DELETE /api/contatos/:id
const excluir = async (req, res) => {
    try {
        const contato = await Contato.findByPk(req.params.id);

        if (!contato) {
            return res.status(404).json({ erro: "Contato não encontrado." });
        }

        await contato.destroy();
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao excluir contato:", error);
        res.status(500).json({ erro: "Erro ao excluir contato." });
    }
}

export default {
    listar,
    buscar,
    salvar,
    atualizar,
    excluir
}
