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

function atualizar(sensor) {

    var instrucaoSql = `SELECT produtoDetectado, dtMonitoramento FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor WHERE s.numSerie = '${sensor}' ORDER BY idMonitoramento DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar2(esteira, setor) {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado) FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira WHERE e.numero = '${esteira}' AND 
    e.idSetor = ${setor} GROUP BY s.numSerie`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar3() {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado) FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira JOIN setor AS st ON e.idSetor = st.idSetor
    GROUP BY st.nome`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI1(esteira, setor) {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado) FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira WHERE e.numero = '${esteira}' AND 
    e.idSetor = ${setor} GROUP BY e.numero`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI2(setor) {

    var instrucaoSql = `SELECT e.numero, SUM(m.produtoDetectado) FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor JOIN esteira AS e ON s.fkEsteira = e.idEsteira JOIN setor AS st ON e.idSetor = st.idSetor WHERE e.idSetor = ${setor} GROUP BY e.numero, st.idSetor`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirKPI3() {

    var instrucaoSql = `SELECT SUM(m.produtoDetectado) FROM monitoramento m`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    buscar3,
    buscar2,
    atualizar,
    atualizar2,
    atualizar3,
    exibirKPI1,
    exibirKPI2,
    exibirKPI3
}