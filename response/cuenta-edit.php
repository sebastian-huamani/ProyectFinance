<?php
    require_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        $id = trim($_POST['id']);
        $nombre = trim($_POST['nombre']);
        $valor = trim($_POST['valor']);
        $fcierref = trim($_POST['fcierref']);
        $fpago = trim($_POST['fpago']);
        $fcreacion = trim($_POST['fcreacion']);
        $tipoCuenta = trim($_POST['tipoCuenta']);
        $tipoMoneda = trim($_POST['tipoMoneda']);
        $banco = trim($_POST['banco']);
    
        if((isset($id) and $id != "" ) and (isset($nombre) and $nombre != "" ) and (isset($banco) and $banco!= "")){
        
            $query = "Call SP_Cuenta_Edit($id,'$nombre', $valor, '$fcierref','$fpago', '$fcreacion', $tipoCuenta , $tipoMoneda, '$banco')";
    
            $result = mysqli_query($conn ,$query);
            if(!$result){
                die('Query Failed' . mysqli_error($conn));
            } 
            $json['res'] = "OK";
        } else {
            $json['res'] = "NO";
        }
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }
?>