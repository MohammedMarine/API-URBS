const { Wishlist, Product } = require('../models');

const wishlistController = {
    async addProduct(req, res) {
        const productId = req.params.id; //getting the product's id in the URL
        const wishlist = req.session.wishlist;
        try {
            const product = await Product.findByPk(productId); //finding a match for this id in DB
            if (product) {
                req.session.wishlist.push(product); //Pushing the product in the session
                res.json(wishlist)
            } else {
                res.status(404).send(`The product you wish to buy does not exist yet`);
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    showWishlist: (req, res) => {
        const wishlist = req.session.wishlist;
        if (wishlist.length > 0) {
            res.json(wishlist)
        } else {
            res.send('Create a wishlist')
        }
    },

    async removeProduct(req, res) {
        const productId = req.params.id;
        try {
            const product = await Product.findByPk(productId);
            if (product) {
                const newWishlist = await req.session.wishlist.filter((product) => {
                    return product.id !== parseInt(productId, 10);
                });
                req.session.wishlist = newWishlist;
                if (newWishlist.length > 0) {
                    res.json(newWishlist);
                } else {
                    res.send('Create a wishlist')
                }
            } else {
                res.status(404).send('This product can not be removed from your wishlist as it does not exist yet');
            }
        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    }

};

module.exports = wishlistController;