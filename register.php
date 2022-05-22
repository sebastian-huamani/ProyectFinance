<?php
    include('template/nav.php');
?>

<div class="box-login">

    <div class="box-input">

        <form id="form-login" action="controller/user/register.php" method="POST">

            <p>Registrar</p>
            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="email" type="email" id="email" placeholder=" " require />
                    <span class="input__label">Correo</span>
                </label>
            </div>

            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="password" type="password" id="password" placeholder=" " require />
                    <span class="input__label">Contraseña</span>
                </label>
            </div>

            <div class="item-input">
                <label class="input">
                    <input class="input__field" name="repeat-password" type="password" id="repeat-password" placeholder=" " require />
                    <span class="input__label">Confirmar Contraseña</span>
                </label>
            </div>

            <div class="send">
                <button class="" id="save-item" disabled>Ingresar</button>
            </div>

        </form>
        <p class="login-redirect">Ya Tienes Una Cuenta?, <a href="index.php"> Iniciar Sesion</a></p>

    </div>

</div>

<script src="public/js/registerValidator.js"></script>

<?php
    include_once("template/footer.php");
?>