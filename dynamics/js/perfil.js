
getSession();

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




function getPic() {
  return "name=" + document.getElementById("file").value;
}

function getSession() {
  fetch(`../dynamics/php/sesion.php?`,{
    method: 'GET'
  }).then((response)=>{

    return response.json();
  }).then((data)=>{

    console.log("La sesion es...");
    if (data!=1) {
      window.location='inicio.html';
      console.log("correcta");
    }
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
      container.classList.add("consultaAct")
      container.classList.remove("consultaEnc");
      container.innerHTML=`<h2>${element.nombre}`;

      if (element.nombre==undefined) {
        container.innerHTML=`<h2>No hay no existe`;
      }

    })
    show.appendChild(container);
  })
}
function getActivity(){
  fetch(`../dynamics/php/actividad.php?`, {
    method: 'GET'
}).then((response)=> {
  return response.json();

}).then((data)=> {
  show.innerHTML="";

  data.forEach(element =>{

    show.innerHTML="";

    data.forEach(element =>{
      console.log(element);
      container.classList.remove("consultaAct");
      container.classList.add("consultaEnc")
      container.innerHTML=`<h2>${element.nombre}`;

      if (element.nombre==undefined) {
        container.innerHTML=`<h2>No hay no existe`;
      }

    })
    show.appendChild(container);
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
