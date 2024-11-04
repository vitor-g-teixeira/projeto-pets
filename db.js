const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MeAdota',
  password: 'MABD',
  port: 5432,
});
module.exports = pool;

