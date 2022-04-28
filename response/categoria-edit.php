<?php 

    require_once('../db/database.php');

    $id = $_POST['id'];
    $categoria = $_POST['name'];

    $query = "Call SP_Label_Edit($id,'$categoria' )";
    $result = mysqli_query($conn ,$query);

    if(!$result){
        die('Query Failed');
    } 

?>