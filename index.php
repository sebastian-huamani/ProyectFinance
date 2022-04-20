<?php 
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>

            <div class="box-charts">
                <!-- items -->
                <div class="item">
                    <div class="box-item">
                        <div class="card">
                            <i class="fa-solid fa-building-columns"></i>
                            <a href="#">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </a>
                        </div>
                        <p>Ingresos Totales :</p>
                        <div class="card-price">
                            $ 999.99
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box-item">
                        <div class="card">
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            <a href="#">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </a>
                        </div>
                        <p>Intercambio :</p>
                        <div class="card-price">
                            $ 45.90
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box-item">
                        <div class="card">
                            <i class="fa-regular fa-credit-card"></i>
                            <a href="#">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </a>
                        </div>
                        <p>Credito Total :</p>
                        <div class="card-price">
                            $ 1234.56
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="box-item">
                        <div class="card">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            <!-- <i class="fa-solid fa-arrow-trend-down"></i> -->
                            <a href="#">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </a>
                        </div>
                        <p>Inversiones :</p>
                        <div class="card-price">
                            $ 34.68
                        </div>
                    </div>
                </div>
       


                <div class="item center-one">
                    <div class="chart">
                        <!-- <canvas id="myChart4" style="min-height: 26rem; height: 26rem; max-height: 26rem; max-width: 100%; width: 100%; display: block; width: 60.3rem;"></canvas> -->
                        <div id="candlestick">  </div>
                    </div>
                </div>

                <div class="item center-two">
                    <div class="box-item">
                        <h4>Crear Nuevo</h4>
                        <ul id="list">
                            <li><a href="#">Servicio Luz</a></li>
                            <li><a href="#">Servicio Agua</a></li>
                            <li><a href="#">Internet Hogar</a></li>
                            <li><a href="#">Dar Prestamos</a></li>
                            <li><a href="#">Pedir Prestamo</a></li>
                            <li><a href="#">Servicio Telefonico</a></li>
                            <li><a href="#">Alquiler Hogar</a></li>
                            <li><a href="#">Pago Estudios</a></li>
                            <li><a href="#">Compras </a></li>
                            <li><a href="#">Deposito</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>   
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>   
                            <li><a href="#">Item Service</a></li>
                            <li><a href="#">Item Service</a></li>   
                        </ul>
                    </div>
                </div>
                
                <div class="item down-one">
                    <div class="chart">
                        <!-- <canvas id="myChart1" style="min-height: 17rem; height: 17rem; max-height: 17rem; max-width: 100%; width: 100%; display: block; width: 60.3rem;"></canvas> -->
                        <div id="column-chart"></div>
                        
                    </div>
                </div>
                <div class="item down-two">
                    <div class="chart">
                        <!-- <canvas id="myChart2" style="min-height: 17rem; height: 17rem; max-height: 17rem; max-width: 100%; width: 100%; display: block; width: 60.3rem;"></canvas> -->
                        <div id="timeline"></div>
                    </div>
                </div>

                <div class="item">
                    <div class="chart">
                        <canvas id="myChart3" style="min-height: 17rem; height: 17rem; max-height: 17rem; max-width: 100%; width: 100%; display: block; width: 60.3rem;"></canvas>
                    </div>
                </div>

            </div>





    <script src="apex.js"></script>
    <script src="js/candletick.js"></script>
    <!-- <script src="script.js"></script> -->

<?php 
    include_once("template/footer.php")
?>