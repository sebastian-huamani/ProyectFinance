$(document).ready(function () {

    var password = $('[name=password]');
    var rPassword = $('[name=repeat-password]');
    var button = $('#save-item');

    $('.input__field').keyup(function(e){
        var pass1 = password.val();
	    var rPass = rPassword.val();

        if(rPass.length > 7 && pass1.length > 7 && pass1 == rPass){
            $(button).prop({disabled: false});
        }

    }); 

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
  
    });

    Toast.fire({
        icon: 'info',
        title: 'Utiliza Solo Letras , Numeros y minimo 7 Caracteres'
    });


});