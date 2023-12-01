//importar la conexion de la base de datos
import db from '../database/db.js';
//importar sequelize
import { DataTypes } from 'sequelize';

const ProductoModel = db.define('productos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: { type: DataTypes.STRING },
  precio: { type: DataTypes.DECIMAL },
  imagen: {
    type: DataTypes.BLOB,
  },
});

export default ProductoModel;
