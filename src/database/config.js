var mysql = require("mysql2");

// CONEXÃO DO BANCO MYSQL SERVER
var mySqlConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};


function executar(instrucao1, instrucao2, instrucao3) {

    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }



    // Lança as querrys (comandos de BD) no banco
    return new Promise(function (resolve, reject) {

        // Cadastra a empresa no banco
        var conexao = mysql.createConnection(mySqlConfig);
        conexao.connect();
        conexao.query(instrucao1, function (erro, resultados) {
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        conexao.on('error', function (erro) {
            return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
        });

        if (instrucao2 == 'passe') {
                conexao.end();
            }

        // Espera um segundo para cadastrar o representante e o endereço
        setTimeout(() => {
            console.log(instrucao2);
                   
            conexao.connect();
            conexao.query(instrucao2, function (erro, resultados) {
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });

            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
            });
            conexao.connect();
            conexao.query(instrucao3, function (erro, resultados) {
                conexao.end();
                if (erro) {
                    reject(erro);
                }
                console.log(resultados);
                resolve(resultados);
            });
            conexao.on('error', function (erro) {
                return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
            });

        }, 1000)


    });



}

module.exports = {
    executar
};