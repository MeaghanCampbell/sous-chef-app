require('dotenv').config();
const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    host: 'localhost',
    dialect: 'mysql'
  });
}

module.exports = sequelize;