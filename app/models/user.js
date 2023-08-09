const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { }

User.init({
  firstname: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: true,
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
  city: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  country: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phonenumber: {
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
