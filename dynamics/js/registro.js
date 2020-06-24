var cuerpo=document.getElementsByClassName("body");
var botones=document.getElementsByClassName("botones")[0];
var inputCambio=document.getElementsByClassName("cambio")[0];
var uno=document.getElementsByClassName("uno")[0];
var dos=document.getElementsByClassName("dos")[0];
var titUno=document.getElementsByClassName("tituloUno")[0];
var titDos=document.getElementsByClassName("tituloDos")[0];
var titulo=document.getElementsByTagName("h1")[0];
var tipo=document.getElementsByClassName("tipo")[0];

botones.addEventListener("click",(event)=>{
  var objetivo=event.target;
  creaInput(objetivo.classList[0]);
});

function creaInput(clase){
  if(clase=='maestro'){
    titulo.innerText="Maestro";
    tipo.setAttribute("value","maestro");
    inputCambio.innerHTML="";
    uno.setAttribute("name", "noTrabajador");
    //uno.setAttribute("pattern", "^\d{6}$");
    titUno.innerText="Número de Trabajador";
    dos.setAttribute("name", "rfc");
    //dos.setAttribute("pattern", "^[A-Z]{4}\d{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[0-9A-Z]{3}$");
    titDos.innerText="RFC";
    var boton=document.getElementsByClassName("maestro")[0];
    boton.classList.add("alumno");
    boton.classList.remove("maestro");
    boton.innerText="Alumno";
  }
  if(clase=='alumno'){
    titulo.innerText="Alumno";
    tipo.setAttribute("value","alumno");
    uno.setAttribute("name", "noCuenta");
    //uno.setAttribute("pattern", "^\d{9}$");
    titUno.innerText="Número de Cuenta";
    dos.setAttribute("name", "curp");
    //dos.setAttribute("pattern", "^[A-Z]{4}(0[1-9]|[1-9][0-9])(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])[MH](AS|BS|CL|CS|DF|GT|HG|MC|MS|NL|PL|QR|SL|TC|TL|YN|NE|BC|CC|CM|CH|DG|GR|JC|MN|NT|OC|QT|SP|SR|TS|VZ|ZS)[A-Z]{3}[A-Z]\w$");
    titDos.innerText="CURP";
    var boton=document.getElementsByClassName("alumno")[0];
    boton.classList.add("maestro");
    boton.classList.remove("alumno");
    boton.innerText="Maestro";
    var tres = document.createElement("input");
    tres.setAttribute("name", "fecha");
    tres.setAttribute("type","date");
    //tres.setAttribute("pattern", "^(19[2-9][0-9]|200[2-3])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$");
    var titTres = document.createElement("h4");
    titTres.innerText="Fecha de nacimiento";
    inputCambio.appendChild(titTres);
    inputCambio.appendChild(tres);
  }
}
