var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha

                        })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastrar1(req, res) {

    var razaoSocial = req.body.razaoSocialServer;
    var telefoneSuporte = req.body.telefoneSuporteServer;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    // if (razaoSocial == undefined) {
    //     res.status(400).send("Sua razão social está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (telefoneSuporte == undefined) {
    //     res.status(400).send("Seu telefone de suporte está undefined!");
    // } else if (cnpj == undefined) {
    //     res.status(400).send("Seu CNPJ está undefined!");
    // } else if (representante == undefined) {
    //     res.status(400).send("Seu represententa está undefined!");
    // } else if (telefoneRepresentante == undefined) {
    //     res.status(400).send("Seu telefone de represententa está undefined!");
    // } else if (cep == undefined) {
    //     res.status(400).send("Seu CEP está undefined!");
    // } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar1(razaoSocial, telefoneSuporte, cnpj)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    // }
}

function cadastrar2(req, res) {

    var representante = req.body.representanteServer;
    var email = req.body.emailServer;
    var telefoneRepresentante = req.body.telefoneRepresentanteServer;
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    // if (razaoSocial == undefined) {
    //     res.status(400).send("Sua razão social está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (telefoneSuporte == undefined) {
    //     res.status(400).send("Seu telefone de suporte está undefined!");
    // } else if (cnpj == undefined) {
    //     res.status(400).send("Seu CNPJ está undefined!");
    // } else if (representante == undefined) {
    //     res.status(400).send("Seu represententa está undefined!");
    // } else if (telefoneRepresentante == undefined) {
    //     res.status(400).send("Seu telefone de represententa está undefined!");
    // } else if (cep == undefined) {
    //     res.status(400).send("Seu CEP está undefined!");
    // } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar2(representante, email, telefoneRepresentante, cpf, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    // }
}

function cadastrar3(req, res) {

    var unidadeFederativa = req.body.unidadeFederativaServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var num = req. body.numServer;

    // Faça as validações dos valores
    // if (razaoSocial == undefined) {
    //     res.status(400).send("Sua razão social está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (telefoneSuporte == undefined) {
    //     res.status(400).send("Seu telefone de suporte está undefined!");
    // } else if (cnpj == undefined) {
    //     res.status(400).send("Seu CNPJ está undefined!");
    // } else if (representante == undefined) {
    //     res.status(400).send("Seu represententa está undefined!");
    // } else if (telefoneRepresentante == undefined) {
    //     res.status(400).send("Seu telefone de represententa está undefined!");
    // } else if (cep == undefined) {
    //     res.status(400).send("Seu CEP está undefined!");
    // } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar3(unidadeFederativa, cidade, bairro, cep, logradouro, num)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    // }
}

module.exports = {
    autenticar,
    cadastrar1,
    cadastrar2,
    cadastrar3
}