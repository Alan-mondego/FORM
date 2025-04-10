document.addEventListener('DOMContentLoaded', function () {

    const login =  document.getElementById('form');



    login.addEventListener('submit' , function(event){

       event.preventDefault();

       const dadosLogin = {
           cpf  : login.elements['cpfLogin'].value,
           senha : login.elements['senhaLogin'].value
       }


  
        fetch('http://localhost:3000/login' ,{
           method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body : JSON.stringify(dadosLogin)
        })
        .then(res =>{
           if(!res.ok){
               throw new Error('Dados inválidos')
           }
           return res.json()
        })

        .then(data => {
            const usuario = data.usuario
           alert('Login com sucesso !!')

           localStorage.setItem('usuario', JSON.stringify(usuario));
           window.location.href = 'login.html';

        })

        .catch(error =>{
         
           alert('Falha no login: ' + error.message);
        })

   

})

})