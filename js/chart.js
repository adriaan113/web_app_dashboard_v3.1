
//------------VARIABLES------------//

const mainTraffic = document.getElementById('traffic-chart');
const dailyTraffic = document.getElementById('traffic-graph');
const mobileUsers = document.getElementById('mobile-graph');

Chart.defaults.global.defaultFontColor = '#ccc';
Chart.defaults.global.defaultFontSize = 11;


let mainChartHourData= [50, 70, 30, 100, 300, 180, 60, 40, 120, 30, 60]
let mainChartDailyData= [100, 200, 50, 700, 350, 180, 300, 443, 512, 600, 1200];
let mainChartWeekData= [400, 1200, 800, 1500, 2300, 1800, 1900, 1300, 800, 1400, 1700];
let mainChartMonthData= [600, 1000, 400, 1800, 2600, 1300, 1200, 1100, 700, 1500, 1900];

let dChartHourData= ['5','16','34','64','28','17','44'];
let dChartDailyData= ['20','40','70','30','100','45','65'];
let dChartWeekData= ['80','110','175','139','243','219','118'];
let dChartMonthData= ['550','180','75','300','350','460','200'];

let mChartHourData= ['40','20','40'];
let mChartDailyData= ['10','40','50'];
let mChartWeekData= ['60','30','10'];
let mChartMonthData= ['75','5','20'];


//------------UPDATE FUNCTIONS------------//

function addHourData(){
  mainChart.data.datasets[0].data= mainChartHourData;
  mainChart.update();

  dChart.data.datasets[0].data= dChartHourData;
  dChart.update();

  mChart.data.datasets[0].data= mChartHourData;
  mChart.update();
}

function addDailyData(){
  mainChart.data.datasets[0].data= mainChartDailyData;
  mainChart.update();

  dChart.data.datasets[0].data= dChartDailyData;
  dChart.update();

  mChart.data.datasets[0].data= mChartDailyData;
  mChart.update();
}

function addWeekData(){
  mainChart.data.datasets[0].data= mainChartWeekData;
  mainChart.update();

  dChart.data.datasets[0].data= dChartWeekData;
  dChart.update();

  mChart.data.datasets[0].data= mChartWeekData;
  mChart.update();
}

function addMonthData(){
  mainChart.data.datasets[0].data= mainChartMonthData;
  mainChart.update();

  dChart.data.datasets[0].data= dChartMonthData;
  dChart.update();

  mChart.data.datasets[0].data= mChartMonthData;
  mChart.update();
}


//------------MAIN TRAFFIC CHART------------//

const mainChart= new Chart(mainTraffic, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            data: mainChartWeekData,
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
        responsive: true,
        legend: {
          display: false,
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 5,
                bottom: 5
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

//------------DAILY TRAFFIC CHART------------//

const dChart= new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels:['S', 'M', 'T','W','T','F','S'],
    datasets: [{
        data: mainChartWeekData,
        backgroundColor: 'rgba(116, 118, 187, 1)',
        hoverBackgroundColor: 'rgb(78, 77, 112)',

    }]
  },
  options:{
    responsive: true,
    legend:{
      display: false,
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 5,
            bottom: 5
        }
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

//------------MOBILE USERS CHART------------//

const mChart= new Chart(mobileUsers, {
  type: 'doughnut',
  data: {
    labels:['Phones', 'Tablets', 'Desktop'],
    datasets: [{
      data: mChartWeekData,
      backgroundColor:[
        'rgb(116, 118, 187)',
        'rgb(136, 176, 189)',
        'lightgreen'
      ],
      hoverBackgroundColor:[
        'rgb(78, 77, 112)',
        'rgb(108, 138, 148)',
        'green'
      ],
      borderWidth: 0
    }]
  },
  options:{
    responsive: true,
    legend:{
      position: 'right',

    },layout: {
        padding: {
          left: 10,
          right: 10,
          top: 5,
          bottom: 5
        }
    }

  }
});


//------------EVENTS------------//

const hour= document.querySelector('.t-nav-link:nth-child(1)');
hour.addEventListener('click',()=>{
addHourData();
});

const daily= document.querySelector('.t-nav-link:nth-child(2)');
daily.addEventListener('click',()=>{
addDailyData();
});

const week= document.querySelector('.t-nav-link:nth-child(3)');
week.addEventListener('click',()=>{
addWeekData();
});

const month= document.querySelector('.t-nav-link:nth-child(4)');
month.addEventListener('click',()=>{
addMonthData();
});
