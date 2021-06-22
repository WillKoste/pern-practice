const express = require('express');
const router = express.Router();
const pool = require('../config/pg')

router.get('/', async (req, res) => {
	try {
		const products = await pool.query('SELECT * FROM products')

		if(products.rowCount === 0){
			return res.json({success: true, data: 'No products have been created, add one to get started!'})
		}

		if(!products){
			return res.status(404).json({success: false, data: 'Products could not be found'})
		}

		res.json({success: true, count: products.rowCount, products: products.rows})
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, err});
	}
});

module.exports = router;
