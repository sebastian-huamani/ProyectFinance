<?php 
    include_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){
        if(isset($_POST['id'])){
    
            $id = $_POST['id'];
            $query = "call SP_Item_Delete($id)";
            $result = mysqli_query($conn, $query);
    
            if(!$result){
                die("Query Failed" . mysqli_error($conn));
            }
            $json['res'] = "OK";
        }else {
            $json['res'] = "NO";
        }
        
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }
?>