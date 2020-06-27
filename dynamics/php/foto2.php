<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../../statics/css/foto.css">
    <title></title>
  </head>
  <body>
    <div class="img">
      <?php
      include 'configuracion.php';

      session_start();

      $cuenta=$_SESSION['cuenta'];

      function getImage($usuario)
      {
        $con = conectar();
        $result=mysqli_query($con,"SELECT foto FROM usuario WHERE id_usuario=$usuario");

        $response = [];
      	  while($row = mysqli_fetch_assoc($result))
      	{
      		array_push($response, $row);
      	}
      	  return $response;

      }



      $image = getImage($cuenta)[0]['foto'];

      echo "<img src='../../statics/media/img/perfil/".$image."'>"
      ?>
    </div>
    <div class="marco">
      <form class="" action="subir.php" method="post" enctype="multipart/form-data">
        <input type="file" name="imagen" value="imagen" id="file">
        <label for="file" id="fileText">Tu foto</label><br>
        <input type="submit" name="" class="submit" value="Confirmar">
      </form>
    </div>
    <a href="#">Regresar a la página</a>
  </body>
</html>
