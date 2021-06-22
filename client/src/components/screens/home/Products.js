import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProducts} from '../../../actions/products';
import ProductItem from './ProductItem';

const Products = ({getProducts, productRed: {products, loading}}) => {
	useEffect(() => {
		getProducts();
	}, []);

	return loading ? <h5>Loading...</h5> : <div className='products-grid'>{products.length > 0 ? products.map((prod) => <ProductItem prod={prod} key={prod.id} />) : <h3>No Products found</h3>}</div>;
};

Products.propTypes = {
	products: PropTypes.array,
	getProducts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	productRed: state.productRed
});

export default connect(mapStateToProps, {getProducts})(Products);
