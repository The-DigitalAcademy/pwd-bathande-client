const PRODUCTSWOMEN = require('../Data/productsWomen')

const getAllWomen = (req, res) => {

    res.json({ data: PRODUCTSWOMEN })
}

module.exports = { getAllWomen }