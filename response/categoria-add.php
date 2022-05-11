<?php 
    include_once('../db/database.php');


    $name = trim($_POST['name']);

    if(isset($name) and $name != ""){

        $categoria = $_POST['name'];

        $query = "Call SP_Label_Insert('$categoria')";
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
?>