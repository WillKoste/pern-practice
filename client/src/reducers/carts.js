import {CART_ERROR, CART_REMOVE_ITEM, CART_ADD_ITEM, SAVE_SHIPPING_INFO, SAVE_PAYMENT_INFO, CLEAR_CART, USER_LOGOUT} from '../actions/types';

const inititalState = {
	cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {},
	paymentMethod: localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''
};

export default function (state = inititalState, action) {
	const {type, payload} = action;

	switch (type) {
		case CART_ADD_ITEM:
			const exists = state.cartItems.find((x) => x.product === payload.product);

			if (exists) {
				return {
					...state,
					cartItems: state.cartItems.map((y) => (y.product === payload.product ? payload : y))
				};
			} else {
				return {
					...state,
					cartItems: [...state, payload]
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((item) => item.product !== payload)
			};
		case SAVE_PAYMENT_INFO:
			return {
				...state,
				paymentMethod: paymentMethod
			};
		case SAVE_SHIPPING_INFO:
			return {
				...state,
				shippingAddress: payload
			};
		case CLEAR_CART:
			localStorage.removeItem('cartItems');
			return {
				...state,
				cartItems: []
			};
		case USER_LOGOUT:
			return {
				...state,
				cartItems: [],
				shippingAddress: {},
				paymentMethod: ''
			};
		default:
			return state;
	}
}
