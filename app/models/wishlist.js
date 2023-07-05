const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Wishlist extends Model { }

Wishlist.init({
    name: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
},
    {
        sequelize,
        tableName: "wishlist"
    });

module.exports = Wishlist;