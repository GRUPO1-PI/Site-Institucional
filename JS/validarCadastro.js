function validarRazaoSocial() {

    var razaoSocial = iptRazaoSocial.value;
    legendaRazaoSocial.innerHTML = '';

    if (razaoSocial.length >= 1) {
        iptRazaoSocial.style.borderColor = '#36b0c9';
    }

}

function validarRazaoSocialErrado() {

    var validarRazaoSocial = iptRazaoSocial.value;

    if (validarRazaoSocial.length < 1) {
        iptRazaoSocial.style.borderColor = '#ff0000'
        legendaRazaoSocial.innerHTML = 'Esse campo é obrigatório!'
    }
}

function validarEmailCorreto() {

    var email = iptEmail.value;
    legendaEmail.innerHTML = ''

    if (email.includes('@') && email.includes('.')) {
        iptEmail.style.borderColor = '#36b0c9';
    }
}

function validarEmailErrado() {

    var email = iptEmail.value;

    if ((email.includes('@') != true) || (email.includes('.') != true)) {
        legendaEmail.innerHTML = 'Insira um endereço de email válido!'
        iptEmail.style.borderColor = '#ff0000';
    }

    if (email.length < 1) {
        iptEmail.style.borderColor = '#ff0000'
        legendaEmail.innerHTML = 'Esse campo é obrigatório!'
    }
}

function validarSenhaCorreto() {
    var senha = iptSenha.value;
    var especial = ',.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;
    var mai = false;
    var min = false;

    legendaSenha.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < senha.length; i++) {

        var caractereAtual = senha[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    if (caractereEspecial == false) {
    } else {

    }

    // Mínimo de 8 Caracteres
    if (senha.length >= 8) {
        minCaractere = true;
    }

    // Verificar Maiúscula e Minúscula
    if (senha.toUpperCase() != senha) {
        min = true;
    }
    if (senha.toLowerCase() != senha) {
        mai = true;
    }

    // Trocar cor da borda
    if ((min == true) && (mai == true) && (caractereEspecial == true) && (minCaractere == true)) {
        iptSenha.style.borderColor = "#36b0c9";
    }

    return [min, mai, caractereEspecial, minCaractere];
}

function validarSenhaErrado() {
    var incorreta = validarSenhaCorreto();
    if ((incorreta[0] != true) || (incorreta[1] != true) || (incorreta[2] != true) || (incorreta[3] != true)) {
        iptSenha.style.borderColor = "#ff0000"
    }

    if (incorreta[0] != true) {
        legendaSenha.innerHTML = 'Crie uma senha com pelo menos uma letra minúscula';
    }
    if (incorreta[1] != true) {
        legendaSenha.innerHTML = 'Crie uma senha com pelo menos uma letra maiúscula';
    }
    if (incorreta[2] != true) {
        legendaSenha.innerHTML = 'Crie uma senha com pelo menos um caractere especial. ex(. , / $)';
    }
    if (incorreta[3] != true) {
        legendaSenha.innerHTML = 'Crie uma senha com pelo menos 8 caracteres';
    }

}

function validarConfirmarSenhaCorreto() {

    var confirmar = iptConfirmarSenha.value;
    var senha = iptSenha.value;
    legendaConfirmarSenha.innerHTML = '';

    if (senha == confirmar) {
        iptConfirmarSenha.style.borderColor = "#36b0c9"
    }
}

function validarConfirmarSenhaErrado() {

    var confirmar = iptConfirmarSenha.value;
    var senha = iptSenha.value;

    if ((senha != confirmar) || (confirmar.length < 1)) {
        iptConfirmarSenha.style.borderColor = "#ff0000"
        legendaConfirmarSenha.innerHTML = 'As senhas não conferem!';
    }
}