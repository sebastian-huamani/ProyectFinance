<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $query = "call SP_Item_Delete($id)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Query Failed" . mysqli_error($conn));
        }
        echo "Task Deleted Successfuly";
    }
?>