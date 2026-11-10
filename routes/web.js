import express from 'express';
const router = express.Router();
import ContatosController from '../controllers/ContatosController.js';


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/contatos", ContatosController.listar);
router.get("/contatos/novo", ContatosController.novo);
router.post("/contatos/salvar", ContatosController.salvar);
router.get("/contatos/:id/edit", ContatosController.editar);
router.post("/contatos/atualizar", ContatosController.atualizar);
router.post("/contatos/:id/excluir", ContatosController.excluir);

router.get("/usuarios", (req, res) => {
    res.render("usuarios");
});


export default router;