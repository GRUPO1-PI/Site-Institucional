var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscar/:setor/:esteira`, function (req, res) {
    dadosController.buscar(req, res);
});

router.get(`/buscar2/:sensor`, function (req, res) {
    dadosController.buscar2(req, res);
});

router.get(`/buscar3/:esteira/:setor`, function (req, res) {
    dadosController.buscar3(req, res);
});

router.get(`/atualizar/:sensor`, function (req, res) {
    dadosController.atualizar(req, res);
});

router.get(`/atualizar2/:esteira/:setor`, function (req, res) {
    dadosController.atualizar2(req, res);
});

router.get(`/atualizar3/`, function (req, res) {
    dadosController.atualizar3(req, res);
});

router.get(`/exibirKPI1/:esteira/:setor`, function (req, res) {
    dadosController.exibirKPI1(req, res);
});

router.get(`/exibirKPI2/:setor`, function (req, res) {
    dadosController.exibirKPI2(req, res);
});

router.get(`/exibirKPI3`, function (req, res) {
    dadosController.exibirKPI3(req, res);
});

module.exports = router;