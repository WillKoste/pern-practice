const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.send('Products route');
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, err});
	}
});

module.exports = router;
