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

Juego.cargarJuego = function (botonHTML,nivelHTML) {
  window.addEventListener("DOMContentLoaded", function(){
    if (typeof botonHTML === "string") {
        Juego.botonJugar = document.getElementById(botonHTML);    
    }
    Juego.nivelActual=nivelHTML;  
    Juego.botonJugar.addEventListener("click",Juego.cargarGrilla);
      
  });
}

Juego.cargarGrilla = function (){
    var grillaACargar = document.getElementById("grilla"); //HARCODEADO. [CORREGIR]
    var nivelACargar = document.getElementById(Juego.nivelActual).value;   
    grillaACargar.classList.add(nivelACargar);
    grillaACargar.setAttribute("nivel",nivelACargar);
    grillaACargar.setAttribute("estado","cargada");
    
    Juego.nivelActual=nivelACargar;
    
    //----------------------------------------------
    var datosNivel = Juego.niveles.find(function(item){
                                        return item.nombre=Juego.nivelActual;});
    Juego.filMax= datosNivel.alto;
    Juego.colMax= datosNivel.ancho;
    Juego.cantMinas = datosNivel.minas;
    
    for (var i = 0; i < Juego.filMax; i++) {
        var ContenedorFila =document.createElement("div");
        ContenedorFila.classList.add("ContenedorFila");
        ContenedorFila.setAttribute("nro-fila", i);
        grillaACargar.appendChild(ContenedorFila);
        
        for (var j = 0; j < Juego.colMax; j++) {
                  var bloque = document.createElement("div");
                  bloque.classList.add("bloque");
                  bloque.setAttribute("data-i", i);
                  bloque.setAttribute("data-j", j);
                  bloque.setAttribute("bombasAlrededor", 0);
                  ContenedorFila.appendChild(bloque);    
        }   //fin for interno
    }//fin for externo

    Juego.CargarBombas();
    //Juego.CargarNumeros();
    
}// fin cargarGrilla


Juego.CargarBombas = function (){
    Juego.bloques= document.querySelectorAll(".bloque");
    var bombasCargadas=0;
    while (bombasCargadas <Juego.cantMinas){
        var posi = parseInt(Math.random() * (Juego.bloques.length));
        if (!Juego.bloques[posi].classList.contains("bomba")){
            Juego.bloques[posi].classList.add("bomba"); 
            bombasCargadas++;

                            //aumento bombasAlrededor de los bloques al rededor de esa bomba
            var fil = Juego.bloques[posi].getAttribute("data-i");
            var col = Juego.bloques[posi].getAttribute("data-j");
            
            console.log("ANALIZADO> ["+fil +","+col+"]");
            
            var bloquesX= document.querySelectorAll(".bloque");
            var i=0;
            while (i<bloquesX.length){
                
                /*if ((bloquesX[i].getAttribute("data-i")==(fil-1))& (bloquesX[i].getAttribute("data-j")==(col-1))){
                    bloquesX[i].classList.add("numeros");}
                
                if ((bloquesX[i].getAttribute("data-i")==(fil-1))& (bloquesX[i].getAttribute("data-j")==(col))){
                    bloquesX[i].classList.add("numeros"); }
                
                if ((bloquesX[i].getAttribute("data-i")==(fil-1))& (bloquesX[i].getAttribute("data-j")==(col+1))){
                    bloquesX[i].classList.add("numeros"); }*/
                
                if ((bloquesX[i].getAttribute("data-i")==(fil))& (bloquesX[i].getAttribute("data-j")==(col-1))){
                    if (!Juego.bloquesX[i].classList.contains("bomba")){ 
                         bloquesX[i].classList.add("numeros");
                    }
                }
                if ((bloquesX[i].getAttribute("data-i")==(fil))& (bloquesX[i].getAttribute("data-j")==(col+1))){
                    if (!Juego.bloquesX[i].classList.contains("bomba")){
                        bloquesX[i].classList.add("numeros");
                    }
                }
                    
                i++;    
                /*if ((bloquesX[i].getAttribute("data-i")==(fil+1))& (bloquesX[i].getAttribute("data-j")==(col-1))){
                    bloquesX[i].classList.add("numeros"); }
                
                if ((bloquesX[i].getAttribute("data-i")==(fil+1))& (bloquesX[i].getAttribute("data-j")==(col))){
                    bloquesX[i].classList.add("numeros"); }
                
                if ((bloquesX[i].getAttribute("data-i")==(fil+1))& (bloquesX[i].getAttribute("data-j")==(col+1))){
                    bloquesX[i].classList.add("numeros"); }*/
            }// fin del for recorre bloques
        }
        
    }   

    Juego.bloques= document.querySelectorAll(".bloque");
} //fin CargarBombas

Juego.CargarNumeros = function(){

    for (var i=0; i<Juego.bloques.length;i++){
        var bombasAlrededor=0;
        
            var fil = Juego.bloques[i].getAttribute("data-i");
            var col = Juego.bloques[i].getAttribute("data-j");

            var bloqueX=0;
            console.log("ANALIZADO> ["+fil +","+col+"]");

            bloqueX= document.querySelector(".bloque.bomba[data-i='"+(fil-1)+"'], .bloque.bomba[data-i='"+(col-1)+"']");
            if (bloqueX!=null){
                    bombasAlrededor++;
                    console.log("BOMBA ARRIBA IZQUIERDA");
            }
    
            if (bombasAlrededor>0){
                    Juego.bloques[i].classList.add("Numeros");
            }
            console.log("---CAMBIO DE BLOQUE---")
    }//fin del for    
} 
    





















