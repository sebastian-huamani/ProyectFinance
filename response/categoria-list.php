<?php 
    include_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        $user = $_SESSION['session_user'] ;
        $query = "Call SP_Label_Listar($user)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die('Query Failed' .mysqli_error($conn));
        }

        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['id_categoria'],
                'nombre' => $row['nombre'],
                'uso' => $row['uso'],
                'code' => $row['code']
            );
        }
        
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }
?>