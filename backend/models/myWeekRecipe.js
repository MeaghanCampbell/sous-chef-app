// backend/models/myWeekRecipe.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const MyWeekRecipe = sequelize.define('MyWeekRecipe', {
    myWeekId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'myWeeks',
            key: 'id'
        }
    },
    recipeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'recipes',
            key: 'id'
        }
    }
}, 
{
    sequelize,
    timestamps: false,
    modelName: 'myWeekRecipe'
});

module.exports = MyWeekRecipe;