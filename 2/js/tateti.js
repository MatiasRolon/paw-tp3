var Juego = Juego || {},
    document = document || {},
    console = console || {},
    window = window || {},
    turno = 1,
    jugadorX, contador, jugadorO, puntajeX, puntajeO;



contador = 0;
Juego.nivelActual = 0;


Juego.Armar = function (contenedor) {
    Juego.contenedor = contenedor;


    function inicio() {


        if (typeof Juego.contenedor === "string") {
            Juego.contenedor = document.getElementById(Juego.contenedor);
        }
        var tSection = document.createElement("section"),
            nSection = document.createElement("section");
        tSection.classList.add("taTeTi");
        nSection.classList.add("puntaje");
        console.log(tSection);
        Juego.contenedor.appendChild(tSection);
        Juego.contenedor.appendChild(nSection);
        tSection.classList.add("jugadores")
        Juego.generarTablero(tSection);
        Juego.generarPuntaje(nSection);

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
        circulos = document.querySelectorAll("div.cuadro.marcadaO"),
        sinmarcar = document.querySelectorAll(".sinmarcar");
    cuadro.classList.remove("sinmarcar");

    if (turno % 2 == 0) {
        imagenO = document.createElement("img");
        imagenO.setAttribute("src", "images/O.jpg");
        cuadro.setAttribute("value", "O");
        cuadro.classList.add("marcadaO");
        cuadro.appendChild(imagenO);
        turno = turno + 1;
        circulos = document.querySelectorAll("div.cuadro.marcadaO");
    } else {
        imagenX = document.createElement("img");
        imagenX.setAttribute("src", "images/X.jpg");
        cuadro.setAttribute("value", "X");
        cuadro.classList.add("marcadaX");
        cuadro.appendChild(imagenX);
        turno = turno + 1;
        equis = document.querySelectorAll("div.cuadro.marcadaX");

    }
    //VICTORIA X POR HORIZONTAL
    if (equis.length >= 3) {
        for (var i = 0; i < (equis.length - 1); i++) {
            for (var j = i + 1; j < equis.length; j++) {
                if (equis[i].getAttribute("data-x") == equis[j].getAttribute("data-x")) {
                    contador = contador + 1;
                }

            }
        }


    }

    if (contador == 3) {
        window.alert("ganado horizontal X");
    }
    contador = 0;

    //VICTORIA X POR VERTICAL
    if (equis.length >= 3) {
        for (var i = 0; i < (equis.length - 1); i++) {
            for (var j = i + 1; j < equis.length; j++) {
                if (equis[i].getAttribute("data-y") == equis[j].getAttribute("data-y")) {
                    contador = contador + 1;
                }

            }
        }


    }
    if (contador == 3) {
        window.alert("ganado vertical X");
    }

    contador = 0;
    //VICTORIA X DIAGONAL PRINCIPAL
    if (equis.length >= 3) {
        for (var i = 0; i < equis.length; i++) {
            if (equis[i].getAttribute("data-x") == equis[i].getAttribute("data-y")) {

                contador = contador + 1;

            }
        }
    }

    if (contador == 3) {
        window.alert("ganado diagonal principal X");
    }
    contador = 0;
    //VICTORIA X DIAGONAL OPUESTA
    if (equis.length >= 3) {
        for (var i = 0; i < equis.length; i++) {
            if (equis[i].getAttribute("data-x") == 0 && equis[i].getAttribute("data-y") == 2) {
                contador = contador + 1;
            }
        }
        for (var i = 0; i < equis.length; i++) {
            if (equis[i].getAttribute("data-x") == 1 && equis[i].getAttribute("data-y") == 1) {
                contador = contador + 1;
            }
        }
        for (var i = 0; i < equis.length; i++) {
            if (equis[i].getAttribute("data-x") == 2 && equis[i].getAttribute("data-y") == 0) {
                contador = contador + 1;
            }
        }
    }

    if (contador == 3) {
        window.alert("ganado diagonal opuesta X")
    }
    contador = 0;
    //VICTORIA 0 POR HORIZONTAL
    if (circulos.length >= 3) {
        for (var i = 0; i < (circulos.length - 1); i++) {
            for (var j = i + 1; j < circulos.length; j++) {
                if (circulos[i].getAttribute("data-x") == circulos[j].getAttribute("data-x")) {
                    contador = contador + 1;
                }
            }
        }
    }

    if (contador == 3) {
        window.alert("ganado horizontal O");
    }
    contador = 0;

    //VICTORIA O POR VERTICAL
    if (circulos.length >= 3) {
        for (var i = 0; i < (circulos.length - 1); i++) {
            for (var j = i + 1; j < circulos.length; j++) {
                if (circulos[i].getAttribute("data-y") == circulos[j].getAttribute("data-y")) {
                    contador = contador + 1;
                }
            }
        }


    }
    if (contador == 3) {
        window.alert("ganado vertical O");
    }

    contador = 0;
    //VICTORIA O DIAGONAL PRINCIPAL
    if (circulos.length >= 3) {
        for (var i = 0; i < circulos.length; i++) {
            if (circulos[i].getAttribute("data-x") == circulos[i].getAttribute("data-y")) {
                contador = contador + 1;
            }
        }
    }

    if (contador == 3) {
        window.alert("ganado diagonal principal O");
    }
    contador = 0;

    //VICTORIA O DIAGONAL OPUESTA
    if (circulos.length >= 3) {
        for (var i = 0; i < circulos.length; i++) {
            if (circulos[i].getAttribute("data-x") == 0 && circulos[i].getAttribute("data-y") == 2) {
                contador = contador + 1;
            }
        }
        for (var i = 0; i < circulos.length; i++) {
            if (circulos[i].getAttribute("data-x") == 1 && circulos[i].getAttribute("data-y") == 1) {
                contador = contador + 1;
            }
        }
        for (var i = 0; i < circulos.length; i++) {
            if (circulos[i].getAttribute("data-x") == 2 && circulos[i].getAttribute("data-y") == 0) {
                contador = contador + 1;
            }
        }
    }

    if (contador == 3) {
        window.alert("ganado diagonal opuesta O")
    }
    contador = 0;
}


Juego.generarPuntaje = function (contenedor) {
    jugadorX = prompt("Ingresar nombre jugador X", "");
    jugadorO = prompt("ingresar nombre jugador O");
    var parrafo = document.createElement("p"),
        parrafo2 = document.createElement("p"),
        texto = document.createTextNode("Nombre JugadorO: " + jugadorO + " puntaje: " + puntajeO),
        texto2 = document.createTextNode("Nombre JugadorX: " + jugadorX + " puntaje: " + puntajeX);

    parrafo.appendChild(texto);
    parrafo2.appendChild(texto2);
    contenedor.appendChild(parrafo);
    contenedor.appendChild(parrafo2);
};
