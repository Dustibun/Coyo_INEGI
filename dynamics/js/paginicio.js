var datos= {
  "id_encuesta":"",
  "id_categoria":"",
  "nombre":"",
  "id_estado":"",
  "id_usuario":"",
  "campos":"",
  "fecha":"",
  "determinado":"",
  "id_registro":""
}


function getPoll() {
 fetch(`../dynamics/php/consulta.php?`, {
   method: 'GET'
 }).then((response) => {

   return response.json();

 }).then((data) => {

   data.forEach(element => {

     datos.id_encuesta=element.id_encuesta
     datos.id_categoria=element.id_categoria
     datos.nombre=element.nombre
     datos.id_estado=element.id_estado
     datos.id_usuario=element.id_usuario
     datos.campos=element.campos
     datos.fecha=element.fecha
     datos.determinado=element.determinado
     datos.id_registro=element.id_registro

   });
   console.log(datos);
   document.getElementById("nombredelusuario").innerHTML=datos.id_encuesta;
})

}

getPoll();
