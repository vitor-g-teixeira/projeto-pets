const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MeAdota',
  password: 'MABD',
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err.stack);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

module.exports = client;
