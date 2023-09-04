const express = require('express');
const router = express.Router();
const {getAllMen, getSingleMenProduct} = require('../controllers/productCtrlMen')

router.get('/', getAllMen)
router.get('/:id', getSingleMenProduct)


module.exports = router