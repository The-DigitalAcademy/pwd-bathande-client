const express = require('express');
const router = express.Router();
const {getAllproducts} = require('../controllers/productCtrl')

router.get('/', getAllproducts)


module.exports = router