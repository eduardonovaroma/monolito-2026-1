import express from 'express';
import webRoutes from './routes/web.js';

const app = express();

// Configuração EJS
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", ["./views"]);

app.use("/", webRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
