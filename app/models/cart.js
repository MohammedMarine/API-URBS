const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('../db');

class Cart extends Model{}

Cart.init ({
    user_id: DataTypes.INTEGER,
},
{
    sequelize,
    tableName: "cart"
});

module.exports = Cart;
