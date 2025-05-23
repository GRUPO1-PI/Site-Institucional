var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar1", function (req, res) {
    usuarioController.cadastrar1(req, res);
})

router.post("/cadastrar2", function (req, res) {
    usuarioController.cadastrar2(req, res);
})

router.post("/cadastrar3", function (req, res) {
    usuarioController.cadastrar3(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;