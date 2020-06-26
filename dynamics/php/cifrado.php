<?php
  define('hash', 'sha256');
  define ('contra','c0y0y4b4ast4p0rfav0rd3nmeun4const4nci4yc0nes0s0yf3liz');
  define ('metodo','AES-128-CBC');
  function codif($con){ //Función para hashear
    $key= openssl_digest(contra,hash);
    $iv_len= openssl_cipher_iv_length(metodo);
    $iv= openssl_random_pseudo_bytes($iv_len);
    $conCifrada= openssl_encrypt(
      $con,
      metodo,
      $key,
      0,
      $iv
    );
    $contra_iv=$iv.$conCifrada;
    return $contra_iv;

  }
  function decodif($conCod){ //Función para deshashear
    $iv_len= openssl_cipher_iv_length(metodo);
    $iv= substr($conCod,0,$iv_len);
    $cifrado= substr($conCod, $iv_len);
    $key=openssl_digest(contra,hash);
    $contra_descif=openssl_decrypt(
      $cifrado,
      metodo,
      $key,
      0,
      $iv
    );
    return $contra_descif;
  }
?>
