

let container=document.getElementById("BigBox");
let usuario=document.getElementById("usuario");

var datos= {
  "tipo":"",
  "id_usuario":"",
  "id_usuario2":"",
  "contraseña":"",
  "bloqueo":"",
  "correo":"",
  "admin":"",
  "foto":"",
  "nombre":"",
  "ap_Pat":"",
  "ap_Mat":"",
  "nacimiento":""
}

function getPoll() {
 fetch('../dynamics/php/encuestas.php?', {
   method: 'GET'
 }).then((response) => {
   return response.json();

 }).then((data) => {

   data.forEach(element => {
  console.log(element.nombre);

   datos.tipo= element.tipo;
   datos.id_usuario= element.id_usuario;
   datos.id_usuario2= element.id_usuario2;
   datos.contraseña= element.contraseña;
   datos.bloqueo= element.bloqueo;
   datos.correo= element.correo;
   datos.admin= element.admin;
   datos.foto= element.foto;
   datos.nombre= element.nombre;
   datos.ap_Pat= element.ap_Pat;
   datos.ap_Mat= element.ap_Mat;
   datos.nacimiento= element.nacimiento;

   });
   document.getElementById("nombredelusuario").innerHTML=datos.nombre +' '+ datos.ap_Pat + ' ' + datos.ap_Mat;
   document.getElementById("cumple").innerHTML=datos.nacimiento;
   document.getElementById("correo").innerHTML=datos.correo;
 })
}
getPoll();
