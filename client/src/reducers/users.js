import {LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, USER_LOGOUT} from '../actions/types';

const inititalState = {
	users: [],
	user: null,
	isAuthenticated: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action) {
	const {type, payload} = action;

	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				loading: false,
				user: payload,
				isAuthenticated: true
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case USER_LOGOUT:
			return {
				...state,
				loading: false,
				users: [],
				user: null,
				isAuthenticated: null,
				error: payload
			};
		default:
			return state;
	}
}
