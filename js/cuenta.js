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
                    <div class="item">
                        <div class="item-card">
                            <div class="footer-ic">
                                <p class="fecha-ic">fecha creacion: ${item.creacionF}</p>
                                <button type="submit" class="btn-ic" id="informacion-cuenta">Informacion</button>
                            </div>
                            <p class="bin-ic">${item.nombre}</p>
                            <div class="footer-ic">
                                <button class="btn-ic"> <i class="fa-solid fa-angle-right"></i> Ver</button>
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
        }

        e.preventDefault();
    });








});