var Juego = Juego || {},
    document = document || {},
    console = console || {},
    window = window || {},
    turno = 1,
    jugadorX, contador, jugadorO, puntajeX, puntajeO, nSection, tSection, elementos = 0,
    c = 0,
    empate = true,
    ganada = false,
    bandera = false,
    aux, mensaje;




puntajeX = 0;
puntajeO = 0;
contador = 0;

Juego.nivelActual = 0;


Juego.Armar = function (contenedor) {
    Juego.contenedor = contenedor;


    function inicio() {


        if (typeof Juego.contenedor === "string") {
            Juego.contenedor = document.getElementById(Juego.contenedor);
        }
        var
            cuadro, bSection = document.createElement("section"),
            jSection = document.createElement("section"),
            mSection = document.createElement("section"),
            tSection = document.createElement("section"),
            nSection = document.createElement("section");

        mSection.classList.add("mensajes");
        bSection.classList.add("niveles");
        tSection.classList.add("taTeTi" + Juego.nivelActual);
        nSection.classList.add("puntaje");
        nSection.classList.add("no-visible"); 
        jSection.classList.add("jugadores");
        Juego.confJugadores(jSection);
        console.log(tSection);

        Juego.contenedor.appendChild(jSection);
        Juego.contenedor.appendChild(bSection);
        Juego.contenedor.appendChild(tSection);
        Juego.contenedor.appendChild(mSection);
        Juego.contenedor.appendChild(nSection);
    }

    window.addEventListener("DOMContentLoaded", inicio);

}

Juego.confJugadores = function (contenedor) {
    var lab1, lab2, inp1, inp2, btn, form;

    form = document.createElement("form");
    form.classList.add("formJugadores");
    contenedor.appendChild(form);

    lab1 = document.createElement("label");
    lab1.classList.add("lab");
    lab1.setAttribute("for", "nombreX");
    lab1.textContent = "Nombre jugador X: ";
    form.appendChild(lab1);

    inp1 = document.createElement("input");
    inp1.classList.add("inp1");
    inp1.setAttribute("type", "text");
    inp1.setAttribute("name", "nombreX");
    inp1.setAttribute("maxlength", 10);
    inp1.setAttribute("required", true);
    form.appendChild(inp1);

    lab2 = document.createElement("label");
    lab2.classList.add("lab");
    lab2.setAttribute("for", "nombreO");
    lab2.textContent = "Nombre jugador O: ";
    form.appendChild(lab2);

    inp2 = document.createElement("input");
    inp2.classList.add("inp2");
    inp2.setAttribute("type", "text");
    inp2.setAttribute("name", "nombreO");
    inp2.setAttribute("maxlength", 10);
    inp2.setAttribute("required", true);
    form.appendChild(inp2);

    btn = document.createElement("button");
    btn.classList.add("botonJ");
    btn.textContent = "Siguiente";
    btn.addEventListener("click", Juego.empezar);
    form.appendChild(btn);

}

Juego.empezar = function (event) {
    var section = document.querySelector("section.jugadores"),
        form = document.querySelector("form.formJugadores"),
        tSection = document.querySelector("section.taTeTi" + Juego.nivelActual),
        bSection = document.querySelector("section.niveles"),
        mSection = document.querySelector("section.mensajes"),
        nSection = document.querySelector("section.puntaje"),
        cuadro;

    jugadorX = document.querySelector("input.inp1");
    jugadorO = document.querySelector("input.inp2");
    jugadorX = jugadorX.value;
    jugadorO = jugadorO.value;

    if (jugadorX != "" && jugadorO != "") {
        if (jugadorX != jugadorO) {
            section.removeChild(form);
            Juego.botonesNiveles(bSection);
            Juego.generarTablero(tSection);
            Juego.generarMensajesReinicio(mSection);
            Juego.generarPuntaje(nSection, false);
        } else {
            window.alert("nombres iguales");
        }
    } else {
        window.alert("nombres vacios");
    }
}

Juego.generarMensajesReinicio = function (contenedor) {
    var cuadro = document.createElement("button"),
        texto = document.createElement("p");
    mensaje = " ";
    cuadro.classList.add("cuadro");
    cuadro.classList.add("continuar");
    cuadro.textContent = "continuar";
    contenedor.appendChild(cuadro);
    texto.classList.add("mensaje");
    texto.textContent = mensaje;
    contenedor.appendChild(texto);


}


Juego.botonesNiveles = function (contenedor) {
    var btn0, btn1, btn2, btn3;

    btn0 = document.createElement("div");
    btn0.classList.add("botonN");
    btn0.addEventListener("click", Juego.nivel0);
    btn0.textContent = "NIVEL0";
    contenedor.appendChild(btn0);

    btn1 = document.createElement("div");
    btn1.classList.add("botonN");
    btn1.addEventListener("click", Juego.nivel1);
    btn1.textContent = "NIVEL1";
    contenedor.appendChild(btn1);

    btn2 = document.createElement("div");
    btn2.classList.add("botonN");
    btn2.addEventListener("click", Juego.nivel2);
    btn2.textContent = "NIVEL2";
    contenedor.appendChild(btn2);

    btn3 = document.createElement("div");
    btn3.classList.add("botonN");
    btn3.addEventListener("click", Juego.nivel3);
    btn3.textContent = "NIVEL3";
    contenedor.appendChild(btn3);
}

Juego.nivel0 = function (event) {
    var tSection = document.querySelector("section.taTeTi" + Juego.nivelActual);

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 0;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel1 = function (event) {
    var tSection = document.querySelector("section.taTeTi" + Juego.nivelActual);

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 1;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel2 = function (event) {
    var tSection = document.querySelector("section.taTeTi" + Juego.nivelActual);

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 2;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel3 = function (event) {
    var tSection = document.querySelector("section.taTeTi" + Juego.nivelActual);

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 3;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.borrarTablero = function (contenedor) {
    var ancho = Juego.niveles[Juego.nivelActual].ancho,
        alto = Juego.niveles[Juego.nivelActual].alto;

    for (var i = 0; i < ancho * alto; i++) {

        contenedor.removeChild(contenedor.firstChild);

    }

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
        circulos = document.querySelectorAll("div.cuadro.marcadaO"),
        cuadros = document.querySelectorAll("div.cuadro"),
        botones = document.querySelectorAll("div.botonN"),
        ganadora,msj = document.querySelector("p.mensaje");


    botones[0].removeEventListener("click", Juego.nivel0);
    botones[1].removeEventListener("click", Juego.nivel1);
    botones[2].removeEventListener("click", Juego.nivel2);
    botones[3].removeEventListener("click", Juego.nivel3);

    var turnAnt,turnAct;
    
    console.log(cuadros);
    cuadro.classList.remove("sinmarcar");
    c = c + 1;
    if (turno % 2 == 0) {
        imagenO = document.createElement("img");
        imagenO.setAttribute("src", "css/images/O.png");
        cuadro.setAttribute("value", "O");
        cuadro.classList.add("marcadaO");
        cuadro.appendChild(imagenO);
        cuadro.removeEventListener("click", Juego.marcar);
        turno = turno + 1;
        elementos = elementos + 1;
        circulos = document.querySelectorAll("div.cuadro.marcadaO");

         turnAnt = document.querySelector(".turnoActual");
        if (turnAnt!=null) {   turnAnt.classList.remove("turnoActual")}
         turnAct = document.querySelector(".celda.iconoX");
        turnAct.classList.add("turnoActual");
        
    } else {
        imagenX = document.createElement("img");
        imagenX.setAttribute("src", "css/images/X.png");
        cuadro.setAttribute("value", "X");
        cuadro.classList.add("marcadaX");
        cuadro.appendChild(imagenX);
        cuadro.removeEventListener("click", Juego.marcar)
        turno = turno + 1;
        equis = document.querySelectorAll("div.cuadro.marcadaX");
        elementos = elementos + 1;
        
         turnAnt = document.querySelector(".turnoActual");
        if (turnAnt!=null) {   turnAnt.classList.remove("turnoActual")}
         turnAct = document.querySelector(".celda.iconoO");
        turnAct.classList.add("turnoActual");
    }

    console.log(ganada);
    contador = 0;

    //VICTORIA X POR HORIZONTAL

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;

        while ((i < equis.length) && (!ganada)) {
            for (var j = 0; j < equis.length; j++) {
                if (equis[i].getAttribute("data-x") == equis[j].getAttribute("data-x")) {
                    contador = contador + 1;
                    equis[i].classList.add("gana");
                    equis[j].classList.add("gana");
                }

            }


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            console.log(ganadora);
            i = i + 1;
            contador = 0;

        }


    }

    if (ganada) {


        msj.textContent =  "VICTORIA X HORIZONTAL PUNTO PARA "+jugadorX;
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }


    //VICTORIA X POR VERTICAL

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < equis.length) && (!ganada)) {
            for (var j = 0; j < equis.length; j++) {
                if (equis[i].getAttribute("data-y") == equis[j].getAttribute("data-y")) {
                    contador = contador + 1;
                }


            }


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
            contador = 0;
        }
    }


    if (ganada) {
        msj.textContent =  "VICTORIA X VERTICAL PUNTO PARA "+jugadorX;
        Juego.reiniciar(equis, circulos);
        puntajeX = puntajeX + 1;
        Juego.generarPuntaje(nSection, true);

    }

    contador = 0;

    //VICTORIA X DIAGONAL PRINCIPAL

    if (equis.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < equis.length) && (!ganada)) {

            if (equis[i].getAttribute("data-x") == equis[i].getAttribute("data-y")) {

                contador = contador + 1;
                equis[i].classList.add("gana");
            }

            ganadora = document.querySelectorAll("div.cuadro.gana");

            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
    }

    if (ganada) {
        msj.textContent =  "VICTORIA X DIAGONAL PRINCIPAL PUNTO PARA "+jugadorX;
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



            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
    }

    if (ganada) {
        msj.textContent =  "VICTORIA X DIAGONAL OPUESTA PUNTO PARA "+jugadorX;
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
                    // ganadora = document.querySelectorAll("div.cuadro.gana");
                }

            }


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            contador = 0;
            i = i + 1;
        }


    }

    if (ganada) {
        msj.textContent =  "VICTORIA O HORIZONTAL PUNTO PARA "+jugadorO;
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }
    contador = 0;

    //VICTORIA O POR VERTICAL
    if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while ((i < circulos.length) && (!ganada)) {
            for (var j = 0; j < circulos.length; j++) {
                if (circulos[i].getAttribute("data-y") == circulos[j].getAttribute("data-y")) {
                    contador = contador + 1;

                }

            }


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
            contador = 0;
        }
    }


    if (ganada) {
        msj.textContent =  "VICTORIA O VERTICAL PUNTO PARA "+jugadorO;
        Juego.reiniciar(equis, circulos);
        puntajeO = puntajeO + 1;
        Juego.generarPuntaje(nSection, true);

    }

    contador = 0;
    //VICTORIA O DIAGONAL PRINCIPAL

    if (circulos.length >= Juego.niveles[Juego.nivelActual].alto) {
        var i = 0;
        while (i < circulos.length && (!ganada)) {
            if (circulos[i].getAttribute("data-x") == circulos[i].getAttribute("data-y")) {

                contador = contador + 1;

            }


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
    }

    if (ganada) {
        msj.textContent =  "VICTORIA O DIAGONAL PRINCIPAL PUNTO PARA "+jugadorO;

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


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
    }

    if (ganada) {
        msj.textContent =  "VICTORIA O DIAGONAL OPUESTA PUNTO PARA "+jugadorO;

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
            msj.textContent =  "EMPATE";



        }
        elementos = 0;
    }

    ganada = false; //ver
    console.log(ganadora);
}


Juego.generarPuntaje = function (contenedor, bandera) {

    contenedor = document.querySelector("section.puntaje");
    contenedor.classList.remove("no-visible");
    
        var col = document.createElement("div");
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        var col3 = document.createElement("div");
        var col4 = document.createElement("div");
        var col5 = document.createElement("div");
        
    
    if (!bandera) {
        
        contenedor.appendChild(col);
        contenedor.appendChild(col1);
        contenedor.appendChild(col2);
        contenedor.appendChild(col3);
        contenedor.appendChild(col4);
        contenedor.appendChild(col5);
        
        col.classList.add("celda");
        col.classList.add("nombre");
        col.innerHTML = jugadorO;
        col1.classList.add("celda");
        col1.classList.add("nombre");
        col1.innerHTML = jugadorX;
        
        col2.classList.add("celda");
        col2.classList.add("iconoO");
        col3.classList.add("celda");
        col3.classList.add("iconoX");
        
        col4.classList.add("celda");
        col4.classList.add("puntosO");
        var parrafo4 = document.createElement("p");
        parrafo4.textContent = puntajeO;    
        col4.appendChild(parrafo4);
        
        col5.classList.add("celda");
        col5.classList.add("puntosX");
        var parrafo5 = document.createElement("p");
        parrafo5.textContent = puntajeX;    
        col5.appendChild(parrafo5);
        
       
    } else {
        var parrafoAct;
        
        var resultO = document.querySelector(".celda.puntosO");
        resultO.removeChild(resultO.firstChild);
        
        parrafoAct = document.createElement("p");
        parrafoAct.textContent = puntajeO;    
        resultO.appendChild(parrafoAct);
        
        var resultX = document.querySelector(".celda.puntosX");
        resultX.removeChild(resultX.firstChild);
        
        parrafoAct = document.createElement("p");
        parrafoAct.textContent = puntajeX;    
        resultX.appendChild(parrafoAct);
        
    }



}



Juego.reiniciar = function (equis, circulos) {
    var hijo, padre, sinmarcar = document.querySelectorAll("div.cuadro.borrar"),
        btn = document.querySelector("button.cuadro.continuar"),
        botones = document.querySelectorAll("div.botonN");


    for (var i = 0; i < equis.length; i++) {
        equis[i].classList.remove("marcadaX");
        equis[i].classList.add("borrar");
    }

    for (var i = 0; i < circulos.length; i++) {
        circulos[i].classList.remove("marcadaO");
        circulos[i].classList.add("borrar");
    }

    sinmarcar = document.querySelectorAll("div.cuadro.sinmarcar");
    var borrar = document.querySelectorAll("div.cuadro.borrar");

    for (var i = 0; i < sinmarcar.length; i++) {

        sinmarcar[i].removeEventListener("click", Juego.marcar);

    }

    btn.addEventListener("click", Juego.volver);
    
    
    elementos = 0;
    empate = true;
    ganada = false;
    equis = [];
    circulos = [];
    botones[0].addEventListener("click", Juego.nivel0);
    botones[1].addEventListener("click", Juego.nivel1);
    botones[2].addEventListener("click", Juego.nivel2);
    botones[3].addEventListener("click", Juego.nivel3);
};

Juego.volver = function (event) {
    var sinmarcar, borrar, padre, hijo, btn = document.querySelector("button.cuadro.continuar");

    borrar = document.querySelectorAll("div.cuadro.borrar");
    for (var i = 0; i < borrar.length; i++) {
        hijo = borrar[i].getElementsByTagName("IMG");
        padre = hijo.item(0).parentNode;
        padre.removeChild(hijo.item(0))
        borrar[i].classList.remove("borrar");
        borrar[i].classList.add("sinmarcar");
    }

    sinmarcar = document.querySelectorAll("div.cuadro.sinmarcar");
    var msj = document.querySelector("p.mensaje");
    
    for (i = 0; i < sinmarcar.length; i++) {
        sinmarcar[i].addEventListener("click", Juego.marcar);

    }
    btn.removeEventListener("click", Juego.marcar);

    /* if (turno % 2 == 0) {
         msj.textContent = "Turno O "+jugadorO;
     }else{
         msj.textContent = "Turno X"+jugadorX;
     }*/
    
}
