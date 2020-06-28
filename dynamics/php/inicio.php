<?php
include('configuracion.php');

function getUser($name){
  $con= connect();
  $result= $con->query("SELECT nombre FROM usuario WHERE id_usuario= '%$name%'");
  $response=[];
  while($row = mysqli_fetch_assoc($result))
  {
    array_push($response, $row);
  }
  return $response;
}
 if (isset($_GET['name'])) {
   getUser($_GET['name']);
   echo json_encode(getUser($_GET['name']));
 }
 else
 echo json_encode(1);






















// function getData($usuario)
// {
//   $con = conexion();
//
//   $result = mysqli_query($con,"SELECT nombre FROM usuario WHERE id_usuario='$usuario'");
//
//   $response = [];
//   while($row = mysqli_fetch_assoc($result))
//   {
//     array_push($response, $row);
//   }
//
// // 234567891
//
//   return $response;
// }
//
//   if (isset($_GET['usuario'])) {
//   getData($_GET['usuario']);
//   echo json_encode(getData($_GET['usuario']));
//
// }
//
// else
//
// {
//
//   echo json_encode("abc");
//
// }

// print_r( getname('234567891') );
// echo json_encode(getData('234567891'));

// $response = array();
// require_once 'configuracion.php';
// $db = new conexion();
// $result = $db->query("SELECT nombre FROM usuario WHERE id_usuario='$usuario'");
// if(mysqli_num_rows($result)>0)
// {
//   $response["coyopinion"] = array();
//   while ($row=$result->fetch_object()) {
//     $product = array();
//     $product["id"]=$row->$id;
//     $product["nombre"]=$row->$nombre;
//   }
//   $response["success"]=1;
//   echo json_encode($response);
// }
// else {
//   $response["success"]=0;
//   $response["message"]="No hay productos";
//   echo json_encode($response);
// }
?>
<!--
$variable=23456789123;
$nombre= substr($variable,0, 9);
$contra= substr($variable,9);

echo"$nombre ";
echo "$contra";

 -->

 <!---->
