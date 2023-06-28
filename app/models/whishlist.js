const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Whishlist extends Model { }

Whishlist.init({
    name: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
},
    {
        sequelize,
        tableName: "whishlist"
    });

module.exports = Whishlist;