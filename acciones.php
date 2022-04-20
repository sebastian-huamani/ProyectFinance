<?php 
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>

<div class="acciones-box">
    <div class="acciones-item-chart">

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
        
    </div>
    
    <div class="form-box-acciones">
        <div class="item">
            <div class="chart">
                <div class="">
                </div>
                <!-- <canvas id="myChart4" style="min-height: 26rem; height: 26rem; max-height: 26rem; max-width: 100%; width: 100%; display: block; width: 60.3rem;"></canvas> -->
                <div id="candlestick">  </div>
            </div>
        </div>

        <div class="">
            <form class="chart-candeltisk" method="POST" action="test/test.php">
                <div class="box-info">
                    <div class="item-input">
                        <label class="input">
                            <input class="input__field" type="number" name="Open" step=".01" placeholder=" "/>
                            <span class="input__label">Open</span>
                        </label>   
                    </div>
                    <div class="item-input">
                        <label class="input">
                            <input class="input__field" type="number" name="Higth" step=".01" placeholder=" "/>
                            <span class="input__label">Higth</span>
                        </label>  
                    </div>
                    <div class="item-input">
                        <label class="input">
                            <input class="input__field" type="number" name="Low" step=".01" placeholder=" "/>
                            <span class="input__label">Low</span>
                        </label>  
                    </div>
                    <div class="item-input">
                        <label class="input">
                            <input class="input__field" type="number" name="Close" step=".01" placeholder=" "/>
                            <span class="input__label">Close</span>
                        </label>  
                    </div>
                    <div class="item-input">
                        <label class="input">
                            <input class="input__field" id="fecha-accion" type="date" name="Fecha" placeholder="" />
                            <span class="input__label">Fecha</span>
                        </label>  
                    </div>
                    <div class="send">
                        <button class="">Save</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
   
</div>







<script src="js/candletick.js"></script>
<?php 
    include_once("template/footer.php")
?>