<?php
define('servername', 'localhost');
define('username', 'root');
define('password', '');
define('database', 'pruebas');

function conexion()
{
  $conn = new mysqli(servername, username, password,database);

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  return $conn;
}

$conexion=conexion();

  ?>
