document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    

    if(form){
    
    form.addEventListener('submit', function (event) {
        if (!validarSenha()) {
            alert('Senha inválida');
            event.preventDefault(); 
            return;
        }

        if(!verificarEnvioComprovante()){
            alert('Comprovante não foi anexado')
            event.preventDefault()
            
        }

      event.preventDefault(); 

    
      const dados = {
  name: form.elements["nomecompleto"].value,
  dataNascimento: form.elements["data_nascimento"].value,
  cpf: form.elements["cpf"].value,
  senha: form.elements["senha"].value,
  sexo: form.elements["sexo"].value,
  telefone: form.elements["telefone"].value,
  cep: form.elements["cep"].value,
  numero: form.elements["numero"].value,
  rua: form.elements["rua"].value,
  bairro: form.elements["bairro"].value,
  cidade: form.elements["cidade"].value,
  uf: form.elements["uf"].value,
  trilha: form.elements["trilha"].value,
  concordo: form.elements["concordo"].checked
};

     

      fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(res => res.json())
      .then(data => {
        alert('Inscrição feita com sucesso!');

        window.location.href = 'index.html';
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao fazer inscrição!');
      
      });
    });
}
  });
