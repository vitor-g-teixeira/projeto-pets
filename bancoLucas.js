import pg from 'pg';
const { Client } = pg;

export async function executeQuery(query, params) {
    const client = new Client({
        user: 'postgres',
        password: '1234',
        host: 'localhost',
        port: 5432,
        database: 'Amazonia',
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

export async function CadastroProduto(nome, marca, valor) {
    const query = "INSERT INTO produtos(nome, marca, valor) VALUES($1, $2, $3)";
    const params = [nome, marca, valor];
    try {
        await executeQuery(query, params);
        console.log("Produto cadastrado com sucesso!");
    } catch (err) {
        console.error("Erro ao cadastrar produto:", err);
    }
}