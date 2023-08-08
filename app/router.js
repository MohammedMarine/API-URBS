const { Router } = require('express');

const shopController = require('./controllers/shopController');
const cartController = require('./controllers/cartController');
const wishlistController = require('./controllers/wishlistController');
const regController = require('./controllers/regController.js');
const authController = require('./controllers/authController.js');
const { fieldValidator } = require('../middlewares/fieldValidator');

const { authenticateToken } = require('../middlewares/authenticateToken');

const router = Router();
const path = require('path');
//With WSL use [::1] instead of localhost to run tests on the routes.
/** Home */
router.get('/', (req, res) => {
  res.sendFile (path.join(__dirname, '../index.html'));
});

// /** L'Écrin */
// router.get('/l-ecrin', (req, res) => {
//   res.json({ message: "L'Écrin" });
// });

// /** Campaign */
// router.get('/campaign', (req, res) => {
//   res.json('Campaigns');
// });
// router.get('/campaign-2022', (req, res) => {
//   res.json('2022 Campaign');
// });
// router.get('/campaign-2023', (req, res) => {
//   res.json('2023 Campaign');
// });

/** Contact */
router.get('/contact', (req, res) => {
  res.json('contact');
});
router.post('/contact',); // WIP


/** Shop */
router.get('/products', shopController.getAllProducts);
router.get('/products/:id', shopController.getOneProduct);


/** Cart */
router.get('/cart/add/:id', cartController.addProduct);
router.get('/cart/remove/:id', cartController.removeProduct);
router.get('/cart', cartController.showCart);
router.get('/cart/validate', authenticateToken, cartController.validateCart);

/** Wishlist */
router.get('/wishlist/add/:id', wishlistController.addProduct);
router.get('/wishlist/remove/:id', wishlistController.removeProduct);
router.get('/wishlist', wishlistController.showWishlist);

/** Registration */
// router.get('/login/register', regController.register);
router.post('/login/register', fieldValidator, regController.createUser);

/** Authentification */
// router.get('/login/signin', authController.login);
router.post('/login/signin', authController.signin);

/**Account */
router.get('/account', authenticateToken, authController.showAccount);

//**Sign out */
// router.get('/logout', authController.destroy);

/** 404 - MW placed at the end otherwise it would be executed first and no route would be accessible */
router.use((req, res) => {
  res.status(404).json('The ressource you are looking for does not exist.');
});

module.exports = router;
