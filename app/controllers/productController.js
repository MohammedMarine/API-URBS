const { Whishlist } = require('../models');
const Product = require ('../models/product');

const productController = {
    async getAllProducts(req, res) {
        try {
            //lets call the product model
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    async getOneProduct (req, res) {
        try {
            //lets get the product's id from the url
            const productId = req.params.id;
            const product = await Product.findByPk(productId);
            if (product){
                res.json(product);
            } else {
                res.status(404).json('The product ' + productId + ' does not exist')
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}

module.exports = productController;