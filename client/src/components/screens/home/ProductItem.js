import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './Rating';

const ProductItem = ({prod}) => {
	return (
		<div className='card bg-secondary product-item'>
			<img className='card-img-top p-1' src={prod.image} alt={prod.name} />
			<div className='card-body'>
				<h4 className='card-title'>{prod.name}</h4>
				<p className='card-text'>{prod.description}</p>
				<div className='card-bottom'>
					<Link className='btn btn-secondary' to={`/products/${prod.id}`}>
						View Product
					</Link>
					<Rating value={prod.rating} prodKey={prod.id} text={prod.num_reviews} />
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
