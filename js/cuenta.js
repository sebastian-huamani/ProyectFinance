$(document).ready(function(){
    editingCuenta = false;
    button_moving = false; 

    fetchCuentas();
    cmbTipoCuenta();
    cmbTipoMoneda();
    setDateToDay("#fcreacion");

    function Limpiar(){
        $('#nombre').val(" ");
        $('#valor').val(" ");
        $('#fciclof').val(" ");
        $('#fcierref').val(" ");
        $('#fpago').val(" ");
        $('#fcreacion').val(" ");
        $("#tipoCuenta > option[value=0]").attr("selected",true);
        $("#tipoMoneda > option[value=0]").attr("selected",true);
        $('#banco').val(" ");
    }
    
    function setDateToDay(elemet){
        var f = new Date();
        var d = f.getDate();
        var m = f.getMonth() + 1;
        var y = f.getFullYear();
        if(d<10){ d='0'+d;}
        if(m<10){ m='0'+m }
        $(elemet).val(y + "-" + m + "-" + d);
    }

    $('#crear-cuenta').on('click', function(){
        $('#Home').toggleClass('none');
        $('#form-cuenta').toggleClass('none');
        if(button_moving == false){
            $('#crear-cuenta').text('Ir a Home')
            setDateToDay("#fcreacion");
            button_moving = true;
        } else{
            $('#crear-cuenta').text('Crear Nueva Cuenta');
            button_moving = false;
            Limpiar();
        }
    });

    function cmbTipoCuenta(){
        $.ajax({
            url: 'response/tipo-cuenta.php',
            type: 'POST',
            success: function(response){
                let items = JSON.parse(response);
                let template = " <option value='0' disabled selected>Tipo Cuenta</option>";
                items.forEach(item => {
                    template += `
                    <option value="${item.id}">${item.nombre}</option>`
                });
                $('#tipoCuenta').html(template);
            }
        });
    }

    function cmbTipoMoneda(){
        $.ajax({
            url: 'response/tipo-moneda.php',
            type: 'POST',
            success: function(response){
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

    function fetchCuentas(){
        $.ajax({
            url: 'response/cuentas-list.php',
            type: 'POST',
            success: function(response){
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

    $('#form-count').submit(function(e){
        const postData = {
            month : $('#Month').val(),
            year : $('#Year').val(),
            count : $('#cuentaId').val()
        };  
        $.post('response/cuenta-items.php', postData, function(response){
            // $('#form-count').trigger('reset');
            let Items = JSON.parse(response);
            let template = "";
            Items.forEach(item => {
                template += `
                <li class="transaccion-item" id="${item.id}">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">${item.nombre}</p>
                        <p class="trans-fecha">${item.fecha}</p>
                    </div>
                    <p class="trans-cantidad">${item.precio}</p>
                </li>`
            });
            $('#list').html(template);
        });
        e.preventDefault();
    });

    $('#form-cuenta').submit(function(e){
        const postData = {
            nombre : $('#nombre').val(),
            valor : $('#valor').val(),
            fciclof : $('#fciclof').val(),
            fcierref : $('#fcierref').val(),
            fpago : $('#fpago').val(),
            fcreacion : $('#fcreacion').val(),
            tipoCuenta : $('#tipoCuenta').val(),
            tipoMoneda : $('#tipoMoneda').val(),
            banco : $('#banco').val()
        }
        let url = editingCuenta === false ? 'response/cuenta-add.php' : 'response/cuenta-edit.php';
        $.post(url, postData, function(repsonse){
            $('#Home').toggleClass('none');
            fetchCuentas();
            editingCuenta = false;
            Limpiar();
        });
        e.preventDefault();
    });

    $(document).on('click', '#delete-count', function(){
        if(confirm('are you sure?')){
            let id = $('#cuentaId').val();
            $.post('response/cuenta-delete.php',{id}, function(response){
                fetchCuentas();
            });
        }
    });

    $(document).on('click', '#edit-count', function(){
        let id = $('#cuentaId').val();
        $.post('response/cuenta-data.php',{id}, function(response){
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

    $(document).on('click','.btn-ic',function(){
        let elemet = $(this)[0].parentElement.parentElement.parentElement;
        let id = $(elemet).attr('id');
        $('#cuentaId').val(id);
        
        let elemet2 = $(this)[0].parentElement.parentElement.parentElement;
        let id2 = $(elemet2).attr('id');
        c = "#"+ id2 + " .item-card .bin-ic";
        let nombre = $(c).text();
        $('#nombre-cuenta').text(nombre);
    });

});