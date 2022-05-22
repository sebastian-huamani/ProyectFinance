<?php
    require_once('controller/user/session.php');
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>

<div class="move-scene">
    <a id="move-action">Ver Ultimos Ingresados</a>
    <i class="fa-solid fa-angle-right"></i>
</div>


<div class="categoria-item">
    <form class="form-item" id="form-item" method="POST">
        <h4 class="sub-title">Nuevo Item</h4>
        <div class="box-info-reverse ">
            <input type="hidden" name="id_item" id="idItem">
            <input type="hidden" name="oldValue" id="oldValue">
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="nombre" type="text" id="nombre" placeholder=" " require />
                    <span class="input__label">Nombre</span>
                </label>
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="precio" type="number" step=".01" id="precio" placeholder=" " require />
                    <span class="input__label">Precio</span>
                </label>
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="detalle" type="text" placeholder=" " id="detalle" require />
                    <span class="input__label">Detalle</span>
                </label>
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="fecha" type="date" id="fecha" require />
                    <span class="input__label">Fecha</span>
                </label>
            </div>
        </div>
        <div class="box-info-reverse-t">

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
            <button class="" id="save-item">Guardar</button>
        </div>
    </form>
</div>


<div class="modify-item none">
    <form id="item-edit" method="post" >
        <p>Buscar</p>
        <div class="input-search-edit">
            <select name="mount" id="Month">
                <option value="" selected disabled>Mes</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <select name="year" id="Year">
                <option value="" selected disabled>Año</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            <select name="cuenta" id="cuentas-search" class="option-form" require>
            </select>
        </div>
        <div class="send">
            <button class="" id="save-item">Buscar</button>
        </div>
    </form>

    <div id="item-serch-show">
        <ul id="list-item">
            
        </ul>
    </div>

</div>



<script src="public/js/item.js"></script>
<?php
include_once("template/footer.php");
?>