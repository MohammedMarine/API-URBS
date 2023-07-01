const Cart = require('./cart')
const Order = require('./order')
const Product = require('./product')
const User = require('./user')
const Whishlist = require('./whishlist')

/** Associations */

//  Cart and Product
Cart.belongsToMany(Product, {
    as: 'products',
    through: 'cart_product',
    foreignKey: 'cart_id',
    otherKey: 'product_id',
});

Product.belongsToMany(Cart, {
    as: 'carts',
    through: 'cart_product',
    foreignKey: 'product_id',
    otherKey: 'cart_id',
});

//Product and Whishlist
Product.belongsToMany(Whishlist, {
    as: 'whishlists',
    through: 'product_whishlist',
    foreignKey: 'product_id',
    otherKey: 'whishlist_id',
});

Whishlist.belongsToMany(Product, {
    as: 'products',
    through: 'product_whishlist',
    foreignKey: 'whishlist_id',
    otherKey: 'product_id',
});

//User and Whishlist
User.hasMany(Whishlist, {
    foreignKey: 'user_id',
    as: 'whishlists',
});

Whishlist.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

//User and Order
Order.hasMany(User,{
    foreignKey: 'order_id',
    as: 'users',
});

User.belongsTo(Order, {
    foreignKey: 'order_id',
    as: 'order',
});

//Order and Cart
Order.belongsTo(Cart, {
    foreignKey: 'cart_id',
    as: 'validated_cart',
});

//User and Cart
User.hasMany(Cart, {
    foreignKey: 'user_id',
    as: 'carts',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

module.exports = { Cart, Order, Product, User, Whishlist };


