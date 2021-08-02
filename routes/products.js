const express = require('express');
const router = express.Router();
const {pool} = require('../config/pg');
const {check, validationResult} = require('express-validator');

router.get('/', async (req, res) => {
	try {
		const products = await pool.query('SELECT * FROM products');

		if (products.rowCount === 0) {
			return res.json({success: true, data: 'No products have been created, add one to get started!'});
		}

		if (!products) {
			return res.status(404).json({success: false, data: 'Products could not be found'});
		}

		res.json({success: true, count: products.rowCount, products: products.rows});
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, err});
	}
});

router.get('/:productId', async (req, res) => {
	try {
		const product = await pool.query(`SELECT * FROM products WHERE id = $1`, [req.params.productId]);

		if (product.rowCount === 0) {
			return res.status(404).json({success: false, data: `Product ${req.params.productId} could not be found, please try again`});
		}

		res.json({success: true, product: product.rows[0]});
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

router.post('/', [check('name', 'Product name is required').not().isEmpty(), check('price', 'Product price is required').not().isEmpty(), check('count_in_stock', 'Must include the total amount of inventory of the new product')], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({success: false, errors: errors.array()});
	}

	try {
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

module.exports = router;
