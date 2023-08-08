const { Product } = require('../models');

const cartController = {
  async addProduct(req, res) {
    const productId = req.params.id; //getting the product's id in the URL
    const cart = req.session.cart;
    try {
      const product = await Product.findByPk(productId); //finding a match for this id in DB
      if (product) {
        req.session.cart.push(product); //Pushing the product in the session
        res.json(cart);
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
      res.json(cart);
    } else {
      res.json('Your cart is empty');
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
          res.json(newCart);
        } else {
          res.json('Your cart is empty');
        }
      } else {
        res.status(404).json('This product can not be removed from your cart as it does not exist yet');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  validateCart(req, res){
    const user = req.user;
    const cart = req.session.cart;
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
    if(!user) {
      res.json('Welcome back, please sign in to continue');
    }
    if (user && !cart.length > 0) {
      res.json('Your bag is empty. Please add products to your bag to continue to checkout.');
    }
    if (user && cart.length > 0 && randomNumber % 2 === 0){
      res.json('Thank you for your purchase.');
    }else {
      res.json('Unfortunately, we could not proceed with the payment, please make sure all the information provided are corrects ');
    }



  }


};



module.exports = cartController;

