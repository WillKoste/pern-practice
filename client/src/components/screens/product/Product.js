import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getProduct} from '../../../actions/products';
import Rating from '../home/Rating';

const Product = ({match, getProduct, productRed: {product, loading}}) => {
	useEffect(() => {
		getProduct(match.params.productId);
	}, [getProduct, match.params.productId]);

	return (
		<div className='bg-dark p-3 rounded'>
			<Link to='/' className='btn btn-success my-2'>
				Go Back
			</Link>
			{loading || product === null ? (
				<h5>Loading...</h5>
			) : (
				<div className='product-info'>
					<img src={`${window.location.origin}/${product.image}`} alt={product.name} className='img-fluid rounded' />
					<div className='px-3 info-body'>
						<h2>{product.name}</h2>
						<Rating prodKey={product.id} value={product.rating} text={product.numreviews} />
						<p className='lead text-light'>{product.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	productRed: state.productRed
});

export default connect(mapStateToProps, {getProduct})(Product);
