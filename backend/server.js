import express from 'express';
import bodyParser from 'body-parser';
import { executeQuery, CadastroUsuario } from './db.mjs';

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/cadastrar', async (req, res) => {
    const { nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep } = req.body;
    
    try {
        await CadastroUsuario(nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep);
        res.status(200).send("Usuário cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send("Erro ao cadastrar usuário: " + err.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

