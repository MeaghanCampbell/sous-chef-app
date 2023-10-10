'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Ingredient = sequelize.define('Ingredient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Ingredient