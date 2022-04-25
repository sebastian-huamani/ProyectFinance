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
            <button type="submit" class="" id="save-categoria">Save</button>
        </div>
    </form>

    <div class="item-categoria">
        <div class="box-item-categoria">
            <h4 class="">Categorias Creadas</h4>
            <ul id="categoria-list-seccion">
                <!-- <li>
                    <div>
                        <a href="#">Servicio Luz</a>
                    </div>
                    <div class="item-seccion">  
                        <button id="edit-categoria">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button id="delete-categoria">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </li> -->
                
            </ul>
        </div>
    </div>

</div>


<script src="js/app.js"></script>

<?php 
    include_once("template/footer.php")
?>