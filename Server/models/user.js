const { DataTypes } = require('sequelize');
const Book = require('./book')
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    HashedPassword: {
        type: DataTypes.STRING
    },


})

// User.hasMany(Book);

module.exports = User;