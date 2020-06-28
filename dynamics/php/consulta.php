<?php

  include('conexion.php');

   session_start();

  $encuesta=$_SESSION['requestdata'];



  

  function getData($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT * FROM encuesta WHERE id_encuesta='$usuario'");

  	$response = [];
  	while($row = mysqli_fetch_assoc($result))
  	{
  		array_push($response, $row);
  	}

  	return $response;
  }
  getData($encuesta);
  echo json_encode(getData($encuesta));
/*
  if (isset($_GET['data'])) {
  	getData($_GET['data']);
  	echo json_encode(getData($_GET['data']));
  }
  else
  	echo json_encode(1);
*/
?>
