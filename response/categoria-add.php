<?php 
    include_once('../db/database.php');

    if(isset($_POST['name'])){

        $categoria = $_POST['name'];

        $query = "insert into categoria(nombre) values ('$categoria')";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die('Query Failed' .mysqli_error($conn));
        } else{
            echo 'Added Successfuly';
        }
    }
?>
    