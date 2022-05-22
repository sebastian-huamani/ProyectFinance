<?php
    require_once('../../db/database.php');


    $email = $_POST['email'];
    $password = $_POST['password'];
    
    if(isset($email) and isset($password)){
        $query = "call SP_Login_Verifty('$email')";
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result);
        
        $verifyEmail = mysqli_num_rows($result);
        $verifyPassword = password_verify($password, $row['password']);

        
        if($verifyEmail and $verifyPassword){
            session_start();
            $_SESSION['id'] = $result;
            $_SESSION['session_user'] = $row['id_user'];
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['estado'] = $row['activo'];

            header('location:../../home.php');
        }else {
            session_start();
            $_SESSION['no_credencial'] = true;
            header('location:../../index.php');
        }
        mysqli_close($conn);
    } else {
        header('location:../../index.php');
    }
?>