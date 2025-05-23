var database = require("../database/config");

function buscar(setor, esteira) {

    var instrucaoSql = `SELECT s.numSerie FROM sensor AS s JOIN esteira AS e ON
    s.fkEsteira = e.idEsteira WHERE e.numero = '${esteira}' AND e.idSetor = ${setor}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}