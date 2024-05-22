var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cont++  

    if(cont > 5){
    cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

function logar(){
    var login = document.getElementById('user').value;
    var senha = document.getElementById('pass').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "index.html";
    }else{
        alert('Senha ou usuario incorretos');
    }
}

function forgot(){
    alert('Um e-mail foi enviado para redefinição de senha!')
}