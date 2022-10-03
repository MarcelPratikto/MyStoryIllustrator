const { DataTypes } = require('sequelize');
const User = require('./user')
const sequelize = require('../util/database');

const Book = sequelize.define('Book', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING
    },
    Author: {
        type: DataTypes.STRING
    }
})

Book.belongsTo(User);

module.exports = Book;