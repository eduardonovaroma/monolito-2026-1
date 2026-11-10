import express from 'express';
import ContatosController from '../controllers/api/ContatosController.js';

const router = express.Router();

router.get("/contatos", ContatosController.listar);
router.get("/contatos/:id", ContatosController.buscar);
router.post("/contatos", ContatosController.salvar);
router.put("/contatos/:id", ContatosController.atualizar);
router.delete("/contatos/:id", ContatosController.excluir);

export default router;
