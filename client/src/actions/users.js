import axios from 'axios';

export const login = (formData) => async (dispatch) => {
	try {
		console.log(formData);
	} catch (err) {
		console.error(err);
	}
};
