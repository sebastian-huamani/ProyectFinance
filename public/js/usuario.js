$(document).ready(function () {

    var button = $('#save-item');

    $('.input__field').keyup(function(e){
        var email = $('#email').val();
        var password = $('#password').val();

        if(email.length > 0 && password.length > 0){
            $(button).prop({disabled: false});
        }


    });
});