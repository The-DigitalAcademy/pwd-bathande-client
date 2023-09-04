const PRODUCTS_MOCK = require('../Data/productData')

const getAllproducts = (req, res) => {
    res.json({ data: PRODUCTS_MOCK })
}

const getSingleProduct = (req, res) => {
    
    const id = req.params.id

    const product = PRODUCTS_MOCK.find(product => product.id == id)

    return res.json({ data: product })
}

module.exports = { getAllproducts, getSingleProduct }

