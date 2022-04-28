$(document).ready(function(){

    let editing = false;
    fetchList();

    
   
    function fetchList() {
        $.ajax({
            url: 'response/categoria-list.php',
            type: 'POST',
            success: function (response) {
                let labels = JSON.parse(response);
                let template = "";
                labels.forEach(label => {
                    template += `
                    <li id="${label.id}">
                        <div>
                            <a href="#">${label.nombre}</a>
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
                $('#categoria-list-seccion').html(template)
            }
        });
    }

    $('#form-categorias').submit(function(e){
        const postData = {
            id: $('#categoria-id').val(),
            name: $('#categorias').val()
        };

        let url = editing === false ? 'response/categoria-add.php' : 'response/categoria-edit.php';
        $.post(url, postData, function(response){
            $('#form-categorias').trigger('reset');
            fetchList();
            editing = false;
        });
        e.preventDefault();
    });

    $(document).on('click','.delete-label' ,function(){
        if(confirm('are you sure?')){
            let elemet = $(this)[0].parentElement.parentElement;
            let id = $(elemet).attr('id');
            $.post('response/categoria-delete.php', {id}, function(response){
                fetchList();
            });
        }
    });

    $(document).on('click', '.edit-label', function(){
        let elemet = $(this)[0].parentElement.parentElement;
        let id = $(elemet).attr('id');
        $.post('response/categoria-data.php', {id}, function (response) {
            let label = JSON.parse(response);
            $('#categoria-id').val(label.id);
            $('#categorias').val(label.name);
            editing = true;
        });
    });

});

