import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getProducts} from '../../../actions/products'
import ProductItem from './ProductItem'

const Products = ({getProducts, productRed: {products, loading}}) => {  
  useEffect(() => {
    getProducts()
    console.log({products});
  }, [])
  
  return (
    <div className="products-grid">
      {products.length > 0 && !loading && products.map(prod => (
        <ProductItem prod={prod} key={prod.id} />
      ))}
    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  productRed: state.productRed
})

export default connect(mapStateToProps, {getProducts})(Products)
