<?php 
    include_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        
        if(isset($_POST['Item'])){
    
            $id = $_POST['Item'];
            $count = $_POST['count'];
    
            $query = "call SP_Item_Buscar_Edit($id, $count)";
            $result = mysqli_query($conn, $query);
    
            if(!$result){
                die("Failed Connection".  mysqli_error($conn));
            }
    
            $json = array();
            while($row = mysqli_fetch_array($result)){
                $json[] = array(
                    'id' => $row['id_Item'],
                    'precio' => $row['precio'],
                    'detalle' => $row['detalle'],
                    'fecha' => $row['fecha'],
                    'categoria' => $row['id_categoria'],
                    'cuenta' => $row['id_medioPago']
                );
            }
    
            $jsonStr = json_encode($json[0]);
            echo $jsonStr;
        }
    }
