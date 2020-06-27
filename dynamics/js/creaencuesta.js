let lista=document.getElementsByClassName("lista")[0];
let categorias=[];
let listaCategoria=document.getElementsByClassName("categoria")[0];

fetch('../dynamics/php/creaencuesta.php')
.then((resp)=> resp.json())
.then(response =>{
  var i=0;
  for(indice in  response) {
    categorias[i]=response[indice];
    i++;
  }
}).catch(error=> console.log(error));
setTimeout(()=>{
  for(indice in categorias){
    var option=document.createElement("option");
    option.innerText=categorias[indice];
    option.setAttribute("value", categorias[indice]);
    listaCategoria.appendChild(option);
  }
},1000);



document.getElementById('form').addEventListener('submit', (e) => {
  var ok= true;
  e.preventDefault();
  console.log(ok);
  var errores=[];
  let fechaUsu=getValues("fecha");
  let fechaObj=new Date(fechaUsu);//Fecha del formulario
  var todayDate = new Date(); //Today Date
  if (fechaObj < todayDate) {
    errores.push("La fecha debe ser mayor al día actual");
  }

  var datos=[];
  datos.push(getValues("titulo"), getValues("desc"), getValues('number'), getValues('fecha'));
  if(errores.length>0){
    ok= false;
  }
  let cantidadPreg = getValues('number');
  let contador=getValues("number");
  let i=0;

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////Crear Preguntas/////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  if (ok==true) {
    let cambio=document.getElementsByClassName("cambio")[0];
    cambio.innerHTML="";
    let botonAparece=document.getElementsByClassName("oculta")[0];
    botonAparece.classList.remove("oculta");
    let contenedor=document.getElementById('container');
    for (var j = 1; j <= contador; j++) {
      let cont = document.createElement("div");
      cont.classList.add("ContP");
      //cont.classList.add("pregunta");
      let pregunta=document.createElement("input");
      pregunta.classList.add("pregunta");
      pregunta.setAttribute("value","Título de tu pregunta");


      let texto=document.createElement("h4");
      texto.classList.add("agregar");
      texto.innerText="Agregar opciones a la pregunta ";
      let opciones=document.createElement("div");
      opciones.classList.add("respuestas")

      let div1=document.createElement("div");
      div1.classList.add("dOpcion");
      let div2=document.createElement("div");
      div2.classList.add("dOpcion");
      let op1=document.createElement("input");
      let el1=document.createElement("label");
      let op2=document.createElement("input");
      let el2=document.createElement("label");
      el1.innerText="X";
      el2.innerText="X";
      op1.required=true;
      op2.required=true;
      op1.classList.add("opcion");
      op2.classList.add("opcion");
      el1.classList.add("elmOp");
      el2.classList.add("elmOp");
      div1.appendChild(el1);
      div1.appendChild(op1);
      div2.appendChild(el2);
      div2.appendChild(op2);
      opciones.appendChild(div1);
      opciones.appendChild(div2);

      let botonEliminar=document.createElement("label");
      botonEliminar.classList.add("eliminar");
      botonEliminar.innerText="Eliminar pregunta";
      contenedor.appendChild(cont);
      cont.appendChild(pregunta);
      cont.appendChild(botonEliminar);
      cont.appendChild(texto);
      cont.appendChild(opciones);
    }
  //  var cont=document.getElementById("container");
    document.addEventListener(("click"),(e)=>{
     let obj=e.target;
     if(obj.classList=="eliminar"){
       let totalContenedor=document.getElementsByClassName("ContP").length;
       if(totalContenedor>=2){
         let divEliminado=obj.parentNode;
         contenedor.removeChild(divEliminado);
       }
     }
     if(obj.classList=="agregar"){
       let divAgregado=obj.parentNode;
       let respuestas=divAgregado.getElementsByClassName("respuestas")[0];
       console.log(respuestas);
       let input=respuestas.getElementsByClassName("opcion").length;
       console.log(input);
       if(input<=9){
         let divNuevo=document.createElement("div");
         divNuevo.classList.add("dOpcion");
         let nuevoInput=document.createElement("input");
         let nuevoEl=document.createElement("label");
         nuevoEl.classList.add("elmOp");
         nuevoEl.innerText="X";
         nuevoInput.required=true;
         nuevoInput.classList.add("opcion");
         divNuevo.appendChild(nuevoEl);
         divNuevo.appendChild(nuevoInput);
         respuestas.appendChild(divNuevo);
       }
     }
     if(obj.classList=="elmOp"){
       let opElim=obj.parentNode;
       console.log(opElim);
       let conOp=opElim.parentNode;
       let totalOp=conOp.getElementsByClassName("dOpcion").length;
       if(totalOp>2){
         conOp.removeChild(opElim);
       }
     }
     if(obj.classList=="agPreg"){
       let totalPreguntas=contenedor.getElementsByClassName("ContP").length;
       if(totalPreguntas<=4){
         let contNuevo = document.createElement("div");
         contNuevo.classList.add("ContP");
         let preguntaNueva=document.createElement("input");
         preguntaNueva.classList.add("pregunta");
         preguntaNueva.setAttribute("value","Título de tu pregunta");
         let textoNuevo=document.createElement("h4");
         textoNuevo.classList.add("agregar");
         textoNuevo.innerText="Agregar opciones a la pregunta ";
         let opcionesNuevo=document.createElement("div");
         opcionesNuevo.classList.add("respuestas")

         let divNu1=document.createElement("div");
         divNu1.classList.add("dOpcion");
         let divNu2=document.createElement("div");
         divNu2.classList.add("dOpcion");
         let op1N=document.createElement("input");
         let el1N=document.createElement("label");
         let op2N=document.createElement("input");
         let el2N=document.createElement("label");
         el1N.innerText="X";
         el2N.innerText="X";
         op1N.required=true;
         op2N.required=true;
         op1N.classList.add("opcion");
         op2N.classList.add("opcion");
         el1N.classList.add("elmOp");
         el2N.classList.add("elmOp");
         divNu1.appendChild(el1N);
         divNu1.appendChild(op1N);
         divNu2.appendChild(el2N);
         divNu2.appendChild(op2N);
         opcionesNuevo.appendChild(divNu1);
         opcionesNuevo.appendChild(divNu2);

         let botonEliminarN=document.createElement("label");
         botonEliminarN.classList.add("eliminar");
         botonEliminarN.innerText="Eliminar pregunta";
         contenedor.appendChild(contNuevo);
         contNuevo.appendChild(preguntaNueva);
         contNuevo.appendChild(botonEliminarN);
         contNuevo.appendChild(textoNuevo);
         contNuevo.appendChild(opcionesNuevo);
       }
     }
      /*console.log(obj);
      if(obj.classList=="agregar"){
        let id=obj.id;
        id=id.substr(3);
        console.log(id);
        console.log("R"+id);
        let contResp=document.getElementById("R"+id);
        console.log(contResp);
        let num=contResp.getElementsByTagName("input").length;
        console.log(num);
        if(num<=9){
          let novNum=num+1;
          let novIn=document.createElement("input");
          novIn.id="Op"+id+novNum;
          novIn.required=true;
          contResp.appendChild(novIn);
        }
      }
      if(obj.classList=="eliminar"){
        let idEm=obj.id;
        idEm=idEm.substr(3);
        let contenedor=document.getElementById("container");
        let contEm=document.getElementById("ContP"+idEm);
        let numEm=document.getElementsByClassName("pregunta").length;
        if(numEm >= 2){
          contenedor.removeChild(contenedor.childNodes[idEm-1]);
        }
      }
      if(obj.classList=="agPreg"){
        console.log("h");
        let contentAg=document.getElementById("container");
        let agCont=document.getElementsByClassName("pregunta").length;
        let agNum=parseInt(agCont);
        agNum=agNum+1;
        console.log(agCont);
        if(agCont<=4){
          let contAg = document.createElement("div");
          contAg.id="ContP"+agNum;
          contAg.classList.add("pregunta");
          let preguntaAg=document.createElement("input");
          preguntaAg.id="P"+agNum;
          let textoAg=document.createElement("h3");
          textoAg.id="Agr"+agNum;
          textoAg.classList.add("agregar");
          textoAg.innerText="Agregar opciones a la pregunta "+agNum;
          let opcionesAg=document.createElement("div");
          opcionesAg.id="R"+agNum;
          let botonAg=document.createElement("boton");
          botonAg.id="B"+agNum;

          let opAg=document.createElement("input");
          let opAg2=document.createElement("input");
          opAg.required=true;
          opAg2.required=true;
          opAg.id="Op"+agNum+"1";
          opAg2.id="Op"+agNum+"2";
          opcionesAg.appendChild(opAg);
          opcionesAg.appendChild(opAg2);
          preguntaAg.setAttribute("value","Pregunta "+agNum);
          let botonAg2=document.createElement("h4");
          botonAg2.id="Bot"+agNum;
          botonAg2.classList.add("eliminar");
          botonAg2.innerText="EliminarP"+agNum;
          contentAg.appendChild(contAg);
          contAg.appendChild(preguntaAg);
          contAg.appendChild(botonAg2);
          contAg.appendChild(textoAg);
          contAg.appendChild(opcionesAg);
        }
      }*/
    })
  }
})

function getValues(id) { //Obtener los valores del elemento con ese ID
  return document.getElementById(id).value;
}
