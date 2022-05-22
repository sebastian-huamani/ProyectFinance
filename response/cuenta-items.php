<?php
    include_once('../db/database.php');

    $month = $_POST['month'];
    $year = $_POST['year'];
    $count = $_POST['count'];
    
    session_start();
    $session_user = intval($_SESSION['session_user']);
    
    $query = "Call SP_Items_Cuenta_Listar($month, $year, $count, $session_user)";   
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query failed'. mysqli_error($conn));
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
