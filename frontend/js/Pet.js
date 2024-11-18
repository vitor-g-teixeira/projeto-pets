class Pet{
    constructor(nome, dataResgate, sexo, idade, raca, porte, doencaCronica, cidade, estado, logradouro, numero, complemento){

        this.nome = nome;
        this.estado = estado;
        this.cidade = cidade;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.dataResgate = dataResgate;
        this.sexo = sexo;
        this.idade = idade;
        this.raca = raca;
        this.porte = porte;
        this.doencaCronica = doencaCronica;

        
    }
}

function cadastrar(){
    alert('entrou');
    const nome = document.getElementById("nome").value.trim();
    const dataResgate = document.getElementById("dataResgate").value.trim();
    //sexo será um radio check
    const sexo = document.getElementById("sexo").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const raca = document.getElementById("raca").value.trim();
    const porte = document.getElementById("dataResgate").value.trim();
    const doencaCronica = document.getElementById("doencaCronica").value.trim();

    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();

    const valores = [nome, dataResgate, sexo, idade, raca, porte, doencaCronica, cidade, estado, logradouro, numero, complemento];

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
    
    if(validarDados() == true)
    {
        const pet = new Pet(nome, dataResgate, sexo, idade, raca, porte, doencaCronica, cidade, estado, logradouro, numero, complemento);
    }
    else{
        alert("Preencha todos os campos!");
    }
}
