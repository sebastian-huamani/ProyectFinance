<?php
    session_start();
    include('template/nav.php');

    if (isset($_SESSION['id'])) {
        header('location:home.php');
    }

    if (isset($_SESSION['no_credencial'])) { ?>
        <script>
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 10000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                }

            });

            Toast.fire({
                icon: 'warning',
                title: 'El Usuario o La Contraseña Son Invorrectas'
            });
        </script>
    <?php  unset($_SESSION['no_credencial']); } ?>

<div class="box-login">
    <div class="box-input">
        <form id="form-login" action="controller/user/login.php" method="POST">

            <a href="#">Olvive mi Contraseña</a>

            <p>Login</p>
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

            <div class="send">
                <button class="" id="save-item" disabled>Ingresar</button>
            </div>

        </form>
        <p class="login-redirect">No Tienes Una Cuenta?, <a href="register.php"> Registrate Aqui</a></p>

    </div>
</div>

<script src="public/js/usuario.js"></script>

<?php
include_once("template/footer.php");
?>