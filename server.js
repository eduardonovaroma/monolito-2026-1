import express from 'express';

const app = express();

// Configuração EJS
app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
