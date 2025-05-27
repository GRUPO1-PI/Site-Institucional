var database = require("../database/config");

function buscar(setor, esteira) {

    var instrucaoSql = `SELECT s.numSerie FROM sensor AS s JOIN esteira AS e ON
    s.fkEsteira = e.idEsteira WHERE e.numero = '${esteira}' AND e.idSetor = ${setor}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar2(sensor) {

    var instrucaoSql = `SELECT produtoDetectado, dtMonitoramento FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor WHERE s.numSerie = '${sensor}' ORDER BY idMonitoramento DESC LIMIT 10`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar3(esteira, setor) {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado), s.numSerie FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira WHERE e.numero = '${esteira}' AND 
    e.idSetor = ${setor} GROUP BY s.numSerie`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscar4() {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado), st.nome FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira JOIN setor AS st ON e.idSetor = st.idSetor
    GROUP BY st.nome`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(sensor) {

    var instrucaoSql = `SELECT produtoDetectado, dtMonitoramento FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor WHERE s.numSerie = '${sensor}' ORDER BY idMonitoramento DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    buscar2,
    buscar3,
    buscar4,
    atualizar
}