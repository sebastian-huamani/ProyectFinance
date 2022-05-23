<?php 
    include_once('../db/database.php');

    session_start();
    if($_SESSION['estado'] == 1){
        $user = $_SESSION['session_user'];
        $name = trim($_POST['name']);
        $icon = trim($_POST['icon']);
    
        if(isset($name) and $name != ""){
    
            $categoria = $_POST['name'];
    
            $query = "Call SP_Label_Insert('$categoria', $user, $icon)";
            $result = mysqli_query($conn, $query);
    
            if(!$result){
                die('Query Failed' .mysqli_error($conn));
            } 
            $json['res'] = "OK";
        } else {
            $json['res'] = "NO";
        }
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }
?>