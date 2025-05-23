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

module.exports = {
    buscar,
    buscar2
}