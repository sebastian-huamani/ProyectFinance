<?php 
    include_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        if(isset($_POST['id'])){
    
            $id = $_POST['id'];
            $query = "select * from categoria where id_categoria = $id";
            $result = mysqli_query($conn, $query);
    
            if(!$result){
                die("Failed Connection");
            }
    
            $json = array();
            while($row = mysqli_fetch_array($result)){
                $json[] = array(
                    'id' => $row['id_categoria'],
                    'name' => $row['nombre']
                );
            }
    
            $jsonStr = json_encode($json[0]);
            echo $jsonStr;
        }
    }
?>