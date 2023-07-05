const Cart = require('./cart')
const Order = require('./order')
const Product = require('./product')
const User = require('./user')
const Wishlist = require('./wishlist')

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

//Product and Wishlist
Product.belongsToMany(Wishlist, {
    as: 'wishlists',
    through: 'product_wishlist',
    foreignKey: 'product_id',
    otherKey: 'wishlist_id',
});

Wishlist.belongsToMany(Product, {
    as: 'products',
    through: 'product_wishlist',
    foreignKey: 'wishlist_id',
    otherKey: 'product_id',
});

//User and Wishlist
User.hasMany(Wishlist, {
    foreignKey: 'user_id',
    as: 'wishlists',
});

Wishlist.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
});

//User and Order
User.hasMany(Order,{     // TO MODIFY
    foreignKey: 'user_id',
    as: 'orders',
});

Order.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
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

module.exports = { Cart, Order, Product, User, Wishlist };


