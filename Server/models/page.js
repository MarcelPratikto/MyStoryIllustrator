const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Page = sequelize.define('Page', {
    PageId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    PageNumber: {
        type: DataTypes.INTEGER,
    },
    BookId: {
        type: DataTypes.INTEGER
    },
    ImageURL: {
        type: DataTypes.STRING
    },
    Text: {
        type: DataTypes.STRING,
    },
    Caption: {
        type: DataTypes.STRING,
    }
})


module.exports = Page