const pool = require('../db');
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Erro ao executar a consulta', err.stack);
    }
    else{
        console.log('Resultado:', result.rows[0].now);
    }
  });
});

pool.query(`INSERT INTO usuarios (nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES ('a', 'b', 'c', '1990-06-30', 'c', '70', 'abcd', 'Hortensia', 'MT', '1111111-0');`, (err, res) => 
    { 
        if (err) 
        { 
            console.error('Erro ao inserir dados', err.stack); 
        } 
        else { console.log('Inserção bem-sucedida:', res.rowCount); } });


