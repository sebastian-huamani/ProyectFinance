<?php 
    require_once('../db/database.php');
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $valor = $_POST['valor'];
        $fciclof = $_POST['fciclof'];
        $fcierref = $_POST['fcierref'];
        $fpago = $_POST['fpago'];
        $fcreacion = $_POST['fcreacion'];
        $tipoCuenta = $_POST['tipoCuenta'];
        $tipoMoneda = $_POST['tipoMoneda'];
        $banco = $_POST['banco'];
    
        $query = "Call SP_Cuenta_Edit($id,'$nombre', $valor, '$fciclof', '$fcierref','$fpago', '$fcreacion', $tipoCuenta , $tipoMoneda, '$banco')";

        $result = mysqli_query($conn ,$query);
        if(!$result){
            die('Query Failed' . mysqli_error($conn));
        } 
    }


?>