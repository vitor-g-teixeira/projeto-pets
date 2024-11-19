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
    const dataResgate = document.getElementById("data-resgate").value;

      
      
    const idade = document.getElementById("idade").value.trim();
   //testar depois const raca = document.getElementById("raca").value.trim();
   //testar depois const especie =
    //testar depois const porte = document.getElementById("").value.trim();
    
    //testar depois const necessidade = document.querySelector('input[name="preferencia"]:checked');
    //const descNecessidade = document.getElementById("descricao-necessidade").value.trim();

    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const complemento = document.getElementById("complemento").value.trim();


    function validarDados(){
        
        


        
        let genero_masc = document.getElementById('check-masculino');
            let genero_fem = document.getElementById('check-feminino');

            let genero = '';

            if(genero_masc.checked)
            {
                genero = "Macho";
                camposPreenchidos++;
            }
            if(genero_fem.checked)
            {
                genero = "Fêmea";
                camposPreenchidos++;
            }
            
        











        //abrigo
        
    }
    

    
    alert(validarDados())

 /*   if(validarDados())
    {
        alert('entrou');
    }
    else{
        alert("Preencha todos os campos!");
    }
        */
}
