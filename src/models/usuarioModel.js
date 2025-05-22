var database = require("../database/config")
var idEmpresa = 1;


function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql1 = `
        SELECT idRepresentante, email, senha FROM representante WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1, 'passe', 'passe');
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(razaoSocial, email, telefoneSuporte, cnpj, representante, telefoneRepresentante, cpf, senha, unidadeFederativa, cidade, bairro, cep, logradouro, num) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", razaoSocial, email, telefoneSuporte, cnpj, representante, telefoneRepresentante, cpf, senha, unidadeFederativa, cidade, bairro, cep, logradouro, num);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql1 = `INSERT INTO empresa (razaoSocial, cnpj, telefone) VALUES ('${razaoSocial}', '${cnpj}', '${telefoneSuporte}');`
    var instrucaoSql2 = `INSERT INTO endereco (logradouro, numero, cidade, UF, cep, idEmpresa) VALUES ('${logradouro}', '${num}', '${cidade}', '${unidadeFederativa}', '${cep}', ${idEmpresa});`
    var instrucaoSql3 = `INSERT INTO representante (nome, cpf, telefone, email, senha, idEmpresa) VALUES ('${representante}', '${cpf}', '${telefoneRepresentante}', '${email}', '${senha}', ${idEmpresa});`;

    idEmpresa++;

    // Retorna as 3 (cadastrar empresa, representante e endereço) querrys (comandos de BD) para ser executadas
    return database.executar(instrucaoSql1, instrucaoSql2, instrucaoSql3);
}

module.exports = {
    autenticar,
    cadastrar
};