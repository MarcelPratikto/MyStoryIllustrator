const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB,
    "illustratoradmin@illustratordataserver",
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
        dialectOptions: {
            options: {
                encrypt: true,
            }
        }
    });

module.exports = sequelize;

