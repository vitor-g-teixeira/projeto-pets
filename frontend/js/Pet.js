class Pet{
    constructor(nome, dataResgate, genero, idade, especie, raca, porte, necessidade, descNecessidade, cidade, estado, logradouro, numero, complemento){

        this.nome = nome;
        this.estado = estado;
        this.cidade = cidade;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.dataResgate = dataResgate;
        this.genero = genero;
        this.idade = idade;
        this.especie = especie;
        this.raca = raca;
        this.porte = porte;
        this.necessidade = necessidade;
        this.descNecessidade = descNecessidade;

        
    }
}

function cadastrarAnimal(){
    
    const nome = document.getElementById("nome").value.trim();
    const dataResgate = document.getElementById("dataResgate").value.trim();

   //testar depois const genero = document.querySelector('input[name="genero"]:checked');    
    const idade = document.getElementById("idade").value.trim();
    const raca = document.getElementById("raca").value.trim();
    const porte = document.getElementById("dataResgate").value.trim();
    //testar depois const necessidade = document.querySelector('input[name="preferencia"]:checked');
    //const descNecessidade = document.getElementById("descricao-necessidade").value.trim();

    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();


    function validarDados(){
        let camposPreenchidos;

        if(nome === '')
        {
            camposPreenchidos += 0;
        }
        else{
            camposPreenchidos++;
        }


        

        return camposPreenchidos;
    }
    

    validarDados
    alert("aaaa")


 /*   if(validarDados())
    {
        alert('entrou');
    }
    else{
        alert("Preencha todos os campos!");
    }
        */
}
