<?php 
    include_once('../db/database.php');

    if(isset($_POST['id'])){

        $id = $_POST['id'];
        $query = "call SP_Item_Buscar_id($id)";
        $result = mysqli_query($conn, $query);

        if(!$result){
            die("Failed Connection");
        }

        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id' => $row['id_Item'],
                'nombre' => $row['nombre'],
                'precio' => $row['precio'],
                'detalle' => $row['detalle'],
                'fecha' => $row['fecha'],
                'modalidad' => $row['id_ingesoEgreso'],
                'estado' => $row['id_estado'],
                'categoria' => $row['id_categoria'],
                'cuenta' => $row['id_medioPago']
            );
        }

        $jsonStr = json_encode($json[0]);
        echo $jsonStr;
    }
?>