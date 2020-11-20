function verificar() {
    alert('Não ta pronto ainda AAAAA')
}

function openModal() {
    var openLogin = document.getElementById('loginGames');
    openLogin.style.height = '75vh';
    openLogin.style.background = 'rgb(40,120,189)';
    openLogin.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,70,70,0.9051217899269083) 43%, rgba(56,56,56,0.9443374762014181) 59%, rgba(55,55,54,1) 100%)';
    openLogin.style.width = '30%';
    openLogin.style.zIndex = '2';
    openLogin.style.position = 'fixed';
    openLogin.style.transform = 'translate(-50%, -50%)';
    openLogin.style.top = '50%';
    openLogin.style.left = '50%';
    openLogin.style.borderRadius = '15px';
    openLogin.style.display = 'block';
    document.getElementById('entrar').style.display = 'block';
}

function closeModal() {
    var closeLogin = document.getElementById('loginGames');
    closeLogin.style.display = 'none';
    closeLogin.style.height = '0';
}
