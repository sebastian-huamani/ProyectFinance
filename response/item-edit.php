<?php 
    require_once('../db/database.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $precio = $_POST['precio'];
    $detalle = $_POST['detalle'];
    $fecha = $_POST['fecha'];
    $modalidad = $_POST['modalidad'];
    $estado = $_POST['estado'];
    $categoria = $_POST['categoria'];
    $cuenta = $_POST['cuenta'];

    $query = "Call SP_Item_Edit($id ,'$nombre', $precio, '$detalle', '$fecha', $modalidad, $estado, $categoria, $cuenta)";

    $result = mysqli_query($conn ,$query);

    if(!$result){
        die('Query Failed'. mysqli_error($conn));
    } 
?>