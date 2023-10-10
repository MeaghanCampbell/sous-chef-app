'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const IngredientQuantity = sequelize.define('IngredientQuantity', {
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = IngredientQuantity