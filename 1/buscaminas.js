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
    };
    Juego.botonJugar.addEventListener("click",Juego.cargarGrilla());
      
  });
}

Juego.cargarGrilla = function (){
    //HARCODEADO. [CORREGIR]
    var grillaACargar = document.getElementById("grilla");
    var nivelACargar = document.getElementById("nivel").value;
    grillaACargar.setAttribute("nivel",nivelACargar);
    grillaACargar.setAttribute("estado","cargada");
    
    Juego.nivelActual="principiante";
    
    //----------------------------------------------
    var datosNivel = Juego.niveles.find(function(item){
        return item.nombre=Juego.nivelActual;
    });
    Juego.filMax= datosNivel.alto;
    Juego.colMax= datosNivel.ancho;
    Juego.cantMinas = datosNivel.minas;
    
    
}












