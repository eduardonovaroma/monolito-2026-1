import express from 'express';
const router = express.Router();
import ContatosController from '../controllers/ContatosController.js';


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/contatos", ContatosController.listarContatos);
router.get("/contatos/new", ContatosController.novoContato);
// router.post("/contatos/save", ContatosController.salvarContato);
router.get("/contatos/:id/edit", ContatosController.editarContato);
router.post("/contatos/:id/delete", ContatosController.excluirContato);

router.get("/usuarios", (req, res) => {
    res.render("usuarios");
});


export default router;