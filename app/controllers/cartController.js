const {Cart, Product} = require('../models');
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
        res.json(req.session.cart)
    }


};



module.exports = cartController;

