$(document).ready(function () {

    var optionsLine = {
        chart: {
            height: '235px',
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        plotOptions: {
            stroke: {
                width: 4,
                curve: 'smooth'
            },
        },
        colors: colorPalette,
        series: [
            {
                name: "Day Time",
                data: trigoSeries(52, 20)
            },
            {
                name: "Night Time",
                data: trigoSeries(52, 27)
            },
        ],
        title: {
            floating: false,
            text: 'Customers',
            align: 'left',
            style: {
                fontSize: '18px'
            }
        },
        subtitle: {
            text: '168,215',
            align: 'center',
            margin: 0,
            offsetY:10,
            style: {
                color: '#222',
                fontSize: '24px',
            }
        },
        markers: {
            size: 0
        },

        grid: {

        },
        xaxis: {
            labels: {
                show: true
            },
            axisTicks: {
                show: true
            },
            tooltip: {
                enabled: false
            }
        },
        yaxis: {
            tickAmount: 2,
            labels: {
                show: false
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            min: 0,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left', 
            offsetY: -20,
            offsetX: -30
        }

    }
    var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']
    var chartLine = new ApexCharts(document.querySelector('#candlestick'), optionsLine);
    chartLine.render();

    // a small hack to extend height in website sample dashboard
    // .then(function () {
    //     var ifr = document.querySelector("#wrapper");
    //     if (ifr.contentDocument) {
    //         ifr.style.height = ifr.contentDocument.body.scrollHeight + 20 + 'px';
    //     }
    // });

    function trigoSeries(cnt, strength) {
        var data = [];
        for (var i = 0; i < cnt; i++) {
            data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
        }
      
        console.log(data);
        return data;
      }

});