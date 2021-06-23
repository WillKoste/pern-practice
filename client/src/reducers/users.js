import {LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS} from '../actions/types';

const inititalState = {
	users: [],
	user: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action) {
	const {type, payload} = action;

	switch (type) {
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				user: payload
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				users: [],
				user: null,
				error: payload
			};
		default:
			return state;
	}
}
