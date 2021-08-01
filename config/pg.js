const {Pool, Connection} = require('pg');
const colors = require('colors');

const connectDb = () => {
	try {
		new Connection({
			user: process.env.PGUSER,
			database: process.env.PGDATABASE,
			host: process.env.PGHOST,
			port: process.env.PGPORT,
			password: process.env.PGPASSWORD
		});

		console.log(`PostgreSQL server running on port ${process.env.PGPORT}`.magenta.bold);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

const pool = new Pool({
	database: process.env.PGDATABASE,
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	port: process.env.PGPORT,
	password: process.env.PGPASSWORD
});

module.exports = {pool, connectDb};
