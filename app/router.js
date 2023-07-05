const { Router } = require ('express');

const shopController = require('./controllers/shopController');
const cartController = require('./controllers/cartController');
const wishlistController = require('./controllers/wishlistController');
const authController = require('./controllers/authController.js');

const router = Router();

//THUNDER CLIENT: With WSL use [::1] instead of localhost to run tests on the routes.
/** Home */
router.get('/', (req, res) => {
    res.send('Urbs API');
});

/** L'Écrin */
router.get('/l-ecrin', (req, res) => {
    res.send("L'Écrin");
});

/** Campaign */
router.get('/campaign',(req, res) => {
    res.send('Campaigns');
});
router.get('/campaign-2022', (req, res) => {
    res.send('2022 Campaign');
});
router.get('/campaign-2023', (req, res) => {
    res.send('2023 Campaign');
});

/** Contact */
router.get('/contact', (req, res) => {
    res.send('contact');
});
router.post('/contact', ) // WIP


/** Shop */
router.get('/shop', shopController.getAllProducts);
router.get('/shop/products/:id', shopController.getOneProduct);


/** Cart */
router.get('/cart/add/:id', cartController.addProduct);
router.get('/cart/remove/:id', cartController.removeProduct);
router.get('/cart', cartController.showCart);

/** Wishlist */
router.get('/wishlist/add/:id', wishlistController.addProduct);
router.get('/wishlist/remove/:id', wishlistController.removeProduct);
router.get('/wishlist', wishlistController.showWishlist);

/** Authentification */
router.get('/login', authController.register);

/** 404 - MW placed at the end otherwise it would be executed first and no route would be accessible */
router.use((req, res) => {
    res.status(404).send('The ressource you are looking for does not exist.')
})
module.exports = router