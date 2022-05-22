<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $query = "call SP_Cuenta_Buscar_id($id)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Failed Connection");
        }

        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['id_cuenta'],
                'nombre' => $row['nombre'],
                'valor' => $row['valor'],
                'fechaCierref' => $row['fecha_cierre_facturacion'],
                'fechaPgo' => $row['fecha_pago'],
                'creacionF' => $row['fecha_creacion'],
                'tipoCuenta' => $row['id_tipo_cuenta'],
                'tipoMoneda' => $row['id_tipo_moneda'],
                'banco' => $row['banco']
            );
        }

        $jsonStr = json_encode($json[0]);
        echo $jsonStr;
    }
?>