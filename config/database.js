import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storage_path = path.join(__dirname, '../database');

// Configuração do banco de dados
export default {
  sqlite: {
    dialect: 'sqlite',
    storage: path.join(storage_path, "database.sqlite")
  }, 

  mysql: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }, 

  pgsql: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'pgsql'
  }
}