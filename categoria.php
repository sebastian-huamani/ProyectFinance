<?php 
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>


<div class="categoria-box">

    <form class="form-categorias" id="form-categorias" method="POST">
        <h4 class="sub-title">Nueva Categoria</h4>
        <div class="item-input">
            <label class="input">
                <input type="hidden" id="categoria-id" name="categoria-id">
                <input  id="categorias" class="input__field" type="text" placeholder=" " name="categoria" />
                <span class="input__label">Nombre Categoria</span>
            </label>   
        </div>

        <div class="send">
            <button type="submit" class="" id="save-categoria">Guardar</button>
        </div>
    </form>

    <div class="item-categoria">
        <div class="box-item-categoria">
            <h4 class="">Categorias Creadas</h4>
            <ul id="categoria-list-seccion">
                
            </ul>
        </div>
    </div>

</div>


<script src="js/label.js"></script>

<?php 
    include_once("template/footer.php")
?>
<!-- Cleudis12#4379 -->