class Usuario{
    constructor(){
        this.id_usuario;
        this.nome;
        this.sobrenome;
        this.telefone;
        this.email;
        this.cidade;
        this.bairro;
        this.logradouro;
        this.numero;
        this.complemento;
        this.cep;
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

    estagio_atual(){
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

const usuario1 = new Usuario();
usuario1.nome = 'Paulo';
usuario1.cpf = '999.999.999-99';
console.log(usuario1);

