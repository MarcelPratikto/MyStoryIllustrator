const { DataTypes } = require('sequelize');
const Book = require('./book')
const sequelize = require('../util/database');

const User = sequelize.define('User', {
    // TODO: put model definition here
})

User.hasMany(User);

module.exports = User;