$(document).ready(function () {


    let labelData = [];
    let priceData = [];

    $.ajax({
        type: "POST",
        url: "response/chart-items.php",
        success: function (response) {
            var Items = JSON.parse(response);
            Items.forEach(item => {
                labelData.push(item[0]);
                if (item[1] < 0) {
                    var price = item[1] * -1;
                    priceData.push(price);
                } else {
                    priceData.push(item[1]);
                }
            });

            var optionsDonut = {
                series: priceData,
                chart: {
                    type: 'donut',
                    height: '170px'
                },
                plotOptions: {
                    pie: {
                        expandOnClick: true,
                        donut: {
                            size: '55%',
                        },
                        customScale: 1.2
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex];
                        var value = val.toFixed(1);
                        if(value > 10){
                            return [val.toFixed(1) +"%"];
                        } 
                    },
                    style: {
                        fontSize: '12px'
                    },
                    dropShadow: {
                        blur: 1.5,
                        opacity: 0.9
                    }
                },
                labels: labelData,
                title: {
                    text: '_',
                    align: 'center',
                    offsetY: -10,
                    style: {
                        fontSize: '4px',
                        color: '#ffffff'
                    }
                },
                legend: {
                    show: false
                }
            };

            var chartDonut = new ApexCharts(document.querySelector("#pie"), optionsDonut);
            chartDonut.render();
        }
    });

    $.ajax({
        type: "post",
        url: "response/categoria-list.php",
        success: function (response) {
            var Items = JSON.parse(response);
            template = "";
            Items.forEach(item => {
                template += `<li><a href="#">${item.nombre}</a></li>`;
            });
            $('.box-item #list').html(template);
        }
    });

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
                data: trigoSeries(31, 20)
            },
            {
                name: "Night Time",
                data: trigoSeries(31, 11)
            },
        ],
        title: {    
            floating: false,
            text: 'Customers',
            align: 'left',
            style: {
                fontSize: '23px'
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

    function trigoSeries(cnt, strength) {
        var data = [];
        for (var i = 0; i < cnt; i++) {
            data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
        }
        return data;
    }


});