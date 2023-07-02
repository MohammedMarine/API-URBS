function initCart(req, res, next) {
    if (!req.session.cart) {  //checking if cart exists in the session
        req.session.cart = [] //if it does not, we create it and define it as a []
    }
    next();
};

module.exports = { initCart };

