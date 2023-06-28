const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { }

User.init({
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    streetnumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    zipcode: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},
    {
        sequelize,
        tableName: "user"
    });

module.exports = User;