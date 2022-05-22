<?php 
    include_once('../db/database.php');

    if(isset($_POST['nombre'])){
        session_start();
        $session_user = $_SESSION['session_user'];
        $nombre = $_POST['nombre'];
        $valor = $_POST['valor'];
        $fcierref = $_POST['fcierref'];
        $fpago = $_POST['fpago'];
        $fcreacion = $_POST['fcreacion'];
        $tipoCuenta = $_POST['tipoCuenta'];
        $tipoMoneda = $_POST['tipoMoneda'];
        $banco = $_POST['banco'];

        $query = "Call SP_Cuenta_Insertar('$nombre', $valor,  '$fcierref', '$fpago','$fcreacion', $tipoCuenta, $tipoMoneda, '$banco',$session_user)";

        $result = mysqli_query($conn, $query);

        if(!$result){
            die('Query Failed' .mysqli_error($conn));
        }
        $json['res'] = "OK";
    } else{
        $json['res'] = "NO";
    }
    $jsonStr = json_encode($json);      
    echo $jsonStr;
?>
    