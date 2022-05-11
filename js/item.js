$(document).ready(function () {
    editing = false;
    cmModalidad();
    cmbCuentas();
    // fetchListItems();
    cmbEstados();
    setDateToDay("#fecha");

    $('.move-scene').on('click', function () {
        $('.categoria-item').toggleClass('none');
        $('.modify-item').toggleClass('none');
        var text = $('#move-action').text();
        $('#move-action').text(
            text == "Ver Ultimos Ingresados" ? "Volver" : "Ver Ultimos Ingresados");
    });

    function cmModalidad() {
        $.ajax({
            url: 'response/categoria-list.php',
            type: 'POST',
            success: function (response) {
                let labels = JSON.parse(response);
                let template = " <option value='' disabled selected>Categoria</option>";
                labels.forEach(label => {
                    template += `
                    <option value="${label.id}">${label.nombre}</option>
                    `
                });
                $('#categorias').html(template);
            }
        });
    }

    function cmbCuentas() {
        $.ajax({
            url: 'response/cuentas-list.php',
            type: 'POST',
            success: function (response) {
                let cards = JSON.parse(response);
                let template = " <option value='' disabled selected>Cuenta</option>";
                cards.forEach(card => {
                    template += `
                    <option value="${card.id}">${card.nombre}</option>`
                });
                $('#cuentas').html(template);
                $('#cuentas-search').html(template);
            }
        });
    }

    function cmbEstados() {
        $.ajax({
            url: 'response/estados.php',
            type: 'POST',
            success: function (response) {
                let states = JSON.parse(response);
                let template = "<option value='' disabled selected>Estado</option>";
                states.forEach(state => {
                    template += `
                    <option value="${state.id}">${state.name}</option>`
                });
                $('#estados').html(template);
            }
        });
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

    // function fetchListItems() {
    //     $.ajax({
    //         url: 'response/item-list.php',
    //         type: 'POST',
    //         success: function (response) {
    //             let items = JSON.parse(response);
    //             let template = `<li>
    //                 <div>
    //                     <a href="#">Nombre</a>
    //                 </div>
    //                 <div>
    //                     <p>Categoria</p>
    //                 </div>
    //                 <div>
    //                     <p>Valor</p>
    //                 </div>
    //                 <div>
    //                     <p>Fecha</p>
    //                 </div>
    //                 <div>
    //                     <p>Cuenta</p>
    //                 </div>
    //                 <div class="item-seccion">  
    //                     <p>Acciones</p>
    //                 </div>
    //             </li>`;
    //             items.forEach(item => {
    //                 template += `
    //                 <li id="${item.id}">
    //                     <div>
    //                         <a href="#">${item.nombre}</a>
    //                     </div>
    //                     <div>
    //                         <p>${item.categoria}</p>
    //                     </div>
    //                     <div>
    //                         <p>${item.precio}</p>
    //                     </div>
    //                     <div>
    //                         <p>${item.fecha}</p>
    //                     </div>
    //                     <div>
    //                         <p>${item.cuenta}</p>
    //                     </div>
    //                     <div class="item-seccion">  
    //                         <button id="modificar-item" class="edit-item">
    //                             <i class="fa-solid fa-pen"></i>
    //                         </button>
    //                         <button id="eliminar-item" class="delete-item">
    //                             <i class="fa-solid fa-trash-can"></i>
    //                         </button>
    //                     </div>
    //                 </li>`
    //             });
    //             $('#list-item').html(template);
    //         }
    //     });
    // }

    $('#form-item').submit(function (e) {
        const postData = {
            id: $('#idItem').val(),
            nombre: $('#nombre').val(),
            precio: $('#precio').val(),
            oldPrecio: $('#oldValue').val(),
            detalle: $('#detalle').val(),
            fecha: $('#fecha').val(),
            estado: $('#estados').val(),
            categoria: $('#categorias').val(),
            cuenta: $('#cuentas').val()
        };
        let url = editing === false ? 'response/item-add.php' : 'response/item-edit.php';
        $.post(url, postData, function (response) {
            $('#form-item').trigger('reset');
            fetchListItems();
            setDateToDay("#fecha");
            editing = false;
            $('#cuentas').removeAttr('disabled');

           
        });
        e.preventDefault();
    });

    $(document).on('click', '.delete-item', function () {
        if (confirm('are you sure')) {
            let elemet = $(this)[0].parentElement.parentElement;
            let id = $(elemet).attr('id');
            $.post('response/item-delete.php', { id }, function (response) {
                fetchListItems();
            });
        }
    });

    $(document).on('click', '.edit-item', function () {
        let elemet = $(this)[0].parentElement.parentElement;
        let Item = $(elemet).attr('id');
        let count = $('#cuentas-search').val();

        $.post('response/item-data.php', { Item, count }, function (response) {
            let Data = JSON.parse(response);
            $('#idItem').val(Data.id);
            $('#nombre').val(Data.nombre);
            $('#precio').val(Data.precio);
            $('#oldValue').val(Data.precio);
            $('#detalle').val(Data.detalle);
            $('#fecha').val(Data.fecha);
            $('#estados').val(Data.estado);
            $('#categorias').val(Data.categoria);
            $('#cuentas').val(Data.cuenta);

            $('.categoria-item').toggleClass('none');
            $('.modify-item').toggleClass('none');
            $('#cuentas ').attr('disabled', 'disabled');
            editing = true;
        });
    });

    $('#item-edit').submit(function (e) {
        const postData = {
            month: $('#Month').val(),
            year: $('#Year').val(),
            count: $('#cuentas-search').val()
        };
        $.post('response/cuenta-items.php', postData, function (response) {
            let Items = JSON.parse(response);
            let template = "";

            Items.forEach(item => {
                template += `
                <li id="${item.id}">
                <div>
                    <a href="#">${item.nombre}</a>
                </div>
                <div>
                    <p>${item.categoria}</p>
                </div>
                <div>
                    <p>${item.precio}</p>
                </div>
                <div>
                    <p>${item.fecha}</p>
                </div>
                <div>
                    <p>${item.cuenta}</p>
                </div>
                <div class="item-seccion">  
                    <button id="modificar-item" class="edit-item">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button id="eliminar-item" class="delete-item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>`;

            });
            $('#list-item').html(" ");
            $('#list-item').html(template);
        });

        e.preventDefault();
    });

});