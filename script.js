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
    
    const campos = document.getElementsByClassName('campo');
    const valores = Array.from(campos).map(campo => campo.value);

    const [nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento] = valores;



    const usuario = new Usuario(nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento);
    

    //Entrada de dados está funcionando. Agr precisa validar esses dados e inserir no banco de dados



    document.getElementById("teste").innerHTML = `
    <p>Nome: ${usuario.nome} 
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

