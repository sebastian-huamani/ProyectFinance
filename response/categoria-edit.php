<?php 

    require_once('../db/database.php');

    $id = $_POST['id'];
    $categoria = $_POST['name'];

    $query = "update categoria set nombre = '$categoria' where id_categoria = $id";
    $result = mysqli_query($conn ,$query);

    if(!$result){
        die('Query Failed');
    } 

?>