var database = require("../database/config");

function buscar(setor, esteira) {

    var instrucaoSql = `SELECT numSerie FROM sensor JOIN esteira ON fkEsteira = idEsteira JOIN
    setor ON esteira.idSetor = setor.idSetor WHERE idEsteira = '${esteira}' AND setor.nome = ${setor}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}