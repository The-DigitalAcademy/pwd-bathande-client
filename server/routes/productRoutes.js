const express = require('express');
const router = express.Router();
const {getAllproducts, getSingleProduct} = require('../controllers/productCtrl')

router.get('/', getAllproducts)
router.get('/:id', getSingleProduct)


module.exports = router