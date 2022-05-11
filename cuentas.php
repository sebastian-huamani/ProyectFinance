<?php
require_once('template/nav.php');
require_once('template/lateral-nav.php');
?>

<div class="menu-superior-cuentas">
    <div class="menu-option-left">
        <p class="menu-card-name" id="nombre-cuenta">Selecciona una de tus Cuentas</p>
    </div>
    <div class="menu-option-right">
        <button class="menu-option" id="edit-count" href="">Modificar</button>
        <button class="menu-option" id="delete-count" href="">Eliminar</button>
        <button class="menu-option" id="crear-cuenta">Crear Nueva Cuenta</button>
    </div>
</div>

<div class="cuentas-box" id="Home">
    <div class="">
        <div class="item-categoria">
            <div id="items-cuentas" dir="rtl">

            </div>
        </div>
    </div>

    <div class="factura-cuenta">
        <div class="item">
            <div class="info-big">
                <ul id="card-info">

                </ul>
                <ul id="item-info-box">

                </ul>
            </div>
        </div>
        <div class="item">
            <div class="chart">
                <div id="column-chart"></div>
            </div>
        </div>
    </div>

    <div class="">
        <form class="item transacciones-cuenta" id="form-count" method="POST">
            <div class="transacciones-option">
                <input type="hidden" id="cuentaId">
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
                <button type="submit" id="search-items"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <ul id="list">
           
                <div id="image-items">
                    <hr>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>


            </ul>
        </form>
    </div>
</div>

<form method="post" id="form-cuenta" class="none">
    <h4 class="sub-title">Nueva Cuenta</h4>
    <div class="box-info-reverse">
            <input type="hidden" name="idCuenta" id="idCuenta">
        <div class="item-input">
            <label class="input">
                <input class="input__field" name="nombre" type="text" id="nombre" placeholder=" " require />
                <span class="input__label">Nombre</span>
            </label>
        </div>

        <div class="item-input">
            <label class="input">
                <input class="input__field" name="valor" type="number" step=".01" id="valor"  placeholder=" " require/>
                <span class="input__label">Valor</span>
            </label>  
        </div>

        <div class="item-input">
            <select name="tipoCuenta" id="tipoCuenta" class="option-form" require>
              
            </select>
        </div>

        <div class="item-input">
            <select name="tipoMoneda" id="tipoMoneda" class="option-form" require>
            </select>
        </div>

        <div class="item-input">
            <label class="input">
                <input class="input__field" name="banco" type="text" id="banco" placeholder=" " require />
                <span class="input__label">Banco</span>
            </label>
        </div>

        <div class="item-input">
            <label class="input">
                <input class="input__field" name="fcreacion" type="date" id="fcreacion" placeholder=" " require />
                <span class="input__label">F. Creacion</span>
            </label>
        </div>
    </div>
    
    <div class="box-info-reverse-t none" >
        <div class="item-input">
            <label class="input">
                <input class="input__field" name="fciclof" type="date" id="fciclof" placeholder=" " require />
                <span class="input__label">F. Ciclo Factura</span>
            </label>
        </div>

        <div class="item-input">
            <label class="input">
                <input class="input__field" name="fcierref" type="date" id="fcierref" placeholder=" " require />
                <span class="input__label">F. Cierre Facturacion</span>
            </label>
        </div>

        <div class="item-input">
            <label class="input">
                <input class="input__field" name="fPago" type="date" id="fpago" placeholder=" " require />
                <span class="input__label">F. Pago</span>
            </label>
        </div>
    </div>

    <div class="send">  
        <button class="" id="save-item">Save</button>
    </div>
</form>

<script src="js/cuenta.js"></script>

<?php
include_once("template/footer.php");
?>