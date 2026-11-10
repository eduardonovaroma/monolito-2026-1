import { DataTypes } from "sequelize";
import { sequelize } from "../core/sequelize.js";

const Contato = sequelize.define("contato", {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(200),
  },
  telefone: {
    type: DataTypes.STRING(20),
  },
});

export default Contato;
