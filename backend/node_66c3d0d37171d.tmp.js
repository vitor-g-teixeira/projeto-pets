import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
const { Client } = pkg;

// Configuração da conexão com o banco de dados
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MeAdota',
  password: 'MABD',
  port: 5432,
});

client.connect();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para inserção de dados
app.post('/inserirUsuario', async (req, res) => {
  const { nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep } = req.body;
  try {
    const result = await client.query("INSERT INTO usuarios(nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep]);
    res.status(201).send(`Usuário adicionado com sucesso: ${result}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao inserir dados');
  }
});

// Rota para selecionar dados 
app.get('/selecionarUsuarios', async (req, res) => { 
    try { 
        const result = await client.query('SELECT * FROM usuarios');
        res.status(200).json(result.rows); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar dados'); 
    } 
});

// Rota para atualizar dados 
app.put('/atualizarUsuario', async (req, res) => { 
    const { id_usuario, nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep } = req.body; 
    try { 
        const result = await client.query('UPDATE usuarios SET nome = $1, email = $2, senha = $3, data_nascimento = $4, rua = $5, numero = $6, bairro = $7, cidade = $8, estado = $9, cep = $10 WHERE id_usuario = $11', [nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep, id_usuario]); 
        res.status(200).send(`Usuário atualizado com sucesso: ${result}`);
     } catch (err) { 
        console.error(err); 
        res.status(500).send('Erro ao atualizar dados'); 
    } 
});



// Rota para deletar dados
app.delete('/deletarUsuario', async (req, res) => { 
    const { id_usuario } = req.body; 
    try { 
        const result = await client.query('DELETE FROM usuarios WHERE id_usuario = $1', [id_usuario]); 
        res.status(200).send(`Usuário deletado com sucesso: ${result}`); 
    } catch (err) { 
        console.error(err); 
        res.status(500).send('Erro ao deletar dados'); 
    } 
});




app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
