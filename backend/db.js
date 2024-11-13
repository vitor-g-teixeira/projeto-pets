import pg from 'pg';
const { Client } = pg;

export async function executeQuery(query, params) {
    const client = new Client({
        user: 'postgres',
        password: 'MABD',
        host: 'localhost',
        port: 5432,
        database: 'MeAdota',
    });

    await client.connect();
    try {
        await client.query(query, params);
    } catch (err) {
        console.error("Erro ao executar a query:", err);
        throw err;
    } finally {
        await client.end();
    }
}

export async function CadastroUsuario(nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) {
    const query = "INSERT INTO produtos(nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES($1, $2, $3, $4, 5, $6, $7, $8, $9, $10)";
    const params = [nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep];
    try {
        await executeQuery(query, params);
        console.log("Usuário cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar usuário:", err);
    }
}

CadastroUsuario("Otávio", "Otavio@gmail.com", 1234, "1990-09-09", "Rua AB", "20", "Bairro B2", "Campinas", "SP", "87550-000");

