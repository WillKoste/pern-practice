import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProduct} from '../../../actions/products';

const Product = ({match, getProduct, productRed: {product}}) => {
	useEffect(() => {
		getProduct(match.params.productId);
	}, []);

	return (
		<div>
			<Link to='/' className='btn btn-success'>
				Go Back
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	productRed: state.productRed
});

export default connect(mapStateToProps, {getProduct})(Product);
