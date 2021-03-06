var options1 = {
  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
      48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]
  }],
  chart: {
    type: 'bar',
    height: '155px'
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: -100,
          to: -46,
          color: '#F15B46'
        }, {
          from: -45,
          to: 0,
          color: '#FEB019'
        }]
      },
      columnWidth: '80%',
    }
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: 'Growth',
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "%";
      }
    }
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
      '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
      '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
      '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
      '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
      '2013-07-01', '2013-08-01', '2013-09-01'
    ],
    labels: {
      rotate: -90
    }
  }
};

var chart1 = new ApexCharts(document.querySelector("#column-chart"), options1);
chart1.render();





var options2 = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-02-11').getTime(),
            new Date('2019-03-11').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#43a61a'
            }
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#ef5350'
            }
          ]
        }
      ]
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        }
      ]
    },
    {
      name: 'Dan',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    height: '155px',
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%'
    }
  },
  xaxis: {
    type: 'datetime'
  },
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
};

var chart2 = new ApexCharts(document.querySelector("#timeline"), options2);
chart2.render();


// var options = {
//   series: [25, 15, 44, 55, 41, 17],
//   chart: {
//     width: '100%',
//     type: 'pie',
//   },
//   labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//   theme: {
//     monochrome: {
//       enabled: true
//     }
//   },
//   plotOptions: {
//     pie: {
//       dataLabels: {
//         offset: -5
//       }
//     }
//   },
//   title: {
//     text: "Monochrome Pie"
//   },
//   dataLabels: {
//     formatter(val, opts) {
//       const name = opts.w.globals.labels[opts.seriesIndex]
//       return [name, val.toFixed(1) + '%']
//     }
//   },
//   legend: {
//     show: false
//   }
// };
