const PRODUCTSMEN = require('../Data/productsMen')

const getAllMen = (req, res) => {

    res.json({ data: PRODUCTSMEN })
}

const getSingleMenProduct = (req, res) => {
    const id = req.params.id

    const product = PRODUCTSMEN.find(product => product.id == id)

    return res.json({ data: product })
}
module.exports = { getAllMen, getSingleMenProduct }