<?php 
    require_once('template/nav.php');
    require_once('template/lateral-nav.php');
?>

<div class="info-item">
    <i class="fa-solid fa-chevron-left"></i>
    <a href="info-item.php">Ver Ultimos Ingresados</a>
</div>
<div class="categoria-item">
    <form action="test/test.php" method="post" class="form-item">
        <h4 class="sub-title">Nuevo Item</h4>
        <div class="box-info-reverse ">
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="nombre" type="text" placeholder=" " required aria-required=""/>
                    <span class="input__label">Nombre</span>
                </label>   
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="precio" type="number" step=".01" placeholder=" " required aria-required=""/>
                    <span class="input__label">Precio</span>
                </label>  
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="detalle" type="text" placeholder=" "required aria-required="" />
                    <span class="input__label">Detalle</span>
                </label>  
            </div>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="fecha" type="date" id="fecha-item" placeholder=" " required aria-required=""/>
                    <span class="input__label">Fecha</span>
                </label>  
            </div>
        </div>
        <div class="box-info-reverse-t">
            <div class="item-input">
                <select name="modalidad" id="" class="option-form" required aria-required="">
                    <option value="" disabled selected>Modalidad</option>
                    <option value="1">a</option>
                    <option value="2">b</option>
                </select>
            </div>
            <div class="item-input">
                <select name="estado" id="" class="option-form" required aria-required="">
                    <option value="" disabled selected>Estado</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                </select>
            </div>
            <div class="item-input">
                <select name="categoria" id="" class="option-form" required aria-required="">
                    <option value="" disabled selected>Categoria</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                </select>
            </div>
            <div class="item-input">
                <select name="cuenta" id="" class="option-form" required aria-required="">
                    <option value="" disabled selected>Cuenta</option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                </select>
            </div>
        </div>
        <div class="send">
            <button class="" id="save-item">Save</button>
        </div>
    </form>
</div>

<script>
    var f = new Date();
    var d = f.getDate();
    var m = f.getMonth() + 1;
    var y = f.getFullYear();
    if(d<10){ d='0'+d; }
    if(m<10){ m='0'+m }
    $("#fecha-item").val(y + "-" + m + "-" + d);
</script>

<?php 
    include_once("template/footer.php")
?>
