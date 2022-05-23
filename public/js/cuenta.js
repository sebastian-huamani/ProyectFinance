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

    function daysInMonth(month, year, Arr) {
        let a = new Date(year, month, 0).getDate();
        let zero = ""

        for (let i = 1; i < a + 1; i++) {
            if (i < 10) { zero = "0" } else { zero = "" }
            let item = {
                "fecha": `${year}-${month}-${zero + i}`,
                "valor": 0
            }
            DataGraphic.push(item);
        }

        for (let index = 0; index < Object.keys(Arr).length; index++) {
            var search = DataGraphic.findIndex(p => p.fecha === Object.keys(Arr)[index]);
            if (search != -1) {
                DataGraphic[search].valor = Object.values(Arr)[index];
            }
        }

        for (let index = 0; index < DataGraphic.length; index++) {
            dateDGraphic.push(DataGraphic[index].fecha);
            valueDGraphic.push(DataGraphic[index].valor);
        }
        
    }

    function setValues(Arr) {
        let c = Object.values(Arr);
        for (let i = 0; i < c.length; i++) {
            let pos = dateDGraphic.findIndex(elem => elem === c[i].fecha);
            if (pos != -1) {
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

    var options1 = {
        series: [{
            name: 'Cash Flow ',
            stacked: true,
            width: '100%',
            data: []
        }],
        chart: {
            toolbar:{
                show: true,
                offsetX: 5,
                offsetY: -5,
                tools:{
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false | '<img src="/static/icons/reset.png" width="20">',
                    customIcons: []
                },
                export:{
                    csv: {
                        filename: undefined,
                        columnDelimiter: ',',
                        headerCategory: 'category',
                        headerValue: 'value',
                        dateFormatter(timestamp) {
                            return new Date(timestamp).toDateString()
                        }
                    },
                    svg: {
                        filename: undefined,
                    },
                    png: {
                        filename: undefined,
                    }
                }
            },
            type: 'bar',
            height: '155px'
        },
        noData: {
            text: 'Select a date...',
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

    $('#form-count').submit(function (e) {

        if (Object.keys(DataGraphic).length > 0) {
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
            try {
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
                            <p class="trans-descripcion">${item.categoria}</p>
                            <p class="trans-fecha">${item.fecha}</p>
                        </div>
                        <p class="trans-cantidad">${item.precio}</p>
                    </li>`;
                    
                    let itemVal = {
                        "fecha": `${item.fecha}`,
                        "valor": Number(item.precio)
                    }
                    temValues.push(itemVal);
                });
                
                daysInMonth(postData.month, postData.year, temValues);
                setValues(temValues);
                
                
                chart1.updateSeries([{
                    data: valueDGraphic
                }]);

                console.log(DataGraphic);
                console.log(valueDGraphic);
                console.log(dateDGraphic);
                
                $('#list').html(template);
            } catch (error) {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 4500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Selecciona una cuenta y filtra por la fecha !',
                })
            }
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

    $(document).on('click', '.transaccion-item', function () {
        let elemet = $(this)[0];
        let Item = $(elemet).attr('id');
        let count = $('#cuentaId').val();

        $('.transaccion-item').removeClass("background-selected");
        $("#list #"  + Item).addClass("background-selected");


        $.post('response/item-data.php', { Item, count }, function (response) {
            let items = JSON.parse(response);

            let template = `
            <p>Informacion Movimiento: </p>
            <div>
                <li>Valor: ${items.precio} </li>
                <li>F. Ingreso: ${items.fecha}</li>
                <li>Categoria: ${items.categoria} </li>
                </div>
                <p>Detalle: 
                    <p>${items.detalle}</p>
                </p>`;
            $('#item-info-box').html("");
            $('#item-info-box').html(template);
        });
    });

    $('#form-cuenta').submit(function (e) {
        const postData = {
            id: $('#idCuenta').val(),
            nombre: $('#nombre').val(),
            valor: $('#valor').val(),
            fcierref: $('#fcierref').val(),
            fpago: $('#fpago').val(),
            fcreacion: $('#fcreacion').val(),
            tipoCuenta: $('#tipoCuenta').val(),
            tipoMoneda: $('#tipoMoneda').val(),
            banco: $('#banco').val()
        }
        let url = editingCuenta === false ? 'response/cuenta-add.php' : 'response/cuenta-edit.php';
        $.post(url, postData, function (response) {
            $res = JSON.parse(response);
            if ($res['res'] == "OK") {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 4500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Categoria Guardada!'
                });

                fetchCuentas();
                editingCuenta = false;
                button_moving = false;
                Limpiar();
                $('#Home').removeClass('none');
                $('#form-cuenta').addClass('none');
                $('#delete-count').removeClass('none');
                $('#nombre-cuenta').removeClass('none');
                $('#edit-count').removeClass('none');
                $('#crear-cuenta').text('Crear Nueva Cuenta');

                $("#cuentaId").val(" ");
                $("#nombre-cuenta").text("Selecciona una de tus Cuentas");

            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 4500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Campo Vacio, Debes LLenarlo!',
                });
            }
            // $('#form-cuenta').trigger('reset');


        });
        e.preventDefault();
    });

    $(document).on('click', '#delete-count', function () {

        let id = $('#cuentaId').val();

        Swal.fire({
            title: 'Seguro de Eliminar?',
            text: "¡Al eliminar esta cuenta se eliminaran 'todo' lo relacionado incluyendo transacciones!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                $.post('response/cuenta-delete.php', { id }, function (response) {
                    fetchCuentas();
                    $('#nombre-cuenta').text("Seleciona una Tajera");
                });

                Swal.fire(
                    'Borrado!',
                    'Cuenta Eliminada',
                    'success'
                );
            }
        });
    });

    $('#crear-cuenta').on('click', function () {
        $('#Home').toggleClass('none');
        $('#form-cuenta').toggleClass('none');
        if (button_moving == false) {
            $('#crear-cuenta').text('Ir a Home')
            setDateToDay("#fcreacion");
            button_moving = true;
            $('#delete-count').addClass('none');
            $('#nombre-cuenta').addClass('none');
            $('#edit-count').addClass('none');

        } else {
            $('#crear-cuenta').text('Crear Nueva Cuenta');
            button_moving = false;
            $('#delete-count').removeClass('none');
            $('#nombre-cuenta').removeClass('none');
            $('#edit-count').removeClass('none');

            Limpiar();
        }
    });

    $(document).on('click', '#edit-count', function () {
        let id = $('#cuentaId').val();

        $.post('response/cuenta-data.php', { id }, function (response) {
            try {
                let Data = JSON.parse(response);
                $('#idCuenta').val(Data.id);
                $('#nombre').val(Data.nombre);
                $('#valor').val(Data.valor);
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
                $('#delete-count').toggleClass('none');
                $('#nombre-cuenta').toggleClass('none');
                $('#edit-count').toggleClass('none');
            } catch (error) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 4500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Selecciona una Cuenta    !',
                });
            }
        });
    });

    $(document).on('click', '.btn-ic', function () {

        chart1.updateSeries([{
            data: []
        }]);

        let elemet = $(this)[0].parentElement.parentElement.parentElement;
        let id = $(elemet).attr('id');
        $('#cuentaId').val(id);
        $(".item").removeClass("background-selected");
        $("#" + id).addClass("background-selected");

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
            let items = JSON.parse(response);
            let template = `
                <p> Informacion Tarjeta</p>
                <div>
                    <p>Valor : ${items.moneda + items.valor}</p>`;

            if (items.fcierre == null) {
                template += `</div>`;
            } else {
                template += ` 
                    <p>Cierre : ${items.fcierre}</p>
                    <p>Pago : ${items.fpago}</p>
                </div>`;
            }
            $("#card-info").html(template);
        });
    });

});