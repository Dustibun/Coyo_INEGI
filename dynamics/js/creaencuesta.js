

let lista=$(".lista");   //stringify=>json(encode)
let categorias=[];
let listaCategoria=$(".categoria");

///////////////////////////////////////////////////Peticion Ajax//////////////////////////////////////////////////////////////////
/*
var jsonString= JSON.stringify(dataString);

$.ajax({
  type: "POST",
  url: "ajax.php",
  data: {data: jsonString},
  cache: false,
  success: (response)=>{
    alert("ok");
    var datos=(JSON.parse(response));
    for (var i = 0; i < datos.length; i++) {
      console.log(datos[i]);
    }
  }

})
*/

///////////////////////////////////////////////////Peticion Ajax//////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////Peticion Categoria//////////////////////////////////////////////////////////////////

/*
function getCategories(){
  fetch(`../dynamics/php/categorias.php?`, {
    method: 'GET'
}).then((response)=> {
  return response.json();

}).then((data)=> {

  data.forEach(element =>{

    var option=$("option");
    option.text=categorias[indice];
    option.attr("value", categorias[indice]);
    listaCategoria.append(option);
  })
})

}

///////////////////////////////////////////////////Peticion Categoria//////////////////////////////////////////////////////////////////

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
    var option=$("option");
    option.text=categorias[indice];
    option.attr("value", categorias[indice]);
    listaCategoria.append(option);
  }
},1000);*/



$("#sub").click(function(event){
  var ok= true;
  var errores=[];
  var fecha=$("#fecha").val();
  var numer=$("#number").val();
  var nom=$("#titulo").val();
  var des=$("#desc").val();
  var det=$("#det").val();
  var ing=$("#in").val();
  if(fecha=="" || numer<1 || nom=="" || des=="" ){
    ok=false;
  }
  let contador=numer;
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////:) Crear Preguntas /////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  if (ok==true) {
    let cambio=$(".cambio");
    cambio.empty();
    $(".oculta").removeClass("oculta");
    let inp=$("#sub");
    inp.addClass("Envios");
    let contenedor=$("#container");
    for (var j = 1; j <= contador; j++) {
      let cont = $("<div>");
      cont.addClass("ContP");
      let pregunta=$("<input>");
      pregunta.addClass("pregunta");
      pregunta.attr("name", "pregunta");
      pregunta.attr("required", "true");

      let texto=$("<h4>");
      texto.addClass("agregar");
      texto.text("Agregar opciones a la pregunta");
      let opciones=$("<div>");
      opciones.addClass("respuestas");

      let div1=$("<div>");
      div1.addClass("dOpcion");
      let div2=$("<div>");
      div2.addClass("dOpcion");
      let op1=$("<input>");
      let el1=$("<label>");
      let op2=$("<input>");
      let el2=$("<label>");
      el1.text("X");
      el2.text("X");
      op1.attr("required","true");
      op2.attr("required","true");
      op1.addClass("opcion");
      op1.attr("name","opcion");
      op2.addClass("opcion");
      op2.attr("name","opcion");
      el1.addClass("elmOp");
      el2.addClass("elmOp");
      div1.append(el1);
      div1.append(op1);
      div2.append(el2);
      div2.append(op2);
      opciones.append(div1);
      opciones.append(div2);

      let botonEliminar=$("<label>");
      botonEliminar.addClass("eliminar");
      botonEliminar.text("Eliminar pregunta");
      contenedor.append(cont);
      cont.append(pregunta);
      cont.append(botonEliminar);
      cont.append(texto);
      cont.append(opciones);
    }

  $("body").click(function(event){
    var obje=$(event.target);
    var objeI=$(obje).attr('id');
    console.log(objeI);
    let obj=$(event.target);
     if(obj.hasClass("eliminar")){
       let cont=$(".ContP").length;
       if(cont>=2){
         let divEliminado=obj.parent();
         divEliminado.remove();
       }
     }
     if(obj.hasClass("agregar")){
       let divAgregado=obj.parent();
       let respuestas=$(divAgregado).find(".respuestas");
       let input=$(respuestas).find(".opcion").length;
       if(input<=9){
         let divNuevo=$("<div>");
         divNuevo.addClass("dOpcion");
         let nuevoInput=$("<input>");
         let nuevoEl=$("<label>");
         nuevoEl.addClass("elmOp");
         nuevoEl.text("X");
         nuevoInput.attr("required","true");
         nuevoInput.attr("name","opcion");
         nuevoInput.addClass("opcion");
         divNuevo.append(nuevoEl);
         divNuevo.append(nuevoInput);
         respuestas.append(divNuevo);
       }
     }
     if(obj.hasClass("elmOp")){
       let opElim=obj.parent();
       let conOp=opElim.parent();
       let totalOp=$(conOp).find(".dOpcion").length;
       if(totalOp>2){
         opElim.remove();
       }
     }
     if(obj.hasClass("agPreg")){
       let totalPreguntas=$(".ContP").length;
       if(totalPreguntas<=4){
         let cont = $("<div>");
         cont.addClass("ContP");
         let pregunta=$("<input>");
         pregunta.addClass("pregunta");
         pregunta.attr("name", "pregunta");
         pregunta.attr("required", "true");

         let texto=$("<h4>");
         texto.addClass("agregar");
         texto.text("Agregar opciones a la pregunta");
         let opciones=$("<div>");
         opciones.addClass("respuestas");

         let div1=$("<div>");
         div1.addClass("dOpcion");
         let div2=$("<div>");
         div2.addClass("dOpcion");
         let op1=$("<input>");
         let el1=$("<label>");
         let op2=$("<input>");
         let el2=$("<label>");
         el1.text("X");
         el2.text("X");
         op1.attr("required","true");
         op2.attr("required","true");
         op1.addClass("opcion");
         op1.attr("name","opcion");
         op2.addClass("opcion");
         op2.attr("name","opcion");
         el1.addClass("elmOp");
         el2.addClass("elmOp");
         div1.append(el1);
         div1.append(op1);
         div2.append(el2);
         div2.append(op2);
         opciones.append(div1);
         opciones.append(div2);
         let botonEliminar=$("<label>");
         botonEliminar.addClass("eliminar");
         botonEliminar.text("Eliminar pregunta");
         contenedor.append(cont);
         cont.append(pregunta);
         cont.append(botonEliminar);
         cont.append(texto);
         cont.append(opciones);
       }
     }
     if(objeI=="sub"){
       obtenerDatos();
     }
    })
  }
});

function obtenerDatos(){
   var validacion=0;
   $(".pregunta").each(function(indice, elemento){
      if($(elemento).val()==""){
        validacion=1;
      }
    });
    $(".opcion").each(function(indice, elemento){
       if($(elemento).val()==""){
         validacion=1;
       }
    });
    if(validacion==0){
      let preguntas=$("#container").find(".pregunta");
      let campos=$("#container").find(".pregunta").length;
      let titulo=$("#titulo").val();
      let descripcion=$("#desc").val();
      let arrayEnc=["0",titulo,"1","0",campos,"0","0","0",descripcion];
      console.log(arrayEnc);
      let arrayP=[];
      let arrayO=[];
      let u=0;
      $(".pregunta").each(function(){
        let i=0;
        arrayP=[];
        arrayP[i]=$(this).val();
        let padre=$(this).parent();
        $(padre).find(".opcion").each(function(ind,elem){
          i++;
          arrayP[i]=$(elem).val();
        });
        arrayO[u]=arrayP;
        u++;
      });

     // // arrayO y arrayEnc
     // var uj= JSON.stringify(arrayO);
     // var dj= JSON.stringify(arrayEnc);




     console.log("Ya se va a realizar ajax");
     let oshuj=JSON.stringify(arrayO);
     $.ajax({
             type: "POST",
             dataType: "json",
             url: "../dynamics/php/recibejson.php",
             data: {myData:oshuj},
             cache: false,
             contentType: "application/json; charset=utf-8",
             success: (response)=>{
                 alert('Items added');
             },
             error: function(e){
                 console.log(e.message);
             }
     });



     // var miAjax = new Request({
     //   url: "../dynamics/php/recibejson.php",
     //   data: "datos=" + uj,
     //   onSuccess: function(SI){
     //     $('resultado').set("html", si);
     //   },
     //   onFailure: function(){
     //     $('resultado').set("html", "fallo en la conexión Ajax");
     //   }
     // })
     // miAjax.send();

     $(document).ready(function(){
         $('#getUser').on('click',function(){
             var user_id = $('#user_id').val();
             // var user_id = 1;
             $.ajax({
                 type:'POST',
                 url:'ajax.php',
                 dataType: "json",
                 data:{user_id:user_id},
                 success:function(data){
                     if(data.status == 'ok'){
                       var nombre =  data.result.name;
                         // $('#userEmail').text(data.result.email);
                         // $('#userPhone').text(data.result.phone);
                         // $('#userCreated').text(data.result.created);
                         $('.user-content').slideDown();
                         console.log(nombre);
                     }else{
                         $('.user-content').slideUp();
                         alert("User not found...");
                     }
                 }
             });
         });
     });







      // function getPoll() {
      //  fetch(`../dynamics/php/consulta.php?`, {
      //    method: 'GET'
      //  }).then((response) => {
      //
      //    return response.json();
      //
      //  }).then((data) => {
      //
      //    data.forEach(element => {
      //
      //      datos.id_encuesta=element.id_encuesta
      //      datos.id_categoria=element.id_categoria
      //      datos.nombre=element.nombre
      //      datos.id_estado=element.id_estado
      //      datos.id_usuario=element.id_usuario
      //      datos.campos=element.campos
      //      datos.fecha=element.fecha
      //      datos.determinado=element.determinado
      //      datos.id_registro=element.id_registro
      //
      //    });
      //    console.log(datos);
      //    document.getElementById("nombredelusuario").innerHTML=datos.id_encuesta;
      // })
      //
      // }
      //
      // getPoll();
      //




    }
  }

function getValues(id) {
  return $("#"+id).val();
}
