function obterDados() {
    var esteira = select_esteira.value
    var setor = select_setor.value

    document.getElementById('sensorIndividual').remove();
    document.getElementById('containerGrafico1').innerHTML = `<h2>Monitoramento Individual</h2> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;


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
    document.getElementById('containerGrafico1').innerHTML = `<h2>Monitoramento Individual</h2> <canvas height="115vh" id="sensorIndividual" class="grafico"></canvas>`;

    fetch(`/dados/buscar2/${sensor}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

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

function plotarGrafico(resposta, idUsuario) {
    var sensor = select_sensor.value
    console.log(resposta)
    console.log(idUsuario)

    console.log('iniciando plotagem do gráfico...');

    var labels = [];
    var lista_indice = [];

    var dados = {

        labels: labels,
        datasets: [{
            label: `${sensor}`,
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

    resposta.reverse()


    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.dtMonitoramento);
        dados.datasets[0].data.push(registro.produtoDetectado);
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


function logout(event) {
    if (confirm('Tem certeza que deseja fazer logout?')) {
        window.location.href = './dashboard.html'
    } else {
        event.preventDefault();
    }
}