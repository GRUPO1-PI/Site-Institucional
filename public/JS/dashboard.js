
var dados;

function obterDados() {
    var esteira = select_esteira.value
    var setor = select_setor.value

    document.getElementById('sensorIndividual').remove();
    document.getElementById('containerGrafico1').innerHTML = `<h3>Monitoramento de Sensor Individual por Segundo</h3> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;


    fetch(`/dados/buscar/${setor}/${esteira}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 1: ${JSON.stringify(resposta)}`);

                    document.getElementById(`select_sensor`).innerHTML = ''

                    for (var i = 0; i < resposta.length; i++) {
                        var sensor_atual = resposta[i].numSerie;
                        document.getElementById(`select_sensor`).innerHTML += `<option id="optSensor${i + 1}">${sensor_atual}</option>`;

                    }

                    obterDados2()
                    obterDados3()

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

}

function obterDados2() {
    var sensor = select_sensor.value
    document.getElementById('sensorIndividual').remove();
    document.getElementById('containerGrafico1').innerHTML = `<h3>Monitoramento de Sensor Individual por Segundo</h3> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;

    fetch(`/dados/buscar2/${sensor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 2: ${JSON.stringify(resposta)}`);
                    resposta.reverse()
                    plotarGrafico(resposta)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );
}

function obterDados3() {
    var esteira = select_esteira.value
    var setor = select_setor.value

    fetch(`/dados/buscar3/${esteira}/${setor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    tabela.innerHTML = `<tr><th>Sensor</th><th>Alertas</th></tr>`

                    for (var i = 0; i < resposta.length; i++) {

                        tabela.innerHTML += `<tr><td>${resposta[i]['numSerie']}</td><td id='sensor${i + 1}'>${resposta[i]['SUM(m.produtoDetectado)']}</td></tr>`;
                    }

                    atualizar2()

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

}

function obterDados4() {
    obterDados()
    atualizar3()
    exibirKPI1()
    exibirKPI2()
    exibirKPI3()
}

function plotarGrafico(resposta) {
    var sensor = select_sensor.value

    console.log('iniciando plotagem do gráfico...');

    let labels = [];

    let dados = {

        labels: labels,
        datasets: [{
            label: `${sensor} `,
            data: [],
            fill: false,
            borderColor: 'blue',
            backgroundColor: 'blue',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];

        labels.push(registro.dtMonitoramento);
        dados.datasets[0].data.push(registro.produtoDetectado);
        labels[i] = labels[i].slice(11, 19);

    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'line',
        data: dados,
    };

    myChart = new Chart(
        document.getElementById(`sensorIndividual`),
        config
    );

    proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 1000);
}

function atualizarGrafico(dados, myChart) {
    var sensor = select_sensor.value

    fetch(`/dados/atualizar/${sensor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos atualizar: ${JSON.stringify(novoRegistro)} `);
                    console.log(`Dados atuais do gráfico atualizar: `);
                    console.log(dados);

                    novoRegistro[0].dtMonitoramento = novoRegistro[0].dtMonitoramento.slice(11, 19);
                    if (novoRegistro[0].dtMonitoramento == dados.labels[dados.labels.length - 1]) {
                        console.log("---------------------------------------------------------------")
                        console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                        console.log("Horário do novo dado capturado:")
                        console.log(novoRegistro[0].dtMonitoramento)
                        console.log("Horário do último dado capturado:")
                        console.log(dados.labels[dados.labels.length - 1])
                        console.log("---------------------------------------------------------------")
                    } else {
                        // tirando e colocando valores no gráfico
                        dados.labels.shift(); // apagar o primeiro
                        dados.labels.push(novoRegistro[0].dtMonitoramento); // incluir um novo momento

                        dados.datasets[0].data.shift();  // apagar o primeiro de umidade
                        dados.datasets[0].data.push(novoRegistro[0].produtoDetectado); // incluir uma nova medida de umidade

                        myChart.update();
                    }

                    // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar

                    console.log(`${dados.datasets[0].data[0]}`)
                    console.log(`${dados.datasets[0].data[9]}`)
                    proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 1000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 1000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p / gráfico: ${error.message} `);
        });

}

function logout(event) {
    if (confirm('Tem certeza que deseja fazer logout?')) {
        window.location.href = './dashboard.html'
    } else {
        event.preventDefault();
    }
}

function atualizar2() {

    var esteira = select_esteira.value
    var setor = select_setor.value

    fetch(`/dados/atualizar2/${esteira}/${setor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    // console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    // if (resposta != undefined) {
                    for (var i = 0; i < resposta.length; i++) {
                        document.getElementById(`sensor${i + 1}`).innerHTML = resposta[i]['SUM(m.produtoDetectado)']
                    }
                    // }

                });
            }
            else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

    setTimeout(atualizar2, 2000);

};

function atualizar3() {

    fetch(`/dados/atualizar3`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    // console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    // if (resposta != undefined) {
                    for (var i = 0; i < resposta.length; i++) {
                        document.getElementById(`td${i}`).innerHTML = resposta[i]['SUM(m.produtoDetectado)']
                    }
                    // }

                });
            }
            else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

    setTimeout(atualizar3, 2000);

};

function exibirKPI1() {

    var esteira = select_esteira.value
    var setor = select_setor.value

    fetch(`/dados/exibirKPI1/${esteira}/${setor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    document.getElementById('numAlertasEsteira').innerHTML = resposta[0]['SUM(m.produtoDetectado)']

                    exibirKPI1()

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );
}

function exibirKPI2() {

    var setor = select_setor.value
    var alertas = []
    var maior = 0

    fetch(`/dados/exibirKPI2/${setor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    for (var i = 0; i < resposta.length; i++) {
                        alertas.push(resposta[i]['SUM(m.produtoDetectado)'])
                    }

                    for (var i = 0; i < alertas.length; i++) {
                        var alerta_atual = alertas[i]

                        if (maior < alerta_atual) {
                            maior = alerta_atual
                        }
                    }

                    for (var i = 0; i < alertas.length; i++) {
                        var alerta_atual = alertas[i]

                        if (maior == alerta_atual) {
                            document.getElementById('numAlertasEsteira2').innerHTML = `Esteira ${resposta[i].numero}`
                        }

                    }

                    exibirKPI2()

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );
}

function exibirKPI3() {

    fetch(`/dados/exibirKPI3`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos 3: ${JSON.stringify(resposta)}`);

                    document.getElementById('numAlertasEsteira3').innerHTML = resposta[0]['SUM(m.produtoDetectado)']

                    if (resposta[0]['SUM(m.produtoDetectado)'] <= 5000) {
                        document.getElementById('situacaoFabrica').innerHTML = `<font color="#00ff00">Bom`
                    } else if (resposta[0]['SUM(m.produtoDetectado)'] <= 10000) {
                        document.getElementById('situacaoFabrica').innerHTML = `<font color="#ffea00">Regular`
                    } else if (resposta[0]['SUM(m.produtoDetectado)'] <= 15000) {
                        document.getElementById('situacaoFabrica').innerHTML = `<font color="##ff9100">Atenção`
                    } else {
                        document.getElementById('situacaoFabrica').innerHTML = `<font color="##ff0000">Crítico`
                    }
                    document.getElementById('numAlertasEsteira3').innerHTML = resposta[0]['SUM(m.produtoDetectado)']

                    exibirKPI3()

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );
}