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
    aux;




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
            cuadro, bSection = document.createElement("section");

        tSection = document.createElement("section");
        nSection = document.createElement("section");
        bSection.classList.add("niveles");
        tSection.classList.add("taTeTi" + Juego.nivelActual);
        nSection.classList.add("puntaje");
        console.log(tSection);
        Juego.contenedor.appendChild(bSection);
        Juego.contenedor.appendChild(tSection);
        Juego.contenedor.appendChild(nSection);
        tSection.classList.add("jugadores");
        cuadro = document.createElement("div");
        cuadro.classList.add("cuadro");
        cuadro.classList.add("reiniciar");
        nSection.appendChild(cuadro);
        Juego.botonesNiveles(bSection);
        Juego.generarTablero(tSection);
        Juego.generarPuntaje(nSection, false);



    }

    window.addEventListener("DOMContentLoaded", inicio);

}

Juego.botonesNiveles = function (contenedor) {
    var btn0, btn1, btn2, btn3;

    btn0 = document.createElement("div");
    btn0.classList.add("botonN");
    btn0.addEventListener("click", Juego.nivel0);
    contenedor.appendChild(btn0);

    btn1 = document.createElement("div");
    btn1.classList.add("botonN");
    btn1.addEventListener("click", Juego.nivel1);
    contenedor.appendChild(btn1);

    btn2 = document.createElement("div");
    btn2.classList.add("botonN");
    btn2.addEventListener("click", Juego.nivel2);
    contenedor.appendChild(btn2);

    btn3 = document.createElement("div");
    btn3.classList.add("botonN");
    btn3.addEventListener("click", Juego.nivel3);
    contenedor.appendChild(btn3);
}

Juego.nivel0 = function (event) {

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 0;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel1 = function (event) {

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 1;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel2 = function (event) {

    tSection.classList.remove("taTeTi" + Juego.nivelActual);
    Juego.borrarTablero(tSection);
    Juego.nivelActual = 2;
    tSection.classList.add("taTeTi" + Juego.nivelActual);

    Juego.generarTablero(tSection);

}

Juego.nivel3 = function (event) {

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
        ganadora;


    botones[0].removeEventListener("click", Juego.nivel0);
    botones[1].removeEventListener("click", Juego.nivel1);
    botones[2].removeEventListener("click", Juego.nivel2);
    botones[3].removeEventListener("click", Juego.nivel3);

    console.log(cuadros);
    cuadro.classList.remove("sinmarcar");
    c = c + 1;
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


        window.alert("ganado horizontal X");
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
        window.alert("ganado vertical X");
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



            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
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
        window.alert("ganado horizontal O");
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
        window.alert("ganado vertical O");
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


            if (contador == Juego.niveles[Juego.nivelActual].alto) {
                ganada = true;
                empate = false;
            }

            i = i + 1;
        }
        contador = 0;
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

    ganada = false; //ver
    console.log(ganadora);
}


Juego.generarPuntaje = function (contenedor, bandera) {
    var parrafo = document.createElement("p"),
        parrafo2 = document.createElement("p"),
        texto, texto2, texto3, cuadro;

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
    var hijo, padre, sinmarcar = document.querySelectorAll("div.cuadro.borrar"),
        btn = document.querySelector("div.cuadro.reiniciar"),
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
    var sinmarcar, borrar, padre, hijo, btn = document.querySelector("div.cuadro.reiniciar");

    borrar = document.querySelectorAll("div.cuadro.borrar");
    for (var i = 0; i < borrar.length; i++) {
        hijo = borrar[i].getElementsByTagName("IMG");
        padre = hijo.item(0).parentNode;
        padre.removeChild(hijo.item(0))
        borrar[i].classList.remove("borrar");
        borrar[i].classList.add("sinmarcar");
    }

    sinmarcar = document.querySelectorAll("div.cuadro.sinmarcar");

    for (i = 0; i < sinmarcar.length; i++) {
        sinmarcar[i].addEventListener("click", Juego.marcar);

    }
    btn.removeEventListener("click", Juego.marcar);

}
