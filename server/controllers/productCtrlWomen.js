const PRODUCTSWOMEN = require('../Data/productsWomen')

const getAllWomen = (req, res) => {

    res.json({ data: PRODUCTSWOMEN })
}

const getSingleWomenProduct = (req, res) => {
    
    const id = req.params.id

    const product = PRODUCTSWOMEN.find(product => product.id == id)

    return res.json({ data: product })
}

module.exports = { getAllWomen, getSingleWomenProduct }