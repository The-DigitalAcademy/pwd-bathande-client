const express = require('express');
const router = express.Router();
const {getAllWomen} = require('../controllers/productCtrlWomen')

router.get('/', getAllWomen)


module.exports = router