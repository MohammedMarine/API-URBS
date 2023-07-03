const { Router } = require ('express');

const shopController = require('./controllers/shopController');
const cartController = require('./controllers/cartController');

const router = Router();

//THUNDER CLIENT: With WSL use [::1] instead of localhost to run tests on the routes.
/** Home */
router.get('/', (req, res) => {
    res.send('Urbs API');
});

/** Shop */
router.get('/shop', shopController.getAllProducts);
router.get('/shop/products/:id', shopController.getOneProduct);


/** Cart */
router.get('/cart/add/:id', cartController.addProduct);
router.get('/cart/remove/:id', cartController.removeProduct);
router.get('/cart', cartController.showCart);


/** 404 - MW placed at the end otherwise it would be executed first and no route would be accessible */
router.use((req, res) => {
    res.status(404).send('The ressource you are looking for does not exist.')
})
module.exports = router