import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, USER_LOGOUT} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/api/v1/users/me');

		dispatch({
			type: USER_LOADED,
			payload: res.data.user
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: AUTH_ERROR,
			payload: err
		});
	}
};

export const login = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const body = JSON.stringify(formData);

		const res = await axios.post(`/api/v1/users/login`, body, config);

		console.log(res.data);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (err) {
		console.error(err);
		dispatch({
			type: LOGIN_FAIL,
			payload: err
		});
	}
};

export const registerUser = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const body = JSON.stringify(formData);

		const res = await axios.post(`/api/v1/users/register`, body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});

		dispatch(loadUser());
	} catch (err) {
		console.error(err);
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response
		});
	}
};

export const logoutUser = () => async (dispatch) => {
	localStorage.removeItem('token');
	dispatch({
		type: USER_LOGOUT
	});
};
