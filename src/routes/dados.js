var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get(`/buscar/:setor/:esteira`, function (req, res) {
    dadosController.buscar(req, res);
});

module.exports = router;