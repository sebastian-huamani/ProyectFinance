<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $query = "delete from categoria where id_categoria = $id";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Query Failed");
        }
        echo "Task Deleted Successfuly";
    }
    
?>