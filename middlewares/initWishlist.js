function initWishlist(req, res, next) {
    if (!req.session.wishlist) { //checking if wishlist exists in the session
        req.session.wishlist = [] // if it does not, we create and define it as a []
    }
    next();
};

module.exports = { initWishlist };