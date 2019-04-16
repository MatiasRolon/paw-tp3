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

Juego.cargarJuego = function (botonHTML) {
  window.addEventListener("DOMContentLoaded", function(){
    if (typeof botonHTML === "string") {
        Juego.botonJugar = document.getElementById(botonHTML);    
    }
    Juego.botonJugar.addEventListener("click",Juego.cargarGrilla());
      
  });
}

Juego.cargarGrilla = function (){
    //HARCODEADO. [CORREGIR]
    var grillaACargar = document.getElementById("grilla");
    var nivelACargar = document.getElementById("nivel").value;
    grillaACargar.classList.add("experto");
    grillaACargar.setAttribute("nivel",nivelACargar);
    grillaACargar.setAttribute("estado","cargada");
    
    Juego.nivelActual="principiante";
    
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
                  bloque.setAttribute("bomba", false);
                  bloque.setAttribute("data-i", i);
                  bloque.setAttribute("data-j", j);
                  ContenedorFila.appendChild(bloque);    
        }   //fin for interno
    }//fin for externo

    Juego.CargarBombas();
    Juego.CargarNumeros();
    
}// fin cargarGrilla


Juego.CargarBombas = function (){
    Juego.bloquesLibres= document.querySelectorAll(".bloque[bomba=false]");
    var bombasCargadas=0;
    while (bombasCargadas <Juego.cantMinas){
        var posi = parseInt(Math.random() * (Juego.bloquesLibres.length));
        if (Juego.bloquesLibres[posi].getAttribute("bomba")=="false"){
            Juego.bloquesLibres[posi].setAttribute("bomba",true);
            bombasCargadas++;  
        }
    }   

    Juego.bloquesLibres= document.querySelectorAll(".bloque[bomba=false]");
} //fin CargarBombas

Juego.CargarNumeros = function(){

    for (var i=0; i<Juego.bloquesLibres.length;i++){
        var bombasAlrededor=0;    
        var fil = Juego.bloquesLibres[i].getAttribute("data-i");
        var col = Juego.bloquesLibres[i].getAttribute("data-j");
        
        var bloqueX=0;
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil)+"'], .bloque[data-j='"+(col-1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil-1)+"'], .bloque[data-j='"+(col)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil-1)+"'], .bloque[data-j='"+(col+1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil)+"'], .bloque[data-j='"+(col-1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil)+"'], .bloque[data-j='"+(col+1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil+1)+"'], .bloque[data-j='"+(col-1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil+1)+"'], .bloque[data-j='"+(col)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        bloqueX= document.querySelector(".bloque[data-i='"+(fil+1)+"'], .bloque[data-j='"+(col+1)+"']");
        if (bloqueX.getAttribute("bomba")=="true"){ bombasAlrededor++;}
        
        if (bombasAlrededor>0){
                Juego.bloquesLibres[i].classList.add("BombasAlrededor");
            }
    }
}
    





















