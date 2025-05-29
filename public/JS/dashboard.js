function obterDados() {
    var esteira = select_esteira.value
    var setor = select_setor.value

    document.getElementById('sensorIndividual').remove();
    document.getElementById('containerGrafico1').innerHTML = `<h2>Monitoramento de Sensor Individual por Segundo</h2> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;


    fetch(`/dados/buscar/${setor}/${esteira}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

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
    document.getElementById('containerGrafico1').innerHTML = `<h2>Monitoramento de Sensor Individual por Segundo</h2> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;

    fetch(`/dados/buscar2/${sensor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse()
                    plotarGrafico(resposta)
                    atualizarGrafico()
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
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    plotarGraficoBarra(resposta)
                    //atualizarGrafico()
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

    document.getElementById('sensoresEsteira').remove();
    document.getElementById('containerEsteira').innerHTML = `<h2 id="tituloSensorIndi">Monitoramento de Sensores por Esteira </h2> <canvas height="115vh" id="sensoresEsteira" class="grafico"></canvas>`;

}

function obterDados4() {

    fetch(`/dados/buscar4`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    plotarGraficoBarra2(resposta)
                    
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        }
        );

    document.getElementById('setoresGeral').remove();
    document.getElementById('containerGeral').innerHTML = `<h2 id="textoGraficoPorMinuto">Monitoramnto de Alertas por Setor</h2><canvas height="58vh" id="setoresGeral" class="grafico"></canvas>`
    obterDados()
}

function plotarGrafico(resposta) {
    var sensor = select_sensor.value

    console.log('iniciando plotagem do gráfico...');

    var labels = [];

    var dados = {

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
}

function plotarGraficoBarra(resposta) {

    console.log('iniciando plotagem do gráfico...');

    var labels = ['','','','']

    var dados = {

        labels: labels,
        datasets: [{
            label: resposta[0]['numSerie'],
            data: [],
            fill: false,
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            tension: 0.1
        },
        {
            label: resposta[1]['numSerie'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        },
        {
            label: resposta[2]['numSerie'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        },
        {
            label: resposta[3]['numSerie'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        }]
    }

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro['SUM(m.produtoDetectado)']);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
    };

    myChart = new Chart(
        document.getElementById(`sensoresEsteira`),
        config
    );
}

function plotarGraficoBarra2(resposta) {

    console.log('iniciando plotagem do gráfico...');

    var labels = ['','','','', '']

    var dados = {

        labels: labels,
        datasets: [{
            label: 'Seleção',
            data: [],
            fill: false,
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90', '#006400', '#05081c'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90', '#006400', '#05081c'],
            tension: 0.1
        },
        {
            label: resposta[1]['nome'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        },
        {
            label: resposta[2]['nome'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        },
        {
            label: resposta[3]['nome'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        },
        {
            label: resposta[4]['nome'],
            data: [],
            borderColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
            backgroundColor: ['#002B4D', 'blue', '#6699CC', '#90EE90'],
        }]
    }

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.datasets[0].data.push(registro['SUM(m.produtoDetectado)']);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    const config = {
        type: 'bar',
        data: dados,
    };

    myChart = new Chart(
        document.getElementById(`setoresGeral`),
        config
    );
}

function atualizarGrafico() {
    var sensor = select_sensor.value

    fetch(`/ dados / atualizar / ${sensor} `, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {

                    console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)} `);
                    console.log(`Dados atuais do gráfico: `);
                    console.log(novoRegistro);

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
                    proximaAtualizacao = setTimeout(() => atualizarGrafico(), 2000);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(), 2000);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p / gráfico: ${error.message} `);
        });

        atualizarGrafico()
}


function logout(event) {
    if (confirm('Tem certeza que deseja fazer logout?')) {
        window.location.href = './dashboard.html'
    } else {
        event.preventDefault();
    }
}