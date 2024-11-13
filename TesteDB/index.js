const express = require('express');
const { Client } = require('pg');

const app = express();
app.use(express.json()); // Para interpretar JSON no corpo da requisição

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MeAdota',
  password: 'MABD',
  port: 5432,
});

client.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados PostgreSQL');
  }
});

client.on('error', (err) => 
  { 
    console.error('Erro na conexão:', err);
  });



app.post('/inserir', async (req, res) => {
  try {

    console.log('Dados recebidos:', req.body);
    const { nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep } = req.body;
    const result = await client.query('INSERT INTO usuarios (nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES ("Cléber Machado", "cleber@gmail.com", "4879", "1970-09-18", "Rua A2", "28", "Bairro Marechal", "Osasco", "RJ", "87450-001") RETURNING id', [nome, idade]);
    [nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep]
    console.log('Resultado da inserção:', result); // Verifique o resultado da inserção

    res.status(200).json({ id: result.rows[0].id });
  } catch (err) {
    console.error('Erro ao inserir dados:', err);
    res.status(500).json({ error: 'Erro ao inserir dados' });
  }
});

const server = app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000');

  // Encerra o servidor automaticamente após 30 segundos 
  setTimeout(() => { 
    server.close(() => { 
      console.log('Servidor encerrado automaticamente após 30 segundos'); 
      client.end(); // Encerra a conexão com o banco de dados 
      }); 
    }, 3000); 
  });










































/*const express = require('express');
const client = require('./db.js');
const app = express();
const port = 3000;

app.use(express.json());

// Rota para listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar dados', err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para adicionar um novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const nome = "Cléber Machado"; 
    const email = "cleber@gmail.com"; 
    const senha = "4879"; 
    const data_nascimento = "1970-09-18";
    const rua = "Rua A2"; 
    const numero = "28"; 
    const bairro = "Bairro Marechal"; 
    const cidade = "Osasco"; 
    const estado = "RJ";
    const cep = "87450-001";
    

    // Inserir dados no banco de dados
    const result = await client.query(
      'INSERT INTO usuarios (nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep]
        

    );
    console.log("Dados inseridos com sucesso!");
    // Retornar o usuário criado
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao inserir dados', err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});*/
