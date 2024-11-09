(async () => {
    const fetch = (await import('node-fetch')).default;
  
    const url = 'http://localhost:3000/usuarios';
  
    const usuario = {
      nome: "Cléber Machado",
      email: "cleber@gmail.com",
      senha: "4879",
      data_nascimento: "1970-09-18",
      rua: "Rua A2",
      numero: "28",
      bairro: "Bairro Marechal",
      cidade: "Osasco",
      estado: "RJ",
      cep: "87450-001"
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
      });
      const data = await response.json();
      console.log('Sucesso:', data);
    } catch (error) {
      console.error('Erro:', error);
    }
  })();
  