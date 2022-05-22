<?php 
    require_once('../../db/database.php');

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $rPassword = trim($_POST['repeat-password']);

    $newEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
    $newPassword = strip_tags($password);
    $new_R_Password =strip_tags($rPassword);


    if(isset($email) and isset($password) and $password > 7 and isset($rPassword) and $rPassword > 7){
        if($password === $rPassword){
            $patron = '/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/';
            
            if(preg_match($patron, $newEmail)){
                $hash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 10]);
                $query = "Call SP_Register_User('$newEmail','$hash')";

                $result = mysqli_query($conn, $query);
                header('location:../../index.php');

                if(!$result){
                    die(mysqli_error($conn));
                }
            } 
        } 
    } 
?>