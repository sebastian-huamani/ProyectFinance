<?php

    include_once('../db/database.php');
    $query = "select * from categoria";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query failed'. mysqli_error($conn));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id_categoria'],
            'name' => $row['nombre']
        );
    }

    $jsonStr = json_encode($json);
    echo $jsonStr;

?>