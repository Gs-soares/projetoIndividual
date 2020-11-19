function verificar(){
    alert('Não ta pronto ainda AAAAA')
}

function openModal(){
   var openLogin = document.getElementById('loginGames');
   openLogin.style.height= '90vh';
   openLogin.style.background = 'rgb(40,120,189)';
   openLogin.style.background = 'linear-gradient(90deg, rgba(40,120,189,1) 0%, rgba(29,233,253,1) 50%, rgba(69,252,188,1) 100%)';
   openLogin.style.width = '40%';
   openLogin.style.zIndex = '2';
   openLogin.style.position = 'fixed';
//    openLogin.style.textAlign = 'center';
   openLogin.style.transform = 'translate(-50%, -50%)';
   openLogin.style.top = '50%';
   openLogin.style.left = '50%';
   openLogin.style.borderRadius = '15px';
   openLogin.style.display = 'block';
   document.getElementById('entrar').style.display= 'block';
//    document.getElementById('cadastro').style.display= 'block';
//    document.getElementById('formulario').style.display= 'block';
}

function closeModal(){
    var openLogin = document.getElementById('loginGames');       
    document.getElementById('entrar').style.display= 'none';
   document.getElementById('cadastro').style.display= 'none';
   document.getElementById('formulario').style.display= 'none';
    openLogin.style.display = 'none';
    openLogin.style.height= '0';
}
