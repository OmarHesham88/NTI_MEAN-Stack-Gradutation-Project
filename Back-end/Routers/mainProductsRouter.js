const express = require('express');
const mainProductsController = require('../Controllers/MainProductsController');
const router = express.Router();

router.post('/', mainProductsController.addMainProduct);
router.get('/', mainProductsController.getMainProduct);
router.put('/:id', mainProductsController.updateMainProduct); 
router.delete('/:id', mainProductsController.deleteMainProduct);

module.exports = router;
