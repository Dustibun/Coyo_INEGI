<?php
@include 'configuracion.php';
@include 'cifrado.php';

$tipo=$_POST['tipo']; //Alumno o maestro
$p=date('Y');
$p=substr($p, 2);
$s=$p-2;  //Validación de los años de los números de cuenta
$t=$p-1;
$iP=$p-5;
$iS=$iP-1;
$iT=$iP-2;

$nac=$p;  //Fecha de nacimiento
$nac=$nac-18;
$nac_4=$nac-1;
$nac_2=$nac+1;         //*******************************//
$nac_3=$nac+2;         //  Validación para CURP y RFC  //
$nac_5=$nac+3;         //******************************//

$array_v=["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","T","V","W","X","Y","Z"];
$nombre=strip_tags($_POST['nombre']);
$nombre=mb_strtoupper($nombre);
$nombre=str_replace("Ñ","N",$nombre);

$unoC=substr($nombre,0,1);  //Inicial del nombre
$nombre3=substr($nombre,0,1);
$nombre2=str_replace($array_v,"",$nombre3);
$nombre2=substr($nombre2,0,1); //Primera vocal del nombre
$dosR=substr($nombre,1);

$paterno=strip_tags($_POST['apPaterno']);
$paterno=mb_strtoupper($paterno);
$paterno=str_replace("Ñ","N",$paterno);
$paterno2=substr($paterno,1); //Inicial del apellido paterno
$paterno2=str_replace($array_v,"",$paterno2);
$paterno2=substr($paterno2,0,1); //Primera vocal del apellido paterno
$dosC=substr($paterno,0,1); //Primera letra del apellido paterno
$unoR=substr($paterno,0,2); //Primeras dos letras del apellido paterno

$materno=strip_tags($_POST['apMaterno']);
$materno=mb_strtoupper($materno);
$materno=str_replace("Ñ","N",$materno);
$tresC=substr($materno,0,1); //Primera letra del apellido materno


$patC=consonante(substr($paterno,1)); //Primera consonante interna del apellido paterno
$matC=consonante(substr($materno,1)); //Primera consonante interna del apellido materno
$nomC=consonante(substr($nombre,1)); //Siguiente consonante interna del nombre
$nom2C=consonante($dosR); //Siguiente consonante interna del nombre

function consonante($cadena){
  $texto=$cadena;
  $array=["A","E","I","O","U","Á","É","Í","Ó","Ú"];
  $texto=str_replace($array,"",$texto);
  $texto=substr($texto,0,1);
  return $texto;
}

$conexion=conectar();
if ($tipo=="alumno") {
  $fecha1=strip_tags($_POST['fecha']);
  $año=substr($fecha1, 2,2);  //Año
  $mes=substr($fecha1,5,2); //Mes
  $dia=substr($fecha1,8,2); //Día

  $nom=strip_tags($_POST['nombre']);
  $apPat=strip_tags($_POST['apPaterno']);
  $apMat=strip_tags($_POST['apMaterno']);
  $corr=strip_tags($_POST['correo']);
  $con=strip_tags($_POST['contraseña']);
  $fecha=strip_tags($_POST['fecha']);
  $noCuen=strip_tags($_POST['noCuenta']);
  $curp=strip_tags($_POST['curp']);
  /*$reg="/^(200[$nac_2$nac_3$nac$nac_4$nac_5])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/";
  $reg2="/^(1($iP|$iS|$iT)|3($p|$s|$t))\d{6}$/";
  $reg3="/^$dosC$paterno2$tresC$unoC$año$mes$dia(MH)(AS|BS|CL|CS|DF|GT|HG|MC|MS|NL|PL|QR|SL|TC|TL|YN|NE|BC|CC|CM|CH|DG|GR|JC|MN|NT|OC|QT|SP|SR|TS|VZ|ZS)$patC$matC$nom2C(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\d$/";
*/
  //if(preg_match($reg,$fecha) && preg_match($reg2,$noCuen) && preg_match($reg3,$curp)){
    if($conexion){
      $nom=mysqli_real_escape_string($conexion,$nom);
      $apPat=mysqli_real_escape_string($conexion,$apPat);
      $apMat=mysqli_real_escape_string($conexion,$apMat);
      $corr=mysqli_real_escape_string($conexion,$corr);
      $con=mysqli_real_escape_string($conexion,$con);
      $fecha=mysqli_real_escape_string($conexion,$fecha);
      $noCuen=mysqli_real_escape_string($conexion,$noCuen);
      $curp=mysqli_real_escape_string($conexion,$curp);
      $conCod=codif($con);
      $conCod=base64_encode($conCod);

      $a=[];
      $b=[];
      $c=[];
      $i=0;
      $j=0;
      $k=0;
      $registro=0;
      $id_usuario=  "SELECT id_usuario FROM usuario";
      $id_correo=  "SELECT correo FROM usuario";
      $id_usuario2=  "SELECT id_usuario2 FROM usuario";
      $resp_usu= mysqli_query($conexion, $id_usuario);
      $resp_corr= mysqli_query($conexion, $id_correo);
      $resp_usu2= mysqli_query($conexion, $id_usuario2);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $a[$i]=$rev_usu[0];
        if($rev_usu[0]==$noCuen){
          $registro=1;
        }
        $i++;
      }
      while($rev_correo= mysqli_fetch_array($resp_corr)){
        $b[$j]=$rev_correo[0];
        if($rev_correo[0]==$corr){
          $registro=1;
        }
        $j++;
      }
      while($rev_usu2= mysqli_fetch_array($resp_usu2)){
        $c[$k]=$rev_usu2[0];
        if($rev_usu2[0]==$curp){
          $registro=1;
        }
        $k++;
      }
      echo $registro;
      if($a==[]){ //En caso de que sea el primer registro
        $registro= "INSERT INTO usuario VALUES (1,'$noCuen','$curp','$conCod',2,'$corr',2,'','$nom','$apPat','$apMat','$fecha')";
          mysqli_query($conexion, $registro);
          mysqli_close($conexion);
          header('Location:../../templates/inicio.html');
      }
      if($registro==0){ //En caso de que los datos como el número de cuenta, el correo o el curp no estén repetidos
        $registro= "INSERT INTO usuario VALUES (1,'$noCuen','$curp','$conCod',2,'$corr',2,'','$nom','$apPat','$apMat','$fecha')";
        mysqli_query($conexion, $registro);
        mysqli_close($conexion);
        header('Location:../../templates/inicio.html');
      }else if($registro==1){
        header('Location:registroInc.php');
        mysqli_close($conexion);
      }
    }else{
      echo "conexion fallida";
    }
  /*}else{
    header('Location:../../templates/registro.html');
  }*/
}
if($tipo=="maestro"){
  $nom=strip_tags($_POST['nombre']);
  $apPat=strip_tags($_POST['apPaterno']);
  $apMat=strip_tags($_POST['apMaterno']);
  $corr=strip_tags($_POST['correo']);
  $con=strip_tags($_POST['contraseña']);
  $noTra=strip_tags($_POST['noTrabajador']);
  $rfc=strip_tags($_POST['rfc']);
  $admin=(isset($_POST['admin']))? '1':'2';

  /*$reg4="/^$unoR$tresC$unoC$año$mes$dia\d{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}$/";
  if(preg_match($reg4,$rfc)){
    */

    if($conexion){
      $nom=mysqli_real_escape_string($conexion,$nom);
      $apPat=mysqli_real_escape_string($conexion,$apPat);
      $apMat=mysqli_real_escape_string($conexion,$apMat);
      $corr=mysqli_real_escape_string($conexion,$corr);
      $con=mysqli_real_escape_string($conexion,$con);
      $noTra=mysqli_real_escape_string($conexion,$noTra);
      $rfc=mysqli_real_escape_string($conexion,$rfc);
      $conCod=codif($con);
      $conCod=base64_encode($conCod);

      $a=[];
      $b=[];
      $c=[];
      $i=0;
      $j=0;
      $k=0;
      $registro=0;
      $id_usuario=  "SELECT id_usuario FROM usuario";
      $id_correo=  "SELECT correo FROM usuario";
      $id_usuario2=  "SELECT id_usuario2 FROM usuario";
      $resp_usu= mysqli_query($conexion, $id_usuario);
      $resp_corr= mysqli_query($conexion, $id_correo);
      $resp_usu2= mysqli_query($conexion, $id_usuario2);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $a[$i]=$rev_usu[0];
        if($rev_usu[0]==$noTra){
          $registro=1;
        }
        $i++;
      }
      while($rev_correo= mysqli_fetch_array($resp_corr)){
        $b[$j]=$rev_correo[0];
        if($rev_correo[0]==$corr){
          $registro=1;
        }
        $j++;
      }
      while($rev_usu2= mysqli_fetch_array($resp_usu2)){
        $c[$k]=$rev_usu2[0];
        if($rev_usu2[0]==$rfc){
          $registro=1;
        }
        $k++;
      }
      echo $registro;
      if($a==[]){ //En caso de que sea el primer registro
        $registro= "INSERT INTO usuario VALUES (2,'$noTra','$rfc','$conCod',2,'$corr','$admin','','$nom','$apPat','$apMat','N/A')";
          mysqli_query($conexion, $registro);
          mysqli_close($conexion);
          header('Location:../../templates/inicio.html');
      }
      if($registro==0){ //En caso de que los datos como el número de cuenta, el correo o el curp no estén repetidos
        $registro= "INSERT INTO usuario VALUES (2,'$noTra','$rfc','$conCod',2,'$corr','$admin','','$nom','$apPat','$apMat','N/A')";
          mysqli_query($conexion, $registro);
          mysqli_close($conexion);
          header('Location:../../templates/inicio.html');
      }else if($registro==1){
          header('Location:../../templates/registro.html');
          mysqli_close($conexion);
      }
    }else{
      echo "Conexión fallida";
    }

  /*}else{
    header('Location:../../templates/registro.html');
  }*/
}


/* RFC: /^[A-Z]{4}\d{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}$/ (el tuyo Vale)(wuuu)
Nombre(s):^([A-ZÁÉÍÓÚ][a-záéíóú]{1,}\s?)+$
Apellido(materno, paterno)^([A-ZÁÉÍÓÚ][a-záéíóú]{1,}\s?)+$
Fecha de nacimiento: ^(200[2-3])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$
Número de cuenta:'^(1(15|16|17)|3(18|19|20))\d{6}$'
Correo electrónico:^\w+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com)$
CURP: ^[A-Z]{4}(0[1-9]|[1-9][0-9])(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])[MH](AS|BS|CL|CS|DF|GT|HG|MC|MS|NL|PL|QR|SL|TC|TL|YN|NE|BC|CC|CM|CH|DG|GR|JC|MN|NT|OC|QT|SP|SR|TS|VZ|ZS)[A-Z]{3}[A-Z]\w$
Número de trabajador: ^\d{6}$*/

 ?>
