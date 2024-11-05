
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
    
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();

    


    const valores = [nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento]

    



    function validarDados(){



        let contCampo = 0;
        for(let cont = 0; cont < valores.length; cont++)
        {
            if(valores[cont].length == 0)
            {
                contCampo++;
            }
        }





        if(contCampo > 0)
            {
                return false;
            }
            else
            {
                return true;
            }

       
        
    }
    
    if(validarDados() == true)
    {
        alert("OK");
    }
    else{
        alert("Preencha todos os campos!");
    }

    const usuario = new Usuario(nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento);


    
        
    
    
    //Entrada de dados está funcionando. Agr precisa validar esses dados e inserir no banco de dados

    let teste = document.querySelector("div#teste1");

    



    teste.innerHTML = `<p>Nome: ${usuario.nome} <\p>
    <p>Sobrenome: ${usuario.sobrenome} <\p>
    <p>telefone: ${usuario.telefone} <\p>
    <p>Email: ${usuario.email}  <\p>
    <p>Senha: ${usuario.senha} <\p>
    <p>estado: ${usuario.estado} <\p>
    <p>cidade: ${usuario.cidade} <\p>
    <p>logradouro: ${usuario.logradouro}<\p>
    <p>número: ${usuario.numero}<\p>
    <p>complemento: ${usuario.complemento}<\p>
    `;




    

    
    
}
