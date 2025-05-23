var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idRepresentante, email, senha FROM representante WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar1(razaoSocial, telefoneSuporte, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", razaoSocial, telefoneSuporte, cnpj);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `INSERT INTO empresa (razaoSocial, cnpj, telefone) VALUES ('${razaoSocial}', '${cnpj}', '${telefoneSuporte}');`

    // Retorna as 3 (cadastrar empresa, representante e endereço) querrys (comandos de BD) para ser executadas
    return database.executar(instrucaoSql);
}

function cadastrar2(representante, email, telefoneRepresentante, cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", representante, cpf, telefoneRepresentante, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `INSERT INTO representante (nome,  cpf, telefone, email, senha, idEmpresa) VALUES ('${representante}', '${cpf}', '${telefoneRepresentante}', '${email}', '${senha}', 1);`

    // Retorna as 3 (cadastrar empresa, representante e endereço) querrys (comandos de BD) para ser executadas
    return database.executar(instrucaoSql);
}

function cadastrar3(unidadeFederativa, cidade, bairro, cep, logradouro, num) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", unidadeFederativa, cidade, bairro, cep, logradouro, num);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `INSERT INTO endereco (idEmpresa, logradouro, numero, bairro, cidade, UF, cep) VALUES (1, '${logradouro}', '${num}', '${bairro}', '${cidade}', '${unidadeFederativa}', '${cep}');`

    // Retorna as 3 (cadastrar empresa, representante e endereço) querrys (comandos de BD) para ser executadas
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar1,
    cadastrar2,
    cadastrar3
};