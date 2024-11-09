const express = require('express');
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
});
