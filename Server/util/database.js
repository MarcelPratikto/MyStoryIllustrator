const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: 'db/myStoryIllustrator.sqlite',
    });

module.exports = sequelize;

