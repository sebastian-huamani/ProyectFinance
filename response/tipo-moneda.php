<?php 
    include_once('../db/database.php');
    $query = "Call SP_TipoMoneda_List()";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query Failed' .mysqli_error($conn));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id_moneda'],
            'nombre' => $row['nombre'],
            'valor' => $row['valor_cambio']
        );
    }
    
    $jsonStr = json_encode($json);
    echo $jsonStr;
?>