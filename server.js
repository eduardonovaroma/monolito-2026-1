import 'dotenv/config';
import express from 'express';
import web from './routes/web.js';

const app = express();

// Configuração EJS
app.use(express.static('public'));
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

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port: http://localhost:" + PORT);
});
