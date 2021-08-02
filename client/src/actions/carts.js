import axios from 'axios';
import {CART_ADD_ITEM, CART_ERROR, CART_REMOVE_ITEM, CLEAR_CART, SAVE_PAYMENT_INFO, SAVE_SHIPPING_INFO} from './types';

export const addItem = () => async (dispatch) => {
	try {
		console.log('Cart');
	} catch (err) {
		console.error(err);
		dispatch({
			type: CART_ERROR,
			payload: err.response
		});
	}
};
