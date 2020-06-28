<?php
include('configuracion.php');
include('cifrado.php');
$conexion=conectar();

$cuenta=strip_tags($_POST['noCuenta']);
$password=strip_tags($_POST['pwd']);
$tipo=($_POST['tipo']);
if($tipo=="alumno"){
  $reg="/^\d{9}$/";
  $reg2="/^\w+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com)$/";
  if(preg_match($reg,$cuenta)){
    if($conexion){
      $usu=mysqli_real_escape_string($conexion,$cuenta);
      $contras=mysqli_real_escape_string($conexion,$password);
      $a=[];
      $i=0;
      $id_usuario=  "SELECT id_usuario FROM usuario WHERE id_usuario LIKE $cuenta AND id_tipo LIKE 1"; //Selecciona todos los id_usuario que correspondan a esta categoría
      $resp_usu= mysqli_query($conexion, $id_usuario);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $a[$i]=$rev_usu[0];
        $i++;
      }
      if($a==[]){
        mysqli_close($conexion);
        header('Location: ../../templates/inicio.html');
      }
      $j=0;
      $b=[];
      $id_contraseña="SELECT contraseña FROM usuario WHERE id_usuario LIKE $cuenta ";
      $resp_contra= mysqli_query($conexion, $id_contraseña);
      while($rev_contra= mysqli_fetch_array($resp_contra)){
        $rev_contra[0]=base64_decode($rev_contra[0]);
        $rev_contra[0]=decodif($rev_contra[0]);
        $b[$j]=$rev_contra[0];
        $j++;
      }
      if($b[0]==$password){
        session_start();
        $_SESSION['cuenta']=$_POST['noCuenta'];
        header('Location: ../../templates/perfil.html');
        mysqli_close($conexion);
        if(isset($cuenta)){
          echo json_encode($cuenta);
        }
      }else{
        header('Location: ../../templates/inicio.html');
        mysqli_close($conexion);
      }
    }
  }else if(preg_match($reg2,$cuenta)){
    if($conexion){
      $usu=mysqli_real_escape_string($conexion,$cuenta);
      $contras=mysqli_real_escape_string($conexion,$password);
      $a=[];
      $i=0;
      $id_correo=  "SELECT correo FROM usuario WHERE correo LIKE '$usu' AND id_tipo LIKE 1"; //Selecciona todos los id_usuario que correspondan a esta categoría
      $resp_corr= mysqli_query($conexion, $id_correo);
      while($rev_corr= mysqli_fetch_array($resp_corr)){
        $a[$i]=$rev_corr[0];
        $i++;
      }
      if($a==[]){
        mysqli_close($conexion);
        header('Location:../../templates/inicio.html');
      }
      $j=0;
      $b=[];
      $id_contraseña="SELECT contraseña FROM usuario WHERE correo LIKE '$cuenta' ";
      $resp_contra= mysqli_query($conexion, $id_contraseña);
      while($rev_contra= mysqli_fetch_array($resp_contra)){
        $rev_contra[0]=base64_decode($rev_contra[0]);
        $rev_contra[0]=decodif($rev_contra[0]);
        $b[$j]=$rev_contra[0];
        $j++;
      }
      $c=[];
      $g=0;
      $id_usu="SELECT id_usuario FROM usuario WHERE correo LIKE '$cuenta' ";
      $resp_usu= mysqli_query($conexion, $id_usu);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $c[$g]=$rev_usu[0];
        $g++;
      }
      echo $c[0];
      if($b[0]==$password){
        session_start();
        $_SESSION['cuenta']=$c[0];
        header('Location: ../../templates/perfil.html');
        mysqli_close($conexion);
        if(isset($cuenta)){
          echo json_encode($c[0]);
        }
      }else{
        header('Location: ../../templates/inicio.html');
        mysqli_close($conexion);
      }
    }
  }
}else if($tipo=="maestro"){
  $admin=(isset($_POST['admin']))? '0':'1';
  $reg="/^[A-Z]{4}\d{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}$/";
  $reg2="/^\w+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com)$/";
  if(preg_match($reg,$cuenta)){
    if($conexion){
      $usu=mysqli_real_escape_string($conexion,$cuenta);
      $contras=mysqli_real_escape_string($conexion,$password);
      $t=[];
      $i=0;
      echo $usu;
      $id_rfc=  "SELECT id_usuario2 FROM usuario WHERE id_usuario2 LIKE '$usu' AND id_tipo LIKE 2"; //Selecciona todos los id_usuario que correspondan a esta categoría
      $resp_rfc= mysqli_query($conexion, $id_rfc);
      while($rev_rfc= mysqli_fetch_array($resp_rfc)){
        $t[$i]=$rev_rfc[0];
        $i++;
      }
      if($t==[]){
        mysqli_close($conexion);
        header('Location: ../../templates/inicio.html');
      }
      $j=0;
      $b=[];
      $id_contraseña="SELECT contraseña FROM usuario WHERE id_usuario2 LIKE '$cuenta' ";
      $resp_contra= mysqli_query($conexion, $id_contraseña);
      while($rev_contra= mysqli_fetch_array($resp_contra)){
        $rev_contra[0]=base64_decode($rev_contra[0]);
        $rev_contra[0]=decodif($rev_contra[0]);
        $b[$j]=$rev_contra[0];
        $j++;
      }
      $c=[];
      $g=0;
      $id_usu="SELECT id_usuario FROM usuario WHERE id_usuario2 LIKE '$cuenta' ";
      $resp_usu= mysqli_query($conexion, $id_usu);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $c[$g]=$rev_usu[0];
        $g++;
      }
      $o=[];
      $p=0;
      $id_admin="SELECT id_admin FROM usuario WHERE id_usuario2 LIKE '$cuenta' ";
      $resp_admin= mysqli_query($conexion, $id_admin);
      $rev_admin= mysqli_fetch_array($resp_admin);
        $o[0]=$rev_admin[0];

      if($b[0]==$password){
        session_start();
        $_SESSION['cuenta']=$c[0];
        if($o[0]==1 && $admin==0){
          header('Location: ../../templates/admin.html');
        }else if($o[0]==2 && $admin==0){
          header('Location: ../../templates/inicio.html');
        }else if($admin==1){
          header('Location: ../../templates/perfil.html');
        }
        mysqli_close($conexion);
        if(isset($cuenta)){
          echo json_encode($c[0]);
        }
      }else{
        header('Location: ../../templates/inicio.html');
        mysqli_close($conexion);
      }
    }
  }else if(preg_match($reg2,$cuenta)){
    if($conexion){
      echo $cuenta;
      $usu=mysqli_real_escape_string($conexion,$cuenta);
      $contras=mysqli_real_escape_string($conexion,$password);
      $a=[];
      $i=0;
      $id_correo=  "SELECT correo FROM usuario WHERE correo LIKE '$usu' AND id_tipo LIKE 2 "; //Selecciona todos los id_usuario que correspondan a esta categoría
      $resp_corr= mysqli_query($conexion, $id_correo);
      while($rev_corr= mysqli_fetch_array($resp_corr)){
        $a[$i]=$rev_corr[0];
        $i++;
      }
      if($a==[]){
        mysqli_close($conexion);
        header('Location:../../templates/inicio.html');
      }
      $j=0;
      $b=[];
      $id_contraseña="SELECT contraseña FROM usuario WHERE correo LIKE '$cuenta' ";
      $resp_contra= mysqli_query($conexion, $id_contraseña);
      while($rev_contra= mysqli_fetch_array($resp_contra)){
        $rev_contra[0]=base64_decode($rev_contra[0]);
        $rev_contra[0]=decodif($rev_contra[0]);
        $b[$j]=$rev_contra[0];
        $j++;
      }
      $c=[];
      $g=0;
      $id_usu="SELECT id_usuario FROM usuario WHERE correo LIKE '$cuenta' ";
      $resp_usu= mysqli_query($conexion, $id_usu);
      while($rev_usu= mysqli_fetch_array($resp_usu)){
        $c[$g]=$rev_usu[0];
        $g++;
      }
      $id_admin="SELECT id_admin FROM usuario WHERE correo LIKE '$cuenta' ";
      $resp_admin= mysqli_query($conexion, $id_admin);
      $rev_admin= mysqli_fetch_array($resp_admin);
        $o[0]=$rev_admin[0];

      if($b[0]==$password){
        session_start();
        $_SESSION['cuenta']=$c[0];
        if($o[0]==1 && $admin==0){
          header('Location: ../../templates/admin.html');
        }else if($o[0]==2 && $admin==0){
          header('Location: ../../templates/inicio.html');
        }else if($admin==1){
          header('Location: ../../templates/perfil.html');
        }
        mysqli_close($conexion);
        if(isset($cuenta)){
          echo json_encode($c[0]);
        }
      }else{
        header('Location: ../../templates/inicio.html');
        mysqli_close($conexion);
      }
    }
  }else{
    header('Location: ../../templates/inicio.html');
  }
}
?>
