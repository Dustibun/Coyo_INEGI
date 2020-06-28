<?php

include('configuracion.php');


$data = json_decode(stripslashes($_POST['data']))


echo json_encode($data);


/*
if(isset($_POST['myData'])){
 $obj = json_decode($_POST['myData']);
 echo $obj;
 //some php operation
}

/*
function insertData($usuario)
{
  $con = conectar();
  $registro= "INSERT INTO encuesta VALUES ('','$noTra','$rfc','$conCod',2,'$corr','$admin','','$nom','$apPat','$apMat','N/A')";

}

insertData($_POST['myData']);
//Falta llamar a la sesion
*/
?>
