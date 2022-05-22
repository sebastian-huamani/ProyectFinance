<?php 

    require_once('../db/database.php');
    session_start();
    if($_SESSION['estado'] == 1){

        if(isset($_POST['id'])){
            $id = $_POST['id'];
            $categoria = $_POST['name'];
        
            $query = "Call SP_Label_Edit($id,'$categoria')";
            $result = mysqli_query($conn ,$query);
        
            if(!$result){
                die('Query Failed');
            } 
            $json['res'] = "OK";
        }else {
            $json['res'] = "NO";
        }
        
        $jsonStr = json_encode($json);
        echo $jsonStr;
    }

?>