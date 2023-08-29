const PRODUCTSMEN = require('../Data/productsMen')

const getAllMen = (req, res) => {

    res.json({ data: PRODUCTSMEN })
}

module.exports = { getAllMen }