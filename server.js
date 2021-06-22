const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

app.use('/api/v1/products', require('./routes/products'));

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV || 'DEFAULT';

app.listen(port, () => {
	console.log(`Express server running on port ${port} in ${mode} mode`.cyan.underline.bold);
});
