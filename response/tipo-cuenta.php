<?php 
    include_once('../db/database.php');
    $query = "Call SP_TipoCuenta_List()";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query Failed' .mysqli_error($conn));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id_tipocuenta'],
            'nombre' => $row['nombre']
        );
    }

    $jsonStr = json_encode($json);
    echo $jsonStr;
?>