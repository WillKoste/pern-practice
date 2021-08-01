const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({success: false, data: 'No token, authorization denied'});
	}

	try {
		const decoded = jwt.decode(token, process.env.JWT_SECRET);

		req.user = decoded.theUser;
		next();
	} catch (err) {
		res.status(401).json({success: false, data: 'No token, authorization denied'});
	}
};

module.exports = auth;
