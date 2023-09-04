const express = require('express');
const router = express.Router();
const {getAllWomen, getSingleWomenProduct} = require('../controllers/productCtrlWomen')

router.get('/', getAllWomen)
router.get('/:id', getSingleWomenProduct)

module.exports = router