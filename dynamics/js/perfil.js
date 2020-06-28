// document.getElementById("misencuestas").addEventListener("click",(event)=>{
//   console.log("Yei");
//   getPoll();
// })
//
// window.addEventListener("load", function(event) {
//   getPoll();
// })
//
//
//
// document.getElementById("misencuestas").addEventListener("click",(event)=>{
//   console.log("Yei");
//   getPoll();
// })




window.addEventListener("load", function(event) {
  console.log("Listo");
  getUser();
})

document.getElementById("misencuestas").addEventListener("click",(event)=>{
  getPoll();
  console.log("ok111");
})

document.getElementById("miactividad").addEventListener("click",(event)=>{
  getActivity();
  console.log(1);
})

document.getElementById("foto").addEventListener("click",(event)=>{
  console.log("Modal");
  Foto();
;})





let show=document.getElementById("show")
let container=document.createElement("div");

function getUser() {
 fetch(`../dynamics/php/user.php?`, {
   method: 'GET'
 }).then((response) => {

   return response.json();

 }).then((data) => {

   data.forEach(element => {
     console.log(element);
     document.getElementById("nombredelusuario").innerHTML=element.nombre +" "+ element.ap_Pat;
     document.getElementById("cumple").innerHTML=element.nacimiento;
     document.getElementById("correo").innerHTML=element.correo;
     document.getElementById("perfil").setAttribute("src","../statics/media/img/perfil/"+element.foto);

   });
 })
}

function getPoll() {
  fetch(`../dynamics/php/encuestas.php?`, {
    method: 'GET'
}).then((response)=> {

  return response.json();

}).then((data)=> {
  show.innerHTML="";

  data.forEach(element =>{
    console.log(element);
    container.classList.remove("consultaAct");
    container.classList.add("consultaEnc")
    container.innerHTML=`<h2>${element.nombre}`;

  })
  show.appendChild(container);
})
}



function getPic() {
  return "name=" + document.getElementById("file").value;
}

function getActivity(){
  fetch(`../dynamics/php/actividad.php?`, {
    method: 'GET'
}).then((response)=> {
  return response.json();

}).then((data)=> {
  show.innerHTML="";

  data.forEach(element =>{

    console.log(element);
    container.classList.remove("consultaEnc");
    container.classList.add("consultaAct");
    container.innerHTML=`<h2>No tienes ninguna`;

    show.appendChild(container);

    console.log(element.encuesta);
    console.log(1);


  })
})

}

function getFiles(){
    var files = document.getElementById("fileText").files;
    var myArray = [];
    var file = {};

    console.log(files);
}


function Foto() {
  show.innerHTML="";
  container.classList.remove("consultaAct");
  container.classList.remove("consultaEnc");
  container.classList.add("foto");
  container.innerHTML=`
  <form class="" action="" method="get" id="form" enctype="multipart/form-data">
    <input type="file" name="file" value="" id="file"><br>
    <label for="file" id="fileText">Elige una imagen</label>
    <br><input type="submit" class='button' value='Upload' id='upload'>
  </form>`;

  show.appendChild(container);

  document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault();


    //getFiles();
    uploadPic();
  })
}

function uploadPic() {
  pic= document.getElementById("file");
  var formData = new FormData();
  formData.append("foto", pic);

  fetch(`../dynamics/php/foto.php?`, {
    method: 'POST',
    body:formData
}).then((response)=>{

  console.log(response);
  return response.json();

}).then((exito)=>{

  console.log(exito);

})
}



/*
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
*/
