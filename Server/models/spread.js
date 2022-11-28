const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Spread = sequelize.define('Spread', {
    SpreadId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    SpreadNumber: {
        type: DataTypes.INTEGER,
    },
    BookId: {
        type: DataTypes.INTEGER
    },
    ImageURL: {
        type: DataTypes.STRING,
    },
    Text: {
        type: DataTypes.STRING,
    },
    Caption: {
        type: DataTypes.STRING,
    }
})


module.exports = Spread