const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Product extends Model { }

Product.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
    size: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
},
    {
        sequelize,
        tableName: "product"
    });

module.exports = Product;