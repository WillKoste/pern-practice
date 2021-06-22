const express = require('express');
const router = express.Router();
const pool = require('../config/pg')

router.get('/', async (req, res) => {
	try {
		res.send('hey dude')
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, err});
	}
});

module.exports = router;
