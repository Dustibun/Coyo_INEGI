<?php

  include ('configuracion.php');

  session_start();

  $cuenta=$_SESSION['cuenta'];

<<<<<<< HEAD

  function getData($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT * FROM usuario WHERE id_usuario=$usuario");
=======
  function getPoll($usuario)
  {
  	$con = conectar();
  	$result = mysqli_query($con,"SELECT * FROM encuesta WHERE id_usuario='$usuario'");
>>>>>>> 72bc3b4ddeea922fe9664b31073ee637259873e2

  	$response = [];
  	while($row = mysqli_fetch_assoc($result))
  	{
  		array_push($response, $row);
  	}
<<<<<<< HEAD

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
=======
  	return $response;
  }

  getPoll($cuenta);
  echo json_encode(getPoll($cuenta));
>>>>>>> 72bc3b4ddeea922fe9664b31073ee637259873e2
?>
