var f = new Date();
var d = f.getDate();
var m = f.getMonth() + 1;
var y = f.getFullYear();
if (d < 10) { d = '0' + d; }
if (m < 10) { m = '0' + m }
$("#fecha-accion").val(y + "-" + m + "-" + d);





var options = {
  series: [{
    // [Timestamp, O, H, L, C]
    // m - d- y
    data: [
      {
        x: new Date("2022 04 01").getTime(),
        y: [34.69, 34.91, 26.76, 29.63]
      },
      {
        x: new Date("2022 04 04").getTime(),
        y: [29.63, 33.65, 26.36, 31.09]
      },
      {
        x: new Date("2022 04 05").getTime(),
        y: [31.09, 32.43, 25.37, 26.26]
      },
      {
        x: new Date("2022 04 06").getTime(),
        y: [26.26, 28.19, 24.76, 27.45]
      },
      {
        x: new Date("2022 04 07").getTime(),
        y: [27.45, 24.28, 18.94, 22.45]
      },
      {
        x: new Date("2022 04 08").getTime(),
        y: [22.45, 25.67, 19.84, 23.18]
      },
      {
        x: new Date("2022 04 11").getTime(),
        y: [23.18, 23.18, 34.61, 31.14]
      },
      {
        x: new Date("2022 04 12").getTime(),
        y: [31.14, 32.95, 23.58, 23.58]
      },
      {
        x: new Date("2022 04 13").getTime(),
        y: [23.58, 26.54, 22.17, 27.57]
      },
      {
        x: new Date("2022 04 14").getTime(),
        y: [27.57, 28.61, 18.96, 18.96]
      },
      {
        x: new Date("2022 04 18").getTime(),
        y: [18.96, 34.21, 18.96, 33.44]
      },
      {
        x: new Date("2022 04 19").getTime(),
        y: [33.44, 48.75, 33.44, 48.62]
      },
      {
        x: new Date("2022-04-20").getTime(),
        y: [48.62, 57.15, 47.81, 53.71]
      },
      {
        x: new Date("2022-04-21").getTime(),
        y: [53.71, 60.12, 51.26, 57.63]
      },
      {
        x: new Date("2022-04-22").getTime(),
        y: [57.63, 57.63, 32.95, 33.71]
      },
      {
        x: new Date("2022-04-25").getTime(),
        y: [33.71, 27.47, 38.64, 36.90]
      },
      {
        x: new Date("2022-04-26").getTime(),
        y: [36.90, 31.13, 36.22, 33.95]
      }
      ,
      {
        x: new Date("2022-04-27").getTime(),
        y: [33.95, 19.65, 33.97, 19.65]
      },
      {
        x: new Date("2022-04-28").getTime(),
        y: [19.65, 19.65, 15.21, 16.23]
      }
    ]
  }],
  chart: {
    type: 'candlestick',
    height: '235px'
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
};

var chart = new ApexCharts(document.querySelector("#candlestick"), options);
chart.render();

