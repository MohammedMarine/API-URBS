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
    foreignKey: 'dproduct_id',
    otherKey: 'cart_i',
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

