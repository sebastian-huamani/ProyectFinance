<?php 
    session_start();
    if(isset($_SESSION['session_user'])){
        require_once('db/database.php');
        $user = $_SESSION['session_user'];
        $query = "call SP_Logout($user)";
        $result = mysqli_query($conn, $query);
        session_destroy();
        header('location:index.php');
    }

?>