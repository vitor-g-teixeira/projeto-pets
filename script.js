
const pool = require('./db');
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



class Usuario{
    constructor(nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento){
        this.id_usuario;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.estado = estado;
        this.cidade = cidade;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.aceita_necessidade;
        this.aceita_doenca;
        this.aceita_exclusividade;


        this.genero;



      /*  insertUsuario()
        {
            //faltou sobrenome, telefone, logradouro e complemento
            pool.query(`INSERT INTO usuarios (nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep) VALUES ('${this.nome}', '${this.email}', '${this.senha}', 'indefinido', 'indefinido', '${this.numero}', 'indefinido', '${this.cidade}', '${this.estado}', 'indefinido');`, (err, res) => 
                { 
                    if (err) 
                    { 
                        console.error('Erro ao inserir dados', err.stack); 
                    } 
                    else { console.log('Inserção bem-sucedida:', res.rowCount); } });
        }
*/





    }

    
}

class Andamento_Adocao{
    constructor(){
        this.id_usuario;
        this.id_abrigo;
        this.id_pet;
    }

    verificarAndamento(){
        //(notificou, contatou, adotou)
    } 
}

class Abrigo{
    constructor(){
        this.id_abrigo;
        this.cidade;
        this.bairro;
        this.logradouro;
        this.número;
        this.complemento;
        this.cep;
    }
}

class Pet{
    constructor(){
        this.id_pet;
        this.id_abrigo;
        this.nome;
        this.especie;
        this.raca;
        this.sexo;
    }
}

class Necessidade{
    constructor(){
        this.id_necessidade;
        this.nome;
        this.descricao;
        this.tipo;
    }
}

class Pet_Necessidade{
    constructor(){
        this.id_pet;
        this.id_necessidade;
    }	
}




function cadastrar(){
    
    const campos = document.getElementsByClassName("campo");
    const valores = Array.from(campos).map(campo => campo.value);

    const [nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento] = valores;



    
    function validarDados(){
        for(let campo of valores){
            if(campo.trim() === '')
            {
                alert("Prencha todos os campos abaixo!");
                campo.focus();
                return false
            }
        }
        
        return true;
    }

    

    if(validarDados() == true)
    {
        var usuario = new Usuario(nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento);
        alert("ok");
       // usuario.insertUsuario();
    }
    
        
    
    
    //Entrada de dados está funcionando. Agr precisa validar esses dados e inserir no banco de dados

    document.getElementById("teste").innerHTML = `
    <p>Nome: ${usuario.nome} <p>
    <p>Sobrenome: ${usuario.sobrenome}
    <p>telefone: ${usuario.telefone}
    <p>Email: ${usuario.email} 
    <p>Senha: ${usuario.senha}
    <p>estado: ${usuario.estado} 
    <p>cidade: ${usuario.cidade} 
    <p>logradouro: ${usuario.logradouro}
    <p>número: ${usuario.numero}
    <p>complemento: ${usuario.complemento}
    `;

    
    
}
