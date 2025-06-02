var dadosModel = require("../models/dadosModel");

function buscar(req, res) {
    var setor = req.params.setor;
    var esteira = req.params.esteira;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.buscar(setor, esteira)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function buscar2(req, res) {
    var sensor = req.params.sensor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.buscar2(sensor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function buscar3(req, res) {
    var esteira = req.params.esteira;
    var setor = req.params.setor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.buscar3(esteira, setor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function atualizar(req, res) {
    var sensor = req.params.sensor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.atualizar(sensor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function atualizar2(req, res) {
    var esteira = req.params.esteira;
    var setor = req.params.setor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.atualizar2(esteira, setor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function atualizar3(req, res) {

    console.log(`Recuperando os últimos dados:`);

    dadosModel.atualizar3()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPI1(req, res) {
    var esteira = req.params.esteira;
    var setor = req.params.setor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.exibirKPI1(esteira, setor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPI2(req, res) {
    var setor = req.params.setor;
    console.log(`Recuperando os últimos dados:`);

    dadosModel.exibirKPI2(setor)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

function exibirKPI3(req, res) {

    console.log(`Recuperando os últimos dados:`);

    dadosModel.exibirKPI3()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
                console.log(resultado)
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os últimos dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
        );
}

module.exports = {
    buscar,
    buscar2,
    buscar3,
    atualizar,
    atualizar2,
    atualizar3,
    exibirKPI1,
    exibirKPI2,
    exibirKPI3
}