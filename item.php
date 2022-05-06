<?php 
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>

<div class="info-item">
    <i class="fa-solid fa-chevron-left"></i>
    <a id="move-action">Ver Ultimos Ingresados</a>

</div>


<div class="categoria-item">
    <form class="form-item" id="form-item" method="POST">
        <h4 class="sub-title">Nuevo Item</h4>
        <div class="box-info-reverse ">
            <input type="hidden" name="id_item" id="idItem" >
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="nombre" type="text" id="nombre"  placeholder=" " require  />
                    <span class="input__label">Nombre</span>
                </label>   
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="precio" type="number" step=".01" id="precio" placeholder=" " require/>
                    <span class="input__label">Precio</span>
                </label>  
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="detalle" type="text" placeholder=" " id="detalle" require/>
                    <span class="input__label">Detalle</span>
                </label>  
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="fecha" type="date" id="fecha" require/>
                    <span class="input__label">Fecha</span>
                </label>  
            </div>
        </div>
        <div class="box-info-reverse-t">
            
            <div class="item-input">
                <select name="estado" id="estados" class="option-form" require>
                    
                    <!-- <option value="a">a</option>
                    <option value="b">b</option> -->
                </select>
            </div>
            <div class="item-input">
                <select name="categoria" id="categorias" class="option-form" require>
                   
                    <!-- <option value="a">a</option>
                    <option value="b">b</option> -->
                </select>
            </div>
            <div class="item-input">
                <select name="cuenta" id="cuentas" class="option-form" require>
                    <!-- <option value="a">a</option>
                    <option value="b">b</option> -->
                </select>
            </div>
        </div>
        <div class="send">  
            <button class="" id="save-item">Save</button>
        </div>
    </form>
</div>


<div class="item-categoria none">
        <div class="box-item-categoria">
            <div class="sub-menu-block">
                <h4>Ultimos Movimientos Realizados Ingresados</h4>
                <a href="item.php" class="none">Volver <i class="fa-solid fa-angle-right"></i></a>
            </div>
            <ul id="list-seccion">
               <!--  -->
          
            </ul>
        </div>
    </div>
</div>



<script src="js/item.js"></script>
<?php 
    include_once("template/footer.php");
?>
