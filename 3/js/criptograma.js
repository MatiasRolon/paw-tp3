var
    criptograma = criptograma || {},
    document = document || {},
    console = console || {},
    window = window || {},
    frase = "UNA FRASE MUCHO MAS LARGA PARA PROBAR",
    criptografo = 0;

criptograma.armar = function (contenedor) {
    criptograma.contenedor = contenedor;

    function inicio() {
        if (typeof criptograma.contenedor === "string") {
            criptograma.contenedor = document.getElementById(criptograma.contenedor);
        }
        var tSection = document.createElement("section");
        tSection.classList.add("menuPrincipal");

        criptograma.generarBotonera(tSection);
        criptograma.contenedor.appendChild(tSection);
      
    }

    window.addEventListener("DOMContentLoaded", inicio);

};


criptograma.empezarL = function (event) {
    var menu = document.querySelector("section.menuPrincipal");
    var gSection = document.createElement("section");
    var mSection = document.createElement("section");
    gSection.classList.add("grilla");
    mSection.classList.add("muestra");
    criptografo = 0;
    criptograma.contenedor.removeChild(menu);
    criptograma.contenedor.appendChild(gSection);
    criptograma.contenedor.appendChild(mSection);

    criptograma.asignarSimbolo(mSection); //cambiar a seccion "juego/mostrar"
    criptograma.juegoGrilla(gSection, criptograma.abecedario);
}

criptograma.empezarN = function (event) {
    var menu = document.querySelector("section.menuPrincipal");
    var gSection = document.createElement("section");
    var mSection = document.createElement("section");
    gSection.classList.add("grilla");
    mSection.classList.add("muestra");
    criptografo = 1;
    criptograma.contenedor.removeChild(menu);
    criptograma.contenedor.appendChild(gSection);
    criptograma.contenedor.appendChild(mSection);

    criptograma.asignarSimbolo(mSection); //cambiar a seccion "juego/mostrar"
    criptograma.juegoGrilla(gSection, criptograma.abecedario);
}

criptograma.empezarS = function (event) {
    var menu = document.querySelector("section.menuPrincipal");
    var gSection = document.createElement("section");
    var mSection = document.createElement("section");
    gSection.classList.add("grilla");
    mSection.classList.add("muestra");
    criptografo = 2;
    criptograma.contenedor.removeChild(menu);
    criptograma.contenedor.appendChild(gSection);
    criptograma.contenedor.appendChild(mSection);

    criptograma.asignarSimbolo(mSection); //cambiar a seccion "juego/mostrar"
    criptograma.juegoGrilla(gSection, criptograma.abecedario);
}


criptograma.comprobar = function (event) {
    var campos = document.querySelectorAll("input.campoVacio"),
        letras = criptograma.abecedario,
        camposR = document.querySelectorAll("label.letraNoDisplay");

    for (var i = 0; i < letras.length; i++) {
        if (campos[i].value.toUpperCase() == letras[i].letra) {
            campos[i].setAttribute("disabled", "true");
            for (var j = 0; j < camposR.length; j++) {
                if (camposR[j].textContent == campos[i].value.toUpperCase()) {
                    camposR[j].classList.remove("letraNoDisplay");
                    camposR[j].classList.add("letraDisplay");

                }
            }
        }else{
            campos[i].value ="";
        }
    }


}

criptograma.juegoGrilla = function (contenedor, letras) {

   
    for (var i = 0; i < letras.length; i++) {
        var bloq = document.createElement("div");
        bloq.classList.add("bloqueCompletar");
        var simbolo = document.createElement("label");
        simbolo.classList.add("simbolo");
        simbolo.textContent = letras[i].simbolo;
        var campo = document.createElement("input");
        campo.classList.add("campoVacio");
        campo.setAttribute("type", "text");
        campo.setAttribute("maxlength", 1);
        campo.setAttribute("indice", i);
        var posicion = document.createElement("label");
        posicion.classList.add("posicionSimbolo");
        posicion.textContent = i + 1;
        bloq.appendChild(simbolo);
        bloq.appendChild(campo);
        contenedor.appendChild(bloq);

    }

    var boton = document.createElement("button");
    boton.classList.add("botonPrueba");
    boton.textContent = "Comprobar";
    boton.addEventListener("click", criptograma.comprobar);
    contenedor.appendChild(boton);

}

criptograma.generarBotonera = function (contenedor) {
    var boton, boton1, boton2, boton3, boton4, boton5, i, txt, menu = document.createElement("div");

    menu.classList.add("menu1");

    boton = document.createElement("button");
    boton.classList.add("boton");
    boton.setAttribute("id", "boton" + 0);
    txt = document.createTextNode("Frase " + 0);
    boton.appendChild(txt);
    contenedor.appendChild(boton);
    boton.addEventListener("click", criptograma.elegirCriptografo0);
    menu.appendChild(boton);

    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.setAttribute("id", "boton" + 1);
    txt = document.createTextNode("Frase " + 1);
    boton1.appendChild(txt);
    contenedor.appendChild(boton1);
    boton1.addEventListener("click", criptograma.elegirCriptografo1);
    menu.appendChild(boton1);

    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.setAttribute("id", "boton" + 2);
    txt = document.createTextNode("Frase " + 2);
    boton2.appendChild(txt);
    contenedor.appendChild(boton2);
    boton2.addEventListener("click", criptograma.elegirCriptografo2);
    menu.appendChild(boton2);

    boton3 = document.createElement("button");
    boton3.classList.add("boton");
    boton3.setAttribute("id", "boton" + 3);
    txt = document.createTextNode("Frase " + 3);
    boton3.appendChild(txt);
    contenedor.appendChild(boton3);
    boton3.addEventListener("click", criptograma.elegirCriptografo3);
    menu.appendChild(boton3);

    boton4 = document.createElement("button");
    boton4.classList.add("boton");
    boton4.setAttribute("id", "boton" + 4);
    txt = document.createTextNode("Frase " + 4);
    boton4.appendChild(txt);
    contenedor.appendChild(boton4);
    boton4.addEventListener("click", criptograma.elegirCriptografo4);
    menu.appendChild(boton4);

    boton5 = document.createElement("button");
    boton5.classList.add("boton");
    boton5.setAttribute("id", "boton" + 5);
    txt = document.createTextNode("Frase " + 5);
    boton5.appendChild(txt);
    contenedor.appendChild(boton5);
    boton5.addEventListener("click", criptograma.elegirCriptografo5);
    menu.appendChild(boton5);
    contenedor.appendChild(menu);

}

criptograma.elegirCriptografo0 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "DISFRUTA LAS PEQUEÑAS COSAS";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.elegirCriptografo1 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "LA VIDA ES COMO UNA CAJA DE BOMBONES. NUNCA SABES QUE TE PUEDE TOCAR";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.elegirCriptografo2 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "ME ENCANTA EL OLOR A NAPALM POR LA MAÑANA";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.elegirCriptografo3 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "QUE LA FUERZA TE ACOMPAÑE";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.elegirCriptografo4 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "LA LIBERTAD ES EL DERECHO A DECIRLE A LA GENTE LO QUE NO QUIERE ESCUCHAR";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.elegirCriptografo5 = function (event) {
    var menu = document.querySelector("section,menuPrincipal"),
        menub = document.querySelector("div.menu1"),
        menuc = document.createElement("div"),
        boton0, boton1, boton2;

    frase = "CUANDO SIENTAS DESEOS DE CRITICAR A ALGUIEN, RECUERDA QUE NO TODO EL MUNDO A TENIDO LAS MISMAS OPORTUNIDADES QUE TU TUVISTE";
    menuc.classList.add("menu2");
    menu.removeChild(menub);
    boton0 = document.createElement("button");
    boton0.classList.add("boton");
    boton0.textContent = "LETRAS";
    boton0.addEventListener("click", criptograma.empezarL);
    menuc.appendChild(boton0);
    boton1 = document.createElement("button");
    boton1.classList.add("boton");
    boton1.textContent = "NUMEROS";
    boton1.addEventListener("click", criptograma.empezarN);
    menuc.appendChild(boton1);
    boton2 = document.createElement("button");
    boton2.classList.add("boton");
    boton2.textContent = "SIMBOLOS";
    boton2.addEventListener("click", criptograma.empezarS);
    menuc.appendChild(boton2);
    menu.appendChild(menuc);
}

criptograma.asignarSimbolo = function (contenedor) {
    var
        abc = criptograma.abecedario,
        num = criptograma.numeros,
        abc2 = criptograma.letras,
        sim = criptograma.simbolos,
        i, j = 0,

        aux = "",
        auxn = [],
        bandera = false,

        parrafo, nodoT;


    //LETRAS

    if (criptografo == 0) {




        abc2.sort(function () {
            return Math.random() - 0.5
        });

        for (i = 0; i < abc.length; i++) {


            abc[i].simbolo = abc2[i];
        }

        for (i = 0; i < frase.length; i++) {

            while ((j < abc.length) && (!bandera)) {

                if (frase[i] == " " ) {
                    aux = aux + frase[i];
                    bandera = true;

                } else {
                    if (frase[i] == abc[j].letra) {
                        aux = aux + abc[j].simbolo;


                        bandera = true;
                        
                    }
                }
                j = j + 1;
            }

            j = 0;
            bandera = false;
        }


        for (i = 0; i < aux.length; i++) {
            var bloque = document.createElement("div");
            if (aux[i] != " ") {
                bloque.classList.add("cuadroRespuesta");
                var div = document.createElement("div");
                div.classList.add("cuadroLetra");
                var letra = document.createElement("label");
                letra.classList.add("letraNoDisplay");
                letra.textContent = frase[i];
                var guion = document.createElement("label");
                guion.classList.add("guion");
                guion.textContent = "_";
                var simbolo = document.createElement("label");
                simbolo.classList.add("simboloFrase");
                simbolo.textContent = aux[i]; //cambiar por criptograma que corresponda
                div.appendChild(letra);
                bloque.appendChild(div);
                bloque.appendChild(guion);
                bloque.appendChild(simbolo);
                contenedor.appendChild(bloque);
            } else {
                var bloqueEspacio = document.createElement("div");
                bloqueEspacio.classList.add("cuadroRespuesta");
                var letraEspacio = document.createElement("label");
                var guionEspacio = document.createElement("label");
                guionEspacio.textContent = " ";
                var simboloEspacio = document.createElement("label");
                bloqueEspacio.appendChild(letraEspacio);
                bloqueEspacio.appendChild(guionEspacio);
                bloqueEspacio.appendChild(simboloEspacio);
                contenedor.appendChild(bloqueEspacio)
            }

        }
    }


    //NUMEROS

    if (criptografo == 1) {

        num.sort(function () {
            return Math.random() - 0.5
        });

        for (i = 0; i < abc.length; i++) {
            abc[i].simbolo = num[i];
        }

        for (i = 0; i < frase.length; i++) {
            while ((j < abc.length) && (!bandera)) {

                if (frase[i] == " ") {
                    auxn.push(" ");
                    bandera = true;
                } else {
                    if (frase[i] == abc[j].letra) {
                        auxn.push(abc[j].simbolo);

                        bandera = true;
                    }
                }
                j = j + 1;
            }
            j = 0;
            bandera = false;
        }

    
        nodoT = document.createTextNode(aux);

        for (i = 0; i < auxn.length; i++) {
            var bloque = document.createElement("div");
            if (auxn[i] != " ") {
                bloque.classList.add("cuadroRespuesta");
                var div = document.createElement("div");
                div.classList.add("cuadroLetra");
                var letra = document.createElement("label");
                letra.classList.add("letraNoDisplay");
                letra.textContent = frase[i];
                var guion = document.createElement("label");
                guion.classList.add("guion");
                guion.textContent = "_";
                var simbolo = document.createElement("label");
                simbolo.classList.add("simboloFrase");
                simbolo.textContent = "" + auxn[i]; //cambiar por criptograma que corresponda
                div.appendChild(letra);
                bloque.appendChild(div);
                bloque.appendChild(guion);
                bloque.appendChild(simbolo);
                contenedor.appendChild(bloque);
            } else {
                var bloqueEspacio = document.createElement("div");
                bloqueEspacio.classList.add("cuadroRespuesta");
                var letraEspacio = document.createElement("label");
                var guionEspacio = document.createElement("label");
                guionEspacio.textContent = " ";
                var simboloEspacio = document.createElement("label");
                bloqueEspacio.appendChild(letraEspacio);
                bloqueEspacio.appendChild(guionEspacio);
                bloqueEspacio.appendChild(simboloEspacio);
                contenedor.appendChild(bloqueEspacio)
            }

        }

    }
    //SIMBOLOS

    if (criptografo == 2) {
        sim.sort(function () {
            return Math.random() - 0.5
        });

        for (i = 0; i < abc.length; i++) {
            abc[i].simbolo = sim[i];
        }

        for (i = 0; i < frase.length; i++) {
            while ((j < abc.length) && (!bandera)) {

                if (frase[i] == " ") {
                    auxn.push(" ");
                    bandera = true;
                } else {
                    if (frase[i] == abc[j].letra) {
                        auxn.push(abc[j].simbolo);

                        bandera = true;
                    }
                }
                j = j + 1;
            }
            j = 0;
            bandera = false;
        }

     
        nodoT = document.createTextNode(aux);

        for (i = 0; i < auxn.length; i++) {
            var bloque = document.createElement("div");
            if (auxn[i] != " ") {
                bloque.classList.add("cuadroRespuesta");
                var div = document.createElement("div");
                div.classList.add("cuadroLetra");
                var letra = document.createElement("label");
                letra.classList.add("letraNoDisplay");
                letra.textContent = frase[i];
                var guion = document.createElement("label");
                guion.classList.add("guion");
                guion.textContent = "_";
                var simbolo = document.createElement("label");
                simbolo.classList.add("simboloFrase");
                simbolo.textContent = "" + auxn[i]; //cambiar por criptograma que corresponda
                div.appendChild(letra);
                bloque.appendChild(div);
                bloque.appendChild(guion);
                bloque.appendChild(simbolo);
                contenedor.appendChild(bloque);
            } else {
                var bloqueEspacio = document.createElement("div");
                bloqueEspacio.classList.add("cuadroRespuesta");
                var letraEspacio = document.createElement("label");
                var guionEspacio = document.createElement("label");
                guionEspacio.textContent = " ";
                var simboloEspacio = document.createElement("label");
                bloqueEspacio.appendChild(letraEspacio);
                bloqueEspacio.appendChild(guionEspacio);
                bloqueEspacio.appendChild(simboloEspacio);
                contenedor.appendChild(bloqueEspacio)
            }

        }
    }

}
