<?php 
    include_once('../db/database.php');
    session_start();
    $session_user = $_SESSION['session_user'];

    $query = "call SP_recorre_selct( $session_user )";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query Failed' .mysqli_error($conn));
    }

    function dataClearFilter(string $data){
        $data_filter = substr($data , 2,-1);
        $data_divide = explode(":", $data_filter);
        $label = $data_divide[0];
        $price = floatval($data_divide[1]);
        if($price == ""){
            $price = 0;
        }
        return array( $label , $price);
    }

    $row = mysqli_fetch_array($result);
    $row_clear =  substr($row['informacion'], 2, -1);
    $data = explode(",", $row_clear);
    
    for ($i=0; $i < sizeof($data) ; $i++) {
        $new_data= dataClearFilter($data[$i]);
        $json[strval($i)] = $new_data;   
    }

    $jsonStr = json_encode($json);
    echo $jsonStr;
?>