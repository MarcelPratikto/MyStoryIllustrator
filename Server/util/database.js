const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB,
    process.env.DB_USER,
    process.env.PASSWORD,
    {
        dialect: 'sqlite',
        storage: 'db/myStoryIllustrator.sqlite',
    });

module.exports = sequelize;

