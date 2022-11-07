const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Page = sequelize.define('Page', {
    PageNumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    PageId: {
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