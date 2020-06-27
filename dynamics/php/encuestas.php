<?php

  include ('configuracion.php');

  session_start();

  $cuenta=$_SESSION['cuenta'];

  function getPoll($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT * FROM encuesta WHERE id_usuario='$usuario'");

  	$response = [];
  	while($row = mysqli_fetch_assoc($result))
  	{
  		array_push($response, $row);
  	}
  	return $response;
  }

  getPoll($cuenta);
  echo json_encode(getPoll($cuenta));
?>
