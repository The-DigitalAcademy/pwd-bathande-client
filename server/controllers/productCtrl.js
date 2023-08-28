const PRODUCTS_MOCK = require('../productData')



const getAllproducts = (req, res) => {

    res.json({data: PRODUCTS_MOCK})
  
}

module.exports = {getAllproducts}

