var window = window || {},
  document = document || {},
  console = console || {},
  Juego = Juego || {};

Juego.niveles = [
  {
    ancho: 8,
    alto: 8,
    minas: 10, 
    nombre: "principiante"  
  },
  {
    ancho: 16,
    alto: 16,
    minas:40     ,
    nombre: "intermedio"
  },
  {
    ancho: 16,
    alto: 30,
    minas:99,
    nombre: "experto"
  }
];

Juego.cargarJuego = function (botonHTML, contenedorHTML) {
  window.addEventListener("DOMContentLoaded", function(){
    var boton=0;
    if (typeof botonHTML === "string") {
        boton = document.getElementById(botonHTML);    
        boton.addEventListener("click",Juego.cargarEncuesta);
        boton.addEventListener("click",Juego.cargarBoton);
        Juego.contenedor = document.getElementById(contenedorHTML);
    }  
      
  });
}

/*  EJEMPLO INSERTAR ELEMENTO
    var tSection = document.createElement("section");
    tSection.classList.add("divsito");
    Juego.contenedor.appendChild(tSection);*/
    
Juego.cargarBoton = function (){
    boton = document.createElement("button");    
    boton.classList.add("boton");
    boton.innerHTML="PUNTUAR";
    boton.addEventListener("click",Juego.puntuarEncuesta);
    Juego.contenedor.appendChild(boton);
    
}


//si el id de esa preg (parametro) ya forma parte de las preguntas insertadas, no se la pondra de nuevo
Juego.preguntaInsertada = function(posiJson){
    var e=0 
    var salir = false;
    while ((e<Juego.preguntasInsertadas.length) & (!salir)){             
        if (posiJson==Juego.preguntasInsertadas[e]){
            salir=true;
        }
        e++;
    }
   if (salir){return true;
   }else {return false;}
}


Juego.tildarDestildarRespuesta = function(){
    if (this.getAttribute("tildado")=="true"){
        this.setAttribute("tildado","false");
    }else{this.setAttribute("tildado","true"); }    
}

                                                    
Juego.cargarEncuesta = function (){
    Juego.json = document.getElementById("jsonText").value;
    Juego.json = JSON.parse(Juego.json);
    
    //Juego.x =(Juego.json.preguntas[2].respuestas[1]);
    Juego.cantPreguntas = Juego.json.cantidadAPreguntar;
    Juego.preguntas=0;
    
    //cargar las preguntas
    Juego.preguntasInsertadas= [];
    var i=0;
    while (i<Juego.cantPreguntas){
        var posiJson = parseInt(Math.random() * (Juego.json.preguntas.length));
        
        if (!Juego.preguntaInsertada(posiJson)){
         //la agrego si todavia no se inserto como pregunta anteriormente            
           i++;
           var preg = document.createElement("div");
           preg.classList.add("pregunta");
           preg.setAttribute("nroPreg",i);//numero de pregunta en la encuesta del usuario
           preg.setAttribute("idJson",posiJson);//numero de pregunta segun posicion en el json
                var pregtexto = document.createElement("p"); // inserto el texto de la pregunta
                pregtexto.innerHTML = Juego.json.preguntas[posiJson].pregunta;
                preg.appendChild(pregtexto);
           Juego.preguntasInsertadas.push(posiJson);
            
        //insertar las posibles respuestas
           for (var j=0; j<Juego.json.preguntas[posiJson].respuestas.length; j++){
               
               var respuesta = document.createElement("label");
               respuesta.classList.add("respuesta")
               respuesta.setAttribute("idJsonPreg",posiJson);
               respuesta.setAttribute("nroOpcion",j);
               respuesta.setAttribute("tildado","false");
               respuesta.addEventListener('click',Juego.tildarDestildarRespuesta);
               respuesta.innerHTML=Juego.json.preguntas[posiJson].respuestas[j];
                    var opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("nroOpcion",j);// posicion en el array de respuesta de esa preg
                    opcion.setAttribute("tildado","false");
                    opcion.addEventListener('click',Juego.tildarDestildarRespuesta);
               
                    opcion.setAttribute("idJsonPreg",posiJson);//id de la pregunta a la que pertenece
               //cargar en un atributo de la respuesta si ES O NO correctas
                var e=0 
                var salir = false;
                while ((e<Juego.json.preguntas[posiJson].correctas.length) & (!salir)){             
                    if (j==Juego.json.preguntas[posiJson].correctas[e]){
                        opcion.setAttribute("correcta","true");
                        respuesta.setAttribute("correcta","true");
                        salir=true;
                    }
                    e++;
                }
               if (!salir){
                        opcion.setAttribute("correcta","false");
                        respuesta.setAttribute("correcta","false");
               }
               //FIN cargar cuales son correctas 
               
                respuesta.appendChild(opcion); //inserto input en el label
                preg.appendChild(respuesta);//inserto label (es decir, respuesta) en el div PREGUNTA
           }//FIN insertar las posibles respuestas       
            
           Juego.contenedor.appendChild(preg);// insertar la PREGUNTA en el contenedor
        }// fin IF insertar preguntas si no estan anteriormente    
    }//fin while insertar preguntas
}


Juego.puntuarEncuesta = function (){
    
    Juego.maxPuntaje = document.querySelectorAll(".respuesta [correcta='true']").length;
    
    var aciertos = document.querySelectorAll(".respuesta[correcta='true'][tildado='true']");
    var errores = document.querySelectorAll(".respuesta[correcta='false'][tildado='true']");
    
    Juego.puntajeFinal= aciertos.length - errores.length;
    
    var resultados= document.createElement("div");
    resultados.classList.add("resultados");
    
    var puntajeActual = document.createElement("label");
    puntajeActual.classList.add("resultado");
    puntajeActual.innerHTML="Puntaje: "+Juego.puntajeFinal;
    resultados.appendChild(puntajeActual);
    
    var maxpuntuacion = document.createElement("label");
    maxpuntuacion.classList.add("resultado");
    maxpuntuacion.innerHTML="Maximos aciertos posibles: "+Juego.maxPuntaje;
    resultados.appendChild(maxpuntuacion);
    
    Juego.contenedor.appendChild(resultados);

    for (var i1=0; i1<aciertos.length;i1++){
        aciertos[i1].classList.add("acierto");        
    }
    
    for (var i2=0; i2<errores.length;i2++){
        errores[i2].classList.add("error");        
    }         
    
}


















