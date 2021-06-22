import {GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT, DELETE_PRODUCT, CREATE_PRODUCT, PRODUCTS_LOADING} from '../actions/types';

const inititalState = {
	products: [],
	product: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action) {
	const {type, payload} = action;

	switch (type) {
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				products: payload,
				loading: false
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				product: payload
			};
		case GET_PRODUCTS_FAIL:
		case GET_PRODUCT_FAIL:
			return {
				...state,
				products: [],
				product: null,
				loading: false,
				error: payload
			};
		default:
			return state;
	}
}
