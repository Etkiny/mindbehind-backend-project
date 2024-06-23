const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbHost = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: dbHost,
    dialect: 'mysql',
    logging: console.log
  }
);

module.exports = sequelize;
