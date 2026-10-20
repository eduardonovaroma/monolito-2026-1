import express from 'express';
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/contato", (req, res) => {
    res.render("contato");
});

router.get("/usuarios", (req, res) => {
    res.render("usuarios");
});


export default router;