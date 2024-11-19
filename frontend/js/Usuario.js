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
        
function validarDados(event)
{
    let senha = document.getElementById('senha').value.trim();
    const errorMessage = document.getElementById('error-message');
          
    // Expressão regular para validar a senha
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
          
              // Validar a senha
              if (!regex.test(senha)) {
                // Exibe mensagem de erro se a senha não for válida
                errorMessage.innerHTML = 'A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número.';
                // Impede a submissão do formulário
                return false;
              }
          
              // Limpa a mensagem de erro se a senha for válida
              errorMessage.innerHTML = '';
              return true;
}
        
document.addEventListener('DOMContentLoaded', function () {
     const formulario = document.getElementById('formulario');
          
    formulario.addEventListener('submit', validarDados);
});

    


    
        
            
        
    
    








