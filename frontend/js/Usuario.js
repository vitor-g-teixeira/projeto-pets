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

    const valores = [nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento];

    function validarDados(){

        let contCampo = 0;
        for(let cont = 0; cont < valores.length; cont++)
        {
            if(valores[cont] === '')
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
    
    if(validarDados() == true && validarEmail(email))
    {
        const usuario = new Usuario(nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento);
        alert("OK");
    }
    else{
        alert("Preencha todos os campos!");
    }
}

function validarEmail(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regexEmail.test(email)){
        return true;
    }
    return false;
}