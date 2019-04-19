var window = window || {},
  document = document || {},
  console = console || {},
  Juego = Juego || {};



Juego.cargarJuego = function (botonHTML, contenedorHTML,seccionInicialHTML) {
  window.addEventListener("DOMContentLoaded", function(){
    var boton=0;
    if (typeof botonHTML === "string") {
        boton = document.getElementById(botonHTML);    
        boton.addEventListener("click",Juego.cargarEncuesta);
        boton.addEventListener("click",Juego.cargarBotones);
        Juego.contenedor = document.getElementById(contenedorHTML);
        Juego.seccionInicial = document.getElementById(seccionInicialHTML);
    }  
      
  });
}


Juego.VolverAEmpezar= function(){
    
    Juego.contenedor.classList.add("invisible");
    while(Juego.contenedor.hasChildNodes()){
	   Juego.contenedor.removeChild(Juego.contenedor.firstChild);
    }
    Juego.seccionInicial.classList.remove("invisible");
    Juego.estado = "empezado";
    window.clearInterval(Juego.intervalo);
}


Juego.cargarBotones = function (){
    var boton = document.createElement("button");    
    boton.classList.add("boton");
    boton.innerHTML="PUNTUAR";
    boton.addEventListener("click",Juego.puntuarEncuesta);
    Juego.contenedor.appendChild(boton);
    
    var boton2 = document.createElement("button");    
    boton2.classList.add("boton");
    boton2.innerHTML="VOLVER";
    boton2.addEventListener("click",Juego.VolverAEmpezar);
    Juego.contenedor.appendChild(boton2);
    
    
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


       
Juego.mostrarReloj= function(contenedorReloj){
    Juego.tiempo = document.createElement("div");
    Juego.tiempo.classList.add("tiempo");
    //Juego.tiempo.setAttribute("Termino","false");
    contenedorReloj.appendChild(Juego.tiempo);
        var minutos = parseInt(Juego.json.tiempoDeTrabajo/60);
        var segundos = Juego.json.tiempoDeTrabajo%60;
    
        Juego.tiempo.innerHTML = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
        Juego.intervalo = window.setInterval( function(){
            Juego.tiempoRestanteCompletado= minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
            
            if (--segundos < 0){
                segundos = 59;
                minutos--;
            }

            if (!minutos && !segundos){
                window.clearInterval(Juego.intervalo);
            }
            
            Juego.tiempo.innerHTML = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
        }, 1000);
    
    
    var miliseg = Juego.json.tiempoDeTrabajo*1000;
    window.setTimeout("Juego.puntuarEncuesta()",miliseg);
    
}



Juego.mostrarDatos = function(contenedorDatos){
    Juego.info = document.createElement("div");
    Juego.info.classList.add("info");
    contenedorDatos.appendChild(Juego.info);
    
    Juego.info.innerHTML = Juego.json.titulo;
}


Juego.cargarEncuesta = function (){
    
    if (Juego.contenedor.classList.contains("invisible")){
        Juego.contenedor.classList.remove("invisible");
    }// fin del IF (es INVISIBLE) 
    
    Juego.json = document.getElementById("jsonText").value;
    Juego.json = JSON.parse(Juego.json);
    
    Juego.seccionInicial.classList.add("invisible");
    
    //creo el div donde ira la informacion principal (en este caso titulo del test y el cronometro) 
    Juego.datos = document.createElement("div");
    Juego.datos.classList.add("datos");
    Juego.contenedor.appendChild(Juego.datos);
    
    Juego.mostrarDatos(Juego.datos);
    Juego.mostrarReloj(Juego.datos);
    
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
                pregtexto.innerHTML = i+". "+Juego.json.preguntas[posiJson].pregunta;
                preg.appendChild(pregtexto);
           Juego.preguntasInsertadas.push(posiJson);
            
        //insertar las posibles respuestas
           for (var j=0; j<Juego.json.preguntas[posiJson].respuestas.length; j++){
               
               var respuesta = document.createElement("label");
               respuesta.classList.add("respuesta")
               respuesta.setAttribute("idJsonPreg",posiJson);
               respuesta.setAttribute("nroOpcion",j);
               respuesta.innerHTML=Juego.json.preguntas[posiJson].respuestas[j];
                    var opcion = document.createElement("input");
                    opcion.setAttribute("type","checkbox");
                    opcion.setAttribute("idJsonPreg",posiJson);//id de la pregunta a la que pertenece
                    opcion.setAttribute("nroOpcion",j);// posicion en el array de respuesta de esa preg
                    opcion.setAttribute("tildado","false");
                    opcion.addEventListener('click',Juego.tildarDestildarRespuesta);
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
        
  if(Juego.estado != "terminado"){  
      //No se podra volver a puntuar, solo se hara una vez por juego, por quien se haya dado primero, ya sea por FIN del //cronometro o bien por que el usuario termino la encuesta
    Juego.estado = "terminado";
    window.clearInterval(Juego.intervalo);
    
      //cantidad total de respuestas a acertar.
    Juego.maxPuntaje = document.querySelectorAll(".respuesta [correcta='true']").length;
    //-----------------------------------------
    var aciertos = document.querySelectorAll("[type='checkbox'][correcta='true'][tildado='true']");
    var errores = document.querySelectorAll("[type='checkbox'][correcta='false'][tildado='true']");
    
    Juego.puntajeFinal= aciertos.length - errores.length;
    if (Juego.puntajeFinal<0){ Juego.puntajeFinal=0;} // para que no tenga puntajes negativos.
    
    var resultados= document.createElement("div");
    resultados.classList.add("resultados");
    
    var puntajeActual = document.createElement("label");
    puntajeActual.classList.add("resultado");
    puntajeActual.innerHTML="Puntaje: "+Juego.puntajeFinal;
    resultados.appendChild(puntajeActual);
    
    var maxpuntuacion = document.createElement("label");
    maxpuntuacion.classList.add("resultado");
    maxpuntuacion.innerHTML="De: "+Juego.maxPuntaje;
    resultados.appendChild(maxpuntuacion);
    
    var tiempoCompletado = document.createElement("label");
    tiempoCompletado.classList.add("resultado");
    tiempoCompletado.innerHTML="Tiempo restante: "+Juego.tiempoRestanteCompletado;
    resultados.appendChild(tiempoCompletado);

      
    Juego.contenedor.appendChild(resultados);
    
    Juego.marcarResultados(aciertos,errores);
  }
}



Juego.marcarResultados = function (aciertos,errores){
    for (var i1=0; i1<aciertos.length;i1++){
        aciertos[i1].classList.add("acierto");   
        var nroopcion1 = aciertos[i1].getAttribute("nroopcion");
        var idjsonPreg1 = aciertos[i1].getAttribute("idjsonpreg");
        var labelAcierto = document.querySelector(".respuesta[idjsonpreg='"+idjsonPreg1+"'][nroopcion='"+nroopcion1+"']");
        labelAcierto.classList.add("acierto");
    }
    
    for (var i2=0; i2<errores.length;i2++){
        errores[i2].classList.add("error");    
        var nroopcion2 = errores[i2].getAttribute("nroopcion");
        var idjsonpreg2 = errores[i2].getAttribute("idjsonpreg");
        var labelError = document.querySelector(".respuesta[idjsonpreg='"+idjsonpreg2+"'][nroopcion='"+nroopcion2+"']");
        labelError.classList.add("error");       
    }      
}















