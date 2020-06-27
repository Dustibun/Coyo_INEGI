<?php
  @include 'configuracion.php';
  @include 'cifrado.php';

  header('Content-Type: application; charset=utf-8');
  $conexion=conectar();
  if($conexion){
    $a=[];
    $i=0;
    $id_categoria=  "SELECT categoria FROM categoria";
    $resp_cat= mysqli_query($conexion, $id_categoria);
    while($rev_cat= mysqli_fetch_array($resp_cat)){
      $a[$i]=$rev_cat[0];
      $i++;
    }
    echo json_encode($a, JSON_UNESCAPED_UNICODE);
  }else{
    echo "Conexión fallida";
  }
?>
