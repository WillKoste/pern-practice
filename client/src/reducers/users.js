const inititalState = {
	users: [],
	user: null,
	loading: true,
	error: null
};

export default function (state = inititalState, action) {
	const {type, payload} = action;

	switch (type) {
		default:
			return state;
	}
}
