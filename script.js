var myChart1 = document.getElementById('myChart1').getContext('2d');

var massPopChart = new Chart(myChart1, {
  type:'bar', // bar, line, bubble,
  data:{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','agoust'],
    datasets:[{
      label:'Population',
      data:[
        6175,
        1810,
        1530,
        1065,
        1051,
        -950,
        2001,
        5632
      ],
      // backgroundColor:'green',
      backgroundColor:[
        '#26a69a',
        '#26a69a',
        '#26a69a',
        '#26a69a',
        '#26a69a',
        '#ef5350',
        '#26a69a',
        '#26a69a'
      ],
      borderWidth:0,
      borderColor:null,
      hoverBorderWidth:0,
      hoverBorderColor: null
    }]
  },
  options:{
    title:{
      display:true,
      text:'Largest Cities In Massachusetts',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    responsive: true,
    maintainAspectRatio: true,
    tooltips:{
      enabled:true
    },
    plugins:{
      legend: {
        display: false,
      }
    },
    scales: {
      x:{
        grid:{
          display:false,
        }
      },
      y:{
        grid:{
          display:false,
        }
      }
    }
  }
});



var myChart2 = document.getElementById('myChart2').getContext('2d');



var massPopChart = new Chart(myChart2, {
  data:{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets:[{
      type:'line', // bar, pie, line, doughnut, radar, polarArea , bubble
      label:'ventas',
      data:[
        305,
        322,
        354,
        360,
        386,
        380,
        410,
      ],
      pointBackgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      backgroundColor:['rgba(54, 162, 235, 0.6)',],
      borderWidth:1,
      hoverOffset: 10,
      pointRadius: 5,
      fill:true,
     
    //   borderColor:'#777',
    //   hoverBorderWidth:5,
    //   hoverBorderColor:'#000'
    },{
      type:'line', // bar, pie, line, doughnut, radar, polarArea , bubble
      label:'Objetivo',
      data:[
        315,
        332,
        364,
        270,
        396,
        400,
        430,
      ],
      pointBackgroundColor:['#f5deb3'],
      backgroundColor:['#f5deb3'],
      borderWidth:1,
      hoverOffset: 10,
      pointRadius: 5,
      fill:true
    }]
  },
  options:{
    responsive: true,
    tooltips:{
      // enabled:false
    },
    plugins:{
      legend: {
        display: false,
      }
    }, 
    scales: {
        x:{
          grid:{
            display:false,
          }
        },
        y:{
          grid:{
            display:false,
          }
        }
    }
  }
});




var myChart3 = document.getElementById('myChart3').getContext('2d');

var massPopChart = new Chart(myChart3, {
  type:'doughnut', // doughnut , pie
  data:{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets:[{
      label:'Population',
      data:[
        6175,
        1810,
        1530,
        1065,
        1051,
        950,
        2001
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth:3,
      hoverBorderWidth:0,
      hoverBorderColor:false,
      hoverOffset: 15
    }]
  },
  options:{
    title:{
      display:false,
      text:'Largest Cities In Massachusetts',
      fontSize:25
    },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    responsive: true,
    tooltips:{
      enabled:true
    },
    plugins:{
      legend: {
        display: false,
      }
    }
  }
});

