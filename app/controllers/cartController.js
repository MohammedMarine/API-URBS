const { Cart, Product } = require('../models');

const cartController = {
    async addProduct(req, res) {
        const productId = req.params.id; //getting the product's id in the URL
        const cart = req.session.cart;
        try {
            const product = await Product.findByPk(productId); //finding a match for this id in DB
            if (product) {
                req.session.cart.push(product); //Pushing the product in the session
                res.json(cart)
            } else {
                res.status(404).json('The product you are trying to buy does not exist yet');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    showCart: (req, res) => {
        const cart = req.session.cart;
        if (cart.length > 0) {
            res.json(cart)
        } else {
            res.json('Your cart is empty')
        }
    },

    async removeProduct(req, res) {
        const productId = req.params.id;
        try {
            const product = await Product.findByPk(productId);
            if (product) {
            const newCart = await req.session.cart.filter((product) => {
                return product.id !== parseInt(productId, 10);
            });
            req.session.cart = newCart;
            if(newCart.length > 0){
            res.json(newCart)
            } else {
                res.json('Your cart is empty')
            }
            } else {
                res.status(404).json('This product can not be removed from your cart as it does not exist yet');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }

    }


};



module.exports = cartController;

