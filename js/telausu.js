document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const dataInput = usuario.dataNascimento;
    const dataFormatada = new Date(dataInput).toLocaleDateString('pt-br') ///Formata a data para ficar apenas dia/mes/ano

    if (usuario) {
      document.querySelector('#nome').textContent = `Nome: ${usuario.name}`;
      document.querySelector('#data_nascimento').textContent = `Data de nascimento: ${dataFormatada}`;
      document.querySelector('#cpf').textContent = `CPF: ${usuario.cpf}`;
      document.querySelector('#sexo').textContent = `Sexo: ${usuario.sexo}`;
      document.querySelector('#telefone').textContent = `Telefone: ${usuario.telefone}`;
      document.querySelector('#cep').textContent = `CEP: ${usuario.cep}`;
      document.querySelector('#numeroCasa').textContent = `Número Casa: ${usuario.numero}`;
      document.querySelector('#rua').textContent = `Rua: ${usuario.rua}`;
      document.querySelector('#bairro').textContent = `Bairro: ${usuario.bairro}`;
      document.querySelector('#cidade').textContent = `Cidade: ${usuario.cidade}`;
      document.querySelector('#uf').textContent = `UF: ${usuario.uf}`;
      document.querySelector('#trilhas').textContent = `Trilhas: ${usuario.trilha}`;
    } else {
      alert('Usuário não logado.');
      window.location.href = 'index.html';
    }
    window.addEventListener('popstate' , function(){
        window.location.href = 'index.html'
            });
  });