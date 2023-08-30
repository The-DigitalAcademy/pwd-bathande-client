const PRODUCTSMEN = require('../Data/productsWomen')

const getAllWomen = (req, res) => {

    res.json({ data: PRODUCTSMEN })
}

module.exports = { getAllWomen }