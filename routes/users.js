/** @namespace UsersRoutes */
const express = require('express');
const router = express.Router();
const {pool} = require('../config/pg');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
	@name Get Logged In User
	@memberof UsersRoutes
	@description Fetches the logged in users account information- just as long as the JWT is valid.
	@async
	@route {GET} /api/v1/users/me
*/
router.get('/me', async (req, res) => {
	try {
		res.send('Users route');
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
	@name Login
	@memberof UsersRoutes
	@description Logs in the user, confirming that the plain-text password orivuded in the client, matches the encrypted password that is stored in the database.
	@async
	@route {POST} /api/v1/users/login
	@bodyparam {Object} formData An object that includes the users email and password
*/
router.post('/login', [check('email', 'Email address is required').isEmail(), check('password', 'Password is required').isLength({min: 6})], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({success: false, errors: errors.array()});
	}

	const {email, password} = req.body;

	try {
		let user = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

		if (user.rowCount === 0) {
			return res.status(400).json({success: false, data: 'Invalid Credentials'});
		}

		const isMatch = await bcrypt.compare(password, user.rows[0].password);

		if (!isMatch) {
			return res.status(400).json({success: false, data: 'Invalid Credentials'});
		}

		let theUser = await pool.query('SELECT id FROM users where email = $1', [email]);

		const payload = {
			theUser: {
				id: theUser.rows[0].id
			}
		};

		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}, (e, token) => {
			if (e) {
				console.error(e);
			} else {
				res.status(201).json({token});
			}
		});
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

/**
	@name Register
	@memberof UsersRoutes
	@description Registers a new user, whos information will be saved in the database, along with their encrypted password.
	@async
	@route {POST} /api/v1/users/register
	@bodyparam {Object} formData An object that includes the users name, email, and password
*/
router.post('/register', [check('name', 'Name is required').not().isEmpty(), check('email', 'Email is required').isEmail(), check('password', 'A password of at least 6 characters in length is required').isLength({min: 6}), check('isAdmin', 'Must specify admin status')], async (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({success: false, errors: errors.array()});
	}

	const {name, email, password, isAdmin} = req.body;

	try {
		let userExists = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

		if (userExists.length === 1) {
			return res.status(400).json({success: false, data: `The email address: ${email} is already in use- please try again.`});
		}

		await pool.query(`INSERT INTO users (name, email, password, is_admin) VALUES ($1, $2, $3, $4)`, [name, email, password, isAdmin]);

		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);

		await pool.query(`UPDATE users SET password = $1 WHERE email = $2`, [hashedPassword, email]);

		let theUser = await pool.query(`SELECT id FROM users WHERE email = $1`, [email]);

		const payload = {
			theUser: {
				id: theUser.rows[0].id
			}
		};

		jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}, async (e, token) => {
			if (e) {
				await pool.query(`DELETE FROM users WHERE email = $1`, [email]);
				console.error(e);
				res.status(400).json({success: false, data: 'Something went wrong, please contact a system administrator.'});
			} else {
				res.status(201).json({token});
			}
		});
	} catch (err) {
		if (err.constraint === 'users_email_key') {
			return res.status(400).json({success: false, data: `The email address: ${email} is already in use- please try again.`});
		}

		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

module.exports = router;
