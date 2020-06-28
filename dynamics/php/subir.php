<?php

$nombre=(isset($_POST['Nombre']) && $_POST['Nombre'] !="") ? $_POST['Nombre']:"";

$dir_subida = '../../statics/media/img/perfil/';
$archivo = $dir_subida . basename($_FILES['imagen']['name']);

$nombre = basename($_FILES['imagen']['name']);

if (move_uploaded_file($_FILES['imagen']['tmp_name'], $archivo)) {

} else {
  echo "¡Posible ataque de subida de ficheros!\n";
}



include ('configuracion.php');

session_start();

$cuenta=$_SESSION['cuenta'];



function Upload($var1, $var2){

  $con = conectar();
  $result = mysqli_query($con,"UPDATE usuario SET foto='$var1' WHERE id_usuario='$var2'");

  $result2 = mysqli_query($con,"SELECT foto FROM usuario WHERE id_usuario='$var2'");

  $response = [];
  while($row = mysqli_fetch_assoc($result2))
  {
    array_push($response, $row);
  }

  return $response;
}

Upload($nombre, $cuenta);
echo json_encode(Upload($nombre, $cuenta));

header("Location:../../templates/perfil.html")
//$archivo=rename("$archivo", "../statics/img/prueba/"."$nombre!$descripcion!"."$"."$precio".".jpg");*/
?>
