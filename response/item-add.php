<?php 
    include_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        $precio = trim($_POST['precio']);
        $detalle = trim($_POST['detalle']);
        $fecha = trim($_POST['fecha']);
        $categoria = trim($_POST['categoria']);
        $cuenta = trim($_POST['cuenta']);
        
    
        if((isset($precio) and $precio != "") and (isset($fecha) and $fecha != "" ) and (isset($categoria) and $categoria != "" ) and (isset($cuenta) and $cuenta != "" )){
    
            $query = "Call SP_Item_Insertar($precio, '$detalle', '$fecha', $categoria, $cuenta)";
    
            $result = mysqli_query($conn, $query);
                
            if(!$result){
                die('Query Failed' .mysqli_error($conn));
            }
            $json['res'] = "OK";
        } else {
            $json['res'] = "NO";
        }
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }

?>
    