<?php
require_once('template/nav.php');
require_once('template/lateral-nav.php');
?>

<div class="menu-superior-cuentas">
    <div class="menu-option-left">
        <p class="menu-card-name">Nombre Tarjeta Tarjeta Tarjeta</p>
    </div>
    <div class="menu-option-right">
        <a class="menu-option" href="">Modificar</a>
        <a class="menu-option" href="">Eliminar</a>
        <a href="crear-cuenta.php" class="menu-option">Crear Nueva Cuenta</a>
    </div>
</div>

<div class="cuentas-box">
    <div class="">
        <div class="item-categoria">
            <div id="items-cuentas" dir="rtl">
                <div class="item">
                    <div class="item-card">
                        <div class="footer-ic">
                            <p class="fecha-ic">fecha creacion: 10/10/2021</p>
                            <button type="submit" class="btn-ic" id="informacion-cuenta">Informacion</button>
                        </div>
                        <p class="bin-ic">4561 XXXX XXXX XXXX</p>
                        <div class="footer-ic">
                            <button class="btn-ic"> <i class="fa-solid fa-angle-right"></i> Ver</button>
                            <p class="tipo-ic"> <span class="entidad-ic">Scotiabank : </span>credito</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-card">
                        <div class="footer-ic">
                            <p class="fecha-ic">fecha creacion: 10/10/2021</p>
                            <button type="submit" class="btn-ic">Informacion</button>
                        </div>
                        <p class="bin-ic">4561 XXXX XXXX XXXX</p>
                        <div class="footer-ic">
                            <button class="btn-ic"> <i class="fa-solid fa-angle-right"></i> Ver</button>
                            <p class="tipo-ic"> <span class="entidad-ic">Inversion : </span>FBS</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-card">
                        <div class="footer-ic">
                            <p class="fecha-ic">fecha creacion: 10/10/2021</p>
                            <button type="submit" class="btn-ic">Informacion</button>
                        </div>
                        <p class="bin-ic">4561 XXXX XXXX XXXX</p>
                        <div class="footer-ic">
                            <button class="btn-ic"> <i class="fa-solid fa-angle-right"></i> Ver</button>
                            <p class="tipo-ic"> <span class="entidad-ic">Scotiabank : </span>credito</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-card">
                        <div class="footer-ic">
                            <p class="fecha-ic">fecha creacion: 10/10/2021</p>
                            <button type="submit" class="btn-ic">Informacion</button>
                        </div>
                        <p class="bin-ic">4561 XXXX XXXX XXXX</p>
                        <div class="footer-ic">
                            <button class="btn-ic"> <i class="fa-solid fa-angle-right"></i> Ver</button>
                            <p class="tipo-ic"> <span class="entidad-ic">Inversion : </span>FBS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="factura-cuenta">
        <div class="item">
            <div class="info-big">
                <ul id="card-info">
                    <li>Id Producto: </li>
                    <li>nombre: </li>
                    <li>precio: </li>
                    <li>detalle: </li>
                    <li>fecha ingreso: </li>
                    <li>Ingreso / Egreso: </li>
                    <li>Tipo Estado: </li>
                    <li>Tipo Categoria: </li>
                    <li>Medio de Pago</li>
                </ul>
                <ul id="card-item-info">
                    <li>Id Cuenta: </li>
                    <li>nombre: </li>
                    <li>valor: </li>
                    <li>fecha ciclo facturacion: </li>
                    <li>fecha cierre facturacion: </li>
                    <li>fecha pago: </li>
                    <li>fecha creacion: </li>
                    <li>tipo Cuenta: </li>
                    <li>tipo moneda: </li>
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
        <div class="item transacciones-cuenta">
            <div class="transacciones-option">
                <select name="" id="Month">
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
                <select name="" id="Year">
                    <option value="" selected disabled>Año</option>
                    <option value="2021">2021</option>
                    <option value="2021">2022</option>
                </select>
            </div>
            <ul id="list">
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
                <li class="transaccion-item">
                    <div class="trans-icon">
                        <i class="fa-regular fa-share-from-square"></i>
                    </div>
                    <div class="trans-info">
                        <p class="trans-descripcion">Pago Servicio</p>
                        <p class="trans-fecha">14, enero 1987</p>
                    </div>
                    <p class="trans-cantidad">99.9</p>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- 
<div class="cuentas-info-card none">
    <div class="info">
        <ul id="info-cuanta-lista">
            <li>Id Cuenta: </li>
            <li>nombre: </li>
            <li>valor: </li>
            <li>fecha ciclo facturacion: </li>
            <li>fecha cierre facturacion: </li>
            <li>fecha pago: </li>
            <li>fecha creacion: </li>
            <li>tipo Cuenta: </li>
            <li>tipo moneda: </li>
            <button class="btn-ic" id="informacion-salir">Salir <i class="fa-solid fa-angle-right"></i></button>    
        </ul>
    </div>
</div> -->


<script src="js/cuentas.js"></script>
<script src="js/apex.js"></script>

<?php
include_once("template/footer.php");
?>