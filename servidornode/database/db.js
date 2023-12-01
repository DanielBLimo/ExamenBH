import { Sequelize } from 'sequelize';

//Conexion a la bd Mysql

const db = new Sequelize('examenbh', 'root', 'Artemisa2119', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
