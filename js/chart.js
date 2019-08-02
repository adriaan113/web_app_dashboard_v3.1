const ctx = document.getElementById('traffic-chart');

Chart.defaults.global.defaultFontColor = '#ccc';
Chart.defaults.global.defaultFontSize = 11;

const traffic = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            data: [400, 1200, 800, 1500, 2300, 1800, 1900, 1300, 800, 1400, 1700 ],
            backgroundColor: 'rgba(116, 118, 187, 0.3)',
            borderColor:'rgba(116, 118, 187, 1)',
            borderWidth: 2,
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderWidth: '2',
            pointBorderColor: '#4e4d70',
            pointRadius: '6',
            pointHoverBorderWidth: '8',
            pointHitRadius: '6',

        }]
    },
    options: {
        legend: {
          display: false,
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 20
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

const dt = document.getElementById('traffic-graph');

new Chart( dt, {
  type: 'bar',
  data: {
    labels:['S', 'M', 'T','W','T','F','S'],
    datasets: [{
        data:[ '80','110','175','139','243','219','118'],
        backgroundColor: 'rgba(116, 118, 187, 1)',
    }]
  },
  options:{
    legend:{
      display: false,
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },

        }]
    }
  }

});
