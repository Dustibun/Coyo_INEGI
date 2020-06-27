<?php

  include ('configuracion.php');

  session_start();

  $cuenta=$_SESSION['cuenta'];


  function getData($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT * FROM usuario WHERE id_usuario=$usuario");

  	$response = [];
  	while($row = mysqli_fetch_assoc($result))
  	{
  		array_push($response, $row);
  	}

  	return $response;
  }

  getData($cuenta);
  echo json_encode(getData($cuenta));

/*
  if (isset($_GET['data'])) {
  	getData($_GET['data']);
  	echo json_encode(getData($_GET['data']));
  }
  else
  	echo json_encode(1);
*/
?>
