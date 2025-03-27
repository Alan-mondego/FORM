function validarLetras(input) {
    const mensagemErro = document.getElementById('mensagemErro');
    let valor = input.value;
    let valorValido = '';

    for (let i = 0; i < valor.length; i++) {
        const caractere = valor[i];
        // Verifica se o caractere é uma letra ou espaço
        if (/[a-zA-ZÀ-ú\s]/.test(caractere)) {
            valorValido += caractere; // Adiciona o caractere válido
        }
    }

    if (valorValido !== valor) {
        mensagemErro.style.display = 'inline';
        input.value = valorValido; 
    } else {
        mensagemErro.style.display = 'none';
    }
}

function validarDataNascimento(input) {
    const mensagemErro = document.getElementById('mensagemErroData');
    const dataSelecionada = new Date(input.value); 
    const dataAtual = new Date();
    const dataMinima = new Date();

    dataMinima.setFullYear(dataAtual.getFullYear() - 14);

    if (dataSelecionada > dataAtual || dataSelecionada < dataMinima) {
        mensagemErro.style.display = 'inline'; 
        input.value = ''; 
        mensagemErro.style.display = 'none';
}
}

function formatarCPF(input) {
   
    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 3) {
        valor = valor.replace(/^(\d{3})/, '$1.');
    }
    if (valor.length > 7) {
        valor = valor.replace(/^(\d{3})\.(\d{3})/, '$1.$2.');
    }
    if (valor.length > 11) {
        valor = valor.replace(/^(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
    }

    input.value = valor.substring(0, 14);
}

function validaCPF(cpf) {
    const cpfInput = document.getElementById('cpf');

    console.log(cpfInput);

    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
  }



function validacaoEmail(){
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email_usu');
    const spans = document.querySelector('.span_required');
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9._-]*@(gmail|hotmail|outlook)\.com$/;


    function setError(){
        emailInput.style.border = '1px solid #FF0000';
        spans.style.display = 'block';
    }
    
    function removerErro(){

        emailInput.style.border ='';
        spans.style.display = 'none';
    }

    if(emailInput.value.trim()===''){
        removerErro();
        return;
    }

        if (!emailRegex.test(emailInput.value)){
            console.log("Não validado");
            setError();
        }else{
            removerErro();
        }
    
}

function validarSenha(){

const form = document.getElementById('form');
const senhaInput = document.getElementById('senha');
const span = document.querySelector('.span_senha'); // Alterado para pegar apenas o primeiro span
const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#.]).{8,}$/;

function errorSenha() {
    senhaInput.style.border = "2px solid #FF0000"; 
    span.style.display = 'block'; 
}
function removerErroSenha() {
    senhaInput.style.border = ""; 
    span.style.display = 'none'; 
}

  
if(senhaInput.value.trim()===''){
    removerErroSenha();
    return;
}

    if (!regexSenha.test(senhaInput.value)) {
        errorSenha();
    } else {
        removerErroSenha();
    }

}

function togglePass(){
    const input = document.getElementById('senha');
    const button = document.getElementById('mostra-senha');

    button.addEventListener('checkbox',togglePass);

    if(input.type == 'password'){
        input.type = 'text';
    }else{
        input.type = 'password';
        button.textContent = 'k';
    }
}

function validacaoEndereco(){

    const campos = document.getElementB('.required');
    const spans = document.querySelectorAll('.span_end');
    const regexEndereco = /([\w\W]+)\s(\d+)/;


    function mensagemDeErro(index){
        campos(index).style.border = '1px solid  #FF0000';
        spans(index).style.display ='block';
    }

    function removerMensagemDeErro(index){
        campos(index).style.border = '1px solid  #FF0000';
        spans(index).style.display ='none';
    }

    if(campos[0].value.trim()===''){
        removerMensagemDeErro();
        return;
    }
    
        if (!regexEndereco.test(campos[0].value)) {
            mensagemDeErro();
        } else {
           removerMensagemDeErro();
        }
    
    }
    
    

// Adiciona a formatação automática ao campo de telefone ao digitar
document.getElementById("telefone").addEventListener("input", function (event) {
    let numero = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (numero.length > 11) numero = numero.slice(0, 11); // Limita a 11 dígitos

    // Formatação dinâmica: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (numero.length >= 2) {
        numero = `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    }
    if (numero.length >= 10) {
        numero = `${numero.slice(0, 10)}-${numero.slice(10)}`;
    }

    event.target.value = numero; // Atualiza o campo com a formatação correta
});

// Função para validar o número de telefone
function validacaoNumero() {
    const numeroInput = document.getElementById('telefone');
    const spanNumero = document.querySelector('.span_numero');
    const regexCelular = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}-[0-9]{4}$/; // Regex corrigido

    function errorCelular() {
        numeroInput.style.border = "2px solid #FF0000";
        if (spanNumero) spanNumero.style.display = "block"; // Verifica se o span existe antes de alterar
    }

    function removeErrorCelular() {
        numeroInput.style.border = "";
        if (spanNumero) spanNumero.style.display = "none";
    }

    if(numeroInput.value.trim()===''){
        removeErrorCelular();
        return;
    }

    if (!regexCelular.test(numeroInput.value)) {
        errorCelular();
        return false; // Retorna falso se o número for inválido
    } else {
        removeErrorCelular();
        return true; // Retorna verdadeiro se o número for válido
    }
}
