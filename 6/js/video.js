var window = window || {},
  document = document || {},
  console = console || {},
  Pagina = Pagina || {};


//NOTAS            
Pagina.cargarAdministracionVideos = function(contenedorHTML){
     window.addEventListener("DOMContentLoaded", function(){
        
        Pagina.contenedor = document.getElementById(contenedorHTML); 
        
        //creo la seccion AgregarVideos 
        Pagina.seccionAgregarVideo = document.createElement("section");
        Pagina.seccionAgregarVideo.classList.add("agregarVideos");
         
        //creo el input que permitira al usuario elegir el video a agregar 
        var input = document.createElement("input");
        input.classList.add("boton"); 
        input.classList.add("seleccionar"); 
        input.setAttribute("id","video");
        input.setAttribute("type","file");
        input.setAttribute("accept","mp4");
         
        Pagina.file = input; //defino el infut como FILE. De esta variable tomaremos el video
         
        //creo el boton que agregara a la lista el video 
        var botonAgregar = document.createElement("button");
        botonAgregar.setAttribute("id","botonAgregar");
        botonAgregar.classList.add("boton");
        botonAgregar.innerHTML = "AGREGAR";
         
        //inserto input y boton dentro de la seccion de AgregarVideo 
        Pagina.seccionAgregarVideo.appendChild(input);
        Pagina.seccionAgregarVideo.appendChild(botonAgregar);
            
        botonAgregar.addEventListener("click",Pagina.agregarVideo);
         
        Pagina.seccionVideoActual = document.createElement("section");
            Pagina.seccionVideoActual.classList.add("videos");  
            Pagina.seccionVideoActual.classList.add("videoActual");
         
        Pagina.seccionListaVideos = document.createElement("section");
            Pagina.seccionListaVideos.classList.add("videos");
            Pagina.seccionListaVideos.classList.add("listaVideos");
        
         //agrego a la pagina las dos secciones principales
        Pagina.contenedor.appendChild(Pagina.seccionAgregarVideo); 
        Pagina.contenedor.appendChild(Pagina.seccionVideoActual);
        Pagina.contenedor.appendChild(Pagina.seccionListaVideos); 

         //agrego los atributos del video en reproduccion, ya que siempre seran las mismas y habra uno solo
        Pagina.videoActual = document.createElement("video"); 
        Pagina.videoActual.setAttribute("width","95%");
        Pagina.videoActual.setAttribute("idvideo",null);
        Pagina.videoActual.setAttribute("controls","true");
         //source.setAttribute("type","video/mp4")
        Pagina.seccionVideoActual.appendChild(Pagina.videoActual);
        Pagina.cantVideos = 0; 
         
        // agrego el titulo
        Pagina.tituloVideoActual = document.createElement("label");
        Pagina.seccionVideoActual.appendChild(Pagina.tituloVideoActual); 
         
        //bandera que me avisa si ya se empezo a reproducir algun video.
        Pagina.videoEnReproduccion = "false"; 
     });
}


Pagina.agregarVideo = function(){
    
    Pagina.cantVideos++;
    
    //creo el contenedor para ese video
    var video = document.createElement("div");
    video.classList.add("listado");    
    
    //añado la miniatura que se vera (es el video en si, pero sin propiedades para reproducirlo)
    var miniatura = document.createElement("video");
    miniatura.setAttribute("idVideo",Pagina.cantVideos);
    
    var dataURL = URL.createObjectURL(Pagina.file.files[0]); 
        miniatura.setAttribute("src",dataURL);   
    
    //creo el label que muestra su nombre
    var nombreVideo = document.createElement("label");    
    nombreVideo.innerHTML = Pagina.file.files[0].name;
    miniatura.setAttribute("tituloVideo",Pagina.file.files[0].name); 
    //Agrego evento que selecciona el video en Reproduccion.
    miniatura.addEventListener("click",function(){
                                    if (Pagina.videoEnReproduccion == "true"){
                                        var selecAnt = document.querySelector(".seleccionado");
                                        if (selecAnt!=null){ selecAnt.classList.remove("seleccionado"); }                        
                                    }
                                    var src = miniatura.getAttribute("src");
                                    Pagina.videoActual.setAttribute("src",src);
                                    Pagina.videoActual.setAttribute("idVideo", miniatura.getAttribute("idVideo"));
                                    var numVideo= miniatura.getAttribute("idVideo")-1;
                                    Pagina.tituloVideoActual.innerHTML=miniatura.getAttribute("tituloVideo");
        
                                    video.classList.add("seleccionado");                            
                                    Pagina.videoEnReproduccion = "true";
                          });
    
    
    
    //creo el boton para sacarlo de la lista de reproduccion cuando el usuario desee
    var botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton");
    botonEliminar.classList.add("quitar");
    botonEliminar.innerHTML = "X";
    botonEliminar.addEventListener("click",function(){
                                                if (Pagina.videoActual.getAttribute("idVideo")==miniatura.getAttribute("idVideo")){
                                                    Pagina.videoActual.setAttribute("src","");
                                                    Pagina.videoEnReproduccion="false";
                                                    Pagina.tituloVideoActual.innerHTML="";
                                                }
                                                Pagina.seccionListaVideos.removeChild(video);
                                          });
        
    //Agrego todos los elementos creados a su contenedor
    video.appendChild(miniatura);
    video.appendChild(nombreVideo);
    video.appendChild(botonEliminar);
    
    Pagina.seccionListaVideos.appendChild(video);
}









