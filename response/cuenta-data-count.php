<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $query = "CALL SP_Cuentas_Value($id)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Query Failed" . mysqli_error($conn));
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'valor' => $row['valor'],
                'fciclo' => $row['fecha_ciclo_factura'],
                'fcierre' => $row['fecha_cierre_facturacion'],
                'fpago' => $row['fecha_pago'],
                'moneda' => $row['ticket']
            );
        }
        $jsonStr = json_encode($json[0]);
        echo $jsonStr;
    }
?>