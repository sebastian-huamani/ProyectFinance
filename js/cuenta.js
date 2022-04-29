$(document).ready(function(){
    editing = false;

    fetchCuentas();

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