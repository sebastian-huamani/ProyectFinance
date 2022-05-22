$(document).ready(function () {

    let editing = false;
    fetchList();



    function fetchList() {
        $.ajax({
            url: 'response/categoria-list.php',
            type: 'POST',
            success: function (response) {
                console.log(response);
                let labels = JSON.parse(response);
                let template = "";
                labels.forEach(label => {
                    template += `
                    <li id="${label.id}" class="${label.uso}">
                        <div>
                            <p><span class="categoria-uso">${label.uso}</span> ${label.nombre} </p> 
                        </div>
                        
                        <div class="item-seccion">  
                            <button id="edit-categoria" class="edit-label">
                                <i class="fa-solid fa-pen"></i>
                            </button>

                            <a href="#" id="delete-categoria" class="delete-label">
                                <i class="fa-solid fa-trash-can"></i>
                            </a>
                        </div>
                    </li>`
                });
                $('#categoria-list-seccion').html(template);
            }
        });
    }

    $('#form-categorias').submit(function (e) {
        const postData = {
            id: $('#categoria-id').val(),
            name: $('#categorias').val()
        };

        let url = editing === false ? 'response/categoria-add.php' : 'response/categoria-edit.php';
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
            $('#form-categorias').trigger('reset');
            fetchList();
            editing = false;

        });
        e.preventDefault();
    });

    $(document).on('click', '.delete-label', function () {
        let elemet = $(this)[0].parentElement.parentElement;
        let id = $(elemet).attr('id');
        let c = $(elemet).attr('class');
        if(c > 0){
            Swal.fire({
                icon: 'info',
                title: 'Atencion...!',
                timer: 6500,
                text: 'No se puede Eliminar debido a que esta siendo usada esta categoria',
              });
        } else {
            Swal.fire({
                title: 'Seguro de Eliminar?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Borrar!',
                cancelButtonText: 'Cancelar'

            }).then((result) => {
                if (result.isConfirmed) {
                    $.post('response/categoria-delete.php', { id }, function (response) {
                        fetchList();
                    });
                    Swal.fire(
                        'Borrado!',
                        'Ha sido borrada la categoria',
                        'success'
                    );
                }
            });
        }
    });

    $(document).on('click', '.edit-label', function () {
        let elemet = $(this)[0].parentElement.parentElement;
        let id = $(elemet).attr('id');
        $.post('response/categoria-data.php', { id }, function (response) {
            let label = JSON.parse(response);
            console.log(label);
            $('#categoria-id').val(label.id);
            $('#categorias').val(label.name);
            editing = true;
        });
    });
});

