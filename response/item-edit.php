<?php 
    require_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        
        $id = $_POST['id'];
        if(isset($id) and $id != ""){
            $precio = $_POST['precio'];
            $oldPrecio = $_POST['oldPrecio'];
            $detalle = $_POST['detalle'];
            $fecha = $_POST['fecha'];
            $categoria = $_POST['categoria'];
            $cuenta = $_POST['cuenta'];
    
            $query = "Call SP_Item_Edit($id , $precio, '$detalle', '$fecha', $categoria, $cuenta, $oldPrecio)";
        
            $result = mysqli_query($conn ,$query);
        
            if(!$result){
                die('Query Failed'. mysqli_error($conn));
            } 
            $json['res'] = "OK";
        } else {
            $json['res'] = "NO";
        }
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }

?>