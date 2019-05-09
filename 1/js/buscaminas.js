var buscaminas = buscaminas || {},
    document = document || {},
    console = console || {},
    window = window || {};

buscaminas.nivelActual = 2;

buscaminas.armar = function (contenedor) {
    buscaminas.contenedor = contenedor;

    function inicio() {
        if (typeof buscaminas.contenedor === "string") {
            buscaminas.contenedor = document.getElementById(buscaminas.contenedor);
        }

        buscaminas.generarMenu();



    }

    window.addEventListener("DOMContentLoaded", inicio);

};

buscaminas.generarMenu = function () {
    var mSection = document.createElement("section"),
        ul = document.createElement("ul");

    ul.classList.add("lista");
    var opcion = document.createElement("li");
    opcion.classList.add("opcion");
    opcion.innerHTML = "Principiante";
    opcion.setAttribute("value", 0);
    opcion.addEventListener("click", buscaminas.seleccion);
    ul.appendChild(opcion);
    var opcion = document.createElement("li");
    opcion.classList.add("opcion");
    opcion.innerHTML = "Intermedio";
    opcion.setAttribute("value", 1);
    opcion.addEventListener("click", buscaminas.seleccion);
    ul.appendChild(opcion);
    var opcion = document.createElement("li");
    opcion.classList.add("opcion");
    opcion.innerHTML = "Avanzado";
    opcion.setAttribute("value", 2);
    opcion.addEventListener("click", buscaminas.seleccion);
    ul.appendChild(opcion);


    mSection.classList.add("menu");
    mSection.appendChild(ul);
    buscaminas.contenedor.appendChild(mSection);





}

buscaminas.seleccion = function (event) {
    var opcion = event.target,
        bSection = document.createElement("section"),
        menu;

    menu = buscaminas.contenedor.firstChild;
    buscaminas.contenedor.removeChild(menu);
    buscaminas.nivelActual = opcion.getAttribute("value");
    bSection.classList.add("principal");
    buscaminas.generarTablero(bSection);
    buscaminas.contenedor.appendChild(bSection);
    buscaminas.generarMinas();
    buscaminas.generarLimites();


}

buscaminas.generarTablero = function (contenedor) {
    var div, img, reinicio, tabla = document.createElement("div");


    reinicio = document.createElement("div");
    reinicio.classList.add("reinicio");
    img = document.createElement("img");
    img.setAttribute("src", "images/cara.svg");
    img.classList.add("imagenReinicio");
    img.addEventListener("click", buscaminas.reiniciar);
    reinicio.appendChild(img);
    contenedor.appendChild(reinicio);

    tabla.classList.add("tablero" + buscaminas.niveles[buscaminas.nivelActual].nivel);

    for (var i = 0; i < buscaminas.niveles[buscaminas.nivelActual].alto; i++) {
        for (var j = 0; j < buscaminas.niveles[buscaminas.nivelActual].ancho; j++) {

            div = document.createElement("div");
            div.setAttribute("data-x", i);
            div.setAttribute("data-y", j);
            div.addEventListener("click", buscaminas.marcar);
            div.classList.add("cuadrado");

            img = document.createElement("img");
            img.classList.add("oculto");
            img.setAttribute("src", "images/blanco.svg");
            div.appendChild(img);
            div.setAttribute("value", "libre");
            tabla.appendChild(div);
        }

    }


    contenedor.appendChild(tabla);


}

buscaminas.reiniciar = function () {
    var tablero = document.querySelector("section.principal"),
        nuevo = document.createElement("section");

    buscaminas.contenedor.removeChild(tablero);
    nuevo.classList.add("principal");
    buscaminas.generarTablero(nuevo);
    buscaminas.contenedor.appendChild(nuevo);
    buscaminas.generarMinas();
    buscaminas.generarLimites();

}


buscaminas.marcar = function (event) {
    var cuadro = event.target,
        x = parseInt(cuadro.getAttribute("data-x")),
        y = parseInt(cuadro.getAttribute("data-y")),
        cuadrados = document.querySelectorAll("div.cuadrado"),
        bandera = true,
        imagen = document.querySelector("img.imagenReinicio"),
        i = 0;


    if (cuadro.getAttribute("value") == "mina") {
        cuadro.firstChild.classList.remove("oculto");
        cuadro.firstChild.classList.add("visible");
        for (i = 0; i < cuadrados.length; i++) {
            cuadrados[i].classList.add("explotado");
            cuadrados[i].removeEventListener("click", buscaminas.marcar);
            cuadrados[i].firstChild.classList.remove("oculto");
            cuadrados[i].firstChild.classList.add("visible");


        }
        window.alert("perdiste");
        imagen.setAttribute("src","images/derrota.svg");
    } else {
        expandir(x, y, cuadrados);
    }
    i = 0;
    while (i < cuadrados.length && bandera) {
        if (cuadrados[i].getAttribute("value") == "libre") {
            bandera = false;
        }
        i = i + 1;
    }

    if (bandera) {
        for (i = 0; i < cuadrados.length; i++) {
            cuadrados[i].firstChild.classList.remove("oculto");
            cuadrados[i].firstChild.classList.add("visible");

        }
        window.alert("ganaste");
         imagen.setAttribute("src","images/victoria.svg");
        
    }


}

function expandir(x, y, cuadrados) {

    if (!(x < 0 || x >= buscaminas.niveles[buscaminas.nivelActual].alto ||
            y < 0 || y >= buscaminas.niveles[buscaminas.nivelActual].ancho)) {

        var i = 0,

            encontro = false;
        while (i < cuadrados.length && !encontro) {

            if (cuadrados[i].getAttribute("data-x") == x && (cuadrados[i].getAttribute("data-y") == y)) {
                var cuadro = cuadrados[i];

                encontro = true;
            }
            i = i + 1;
        }

        i = i - 1;



        if (cuadro.getAttribute("value") == "libre") {

            cuadro.firstChild.classList.remove("oculto");
            cuadro.firstChild.classList.add("visible");
            cuadro.setAttribute("value", "marcado");

            expandir(x + 1, y + 1, cuadrados);
            expandir(x - 1, y + 1, cuadrados);
            expandir(x, y + 1, cuadrados);
            expandir(x + 1, y - 1, cuadrados);
            expandir(x - 1, y - 1, cuadrados);
            expandir(x, y - 1, cuadrados);
            expandir(x + 1, y, cuadrados);
            expandir(x - 1, y, cuadrados);

        } else if (cuadro.getAttribute("value") == "limite") {

            cuadro.firstChild.classList.remove("oculto");
            cuadro.firstChild.classList.add("visible");
        }
    }
}


buscaminas.generarMinas = function () {
    var cuadrados = document.querySelectorAll("div.cuadrado");

    for (var i = 0; i < buscaminas.niveles[buscaminas.nivelActual].minas; i++) {


        var bandera = false;
        while (!bandera) {
            var random = Math.round(Math.random() * cuadrados.length);

            if (cuadrados[random].getAttribute("value") == "libre") {
                cuadrados[random].setAttribute("value", "mina");
                cuadrados[random].firstChild.setAttribute("src", "images/mina.svg");
                bandera = true;
            }
        }
    }

}

buscaminas.generarLimites = function () {
    var cuadrados = document.querySelectorAll("div.cuadrado"),
        contador;

    for (var i = 0; i < cuadrados.length; i++) {
        contador = 0;
        if (cuadrados[i].getAttribute("value") == "libre") {
            for (var j = 0; j < cuadrados.length; j++) {

                if ((cuadrados[i].getAttribute("data-x") - 1) == (cuadrados[j].getAttribute("data-x"))) {
                    if ((cuadrados[i].getAttribute("data-y") - 1) == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {

                            contador = contador + 1;
                        }
                    }
                    if ((cuadrados[i].getAttribute("data-y")) == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {

                            contador = contador + 1;
                        }
                    }

                    if (parseInt(cuadrados[i].getAttribute("data-y")) + 1 == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {

                            contador = contador + 1;
                        }
                    }
                }


                if ((cuadrados[i].getAttribute("data-x")) == (cuadrados[j].getAttribute("data-x"))) {

                    if ((cuadrados[i].getAttribute("data-y") - 1) == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {
                            contador = contador + 1;
                        }
                    }
                    if (parseInt(cuadrados[i].getAttribute("data-y")) + 1 == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {

                            contador = contador + 1;
                        }
                    }
                }


                if (parseInt(cuadrados[i].getAttribute("data-x")) + 1 == (cuadrados[j].getAttribute("data-x"))) {
                    if ((cuadrados[i].getAttribute("data-y") - 1) == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {
                            contador = contador + 1;
                        }
                    }
                    if ((cuadrados[i].getAttribute("data-y")) == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {
                            contador = contador + 1;
                        }
                    }
                    if (parseInt(cuadrados[i].getAttribute("data-y")) + 1 == (cuadrados[j].getAttribute("data-y"))) {
                        if (cuadrados[j].getAttribute("value") == "mina") {
                            contador = contador + 1;
                        }
                    }
                }

            }
        }
        if (contador > 0) {
            cuadrados[i].setAttribute("value", "limite");
            cuadrados[i].firstChild.setAttribute("src", "images/" + contador + ".svg");
        }

    }
}
