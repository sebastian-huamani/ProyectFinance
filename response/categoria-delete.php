<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $query = "Call SP_Label_Delete($id)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Query Failed");
        }
        echo "Task Deleted Successfuly";
    }
    
?>