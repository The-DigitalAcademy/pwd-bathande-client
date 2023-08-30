import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
        <img src={product?.thumbnail} />
        {product.title}
        <br />
        {product.category}
    </div>
  )
}

export default Product