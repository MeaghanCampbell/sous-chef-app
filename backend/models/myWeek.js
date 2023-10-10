const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const MyWeek = sequelize.define('MyWeek', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    } 
}, 
{
    sequelize,
    timestamps: false,
    modelName: 'myWeek'
});

module.exports = MyWeek;
