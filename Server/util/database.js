const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB,
    process.env.DB_USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    });

module.exports = sequelize;

