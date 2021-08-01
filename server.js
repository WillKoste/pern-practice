const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const {connectDb} = require('./config/pg');

const app = express();
connectDb();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use('/api/v1/products', require('./routes/products'));
app.use('/api/v1/users', require('./routes/users'));

if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV || 'DEFAULT';

app.listen(port, () => {
	console.log(`Express server running on port ${port} in ${mode} mode`.cyan.underline.bold);
});
