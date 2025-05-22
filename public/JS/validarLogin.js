function entrar() {
    // aguardar();

    var emailVar = iptEmailLogin.value;
    var senhaVar = iptSenhaLogin.value;

    // if (emailVar == "" || senhaVar == "") {
    //     cardErro.style.display = "block"
    //     mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
    //     // finalizarAguardar();
    //     return false;
    // }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idRepresentante;
                // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)

                setTimeout(function () {
                    window.location = "./dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}
