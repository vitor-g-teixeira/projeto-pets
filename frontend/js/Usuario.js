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


async function cadastrarUsuario(){
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();

    const valores = [nome, sobrenome, email, telefone, senha, cidade, estado, logradouro, numero, complemento];

    

    //valores para completar
    const data_nascimento = "2000-01-01";
    const rua = "Rua Abcd";
    const bairro = "Bairro 1234";
    const cep = "85240-001";

    

    if(validarEmail(email) && validarSenha(senha))
        {
            const response = await fetch('http://localhost:3000/inserirUsuario', { 
                method: 'POST', 
                headers: { 
                    'Content-Type': 'application/json' 
                }, 
                body: JSON.stringify({ nome, email, senha, data_nascimento, rua, numero, bairro, cidade, estado, cep }) 
            });
    
            if (response.ok) 
                { 
                    alert('Dados inseridos com sucesso!'); 
                } 
                else 
                { 
                    alert('Erro ao inserir dados.');
                }
        }
    

        function validarEmail(email){
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
            if(regexEmail.test(email)){
                return true;
            }
            else{
                alert("email inválido");
                return false;
            }
        }
    }

    
    function validarSenha() 
    { 
        var senha = document.getElementById("senha").value; 
        var mensagemErro = ''; 
        if (senha.length < 8) 
        {
            mensagemErro += "A senha deve ter pelo menos 8 caracteres.\n"; 
        } 
        if (!/[a-z]/.test(senha)) 
        { 
            mensagemErro += "A senha deve conter pelo menos uma letra minúscula.\n"; 
        } 
        if (!/[A-Z]/.test(senha)) 
        {
            mensagemErro += "A senha deve conter pelo menos uma letra maiúscula.\n"; 
        } 
        if (!/[0-9]/.test(senha)) 
        { 
            mensagemErro += "A senha deve conter pelo menos um número.\n"; 
        } 
        if (senha !== confirmacao) 
        { 
            mensagemErro += "A confirmação da senha não corresponde.\n"; 
        } 
        if (mensagemErro) 
        { 
            alert(mensagemErro); 
            return false; 
        } 
        return true; 
    }

    


    
        
            
        
    
    








