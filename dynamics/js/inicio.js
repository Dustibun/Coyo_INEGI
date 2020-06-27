var botones=document.getElementsByClassName("botones")[0];
var inputCambio=document.getElementsByClassName("cambio")[0];
var titulo=document.getElementsByTagName("h1")[0];
var tipo=document.getElementsByClassName("tipo")[0];
var ingreso=document.getElementsByClassName("ingreso")[0];
var acomodo=document.getElementsByClassName("acomodo")[0];

botones.addEventListener("click",(event)=>{
  var objetivo=event.target;
  creaInput(objetivo.classList[0]);
});

function creaInput(clase){
  let admin=document.getElementsByClassName("admin")[0];
  if(clase=='maestro'){
    $re = '^([A-Z]{4}[1-9][0-9](0[0-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])[A-Za-z0-9]{3}|.+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com))$';
    titulo.innerText="Maestro";
    tipo.setAttribute("value","maestro");
    if(clase!='correo'){
      var uno=document.getElementsByClassName("uno")[0];
      uno.setAttribute("placeholder", "Correo/RFC");
      uno.setAttribute("pattern", $re);
      uno.setAttribute("id", "usuario");
    }
    var boton=document.getElementsByClassName("maestro")[0];
    boton.classList.add("alumno");
    boton.classList.remove("maestro");
    boton.innerText="Alumno";
    var adminText=document.createElement("h4");
    adminText.innerText="Inicio de administrador";
    var adminInput=document.createElement("input");
    adminInput.setAttribute("type","checkbox");
    adminInput.setAttribute("name","admin");
    admin.appendChild(adminInput);
    admin.appendChild(adminText);
  }
  if(clase=='alumno'){
    admin.innerHTML="";
    //const regex1=
    titulo.innerText="Alumno";
    tipo.setAttribute("value","alumno");
    if(clase!='correo'){
    var uno=document.getElementsByClassName("uno")[0];
    uno.setAttribute("placeholder", "NoCuenta/Correo");
    uno.setAttribute("pattern","^(\d{9}$|\w+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com)$/gm");
    }
    var boton=document.getElementsByClassName("alumno")[0];
    boton.classList.add("maestro");
    boton.classList.remove("alumno");
    boton.innerText="Maestro";
  }
}
function getUsuario(cuenta)
{
  $.ajax({ url:'../php/consultas.php' , method:'POST', data: {usuario:cuenta}, success:(resp)=>{ console.log(resp)  } })
}
getUsuario(cuenta);




//
// //
// // var nombreCompleto=[];
// // function getId() {
// //  //return "name=" + document.getElementById("usuario").value + ";" + document.getElementById("password").value;
// //  nombreCompleto.push(document.getElementById("usuario").value);
// //  nombreCompleto.push(document.getElementById("password").value);
// // }
//
//
//
// function getInfo(name){
//   fetch('../dynamics/php/inicio.php?name=${name}')
//    .then((response)=>{
//      return response.json()
//    })
//    .then((data)=>{
//      console.log(data);
//    })
// }
//
// document.getElementById("formulario").addEventListener("submit", (evt) => {
//  evt.preventDefault();
//  getInfo(document.getElementById('alumno').value);
//  // document.getElementById('password').value;
// })
//
// //  // getPoll();
// //  // console.log(getId());
// //  getId();
// //  console.log(nombreCompleto);
// //  console.log("Hola se enviaron tus datos");
// //  var nomCom= nombreCompleto.length;
// // console.log(nomCom);
// //  setTimeout(()=>{
// //
// //     while(nomCom>0){
// //       nombreCompleto.pop();
// //     }
// //
// //  },1000)
// //
// //
// // })
//
// // function getPoll() {
// //   console.log("si_poll");
// //  fetch(`../dynamics/php/inicio.php?${getId()}`, {
// //    method: 'GET'
// //  }).then((response) => {
// //
// //    console.log(response.json());
// //    return response.json();
// //
// //  }).then((data) => {
// //
// //    console.log("1");
// //
// //    name.forEach(element => {
// //
// //      console.log("yeiiino se qe ");
// //
// //    });
// //  })
// // }
//
//
//
//
// /*
// function getId() {
//  return "data=" + document.getElementById("usuario").value + ";" + document.getElementById("password").value;
// }
//
// */
// //234567891
// //2345
// /*
// function getPoll() {
//   console.log("si_poll");
//  fetch(`../dynamics/php/inicio.php?${getId()}`, {
//    method: 'GET'
//  }).then((response) => {
//
//    console.log(response.json());
//    return response.json();
//
//  }).then((data) => {
//
//    console.log("1");
//
//    name.forEach(element => {
//
//      console.log("yeiii");
//
//    });
//  })
// }*/
//
//
// //pattern='^\w+@(comunidad.unam.mx|(gmail|hotmail|yahoo).com)$'
