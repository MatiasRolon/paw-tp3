var window = window || {},
  document = document || {},
  console = console || {},
  Pagina = Pagina || {};

var animaciones = ["AnimacionIzq","AnimacionDer","AnimacionThumb"];

var imgCargadas = -1;
var images = ["https://bensbargains.com/thecheckout/wp-content/uploads/2013/07/breaking-bad.jpg",   
              "http://www.upnworld.com/movie_rest/assets/uploads/movie/8fef8-bbb2.jpg",
              "http://images.amcnetworks.com/amctv.es/wp-content/uploads/2015/01/BB_509.jpg"];
var imgActual =0;

Pagina.cargarCarrusel = function(contenedorHTML){
     window.addEventListener("DOMContentLoaded", function(){
        Pagina.contenedor = document.getElementById(contenedorHTML);
        Pagina.cargarElementos();
     });
    
    //CORREGIR> DETECTA CUANDO SE APRETARON LAS FLECHAS DEL TECLADO.
    window.addEventListener("keypress",function(event){
            console.log("se presiono: "+ event.keyCode);
        });
}


Pagina.cargarElementos = function(){
    //Creo la seccion con la imagenes
   Pagina.seccionCarrusel= document.createElement("section");
   Pagina.seccionCarrusel.classList.add("carrusel");
   Pagina.contenedor.appendChild(Pagina.seccionCarrusel);  
    
    Pagina.botonIzq = document.createElement("button");
    Pagina.botonIzq.classList.add("boton");
    Pagina.botonIzq.classList.add("haciaAtras");
    Pagina.botonIzq.innerHTML="<";
    Pagina.botonIzq.addEventListener("click",function(){
        Pagina.anterior();
        Pagina.pasarImagen(animaciones[0]);
    }); 
    Pagina.seccionCarrusel.appendChild(Pagina.botonIzq);
        
    Pagina.botonDer = document.createElement("button");
    Pagina.botonDer.classList.add("boton");
    Pagina.botonDer.classList.add("haciaDelante");
    Pagina.botonDer.innerHTML=">";
    Pagina.botonDer.addEventListener("click",function(){
        Pagina.siguiente();
        Pagina.pasarImagen(animaciones[1]);
    });
    Pagina.seccionCarrusel.appendChild(Pagina.botonDer);
    
    Pagina.cargarImagenes(images);
    //creo la seccion con los thumbs
   Pagina.seccionThumbs= document.createElement("div");
   Pagina.seccionThumbs.classList.add("thumbs");
   Pagina.seccionCarrusel.appendChild(Pagina.seccionThumbs);   
    //agregar function que agregue los thumbs
    Pagina.cargarThumbs();
    
    Pagina.botonDer.classList.add("no-visible");
    Pagina.botonIzq.classList.add("no-visible");
    
}


Pagina.cargarImagenes= function(){
    var cont = 0;
    var ulInsert= document.createElement("ul");
    ulInsert.classList.add("listaImagenes");
    
    var preCarga = document.createElement("div");
    preCarga.classList.add("texto");
    preCarga.classList.add("pre-carga");
    var barra = document.createElement("div");
    barra.classList.add("progreso-carga");
    barra.classList.add("pre-carga");
    ulInsert.appendChild(barra);
    ulInsert.appendChild(preCarga);
    
    images.forEach(function(path){
        var liInsert = document.createElement("li");
        liInsert.classList.add("li-imagen");
        liInsert.setAttribute("idImg",cont); //CORREGIRRRRRR ES IDIMG
        var imgInsert = document.createElement("img");
        imgInsert.classList.add("img-imagen");
        imgInsert.setAttribute("idImg",cont);
        imgInsert.classList.add("no-visible");
        if (cont==0){//para la primera imagen insertada
            liInsert.classList.add("activa"); 
        }
        imgInsert.setAttribute("src",path);
        liInsert.appendChild(imgInsert);
        ulInsert.appendChild(liInsert);
        cont++;
        
        imgInsert.addEventListener("load", Pagina.actualizarImgCargadas)
    })
    
    Pagina.seccionCarrusel.appendChild(ulInsert);
    Pagina.actualizarImgCargadas();
}


Pagina.progresoBarra = function(porcen) {
    var barra = document.querySelector(".progreso-carga"); 
    barra.style.width = porcen + '%'; 
}

Pagina.actualizarImgCargadas = function(){
    imgCargadas++;
    var preCarga = document.querySelector(".texto.pre-carga");
    var porcen = (imgCargadas*100/images.length).toFixed(1); 
    preCarga.innerHTML = "CARGANDO "+porcen+"%"; /*("+imgCargadas +"/"+ images.length+")";*/
    console.log("imagenes cargadas> "+ imgCargadas);
    Pagina.progresoBarra(porcen);
    //Si ya se cargaron todas, vuelvo visibles todos los elementos que no tenian que estarlo durante la carga.
    if (imgCargadas==images.length){
        var visibles = document.querySelectorAll(".no-visible");
        visibles.forEach(function(e){
                            e.classList.remove("no-visible");
                        }
        );
        //elimina los elementos usados mientras cargaban las imagenes
       document.querySelectorAll(".pre-carga").forEach(function(e){ 
                                                        e.parentNode.removeChild(e)
                                                    });
    }
}


Pagina.cargarThumbs=function(){
    
    for (var i=0;i<images.length;i++){
        var t = document.createElement("div");
        t.classList.add("thumb");
        if (i==0) { t.classList.add("activo")}
        t.setAttribute("idImg",i);
        t.addEventListener("click",function(){// actualiza la imgActual para luego llamar a PasarImagen
            imgActual = this.getAttribute("idImg");
            Pagina.pasarImagen(animaciones[2]);
        });
        t.classList.add("no-visible");
        Pagina.seccionThumbs.appendChild(t);
    }
}



Pagina.anterior = function(){
    if (imgActual==0){
        imgActual= (images.length-1);} 
        else{imgActual--;}    
}

Pagina.siguiente = function(){
    if (imgActual==(images.length-1)){
        imgActual= 0;} 
        else{imgActual++;}    
}

Pagina.pasarImagen=function(animacion){

    var ant = document.querySelector(".anterior");
    if(ant!=null){ant.classList.remove("anterior");}

    //remuevo la clase activo/a de la imagen y del thumb
    var x = document.querySelector(".li-imagen.activa");
    x.classList.remove("activa");
    x.classList.add("anterior");
    var y = document.querySelector(".thumb.activo");
    y.classList.remove("activo");
    
    for (var i=0;i<animaciones.length;i++){
        if (x.classList.contains(animaciones[i])){ x.classList.remove(animaciones[i]); }
    }
    
    //agrego la clase activo/a a la imagen y al thumb
    var x1 = document.querySelector(".li-imagen[idImg='"+imgActual+"']");
    x1.classList.add("activa");
    x1.classList.add(animacion);
    var y1 = document.querySelector(".thumb[idImg='"+imgActual+"']");
    y1.classList.add("activo");
}










