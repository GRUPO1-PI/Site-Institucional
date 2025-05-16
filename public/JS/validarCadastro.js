// var credenciais = ['', '', '', ''];

// var razaoSocial = '';
// var email = '';
// var telefoneSuporte = '';
// var cnpj = '';
// var representante = '';
// var telefoneRepresentante = '';
// var senhaVar = '';

function validarRazaoSocialCorreto() {

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

    legendaEmail.innerHTML = '';

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

function validarSenhaCorreta() {
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

function validarCnpjCorreto() {

    var cnpj = iptCnpj.value;
    var especial = 'abcdefghijklmnopqrstuvwxyz,.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;

    legendaCpf.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < cnpj.length; i++) {

        var caractereAtual = cnpj[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    // Mínimo de 14 Caracteres
    if (cnpj.length == 14) {
        minCaractere = true;
    }

    // Trocar cor da borda
    if ((caractereEspecial == false) && (minCaractere == true)) {
        iptCnpj.style.borderColor = "#36b0c9";
    }

    return [caractereEspecial, minCaractere];

}

function validarCnpjErrado() {

    var incorreta = validarCnpjCorreto();
    if ((incorreta[0] != false) || (incorreta[1] != true)) {
        iptCnpj.style.borderColor = "#ff0000"
    }

    if (incorreta[1] == false) {
        legendaCnpj.innerHTML = 'O CNPJ deve conter 14 caracteres!'
    }

    if (incorreta[0] == true) {
        legendaCnpj.innerHTML = 'Digite apenas números!'
    }

}

function validarCpfCorreto() {

    var cpf = iptCpf.value;
    var especial = 'abcdefghijklmnopqrstuvwxyz,.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;

    legendaCpf.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < cpf.length; i++) {

        var caractereAtual = cpf[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    // Mínimo de 11 Caracteres
    if (cpf.length == 11) {
        minCaractere = true;
    }

    // Trocar cor da borda
    if ((caractereEspecial == false) && (minCaractere == true)) {
        iptCpf.style.borderColor = "#36b0c9";
    }

    return [caractereEspecial, minCaractere];

}

function validarCpfErrado() {

    var incorreta = validarCpfCorreto();
    if ((incorreta[0] != false) || (incorreta[1] != true)) {
        iptCpf.style.borderColor = "#ff0000"
    }

    if (incorreta[1] == false) {
        legendaCpf.innerHTML = 'O Cpf deve conter 14 caracteres!'
    }

    if (incorreta[0] == true) {
        legendaCpf.innerHTML = 'Digite apenas números!'
    }

}

function validarNomeRepresentanteCorreto() {

    var representante = iptRepresentante.value;
    legendaRepresentante.innerHTML = '';

    if (representante.length >= 1) {
        iptRepresentante.style.borderColor = '#36b0c9';
    }

}

function validarNomeRepresentanteErrado() {

    var representante = iptRepresentante.value;

    if (representante.length < 1) {
        iptRepresentante.style.borderColor = '#ff0000'
        legendaRepresentante.innerHTML = 'Esse campo é obrigatório!'
    }

}

function validarTelefoneSuporteCorreto() {

    var telefoneSuporte = iptTelefoneSuporte.value;
    var especial = 'abcdefghijklmnopqrstuvwxyz,.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;

    legendaTelefoneSuporte.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < telefoneSuporte.length; i++) {

        var caractereAtual = telefoneSuporte[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    // Mínimo de 11 Caracteres
    if (telefoneSuporte.length == 11) {
        minCaractere = true;
    }

    // Trocar cor da borda
    if ((caractereEspecial == false) && (minCaractere == true)) {
        iptTelefoneSuporte.style.borderColor = "#36b0c9";
    }

    return [caractereEspecial, minCaractere];

}

function validarTelefoneSuporteErrado() {

    var incorreta = validarTelefoneSuporteCorreto();
    if ((incorreta[0] != false) || (incorreta[1] != true)) {
        iptTelefoneSuporte.style.borderColor = "#ff0000"
    }

    if (incorreta[1] == false) {
        legendaTelefoneSuporte.innerHTML = 'O telefone deve conter 11 caracteres!'
    }

    if (incorreta[0] == true) {
        legendaTelefoneSuporte.innerHTML = 'Digite apenas números!'
    }

}

function validarTelefoneRepresentanteCorreto() {

    var telefoneRepresentante = iptTelefoneRepresentante.value;
    var especial = 'abcdefghijklmnopqrstuvwxyz,.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

    var caractereEspecial = false;
    var minCaractere = false;

    legendaTelefoneRepresentante.innerHTML = '';

    // Caractere Especial
    for (var i = 0; i < telefoneRepresentante.length; i++) {

        var caractereAtual = telefoneRepresentante[i];
        for (var j = 0; j < especial.length; j++) {
            if (caractereAtual == especial[j]) {
                caractereEspecial = true;
            }
        }

    }

    // Mínimo de 11 Caracteres
    if (telefoneRepresentante.length == 11) {
        minCaractere = true;
    }

    // Trocar cor da borda
    if ((caractereEspecial == false) && (minCaractere == true)) {
        iptTelefoneRepresentante.style.borderColor = "#36b0c9";
    }

    return [caractereEspecial, minCaractere];

}

function validarTelefoneRepresentanteErrado() {

    var incorreta = validarTelefoneRepresentanteCorreto();
    if ((incorreta[0] != false) || (incorreta[1] != true)) {
        iptTelefoneRepresentante.style.borderColor = "#ff0000"
    }

    if (incorreta[1] == false) {
        legendaTelefoneRepresentante.innerHTML = 'O telefone deve conter 11 caracteres!'
    }

    if (incorreta[0] == true) {
        legendaTelefoneRepresentante.innerHTML = 'Digite apenas números!'
    }

}

function validar() {

    // credenciais.push(razaoSocial, email, telefoneSuporte, cnpj, representante, senha);
    // credenciais.push(email);
    // credenciais.push(telefoneSuporte);
    // credenciais.push(cnpj);
    // credenciais.push(representante);
    // credenciais.push(senha);

    window.location = 'cadastro2.html';

}

