const { Cart, Product } = require('../models');
//const Product = require('../models/product')

const cartController = {
    async addProduct(req, res) {
        const productId = req.params.id; //getting the product's id in the URL
        const cart = req.session.cart
        try {
            const product = await Product.findByPk(productId); //finding a match for this id in DB
            if (product) {
                req.session.cart.push(product); //Pushing the product in the user session
                res.json(cart)
            } else {
                res.status(404).send(`The product you are trying to buy does not exist yet`);
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
            res.send('Your cart is empty')
        }
    },

    async removeProduct(req, res) {
        const productId = req.params.id;
        try {
            const newCart = await req.session.cart.filter((product) => {
                return product.id !== parseInt(productId, 10);
            });
            req.session.cart = newCart;
            if(newCart.length > 0){
            res.json(newCart)
            } else {
                res.send('Your cart is empty')
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }

    }


};



module.exports = cartController;

