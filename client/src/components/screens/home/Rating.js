import React from 'react';
import {Link} from 'react-router-dom';

const Rating = ({value, text, prodKey}) => {
	return (
		<div className='rating'>
			<div className='stars mt-2'>
				<span>
					<i className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half' : ''}></i>
				</span>
				<span>
					<i className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half' : ''}></i>
				</span>
				<span>
					<i className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half' : ''}></i>
				</span>
				<span>
					<i className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half' : ''}></i>
				</span>
				<span>
					<i className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half' : ''}></i>
				</span>
			</div>
			<Link to={`/reviews/${prodKey}`}>{text && text} Reviews</Link>
		</div>
	);
};

export default Rating;
