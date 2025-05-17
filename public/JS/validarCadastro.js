var credenciais = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

var especial = ',.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";
var especialLetras = 'abcdefghijklmnopqrstuvwxyz,.;:?!...+-*/=%<>±÷×≠≈≤≥()[]{}<>&|^~!"`@#$_:;°\§©®™¶' + "'";

var razaoSocial = '';
var email = '';
var telefoneSuporte = '';
var cnpj = '';
var representante = '';
var telefoneRepresentante = '';
var cpf = '';
var senha = '';

var unidadeFederativa = '';
var cidade = '';
var bairro = '';
var cep = '';
var logradouro = '';
var num = '';

// Validar razão social
function validarRazaoSocialCorreto() {

    razaoSocial = iptRazaoSocial.value;
    legendaRazaoSocial.innerHTML = '';

    credenciais[0] = false;

    if (razaoSocial.length >= 1) {
        iptRazaoSocial.style.borderColor = '#36b0c9';
        credenciais[0] = true;
    }

}
function validarRazaoSocialErrado() {

    razaoSocial = iptRazaoSocial.value;

    if (razaoSocial.length < 1) {
        iptRazaoSocial.style.borderColor = '#ff0000'
        legendaRazaoSocial.innerHTML = 'Esse campo é obrigatório!'
    }
}

// Validar email
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

// Validar telefone do suporte
function validarTelefoneSuporteCorreto() {

    telefoneSuporte = iptTelefoneSuporte.value;

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

// Validar CNPJ
function validarCnpjCorreto() {

    cnpj = iptCnpj.value;

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
        legendaCnpj.innerHTML = ''
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

// Validar nome do representante
function validarNomeRepresentanteCorreto() {

    representante = iptRepresentante.value;
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

// Validar telefone do representante
function validarTelefoneRepresentanteCorreto() {

    telefoneRepresentante = iptTelefoneRepresentante.value;

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

// Validar CPF
function validarCpfCorreto() {

    cpf = iptCpf.value;

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

// Validar senha
function validarSenhaCorreta() {
    senha = iptSenha.value;

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

// Validar Unidade Federativa
function validarUnidadeFederativa() {

    unidadeFederativa = select_uf.value;
    if (unidadeFederativa != '') {
        select_uf.style.borderColor = "#36b0c9";
        credenciais[8] = true;
    } else {
        credenciais[8] = false;
    }

}

// Validar cidade
function validarCidadeCorreta() {

    cidade = input_cidade.value;
    if (cidade != '') {
        input_cidade.style.borderColor = "#36b0c9"
        legendaCidade.innerHTML = ''
        credenciais[9] = true;
    }

}
function validarCidadeErrada() {

    if (cidade == '') {
        input_cidade.style.borderColor = "#ff0000";
        legendaCidade.innerHTML = 'Esse campo é obrigatório!';
        credenciais[9] = false;
    }

}

// Validar Bairro
function validarBairroCorreto() {

    bairro = input_bairro.value;
    if (bairro != '') {
        input_bairro.style.borderColor = "#36b0c9"
        legendaBairro.innerHTML = ''
        credenciais[10] = true;
    }

}
function validarBairroErrado() {

    if (bairro == '') {
        input_bairro.style.borderColor = "#ff0000";
        legendaBairro.innerHTML = 'Esse campo é obrigatório!';
        credenciais[10] = false;
    }

}

// Validar CEP
function validarCepCorreto() {

    cep = input_cep.value;

    for (var i = 0; i < especialLetras.length; i++) {
        for (var j = 0; j < cep.length; j++) {
            if (cep[j] == especialLetras[i]) {
                legendaCep.innerHTML = 'Digite apenas números!'
                input_cep.style.borderColor = '#ff0000'
                credenciais[11] = false;
                break;
            } else {
                legendaCep.innerHTML = ''
                input_cep.style.borderColor = '#36b0c9'
                credenciais[11] = true;
            }
        }
        if (credenciais[11] == false) {
            break
        }
    }

}
function validarCepErrado() {

    if (cep.length != 8) {
        legendaCep.innerHTML = 'O CEP deve conter 8 caracteres!'
        input_cep.style.borderColor = '#ff0000'
    }

    if (cep == '') {
        legendaCep.innerHTML = 'Esse campo é obrigatório!'
        input_cep.style.borderColor = '#ff0000'
    }

}

// Validar logradouro
function validarLogradouroCorreto() {

    logradouro = input_logradouro.value;

    if (logradouro != '') {
        input_logradouro.style.borderColor = "#36b0c9"
        legendaLogradouro.innerHTML = ''
        credenciais[12] = true;
    }
    
}
function validarLogradouroErrado() {

    if (logradouro == '') {
        input_logradouro.style.borderColor = "#ff0000";
        legendaLogradouro.innerHTML = 'Esse campo é obrigatório!';
        credenciais[11] = false;
    }

}

// Validar número
function validarNumCorreto() {

    num = input_numero.value;

    if (num != '') {
        input_numero.style.borderColor = "#36b0c9"
        legendaNum.innerHTML = ''
        credenciais[13] = true;
    }
    
}
function validarNumErrado() {

    if (num == '') {
        input_numero.style.borderColor = "#ff0000";
        legendaNum.innerHTML = 'Esse campo é obrigatório!';
        credenciais[13] = false;
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
    // let listaEmpresasCadastradas = [];

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
            senhaServer: senha,
            unidadeFederativaServer: unidadeFederativa,
            cidadeServer: cidade,
            bairroServer: bairro,
            cepServer: cep,
            logradouroServer: logradouro,
            numServer: num

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

