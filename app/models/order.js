const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Order extends Model { }

Order.init({
    paymentMethod: DataTypes.TEXT,
    cart_id: DataTypes.INTEGER
},
    {
        sequelize,
        tableName: "order"
    });

module.exports = Order;