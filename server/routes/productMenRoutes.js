const express = require('express');
const router = express.Router();
const {getAllMen} = require('../controllers/productCtrlMen')

router.get('/', getAllMen)


module.exports = router