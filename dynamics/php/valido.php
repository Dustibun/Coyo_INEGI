<?php
include('conexion.php');


$uno=$_POST['requestdata'];


if(preg_match('/^\d{8}$/',$uno))
{
  $conexion=conectar();
  $data= "SELECT * FROM encuesta WHERE id_encuesta= '$uno'";
  $resp= mysqli_query($conexion,$data);
  $row = mysqli_fetch_array($resp);

  if(preg_match('/^\d{8}$/',$row[0]))
  {
    session_start();
    //
    $_SESSION['requestdata']=$uno;

    header('Location: ../../templates/encuestainicio.html');
  }else{
      header('Location: ../../templates/inicio.html');
  }
}else{
  header('Location: ../../templates/inicio.html');
}


?>
