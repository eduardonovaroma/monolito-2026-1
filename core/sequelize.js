import { Sequelize } from 'sequelize';
import config from '../config/database.js';

const db = config[process.env.DB_CONNECTION];
let sequelize = null;

if (process.env.DB_CONNECTION == 'sqlite') {
  sequelize = new Sequelize({
    storage: db.storage,
    dialect: db.dialect,
    logging: false,
  });
} else {
  sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
    logging: false,
  });
}

async function createDatabase(sequelize) {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // Isso irá criar as tabelas e alterar caso necessário
    console.log('Banco de dados criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o banco de dados:', error);
  } finally {
    // sequelize.close(); // Encerra a conexão com o banco de dados
  }
}

export { sequelize, createDatabase };