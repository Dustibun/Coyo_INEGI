<?php

  include ('configuracion.php');

  session_start();

  $cuenta=$_SESSION['cuenta'];

  function getPoll($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT encuestaregistro.id_usuario, encuestaregistro.id_encuesta, encuesta.nombre AS encuesta FROM encuestaregistro JOIN encuesta WHERE encuestaregistro.id_usuario='$usuario'");

  	$response = [];
  	while($row = mysqli_fetch_assoc($result))
  	{
  		array_push($response, $row);
  	}
    if ($response==Array()) {
      array_push($response,"Ninguna");
    }
  	return $response;
  }

  getPoll($cuenta);
  echo json_encode(getPoll($cuenta));
?>
