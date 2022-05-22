<?php 
    include_once('../db/database.php');
    $query = "Call SP_Item_Listar()";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query Failed' .mysqli_error($conn));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id_Item'],
            'nombre' => $row['nombre'],
            'precio' => $row['precio'],
            'detalle' => $row['detalle'],
            'fecha' => $row['fecha'],
            'categoria' => $row['id_categoria'],
            'cuenta' => $row['id_medioPago']
        );
    }
    $jsonStr = json_encode($json);
    echo $jsonStr;
?>