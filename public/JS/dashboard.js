setTimeout(
    function teste() {

        // Sensores da Esteira
        sensoresEsteira = new Chart(document.getElementById('sensoresEsteira'), {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00'],
                datasets: [
                    {
                        label: 'A12',
                        data: [1, 2, 3, 2, 3],
                        fill: false,
                        bckgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    },
                    {
                        label: 'B14',
                        data: [2, 1, 1, 2, 1],
                        fill: false,
                        bckgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgb(192, 75, 75)',
                        tension: 0.1
                    }
                ]
            }
        });

        // Sensor Individual
        sensorIndividual = new Chart(document.getElementById('sensorIndividual'), {
            type: 'line',
            data: {
                labels: ['10:00', '11:00', '12:00', '13:00', '14:00'],
                datasets: [{
                    label: 'A12',
                    data: [1, 2, 3, 2, 3],
                    fill: false,
                    bckgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        // Setores Geral
        setoresGeral = new Chart(document.getElementById('setoresGeral'), {
            type: 'bar',
            data: {
                labels: ['Dia'],
                datasets: [{
                    label: 'Seleção de Matéria Prima',
                    data: [3],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132)'
                    ],

                }, {
                    label: 'Higienização',
                    data: [2],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 159, 64)'
                    ],
                }, {
                    label: 'Processamento',
                    data: [1],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 205, 86)'
                    ]
                }, {
                    label: 'Embalagem',
                    data: [1],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 205, 86)'
                    ],
                }, {
                    label: 'Armazenamento',
                    data: [2],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 159, 64)'
                    ],
                }, {
                    label: 'Distribuição',
                    data: [3],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132)'
                    ],
                }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });


        function logout(event) {
            if (confirm('Tem certeza que deseja fazer logout?')) {
                window.location.href = './dashboard.html'
            } else {
                event.preventDefault();
            }
        }
    }
    , 1)