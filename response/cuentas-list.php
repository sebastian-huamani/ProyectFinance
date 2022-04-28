<?php
    include_once('../db/database.php');
    $query = "Call SP_Cuenta_List()";
    $result = mysqli_query($conn, $query);

    if(!$result){
        die('Query failed'. mysqli_error($conn));
    }

    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id' => $row['id_cuenta'],
            'nombre' => $row['nombre'],
            'valor' => $row['valor'],
            'fechaCiclof' => $row['fecha_ciclo_factura'],
            'fechaCierref' => $row['fecha_cierre_facturacion'],
            'fechaPgo' => $row['fecha_pago'],
            'creacionF' => $row['fecha_creacion'],
            'tipoCuenta' => $row['tipo_cuenta'],
            'tipoMoneda' => $row['tipo_moneda'],
            'banco' => $row['banco']
        );
    }

    $jsonStr = json_encode($json);
    echo $jsonStr;

?>