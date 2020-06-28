<?php

//usuario SAVOR
//contraseña 4gu4$4b0rv4s@

  define('servidor','localhost');
  define('contraseña', '4gu4$4b0rv4s@');
  define ('usuario','SAVOR');
  define ('base','Coyopinion');

  function conectar(){
    if($conexion = mysqli_connect(servidor, usuario, contraseña, base)){
      return $conexion;
    }
  }

?>
