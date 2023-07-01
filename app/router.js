const { Router } = require ('express');

const productController = require ('./controllers/productController');

const router = Router();

/** Home */
router.get('/', (req, res) => {
    res.send('Urbs API');
})

/** Products */

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getOneProduct);

/** 404 */
router.use((req, res) => {
    res.status(404).send('The ressource you are looking for does not exist.')
})
module.exports = router