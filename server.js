import 'dotenv/config';
import express from 'express';
import web from './routes/web.js';
import api from './routes/api.js';

const app = express();

// Configuração EJS
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // lê os dados enviados pelos formulários (req.body)
app.use(express.json()); // lê os dados enviados em JSON (req.body) pela API
app.set("view engine", "ejs");
app.set("views", ["./views"]);

// Este middleware precisa executar antes das rotas que renderizam os templates.
app.use(function(req, res, next) {
  res.locals.isActive = function(path) {
    return req.path === path ? "active" : "";
  }
  next();
});

app.use(web);
app.use('/api', api);

import { sequelize, createDatabase } from './core/sequelize.js';
createDatabase(sequelize);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port: http://localhost:" + PORT);
});
