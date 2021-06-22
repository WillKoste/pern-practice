const {Pool} = require('pg');

const pool = new Pool({
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	password: process.env.PGPASSWOR
});

module.exports = pool;
