import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/api/v1/users/me');
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
