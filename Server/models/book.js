const { DataTypes } = require('sequelize');
const User = require('./user')
const sequelize = require('../util/database');
const Spread = require('./spread');

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
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Book.hasMany(Spread);
Spread.belongsTo(Book, {
    foreignKey: 'BookId'
});

module.exports = Book;