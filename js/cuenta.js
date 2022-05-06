$(document).ready(function () {
    editingCuenta = false;
    button_moving = false;
    let DataGraphic = [];
    let dateDGraphic = [];
    let valueDGraphic = [];

    fetchCuentas();
    cmbTipoCuenta();
    cmbTipoMoneda();
    setDateToDay("#fcreacion");

    window.Apex = {
        tooltip: {
          theme: 'dark'
        }
    };

    function daysInMonth (month, year, Arr) { 
        let a = new Date(year, month, 0).getDate(); 
        let zero = ""

        for (let i = 1; i < a +1; i++) {
            if(i < 10){ zero = "0"} else { zero = "" }
            let item = {
                "fecha" : `${year}-${month}-${zero + i}`,
                "valor" : 0
            }
            DataGraphic.push(item);
        }

        for (let index = 0; index < Object.keys(Arr).length; index++) {
            var search = DataGraphic.findIndex(p => p.fecha === Object.keys(Arr)[index]);
            if(search != -1){
                DataGraphic[search].valor = Object.values(Arr)[index];
            }
        }

        for(let index = 0; index < DataGraphic.length; index++) {
            dateDGraphic.push(DataGraphic[index].fecha);
            valueDGraphic.push(DataGraphic[index].valor);
        }
    }

    function setValues(Arr){
        let c = Object.values(Arr);
        for (let i = 0; i < c.length; i++) {
            let pos = dateDGraphic.findIndex(elem => elem === c[i].fecha)
            if (pos != 0) {
                valueDGraphic[pos] += c[i].valor;  
            }
        }
    }

    function cmbTipoCuenta() {
        $.ajax({
            url: 'response/tipo-cuenta.php',
            type: 'POST',
            success: function (response) {
                let items = JSON.parse(response);
                let template = " <option value='0' disabled selected>Tipo Cuenta</option>";
                items.forEach(item => {
                    template += `
                    <option value="${item.id}" id="${item.id}cuenta">${item.nombre}</option>`
                });
                $('#tipoCuenta').html(template);
            }
        });
    }

    function cmbTipoMoneda() {
        $.ajax({
            url: 'response/tipo-moneda.php',
            type: 'POST',
            success: function (response) {
                let items = JSON.parse(response);
                let template = "<option value='0' disabled selected>Tipo Moneda</option>";
                items.forEach(item => {
                    template += `
                    <option value="${item.id}">${item.nombre}</option>`
                });
                $('#tipoMoneda').html(template);
            }
        });
    }

    function fetchCuentas() {
        $.ajax({
            url: 'response/cuentas-list.php',
            type: 'POST',
            success: function (response) {
                let Cuentas = JSON.parse(response);
                let template = "";
                Cuentas.forEach(item => {
                    template += `
                    <div class="item" id="${item.id}">
                        <div class="item-card">
                            <div class="footer-ic">
                                <p class="fecha-ic">fecha creacion: ${item.creacionF}</p>
                                <button type="submit" class="btn-ic" id="informacion-cuenta">Informacion</button>
                            </div>
                            <p class="bin-ic" id="bin-ic">${item.nombre}</p>
                            <div class="footer-ic">
                                <button class="btn-ic" id="${item.id}"> <i class="fa-solid fa-angle-right"></i> Ver</button>
                                <p class="tipo-ic"> <span class="entidad-ic">${item.banco} : </span>${item.tipoCuenta}</p>
                            </div>
                        </div>
                    </div>`
                });
                $('#items-cuentas').html(template);
            }
        });
    }

    function Limpiar() {
        $('#nombre').val(" ");
        $('#valor').val(" ");
        $('#fciclof').val(" ");
        $('#fcierref').val(" ");
        $('#fpago').val(" ");
        $('#fcreacion').val(" ");
        $("#tipoCuenta > option[value=0]").attr("selected", true);
        $("#tipoMoneda > option[value=0]").attr("selected", true);
        $('#banco').val(" ");
    }

    function setDateToDay(elemet) {
        var f = new Date();
        var d = f.getDate();
        var m = f.getMonth() + 1;
        var y = f.getFullYear();
        if (d < 10) { d = '0' + d; }
        if (m < 10) { m = '0' + m }
        $(elemet).val(y + "-" + m + "-" + d);
    }

    $('#form-count').submit(function (e) {
        
        if(Object.keys(DataGraphic).length > 0){
            DataGraphic.splice(0, Object.keys(DataGraphic).length);
            valueDGraphic.splice(0, Object.keys(valueDGraphic).length);
            dateDGraphic.splice(0, Object.keys(dateDGraphic).length);
        }

        const postData = {
            month: $('#Month').val(),
            year: $('#Year').val(),
            count: $('#cuentaId').val()
        };
        $.post('response/cuenta-items.php', postData, function (response) {
            let Items = JSON.parse(response);
            let template = "";
            let temValues = [];

            Items.forEach(item => {
                template += `
                <li class="transaccion-item" id="${item.id}">
                    <div class="idItemCuenta">
                        <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">${item.nombre}</p>
                        <p class="trans-fecha">${item.fecha}</p>
                    </div>
                    <p class="trans-cantidad">${item.precio}</p>
                </li>`;

                let itemVal = {
                    "fecha" : `${item.fecha}`,
                    "valor" : Number(item.precio)
                }
                temValues.push(itemVal);
            });
            
            daysInMonth(postData.month, postData.year, temValues);
            setValues(temValues);

            var options1 = {
                series: [{
                    name: 'Cash Flow ',
                    stacked: true,
                    width: '100%',
                    data: []
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
                        endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    title: {
                    },
                    labels: {
                        // formatter: function (y) {
                        //     return y.toFixed(0) + "%";
                        // }
                    }
                },  
                xaxis: {
                    type: 'datetime',
                    categories: dateDGraphic,
                    labels: {
                        rotate: -90,
                        format: 'dd'
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false
                }
            };

            var chart1 = new ApexCharts(document.querySelector("#column-chart"), options1);
            chart1.render();

            chart1.updateSeries([{
                data :valueDGraphic
            }]);

            $('#list').html(template);
        });
        e.preventDefault();
    });

    $('#tipoCuenta').change(function () {
        var optionSelected = $(this).find("option:selected");
        var valueSelected = optionSelected.val();
        // var textSelected   = optionSelected.text();
        if (valueSelected == 2) {
            $('.box-info-reverse-t').removeClass('none');
        } else {
            $('.box-info-reverse-t').addClass('none');
        }
    });

    $('#crear-cuenta').on('click', function () {
        $('#Home').toggleClass('none');
        $('#form-cuenta').toggleClass('none');
        if (button_moving == false) {
            $('#crear-cuenta').text('Ir a Home')
            setDateToDay("#fcreacion");
            button_moving = true;
        } else {
            $('#crear-cuenta').text('Crear Nueva Cuenta');
            button_moving = false;
            Limpiar();
        }
    });

    $(document).on('click', '.transaccion-item', function () {
        let elemet = $(this)[0];
        let Item = $(elemet).attr('id');
        let count = $('#cuentaId').val();
        $.post('response/item-data.php', { Item, count }, function (response) {
            let items = JSON.parse(response);

            let template = `
            <p>Informacion Movimiento</p>
            <div>
                <li>nombre: ${items.nombre} </li>
                <li>Valor: ${items.precio} </li>
                <li>F. Ingreso: ${items.fecha}</li>
                <li>Estado: ${items.estado}</li>
                <li>Categoria: ${items.categoria} </li>
                </div>
                <p>Detalle: ${items.detalle}</p>`;
            $('#item-info-box').html("");
            $('#item-info-box').html(template);
        });
    });

    $('#form-cuenta').submit(function (e) {
        const postData = {
            nombre: $('#nombre').val(),
            valor: $('#valor').val(),
            fciclof: $('#fciclof').val(),
            fcierref: $('#fcierref').val(),
            fpago: $('#fpago').val(),
            fcreacion: $('#fcreacion').val(),
            tipoCuenta: $('#tipoCuenta').val(),
            tipoMoneda: $('#tipoMoneda').val(),
            banco: $('#banco').val()
        }
        let url = editingCuenta === false ? 'response/cuenta-add.php' : 'response/cuenta-edit.php';
        $.post(url, postData, function (repsonse) {
            // $('#Home').toggleClass('none');
            fetchCuentas();
            editingCuenta = false;
            Limpiar();
        });
        e.preventDefault();
    });

    $(document).on('click', '#delete-count', function () {
        if (confirm('are you sure?')) {
            let id = $('#cuentaId').val();
            $.post('response/cuenta-delete.php', { id }, function (response) {
                fetchCuentas();
                $('#nombre-cuenta').text("Seleciona una Tajera");
            });
        }
    });

    $(document).on('click', '#edit-count', function () {
        let id = $('#cuentaId').val();
        $.post('response/cuenta-data.php', { id }, function (response) {
            let Data = JSON.parse(response);
            $('#nombre').val(Data.nombre);
            $('#valor').val(Data.valor);
            $('#fciclof').val(Data.fechaCiclof);
            $('#fcierref').val(Data.fechaCierref);
            $('#fpago').val(Data.fechaPgo);
            $('#fcreacion').val(Data.creacionF);
            $('#tipoCuenta').val(Data.tipoCuenta);
            $('#tipoMoneda').val(Data.tipoMoneda);
            $('#banco').val(Data.banco);
            editingCuenta = true;
            $('#Home').toggleClass('none');
            $('#form-cuenta').toggleClass('none');
            $('#crear-cuenta').text('Ir a Home')
            button_moving = true;
        });
    });

    $(document).on('click', '.btn-ic', function () {
        let elemet = $(this)[0].parentElement.parentElement.parentElement;
        let id = $(elemet).attr('id');
        $('#cuentaId').val(id);

        let elemet2 = $(this)[0].parentElement.parentElement.parentElement;
        let id2 = $(elemet2).attr('id');
        c = "#" + id2 + " .item-card .bin-ic";
        let nombre = $(c).text();
        let template = `
                <div id="image-items">
                <hr>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>`;
        $('#nombre-cuenta').text(nombre.toUpperCase());
        $('#list').html(template);
        $('#item-info-box').html("");

        $.post('response/cuenta-data-count.php', { id }, function (response) {
            let items = JSON.parse(response);;
            let template = `
                <p> Informacion Tarjeta</p>
                <div>
                    <p>Valor : ${items.moneda + items.valor}</p>`;

            if (items.fciclo == null) {
                template += `</div>`;
            } else {
                template += ` 
                    <p>Ciclo : ${items.fciclo}</p>
                    <p>Cierre : ${items.fcierre}</p>
                    <p>Pago : ${items.fpago}</p>
                </div>`;
            }
            $("#card-info").html(template);
        });
    });



});