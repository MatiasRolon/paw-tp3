var Juego = Juego || {},
    document = document || {},
    console = console || {},
    window = window || {},
    turno = 1,
    jugadorX, contador, jugadorO, puntajeX, puntajeO, nSection, elementos = 0,
    empate = true,
    ganada = false,
    bandera = false,
    aux;




puntajeX = 0;
puntajeO = 0;
contador = 0;

while (!bandera) {
    aux = prompt("INGRESAR NIVEL 0|1|2|3");
    if (aux == 1 || aux == 2 || aux == 3 || aux == 0) {
        Juego.nivelActual = aux;
        bandera = true;
    }
}


Juego.Armar = function (contenedor) {
    Juego.contenedor = contenedor;


    function inicio() {


        if (typeof Juego.contenedor === "string") {
            Juego.contenedor = document.getElementById(Juego.contenedor);
        }
        var tSection = document.createElement("section");

        nSection = document.createElement("section");

        tSection.classList.add("taTeTi" + Juego.nivelActual);
        nSection.classList.add("puntaje");
        console.log(tSection);
        Juego.contenedor.appendChild(tSection);
        Juego.contenedor.appendChild(nSection);
        tSection.classList.add("jugadores")
        Juego.generarTablero(tSection);
        Juego.generarPuntaje(nSection, false);

    }

    window.addEventListener("DOMContentLoaded", inicio);

}

Juego.generarTablero = function (contenedor) {
    var ancho = Juego.niveles[Juego.nivelActual].ancho,
        alto = Juego.niveles[Juego.nivelActual].alto,
        cuadro;
    for (var i = 0; i < ancho; i = i + 1) {
        for (var j = 0; j < alto; j++) {
            cuadro = document.createElement("div");

            cuadro.classList.add("cuadro");
            cuadro.classList.add("sinmarcar");
            cuadro.setAttribute("data-x", i);
            cuadro.setAttribute("data-y", j);
            cuadro.addEventListener("click", Juego.marcar);
            contenedor.appendChild(cuadro);
        }
    }

}

Juego.marcar = function (event) {
    var cuadro = event.target,
        imagenO, imagenX,
        equis = document.querySelectorAll("div.cuadro.marcadaX"),
        circulos = document.querySelectorAll("div.cuadro.marcadaO");
       

    cuadro.classList.remove("sinmarcar");

    if (turno % 2 == 0) {
        imagenO = document.createElement("img");
        imagenO.setAttribute("src", "images/O.jpg");
        cuadro.setAttribute("value", "O");
        cuadro.classList.add("marcadaO");
        cuadro.appendChild(imagenO);
        cuadro.removeEventListener("click", Juego.marcar);
        turno = turno + 1;
        elementos = elementos + 1;
        circulos = document.querySelectorAll("div.cuadro.marcadaO");
    } else {
        imagenX = document.createElement("img");
        imagenX.setAttribute("src", "images/X.jpg");
        cuadro.setAttribute("value", "X");
        cuadro.classList.add("marcadaX");
        cuadro.appendChild(imagenX);
        cuadro.removeEventListener("click", Juego.marcar)
        turno = turno + 1;
        equis = document.querySelectorAll("div.cuadro.marcadaX");
        elementos = elementos + 1;
    }
    
    console.log(ganada);
    contador=0;
    //VICTORIA X POR HORIZONTAL
   
    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        
        while ((i < equis.length ) && (!ganada)) {
            for (var j = 0 ; j < equis.length; j++) {
                if (equis[i].getAttribute("data-x") == equis[j].getAttribute("data-x")) {
                    contador = contador + 1;
                }

            }
           // console.log("valor contador x horizontal "+contador);
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            i = i + 1;
            contador = 0;
            
        }


    }
    
    if (ganada) {
        
        window.alert("ganado horizontal X");
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }
   

    //VICTORIA X POR VERTICAL

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < equis.length ) && (!ganada)) {
            for (var j = 0; j < equis.length; j++) {
                if (equis[i].getAttribute("data-y") == equis[j].getAttribute("data-y")) {
                    contador = contador + 1;
                }
                

            }
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            i = i + 1;
            contador = 0;
        }
    }
    
    
    if (ganada) {
        window.alert("ganado vertical X");
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }

    contador = 0;

    //VICTORIA X DIAGONAL PRINCIPAL

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i=0;
        while ((i < equis.length) && (!ganada) ) {
            
            if (equis[i].getAttribute("data-x") == equis[i].getAttribute("data-y")) {

                contador = contador + 1;

            }
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            
            i=i + 1;
        }
        contador=0;
    }

    if (ganada) {
        window.alert("ganado diagonal principal X");
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    //VICTORIA X DIAGONAL OPUESTA

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while (i < equis.length && (!ganada)) {
            if ((Juego.niveles[Juego.nivelActual].alto - equis[i].getAttribute("data-x") - 1) == equis[i].getAttribute("data-y")) {
                
                contador = contador + 1;
            }
            
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            
            i=i + 1;
        }
        contador=0;
    }

    if (ganada) {
        window.alert("ganado diagonal opuesto X");
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    //VICTORIA 0 POR HORIZONTAL
  
    if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < circulos.length) && (!ganada)) {
            for (var j = 0; j < circulos.length; j++) {
                if (circulos[i].getAttribute("data-x") == circulos[j].getAttribute("data-x")) {
                    
                    contador = contador + 1;
                }

            }
            
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada=true;
                empate=false;
            }
           
            contador = 0;
            i = i + 1;
        }


    }

    if (ganada) {
        window.alert("ganado horizontal O");
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    //VICTORIA O POR VERTICAL
       if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < circulos.length ) && (!ganada) ){
            for (var j = 0; j < circulos.length; j++) {
                if (circulos[i].getAttribute("data-y") == circulos[j].getAttribute("data-y")) {
                    contador = contador + 1;
                }

            }
           if(contador == Juego.niveles[Juego.nivelActual].alto){
               ganada= true;
               empate=false;
           }
            i = i + 1;
           contador = 0;
        }
       }
    

    if (ganada) {
        window.alert("ganado vertical O");
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }

    contador = 0;
    //VICTORIA O DIAGONAL PRINCIPAL
   
    if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i=0;
        while (i < circulos.length && (!ganada)) {
            if (circulos[i].getAttribute("data-x") == circulos[i].getAttribute("data-y")) {

                contador = contador + 1;

            }
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            i=i + 1;
        }
        contador=0;
    }

    if (ganada) {
        window.alert("ganado diagonal principal O");
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    //VICTORIA O DIAGONAL OPUESTA
   if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while (i < circulos.length && (!ganada)) {
            if ((Juego.niveles[Juego.nivelActual].alto - circulos[i].getAttribute("data-x") - 1) == circulos[i].getAttribute("data-y")) {
                contador = contador + 1;
            }
            if (contador == Juego.niveles[Juego.nivelActual].alto){
                ganada = true;
                empate=false;
            }
            i = i + 1;
        }
       contador=0;
    }

    if (ganada) {
        window.alert("ganado diagonal opuesta O");
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    console.log(elementos);

    //EMPATE

    if (elementos == Juego.niveles[Juego.nivelActual].alto * Juego.niveles[Juego.nivelActual].ancho) {

        if (empate) {
            Juego.reiniciar(equis, circulos);
            window.alert("EMPATE");
            
        }
        elementos = 0;
    }
    
    ganada=false;//ver
}


Juego.generarPuntaje = function (contenedor, bandera) {
    var parrafo = document.createElement("p"),
        parrafo2 = document.createElement("p"),
        texto, texto2, texto3;

    if (!bandera) {
        jugadorX = prompt("Ingresar nombre jugador X");
        jugadorO = prompt("ingresar nombre jugador O");
        texto = document.createTextNode("JugadorO: " + jugadorO + "     PUNTAJE: " + puntajeO),
            texto2 = document.createTextNode("JugadorX: " + jugadorX + "     PUNTAJE: " + puntajeX)
        parrafo.appendChild(texto);
        parrafo2.appendChild(texto2);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(parrafo2);
    } else {


        var hijo = contenedor.getElementsByTagName("p"),
            padre = hijo.item(0).parentNode;


        padre.removeChild(hijo.item(0));
        padre.removeChild(hijo.item(0));
        texto3 = document.createTextNode("JugadorO: " + jugadorO + "     PUNTAJE: " + puntajeO)
        texto2 = document.createTextNode("JugadorX: " + jugadorX + "     PUNTAJE: " + puntajeX)
        parrafo.appendChild(texto3);
        parrafo2.appendChild(texto2);
        contenedor.appendChild(parrafo);
        contenedor.appendChild(parrafo2);

    }

}



Juego.reiniciar = function (equis, circulos) {
    var hijo, padre;


    for (var i = 0; i < equis.length; i++) {
        hijo = equis[i].getElementsByTagName("IMG");
        padre = hijo.item(0).parentNode;
        padre.removeChild(hijo.item(0));
        equis[i].classList.remove("marcadaX");
        equis[i].classList.add("sinmarcar");
        equis[i].addEventListener("click", Juego.marcar);

    }

    for (var i = 0; i < circulos.length; i++) {
        hijo = circulos[i].getElementsByTagName("IMG");
        padre = hijo.item(0).parentNode;
        padre.removeChild(hijo.item(0));
        circulos[i].classList.remove("marcadaO");
        circulos[i].classList.add("sinmarcar");
        circulos[i].addEventListener("click", Juego.marcar);

    }
    elementos=0;
    empate = true;
    ganada=false;
    equis = [];
    circulos = [];
};
