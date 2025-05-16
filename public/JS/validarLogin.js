function login(){
    var login = iptEmailLogin.value;
    var senha = iptSenhaLogin.value;

    if (login == 'admin@admin.com' && senha == 'Admin123@'){
        window.location.href = './dashboard.html'
    }else {
        alert('Credenciais inválidas')
    }
}