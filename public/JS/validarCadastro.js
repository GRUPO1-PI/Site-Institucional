var credenciais = [false, false, false, false, false, false, false, false];

var razaoSocial = '';
var email = '';
var telefoneSuporte = '';
var cnpj = '';
var representante = '';
var telefoneRepresentante = '';
var cpf = '';
var senha = '';

function validarRazaoSocialCorreto() {

    var razaoSocial = iptRazaoSocial.value;
    legendaRazaoSocial.innerHTML = '';

    credenciais[0] = false;

    if (razaoSocial.length >= 1) {
        iptRazaoSocial.style.borderColor = '#36b0c9';
        credenciais[0] = true;
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
    credenciais[1] = false;
    email = iptEmail.value;

    if (email.includes('@') && email.includes('.')) {
        iptEmail.style.borderColor = '#36b0c9';
        credenciais[1] = true;
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

    credenciais[2] = false;

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
        credenciais[2] = true;
    }

    return [min, mai, caractereEspecial, minCaractere];
}

function validarSenhaErrado() {
    var incorreta = validarSenhaCorreta();
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

    credenciais[3] = false;

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
        credenciais[3] = true;
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

    credenciais[4] = false;


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
        credenciais[4] = true;
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

    credenciais[5] = false;

    if (representante.length >= 1) {
        iptRepresentante.style.borderColor = '#36b0c9';
        credenciais[5] = true;
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

    credenciais[6] = false;

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
        credenciais[6] = true;
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

    credenciais[7] = false;

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
        credenciais[7] = true;
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

function esconder() {
    document.getElementById('cadastro2').style.display = 'none'
}

function avançar() {

    var tudoCerto = 0;

    for (var i = 0; i < credenciais.length; i++) {
        if (credenciais[i] == true) {
            tudoCerto++;
        }
    }

    if (tudoCerto == 8) {
        document.getElementById('cadastro2').style.display = 'flex'
        document.getElementById('cadastro1').style.display = 'none'
    } else {
        alert('Preencha corretamente todos os campos!')
    }


}

function voltar() {
    document.getElementById('cadastro2').style.display = 'none'
    document.getElementById('cadastro1').style.display = 'flex'

}


function validar() {
    let listaEmpresasCadastradas = [];

    // Verificando se há algum campo em branco
    // if (
    //   nomeVar == "" ||
    //   emailVar == "" ||
    //   senhaVar == "" ||
    //   confirmacaoSenhaVar == "" ||
    //   codigoVar == "" ||
    //   cpfVar == ""
    // ) {
    //   cardErro.style.display = "block";
    //   mensagem_erro.innerHTML =
    //     "(Mensagem de erro para todos os campos em branco)";

    //   finalizarAguardar();
    //   return false;
    // } else {
    //   setInterval(sumirMensagem, 5000);
    // }

    // Verificando se o código de ativação é de alguma empresa cadastrada
    // for (let i = 0; i < listaEmpresasCadastradas.length; i++) {
    //   if (listaEmpresasCadastradas[i].codigo_ativacao == codigoVar) {
    //     idEmpresaVincular = listaEmpresasCadastradas[i].id
    //     console.log("Código de ativação válido.");
    //     break;
    //   } else {
    //     cardErro.style.display = "block";
    //     mensagem_erro.innerHTML = "(Mensagem de erro para código inválido)";
    //     finalizarAguardar();
    //   }
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            razaoSocialServer: razaoSocial,
            emailServer: email,
            telefoneSuporteServer: telefoneSuporte,
            cnpjServer: cnpj,
            representanteServer: representante,
            telefoneRepresentanteServer: telefoneRepresentante,
            cpfServer: cpf,
            senhaServer: senha

        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                // limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });

    return false;

    // Listando empresas cadastradas 
    //   function listar() {
    //     fetch("/empresas/listar", {
    //       method: "GET",
    //     })
    //       .then(function (resposta) {
    //         resposta.json().then((empresas) => {
    //           empresas.forEach((empresa) => {
    //             listaEmpresasCadastradas.push(empresa);

    //             console.log("listaEmpresasCadastradas")
    //             console.log(listaEmpresasCadastradas[0].codigo_ativacao)
    //           });
    //         });
    //       })
    //       .catch(function (resposta) {
    //         console.log(`#ERRO: ${resposta}`);
    //       });
    //   }

    //   function sumirMensagem() {
    //     cardErro.style.display = "none";
    //   }
}

