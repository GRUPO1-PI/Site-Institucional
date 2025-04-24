function validar(){
    var nome = iptNome.value;
    var email = iptEmail.value;
    var senha = iptSenha.value;
    var tel = iptTelefone.value;
    var cnpj = iptCnpj.value;

    var valido = true;

    // Verificação de Email
    if (email.includes('@') && email.endsWith('.com')){
        iptEmail.style.borderColor = '#00FF00'
    }else {
        iptEmail.style.borderColor = '#FF0000'  
        alert(`Formatação de e-mail inválida!`) 
        valido = false;         
    }


    // Verificação de Senha
    if (senha.toUpperCase() == senha){
        // Não tem minúscula
        alert(`A senha deve conter pelo menos um caractere em minúsculo.`)
        valido = false;
    }
    if (senha.toLowerCase() == senha){
        // Não tem maiúscula
        alert(`A senha deve conter pelo menos um caractere em maiúsculo.`)
        valido = false;
    }
    if ((!senha.includes('.')) && (!senha.includes(',')) && (!senha.includes('!')) && (!senha.includes('?')) && (!senha.includes(';')) && (!senha.includes(':')) && (!senha.includes('#')) &&  (!senha.includes('@')) && (!senha.includes('%')) && (!senha.includes('$')) && (!senha.includes('&')) && (!senha.includes('*'))){
        // Não tem caractere especial
        alert(`A senha deve conter pelo menos um caractere especial.`)
        valido = false;
    }

    if (senha.length < 8){
        alert(`A senha deve conter no mínimo 8 caracteres.`)
        valido = false;
    }


    // Verficação de Telefone
    if (tel.length < 11){
        // Número está menor que 11
        alert(`Número de telefone inválido.`)
        valido = false;
    }

    if(cnpj.length < 14){
        alert(`Formatação de CNPJ inválida!`)
        valido = false;
    }

    if (valido){
        window.location.href = './cadastro2.html'
    }


}