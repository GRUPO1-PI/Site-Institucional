var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscar/:setor/:esteira`, function (req, res) {
    dadosController.buscar(req, res);
});

router.get(`/buscar2/:sensor`, function (req, res) {
    dadosController.buscar2(req, res);
});

router.get(`/atualizar/:sensor`, function (req, res) {
    dadosController.atualizar(req, res);
});

module.exports = router;