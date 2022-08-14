import React from 'react'
import Product from '../Product'
import Loader from '../Loader'

const ProductsList = ({ filteredProducts, setCurrentSale, products, currentSale, loading }) => {
  return (
    <div className='container-products'>
      <Product products={products} currentSale={currentSale} setCurrentSale={setCurrentSale} filteredProducts={filteredProducts}/>      
    </div>
  )
}

export default ProductsList